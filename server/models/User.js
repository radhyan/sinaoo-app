const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // --- Identity (ERD: USER) ---
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: false, // Optional for now
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  streakCount: {
    type: Number,
    default: 0,
  },
  lastStreakUpdate: {
    type: Date,
  },

  // --- Profile & Gamification (ERD: PROFILE, USERPOINTS) ---
  // In MongoDB, we merge Profile 1:1 into User for efficiency
  title: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Title",
    default: null,
  },
  points: {
    // Represents UserPoints aggregation
    type: Number,
    default: 0,
  },
  avatarId: {
    type: Number,
    default: 1,
  },
  avatar: {
    // Legacy/Custom avatar URL
    type: String,
    default: "",
  },

  // --- Relations (ERD: USERACHIEVEMENT, USERPROGRESS) ---
  achievements: [
    {
      achievementId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Achievement",
      },
      dateEarned: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  // Progress Tracking (Simplified from ERD UserProgress for Document Embedding)
  progress: [
    {
      courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }, // implied
      moduleId: { type: String }, // or ObjectId if Module is a model
      completionPercentage: { type: Number, default: 0 },
      isCompleted: { type: Boolean, default: false },
      lastAccessed: { type: Date, default: Date.now },
      score: { type: Number, default: 0 },
      quizAnswers: { type: mongoose.Schema.Types.Mixed, default: {} },
      flaggedQuestions: { type: mongoose.Schema.Types.Mixed, default: {} },
    },
  ],

  // Daily Mission Widget Support
  completedMissions: [
    {
      missionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mission",
      },
      completedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  // Points History (For Profile Page)
  pointsHistory: [
    {
      description: { type: String, required: true },
      points: { type: Number, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
