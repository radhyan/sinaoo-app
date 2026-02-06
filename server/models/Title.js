const mongoose = require("mongoose");

const titleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    default: Infinity,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Title", titleSchema);
