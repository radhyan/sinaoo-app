const express = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
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

    // Check if verified
    if (!user.isVerified) {
      return res.status(403).json({
        message:
          "Harap verifikasi email Anda sebelum login. Silakan cek kotak masuk email Anda.",
        field: "general",
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

    // Generate Verification Token
    const verificationToken = crypto.randomBytes(20).toString("hex");

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      dateOfBirth,
      isVerified: false,
      emailVerificationToken: verificationToken,
    });

    await newUser.save();

    // Send Verification Email
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const verifyUrl = `${process.env.CORS_ORIGIN || "http://localhost:5173"}/verify-email/${verificationToken}`;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: newUser.email,
        subject: "Sinaoo - Verifikasi Email",
        text:
          `Terima kasih telah mendaftar di Sinaoo!\n\n` +
          `Untuk mulai menggunakan akunmu, silakan verifikasi email dengan mengklik link di bawah ini, atau copy-paste ke browser kamu:\n\n` +
          `${verifyUrl}\n\n` +
          `Jika kamu tidak merasa mendaftar, abaikan email ini.\n`,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailErr) {
      console.error("[Register] Email send error:", emailErr);
      // We still return 201 because the user was created, but they might need a "resend" function later
    }

    res
      .status(201)
      .json({
        message:
          "Registrasi berhasil! Silakan cek email Anda untuk verifikasi.",
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Verifikasi Email
router.post("/verify-email/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const user = await User.findOne({ emailVerificationToken: token });

    if (!user) {
      return res.status(400).json({ error: "Token verifikasi tidak valid." });
    }

    user.isVerified = true;
    user.emailVerificationToken = undefined;
    await user.save();

    res.json({
      message: "Email berhasil diverifikasi! Anda sekarang dapat login.",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Forgot Password
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Email tidak ditemukan." });
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Set token and expiration (1 hour from now)
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email using nodemailer
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const resetUrl = `${process.env.CORS_ORIGIN || "http://localhost:5173"}/reset-password/${resetToken}`;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Sinaoo - Reset Password",
        text:
          `Kamu menerima email ini karena kamu (atau orang lain) telah meminta reset password untuk akunmu.\n\n` +
          `Silakan klik link di bawah ini, atau copy-paste ke browser kamu untuk menyelesaikan prosesnya:\n\n` +
          `${resetUrl}\n\n` +
          `Jika kamu tidak memintanya, abaikan email ini dan password lamamu akan tetap berlaku.\n`,
      };

      await transporter.sendMail(mailOptions);
      res.json({
        message: "Instruksi reset password telah dikirim ke email kamu.",
      });
    } catch (emailErr) {
      // If email fails, clear the token and throw so user can try again
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      await user.save();
      console.error("[Forgot Password] Email send error:", emailErr);
      return res
        .status(500)
        .json({ error: "Gagal mengirim email reset password." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Reset Password
router.post("/reset-password/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        error: "Token reset password tidak valid atau sudah kadaluarsa.",
      });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Clear reset token
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();
    res.json({ message: "Password berhasil diubah!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
