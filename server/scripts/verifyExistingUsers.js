require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");
const User = require("../models/User");

async function verifyAllExistingUsers() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error("MONGODB_URI not set.");
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log("Connected to DB.");

    const result = await User.updateMany(
      { isVerified: { $ne: true } },
      { $set: { isVerified: true }, $unset: { emailVerificationToken: 1 } },
    );

    console.log(
      `Successfully verified ${result.modifiedCount} existing users.`,
    );
    process.exit(0);
  } catch (err) {
    console.error("Error migrating users:", err);
    process.exit(1);
  }
}

verifyAllExistingUsers();
