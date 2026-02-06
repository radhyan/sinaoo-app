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
  steps: [
    {
      title: String,
      type: {
        type: String,
        enum: ["reading", "video", "quiz"],
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
    },
  ],
});

module.exports = mongoose.model("Module", ModuleSchema);
