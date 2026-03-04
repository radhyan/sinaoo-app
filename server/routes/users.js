const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const Title = require("../models/Title");
const Mission = require("../models/Mission");
const Module = require("../models/Module");
const Course = require("../models/Course");
const {
  checkAllAchievements,
  updateLoginStreak,
  updateUserTitle,
  calculateCourseStats,
} = require("../services/achievementService");

const router = express.Router();

// 1. Get User Profile (by Username)
router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username })
      .populate("title")
      .populate("achievements.achievementId");
    if (!user) return res.status(404).json({ message: "User not found" });

    // Update title based on points
    await updateUserTitle(user);
    await user.save();
    await user.populate("title");

    // Update streak and check achievements on fetch
    const streakUpdated = await updateLoginStreak(user);
    const newAchievements = await checkAllAchievements(user);

    if (streakUpdated || newAchievements.length > 0) {
      await user.save();
      if (newAchievements.length > 0) {
        await user.populate("achievements.achievementId");
      }
    }

    // Calculate course stats
    const courseStats = await calculateCourseStats(user);

    // Calculate leaderboard rank
    const rank =
      (await User.countDocuments({ points: { $gt: user.points } })) + 1;

    res.json({
      ...user.toObject(),
      newAchievements,
      rank,
      completedCourses: courseStats.completedCourses,
      totalCourses: courseStats.totalCourses,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Update User Profile
router.put("/:username", async (req, res) => {
  try {
    const { username: currentUsername } = req.params;
    const updates = req.body;

    // If changing username, check if taken
    if (updates.username && updates.username !== currentUsername) {
      const existingUser = await User.findOne({ username: updates.username });
      if (existingUser) {
        return res.status(400).json({ message: "Username sudah digunakan" });
      }
    }

    const user = await User.findOneAndUpdate(
      { username: currentUsername },
      updates,
      {
        new: true,
      },
    ).populate("title");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Update User Progress (Module Completion)
router.post("/:username/progress", async (req, res) => {
  try {
    const { username } = req.params;
    const { moduleId, courseId, completionPercentage, isCompleted, reset } =
      req.body;
    console.log(
      `[Progress Update] User: ${username}, Module: ${moduleId}, %: ${completionPercentage}, Done: ${isCompleted}, Reset: ${reset}`,
    );

    let user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });

    // Find existing progress for this module
    const progressIndex = user.progress.findIndex(
      (p) => p.moduleId.toString() === moduleId,
    );

    if (progressIndex > -1) {
      // Update existing
      if (reset) {
        user.progress[progressIndex].completionPercentage =
          completionPercentage;
        user.progress[progressIndex].isCompleted = false;
        user.progress[progressIndex].score = 0;
        user.progress[progressIndex].quizAnswers = {};
        user.progress[progressIndex].flaggedQuestions = {};
      } else {
        user.progress[progressIndex].completionPercentage = Math.max(
          user.progress[progressIndex].completionPercentage || 0,
          completionPercentage,
        );
      }
      user.progress[progressIndex].lastAccessed = new Date();
      if (isCompleted) {
        user.progress[progressIndex].isCompleted = true;
      }
      if (courseId) {
        user.progress[progressIndex].courseId = courseId;
      }
      if (req.body.score !== undefined) {
        const oldScore = user.progress[progressIndex].score || 0;
        const newScore = req.body.score;

        // Award points based on improvement (delta)
        if (newScore > oldScore) {
          const delta = newScore - oldScore;
          user.points = (user.points || 0) + delta;
          user.progress[progressIndex].score = newScore;

          // Log to Points History
          const moduleDoc = await Module.findById(moduleId);
          user.pointsHistory.push({
            description: `Peningkatan skor: ${moduleDoc?.name || "Modul"}`,
            points: delta,
            date: new Date(),
          });

          console.log(
            `[Points] Awarded ${delta} points to ${username} for score improvement. Total: ${user.points}`,
          );
        }
      }
      if (req.body.quizAnswers !== undefined)
        user.progress[progressIndex].quizAnswers = req.body.quizAnswers;
      if (req.body.flaggedQuestions !== undefined)
        user.progress[progressIndex].flaggedQuestions =
          req.body.flaggedQuestions;
    } else {
      // Add new progress
      user.progress.push({
        moduleId,
        courseId,
        completionPercentage,
        isCompleted: isCompleted || false,
        lastAccessed: new Date(),
        score: req.body.score || 0,
        quizAnswers: req.body.quizAnswers || {},
        flaggedQuestions: req.body.flaggedQuestions || {},
      });

      // Award initial points for the first attempt
      if (req.body.score) {
        const initialPoints = req.body.score;
        user.points = (user.points || 0) + initialPoints;

        // Log to Points History
        const moduleDoc = await Module.findById(moduleId);
        user.pointsHistory.push({
          description: `Penyelesaian Modul: ${moduleDoc?.name || "Modul"}`,
          points: initialPoints,
          date: new Date(),
        });

        console.log(
          `[Points] Awarded ${initialPoints} initial points to ${username}. Total: ${user.points}`,
        );
      }
    }

    // Check for achievements and update title
    const newAchievements = await checkAllAchievements(user);
    await updateUserTitle(user);

    // Ensure Mixed types (quizAnswers, flaggedQuestions) are marked as modified
    user.markModified("progress");

    // Retry save on VersionError (race condition with concurrent requests)
    const MAX_RETRIES = 3;
    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        await user.save();
        console.log(`[Progress Update] Saved successfully for ${username}`);
        break;
      } catch (saveErr) {
        if (saveErr.name === "VersionError" && attempt < MAX_RETRIES - 1) {
          console.log(
            `[Progress Update] VersionError for ${username}, retrying (${attempt + 1}/${MAX_RETRIES})...`,
          );
          // Re-fetch the latest version and re-apply the lastAccessed update
          const freshUser = await User.findOne({ username });
          const idx = freshUser.progress.findIndex(
            (p) => p.moduleId.toString() === moduleId,
          );
          if (idx > -1) {
            freshUser.progress[idx].lastAccessed = new Date();
            freshUser.markModified("progress");
          }
          user = freshUser;
        } else {
          throw saveErr;
        }
      }
    }

    // Re-populate for full detail (like points, title, etc)
    const populatedUser = await User.findById(user._id)
      .populate("title")
      .populate("achievements.achievementId");

    const rank =
      (await User.countDocuments({ points: { $gt: populatedUser.points } })) +
      1;

    res.json({ ...populatedUser.toObject(), newAchievements, rank });
  } catch (err) {
    console.error("Progress Update Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// 5. Update Points (Generic)
router.put("/:username/points", async (req, res) => {
  try {
    const { points, description } = req.body;
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ error: "User not found" });

    user.points = (user.points || 0) + points;
    user.pointsHistory.push({
      description: description || "Poin dari aktivitas",
      points: points,
      date: new Date(),
    });

    await updateUserTitle(user);
    await user.save();
    await user.populate("title");
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 6. Get Last Accessed Module (for Dashboard)
router.get("/:username/last-accessed", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Filter for incomplete (ongoing) modules and sort by lastAccessed descending
    const ongoingProgress = user.progress.filter((p) => !p.isCompleted);
    const sortedProgress = [...ongoingProgress].sort(
      (a, b) => new Date(b.lastAccessed) - new Date(a.lastAccessed),
    );

    const recentProgress = sortedProgress.slice(0, 2);

    if (recentProgress.length === 0) {
      return res.json([]);
    }

    const recentModules = await Promise.all(
      recentProgress.map(async (p) => {
        const moduleDoc = await Module.findById(p.moduleId);
        const courseDoc = await Course.findById(moduleDoc?.courseId);

        // Calculate current step (1-indexed for display)
        const totalSteps = moduleDoc?.steps?.length || 1;
        const currentStepValue = Math.round(
          (p.completionPercentage / 100) * totalSteps,
        );

        // Calculate points available from quiz
        const quizStep = moduleDoc?.steps?.find((s) => s.type === "quiz");
        const totalPoints =
          quizStep?.questions?.reduce((sum, q) => sum + (q.points || 0), 0) ||
          0;

        return {
          moduleId: p.moduleId,
          title: moduleDoc?.name || "Unknown Module",
          category: courseDoc?.name || "General",
          subcategory: moduleDoc?.subcategory || "",
          points: totalPoints,
          currentStep: currentStepValue,
          totalSteps: totalSteps,
          link: `/modules/${p.moduleId}`,
          isCompleted: p.isCompleted,
        };
      }),
    );

    res.json(recentModules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 7. Get Daily Missions
router.get("/:username/daily-missions", async (req, res) => {
  try {
    const { username } = req.params;

    // Check if DB is connected
    if (mongoose.connection.readyState !== 1) {
      throw new Error(
        "Database not connected. Please check your MongoDB service.",
      );
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ error: `User '${username}' not found. Please log in again.` });
    }

    // Get active daily missions
    const missions = await Mission.find({ type: "DAILY", isActive: true });

    if (missions.length === 0) {
      return res
        .status(404)
        .json({ error: "No daily missions found in the database." });
    }

    // Today's date range (start of day in local time)
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    // Calculate progress for each mission
    const missionsWithProgress = missions.map((mission) => {
      let current = 0;

      if (mission.condition === "DAILY_QUIZ") {
        // Check if user has completed a Daily Quiz today (recorded in pointsHistory)
        const dailyQuizDone = user.pointsHistory?.some(
          (ph) =>
            ph.date >= startOfDay && ph.description === "Daily Quiz Completed",
        );
        current = dailyQuizDone ? 1 : 0;
      } else if (mission.condition === "COMPLETE_MODULE") {
        current = user.progress.filter(
          (p) => p.isCompleted && p.lastAccessed >= startOfDay,
        ).length;
      }

      const isClaimed = user.completedMissions.some(
        (cm) =>
          cm.missionId?.toString() === mission._id.toString() &&
          cm.completedAt >= startOfDay,
      );

      return {
        id: mission._id,
        title: mission.title,
        description: mission.description,
        type: mission.category === "QUIZ" ? "quiz" : "progress",
        points: mission.pointsReward,
        current: current,
        target: mission.targetValue,
        isClaimed: isClaimed,
        link: mission.category === "QUIZ" ? "/quiz/daily" : "/courses",
        image: mission.category === "QUIZ" ? "puzzle-piece" : "flag",
      };
    });

    res.json(missionsWithProgress);
  } catch (err) {
    console.error("Mission Fetch Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// 8. Claim Mission Reward
router.post("/:username/claim-mission", async (req, res) => {
  try {
    const { username } = req.params;
    const { missionId } = req.body;

    // Check if DB is connected
    if (mongoose.connection.readyState !== 1) {
      throw new Error(
        "Database not connected. Please check your MongoDB service.",
      );
    }

    const mission = await Mission.findById(missionId);
    if (!mission) return res.status(404).json({ error: "Mission not found." });

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found." });

    // Check if already claimed today
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const alreadyClaimed = user.completedMissions.some(
      (cm) =>
        cm.missionId?.toString() === missionId && cm.completedAt >= startOfDay,
    );

    if (alreadyClaimed) {
      return res.status(400).json({ message: "Mission already claimed today" });
    }

    // Add reward and mark as claimed
    user.points += mission.pointsReward;
    user.completedMissions.push({
      missionId: mission._id,
      completedAt: new Date(),
    });

    // Log to Points History
    user.pointsHistory.push({
      description: `Klaim Misi: ${mission.title}`,
      points: mission.pointsReward,
      date: new Date(),
    });

    // Check for achievements
    const newAchievements = await checkAllAchievements(user);

    await user.save();

    res.json({
      message: "Reward claimed!",
      totalPoints: user.points,
      reward: mission.pointsReward,
      newAchievements,
    });
  } catch (err) {
    console.error("Mission Claim Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
