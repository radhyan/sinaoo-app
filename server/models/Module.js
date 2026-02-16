const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema({
  _id: {
    type: String, // Use semantic slug as ID (e.g., 'sebab-akibat')
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  subcategory: {
    type: String, // 'Penalaran Induktif', 'Penalaran Deduktif', etc.
    default: "",
  },
  steps: [
    {
      title: String,
      type: {
        type: String,
        enum: ["reading", "video", "quiz", "flashcards"],
        required: true,
      },
      status: {
        type: String, // 'locked', 'active', 'completed'
        default: "locked",
      },
      // For Video
      videoUrl: String,
      description: String,
      // For Reading
      content: String,
      // For Quiz
      questions: [
        {
          id: mongoose.Schema.Types.Mixed,
          type: { type: String }, // 'multiple-choice', 'matrix'
          context: String,
          question: String,
          options: [
            {
              id: String,
              text: String,
            },
          ],
          rows: [{ id: String, text: String }],
          columns: [{ id: String, text: String }],
          points: Number,
          correctAnswer: String, // For multiple-choice
          correctAnswers: mongoose.Schema.Types.Mixed, // For matrix (Map or Object)
          explanation: String,
          imageUrl: String,
        },
      ],
      // For Flashcards
      cards: [
        {
          front: String,
          back: String,
          lastReviewed: Date,
          nextReview: Date,
          interval: { type: Number, default: 0 },
          easeFactor: { type: Number, default: 2.5 },
        },
      ],
    },
  ],
  sourceMaterial: {
    type: String, // Original text/URL/Filename used for generation
    default: "",
  },
  isAIGenerated: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Module", ModuleSchema);
