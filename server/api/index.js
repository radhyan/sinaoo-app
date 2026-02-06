const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Import Routes
const authRoutes = require("../routes/auth");
const userRoutes = require("../routes/users");
const courseRoutes = require("../routes/courses");
const moduleRoutes = require("../routes/modules");
const gamificationRoutes = require("../routes/gamification");
const adminRoutes = require("../routes/admin");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// --- MOUNT ROUTES ---
app.get("/", (req, res) => {
  res.json({ message: "Sinaoo Backend is Running!" });
});

app.use("/api", authRoutes); // /api/login
app.use("/api/users", userRoutes); // /api/users/*
app.use("/api/courses", courseRoutes); // /api/courses/*
app.use("/api/modules", moduleRoutes); // /api/modules/*
app.use("/api", gamificationRoutes); // /api/achievements, /api/titles, /api/leaderboard
app.use("/api/admin", adminRoutes); // /api/admin/*

// --- DATABASE CONNECTION ---
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));

module.exports = app;
