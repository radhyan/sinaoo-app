const mongoose = require("mongoose");

const bugReportSchema = new mongoose.Schema({
  reporter: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["UI", "Logic", "Content", "Lainnya"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Open", "In Progress", "Closed"],
    default: "Open",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("BugReport", bugReportSchema);
