const express = require("express");
const Module = require("../models/Module");
const Course = require("../models/Course");
const User = require("../models/User");
const {
  checkAllAchievements,
  updateUserTitle,
} = require("../services/achievementService");

const router = express.Router();

/**
 * Helper: Get today's course for the daily quiz.
 * Rotates through courses that have quiz questions, using day-of-year.
 */
async function getTodaysCourse() {
  // Find courses that have at least one module with quiz questions
  const coursesWithQuizzes = await Course.aggregate([
    {
      $lookup: {
        from: "modules",
        localField: "_id",
        foreignField: "courseId",
        as: "modules",
      },
    },
    { $unwind: "$modules" },
    { $unwind: "$modules.steps" },
    { $match: { "modules.steps.type": "quiz" } },
    { $unwind: "$modules.steps.questions" },
    {
      $group: {
        _id: "$_id",
        name: { $first: "$name" },
        questionCount: { $sum: 1 },
      },
    },
    { $match: { questionCount: { $gte: 10 } } }, // Only courses with 10+ questions
    { $sort: { name: 1 } }, // Consistent ordering
  ]);

  if (coursesWithQuizzes.length === 0) return null;

  // Day of year calculation
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const courseIndex = dayOfYear % coursesWithQuizzes.length;
  return coursesWithQuizzes[courseIndex];
}

/**
 * GET /api/daily-quiz/questions
 * Returns 10 random quiz questions from today's rotating course.
 */
router.get("/questions", async (req, res) => {
  try {
    const todaysCourse = await getTodaysCourse();

    if (!todaysCourse) {
      return res.status(404).json({
        error: "Tidak ada course dengan soal kuis yang cukup.",
      });
    }

    // Get all quiz questions from modules in this course
    const modules = await Module.find({ courseId: todaysCourse._id });

    const allQuestions = [];
    modules.forEach((mod) => {
      mod.steps.forEach((step) => {
        if (step.type === "quiz" && step.questions) {
          step.questions.forEach((q) => {
            // Only include multiple-choice questions for the Daily Pop Quiz format
            if (
              !q.type ||
              q.type === "multiple-choice" ||
              (q.options && q.options.length > 0)
            ) {
              allQuestions.push({
                id: q.id || q._id,
                type: q.type || "multiple-choice",
                context: q.context || null,
                question: q.question,
                options: q.options,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation || "",
                imageUrl: q.imageUrl || null,
                sourceModule: mod.name,
              });
            }
          });
        }
      });
    });

    if (allQuestions.length < 10) {
      return res.status(404).json({
        error: `Course "${todaysCourse.name}" hanya memiliki ${allQuestions.length} soal. Dibutuhkan minimal 10.`,
      });
    }

    // Shuffle and pick 10
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);

    res.json({
      courseId: todaysCourse._id,
      courseName: todaysCourse.name,
      date: new Date().toISOString().split("T")[0],
      questions: selected,
    });
  } catch (err) {
    console.error("[Daily Quiz] Error fetching questions:", err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/daily-quiz/submit
 * Submit daily quiz results and award points.
 * Body: { username, score, redemptionScore, bestStreak, answers }
 */
router.post("/submit", async (req, res) => {
  try {
    const { username, score, redemptionScore, bestStreak } = req.body;
    const totalScore = (score || 0) + (redemptionScore || 0);

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });

    // Check if already completed today
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const alreadyDone = user.pointsHistory?.some(
      (ph) =>
        ph.date >= startOfDay && ph.description === "Daily Quiz Completed",
    );

    if (alreadyDone) {
      return res.status(400).json({
        error: "Kuis harian sudah diselesaikan hari ini.",
        alreadyCompleted: true,
      });
    }

    // Award points
    user.points = (user.points || 0) + totalScore;
    user.pointsHistory.push({
      description: "Daily Quiz Completed",
      points: totalScore,
      date: new Date(),
    });

    // Check achievements and update title
    const newAchievements = await checkAllAchievements(user);
    await updateUserTitle(user);

    await user.save();

    const populatedUser = await User.findById(user._id)
      .populate("title")
      .populate("achievements.achievementId");

    res.json({
      message: "Daily Quiz completed!",
      totalScore,
      baseScore: score || 0,
      redemptionScore: redemptionScore || 0,
      bestStreak: bestStreak || 0,
      totalPoints: populatedUser.points,
      newAchievements,
      user: populatedUser,
    });
  } catch (err) {
    console.error("[Daily Quiz] Submit error:", err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/daily-quiz/status/:username
 * Check if user has already completed today's daily quiz.
 */
router.get("/status/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ error: "User not found" });

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const todaysEntry = user.pointsHistory?.find(
      (ph) =>
        ph.date >= startOfDay && ph.description === "Daily Quiz Completed",
    );

    const todaysCourse = await getTodaysCourse();

    res.json({
      completed: !!todaysEntry,
      score: todaysEntry?.points || 0,
      courseName: todaysCourse?.name || "Unknown",
      courseId: todaysCourse?._id || null,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
