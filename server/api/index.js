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
const dailyQuizRoutes = require("../routes/dailyQuiz");

dotenv.config();

const app = express();

function normalizeEnvValue(value) {
  if (!value) return "";
  return value
    .trim()
    .replace(/^['\"]|['\"]$/g, "")
    .replace(/\\r\\n/g, "")
    .replace(/\r\n/g, "")
    .replace(/\n/g, "");
}

const rawCorsOrigins = normalizeEnvValue(process.env.CORS_ORIGIN) || "http://localhost:5173";
const allowedOrigins = rawCorsOrigins
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
  })
);
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
app.use("/api/daily-quiz", dailyQuizRoutes); // /api/daily-quiz/*

// Cache MongoDB connection across serverless invocations.
let cachedConnection = global._mongooseConnection;
let cachedConnectionPromise = global._mongooseConnectionPromise;

async function connectToDatabase() {
  if (cachedConnection) return cachedConnection;

  const mongoUri = normalizeEnvValue(process.env.MONGODB_URI);
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not set");
  }

  if (!cachedConnectionPromise) {
    cachedConnectionPromise = mongoose.connect(mongoUri);
    global._mongooseConnectionPromise = cachedConnectionPromise;
  }

  cachedConnection = await cachedConnectionPromise;
  global._mongooseConnection = cachedConnection;
  return cachedConnection;
}

connectToDatabase().catch((err) => {
  console.error("Could not connect to MongoDB:", err);
});

const PORT = process.env.PORT || 3000;
if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));
}

module.exports = app;
