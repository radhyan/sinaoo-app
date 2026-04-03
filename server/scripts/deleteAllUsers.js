require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");
const User = require("../models/User");

async function deleteAllUsers() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error("MONGODB_URI not set.");
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log("Connected to DB.");

    const result = await User.deleteMany({});

    console.log(`Successfully deleted ${result.deletedCount} users.`);
    process.exit(0);
  } catch (err) {
    console.error("Error deleting users:", err);
    process.exit(1);
  }
}

deleteAllUsers();
