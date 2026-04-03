const express = require("express");
const router = express.Router();
const BugReport = require("../models/BugReport");
const nodemailer = require("nodemailer");

// Function to send email notification
const sendBugReportEmail = async (report) => {
  // If no email config is provided, we skip sending email without crashing
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log(
      "[Bug Report] Skipping email notification: EMAIL_USER or EMAIL_PASS not set in .env",
    );
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // Set ADMIN_EMAIL in .env, fallback to sender
      subject: `[Sinaoo Bug Report] ${report.type} from ${report.reporter}`,
      text: `Bug Reporter: ${report.reporter}
Type: ${report.type}
Status: ${report.status}

Description:
${report.description}
`,
    };

    await transporter.sendMail(mailOptions);
    console.log("[Bug Report] Email notification sent successfully.");
  } catch (error) {
    console.error("[Bug Report] Failed to send email notification:", error);
  }
};

router.post("/", async (req, res) => {
  try {
    const { reporter, type, description } = req.body;

    if (!reporter || !type || !description) {
      return res.status(400).json({ error: "Semua field harus diisi" });
    }

    const newReport = new BugReport({
      reporter,
      type,
      description,
    });

    await newReport.save();

    // Send email notification in the background
    sendBugReportEmail(newReport);

    res
      .status(201)
      .json({ message: "Laporan bug berhasil dikirim", report: newReport });
  } catch (error) {
    console.error("Error creating bug report:", error);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
});

module.exports = router;
