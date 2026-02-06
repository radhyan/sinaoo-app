const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  // ERD: ACHIEVEMENT
  key: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  pointsValue: {
    type: Number,
    default: 0,
  },
  target: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Achievement", achievementSchema);
