const Achievement = require("../models/Achievement");
const User = require("../models/User");
const Title = require("../models/Title");
const Course = require("../models/Course");
const Module = require("../models/Module");

async function checkAndAwardAchievement(user, key) {
  try {
    const achievement = await Achievement.findOne({ key });
    if (!achievement) return null;

    // Check if user already has this achievement
    const alreadyEarned = user.achievements.some((a) => {
      const existingId =
        a.achievementId?._id?.toString() || a.achievementId?.toString();
      return existingId === achievement._id.toString();
    });
    if (alreadyEarned) return null;

    console.log(`[Achievement] Checking ${key} for ${user.username}...`);

    let metCondition = false;

    // Specific logic for each achievement key
    switch (key) {
      case "FIRST_MODULE":
        metCondition = user.progress.some((p) => p.isCompleted);
        break;
      case "QUIZ_PERFECT":
        metCondition = user.progress.some((p) => p.score >= 100);
        break;
      case "STREAK_STARTER":
        metCondition = user.streakCount >= 3;
        break;
      case "DAILY_GRINDER":
        const startOfToday = new Date().setHours(0, 0, 0, 0);
        metCondition =
          user.completedMissions.filter((cm) => cm.completedAt >= startOfToday)
            .length >= 2;
        break;
      case "BOOKWORM":
        const stats = await calculateCourseStats(user);
        metCondition = stats.completedCourses >= 2;
        break;
      case "TOP_CLASS":
        // Rank 5 besar
        const higherPointsCount = await User.countDocuments({
          points: { $gt: user.points },
        });
        metCondition = higherPointsCount + 1 <= 5;
        break;
    }

    if (metCondition) {
      console.log(`[Achievement] ${key} EARNED by ${user.username}!`);
      user.achievements.push({
        achievementId: achievement._id,
        dateEarned: new Date(),
      });
      user.points += achievement.pointsValue;
      user.pointsHistory.push({
        points: achievement.pointsValue,
        description: `Achievement Unlocked: ${achievement.name}`,
        date: new Date(),
      });
      return achievement;
    }
  } catch (err) {
    console.error(`Error awarding achievement ${key}:`, err);
  }
  return null;
}

async function checkAllAchievements(user) {
  const keys = [
    "FIRST_MODULE",
    "QUIZ_PERFECT",
    "STREAK_STARTER",
    "DAILY_GRINDER",
    "BOOKWORM",
    "TOP_CLASS",
  ];
  const newlyAwarded = [];

  for (const key of keys) {
    const awarded = await checkAndAwardAchievement(user, key);
    if (awarded) {
      newlyAwarded.push(awarded);
    }
  }

  return newlyAwarded;
}

// Helper to update streak
async function updateLoginStreak(user) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (!user.lastStreakUpdate) {
    user.streakCount = 1;
    user.lastStreakUpdate = today;
    return true;
  }

  const lastUpdate = new Date(user.lastStreakUpdate);
  const diffTime = today - lastUpdate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    // Consecutive day
    user.streakCount += 1;
    user.lastStreakUpdate = today;
    return true;
  } else if (diffDays > 1) {
    // Broken streak
    user.streakCount = 1;
    user.lastStreakUpdate = today;
    return true;
  }

  // Same day, do nothing
  return false;
}

// Helper to update title based on points
async function updateUserTitle(user) {
  try {
    const points = user.points || 0;
    // Find title where min <= points AND (max > points OR max is Infinity/null)
    const titles = await Title.find().sort({ min: 1 });
    let correctTitle = titles[0]; // default to first

    for (const t of titles) {
      if (points >= t.min) {
        correctTitle = t;
      }
    }

    if (
      !user.title ||
      user.title._id?.toString() !== correctTitle._id.toString() ||
      user.title.toString() !== correctTitle._id.toString()
    ) {
      user.title = correctTitle._id;
      return true;
    }
  } catch (err) {
    console.error("Error updating user title:", err);
  }
  return false;
}

// Helper to calculate course completion stats
async function calculateCourseStats(user) {
  try {
    const courses = await Course.find();
    const modules = await Module.find();

    let completedCoursesCount = 0;

    for (const course of courses) {
      const courseModules = modules.filter(
        (m) => m.courseId.toString() === course._id.toString(),
      );
      if (courseModules.length === 0) continue;

      const allCompleted = courseModules.every((cm) => {
        const userProgress = user.progress.find(
          (p) => p.moduleId.toString() === cm._id.toString(),
        );
        return userProgress && userProgress.isCompleted;
      });

      if (allCompleted) {
        completedCoursesCount++;
      }
    }

    return {
      completedCourses: completedCoursesCount,
      totalCourses: courses.length,
    };
  } catch (err) {
    console.error("Error calculating course stats:", err);
    return { completedCourses: 0, totalCourses: 0 };
  }
}

module.exports = {
  checkAndAwardAchievement,
  checkAllAchievements,
  updateLoginStreak,
  updateUserTitle,
  calculateCourseStats,
};
