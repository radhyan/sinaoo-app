const express = require("express");
const User = require("../models/User");
const {
  updateLoginStreak,
  checkAllAchievements,
  updateUserTitle,
} = require("../services/achievementService");

const router = express.Router();

// 1. Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // In a real app, compare hashed password!
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Email tidak terdaftar",
        field: "email",
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Password salah",
        field: "password",
      });
    }

    // Update streak and title on login
    await updateLoginStreak(user);
    const newAchievements = await checkAllAchievements(user);
    await updateUserTitle(user);
    await user.save();

    res.json({ ...user.toObject(), newAchievements });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
