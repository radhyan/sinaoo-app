const express = require("express");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const {
  updateLoginStreak,
  checkAllAchievements,
  updateUserTitle,
} = require("../services/achievementService");

const router = express.Router();

// Validation Rules
const registerValidation = [
  body("username")
    .matches(/^[a-zA-Z0-9_]{3,20}$/)
    .withMessage(
      "Username harus 3-20 karakter dan hanya boleh mengandung huruf, angka, atau underscore.",
    ),
  body("email")
    .isEmail()
    .withMessage("Format email tidak valid.")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password minimal 8 karakter.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage(
      "Password harus mengandung huruf besar, huruf kecil, angka, dan karakter spesial.",
    ),
];

// 1. Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate("title");

    if (!user) {
      return res.status(401).json({
        message: "Email tidak terdaftar",
        field: "email",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
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

// 2. Register
router.post("/register", registerValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  try {
    const { username, email, password, dateOfBirth } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email atau Username sudah terdaftar." });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      dateOfBirth,
    });

    await newUser.save();
    res.status(201).json({ message: "Registrasi berhasil!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Forgot Password (Mock)
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    // For security, don't explicitly say if email exists or not in production
    // But for this project, we'll return a clear message
    if (!user) {
      return res.status(404).json({ error: "Email tidak ditemukan." });
    }

    // In a real app, generate a token, save to DB, and send an email
    console.log(`[Forgot Password] Reset request for: ${email}`);

    res.json({ message: "Instruksi reset password telah dikirim." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
