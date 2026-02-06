const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const User = require("../models/User");

const cleanup = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const semanticId = "sebab-akibat";

    // 1. Delete modules with name "Sebab Akibat" that are NOT the semantic ID
    const deleteResult = await Module.deleteMany({
      name: { $regex: /^sebab akibat$/i },
      _id: { $ne: semanticId },
    });
    console.log(`Deleted ${deleteResult.deletedCount} duplicate module(s).`);

    // 2. Cleanup user progress entries that point to non-semantic IDs for "Sebab Akibat"
    // First, find all current modules to know what's valid (optional, but let's be safe)
    // Actually, let's just remove progress entries where moduleId is a valid ObjectID (string format)
    // but the name of the module it refers to (if we had it) is "Sebab Akibat".
    // Alternatively, just remove any progress where moduleId is NOT "sebab-akibat" AND is an ObjectID-like string.

    const users = await User.find({ "progress.moduleId": { $ne: semanticId } });
    let updatedUsersCount = 0;

    for (const user of users) {
      const initialCount = user.progress.length;
      // Filter out progress entries that match "Sebab Akibat" pattern but aren't the semantic one
      // Since we don't have the name in progress, we might have to be careful.
      // However, usually duplicate progress happens when the moduleId doesn't match.

      // If the user wants to delete progress for THAT specific old module, we need its ID.
      // But we just deleted it. So we can look for progress entries where the moduleId doesn't exist in modules.

      const validModuleIds = (await Module.find({}, "_id")).map((m) =>
        m._id.toString(),
      );

      user.progress = user.progress.filter((p) =>
        validModuleIds.includes(p.moduleId.toString()),
      );

      if (user.progress.length !== initialCount) {
        await user.save();
        updatedUsersCount++;
      }
    }

    console.log(`Cleaned up progress for ${updatedUsersCount} user(s).`);

    process.exit(0);
  } catch (error) {
    console.error("Cleanup error:", error);
    process.exit(1);
  }
};

cleanup();
