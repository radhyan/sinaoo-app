const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "course-placeholder.png", // We'll map this in frontend or use a default
  },
});

module.exports = mongoose.model("Course", CourseSchema);
