const express = require("express");
const Achievement = require("../models/Achievement");
const Title = require("../models/Title");
const User = require("../models/User");
const { updateUserTitle } = require("../services/achievementService");

const router = express.Router();

// 1. Get All Achievements (with seeding)
router.get("/achievements", async (req, res) => {
  try {
    let achievements = await Achievement.find();

    if (achievements.length === 0) {
      // Seed data if empty
      const seedData = [
        {
          key: "FIRST_MODULE",
          name: "The First Step",
          description: "Menyelesaikan modul pertamamu",
          pointsValue: 100,
          target: 1,
          imageUrl: "/achievements/Achievement 1.png",
        },
        {
          key: "QUIZ_PERFECT",
          name: "Quiz Hotshot",
          description: "Mendapatkan nilai 100% dalam 1 quiz",
          pointsValue: 100,
          target: 1,
          imageUrl: "/achievements/Achievement 2.png",
        },
        {
          key: "STREAK_STARTER",
          name: "Streak Starter",
          description: "Log in dan belajar selama 3 hari berturut-turut",
          pointsValue: 300,
          target: 3,
          imageUrl: "/achievements/Achievement 3.png",
        },
        {
          key: "DAILY_GRINDER",
          name: "Daily Grinder",
          description: "Menyelesaikan 2 misi harian",
          pointsValue: 200,
          target: 2,
          imageUrl: "/achievements/Achievement 4.png",
        },
        {
          key: "BOOKWORM",
          name: "Bookworm",
          description: "Menyelesaikan 2 course",
          pointsValue: 400,
          target: 2,
          imageUrl: "/achievements/Achievement 5.png",
        },
        {
          key: "TOP_CLASS",
          name: "Top of The Class",
          description: "Raih peringkat 5 besar dalam leaderboard",
          pointsValue: 500,
          target: 1,
          imageUrl: "/achievements/Achievement 6.png",
        },
      ];

      // Seed/Update achievements
      for (const data of seedData) {
        await Achievement.findOneAndUpdate({ key: data.key }, data, {
          upsert: true,
          new: true,
        });
      }

      achievements = await Achievement.find();
    }

    res.json(achievements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Get All Titles
router.get("/titles", async (req, res) => {
  try {
    const titles = await Title.find().sort({ min: 1 });
    res.json(titles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Leaderboard (Top 10 by Points)
router.get("/leaderboard", async (req, res) => {
  try {
    const { username } = req.query;

    const topUsers = await User.find()
      .sort({ points: -1 })
      .limit(50)
      .populate("title")
      .select("username name points avatar avatarId title");

    // Ensure all top users have correct titles based on their points
    for (let u of topUsers) {
      const updated = await updateUserTitle(u);
      if (updated) {
        await u.save();
        await u.populate("title");
      } else if (!u.title) {
        // Fallback for users with no title at all
        const defaultTitle = await Title.findOne().sort({ min: 1 });
        if (defaultTitle) {
          u.title = defaultTitle._id;
          await u.save();
          await u.populate("title");
        }
      }
    }

    let userRank = null;
    let userProfile = null;

    if (username) {
      userProfile = await User.findOne({ username }).populate("title");
      if (userProfile) {
        if (await updateUserTitle(userProfile)) {
          await userProfile.save();
          await userProfile.populate("title");
        }
        userRank =
          (await User.countDocuments({ points: { $gt: userProfile.points } })) +
          1;
      }
    }

    res.json({
      topUsers,
      userRank,
      userProfile,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
