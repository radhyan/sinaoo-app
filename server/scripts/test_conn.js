const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const test = async () => {
  try {
    console.log("Starting test...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully!");
    process.exit(0);
  } catch (error) {
    console.error("TEST ERROR:", error);
    process.exit(1);
  }
};

test();
