const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const User = require("../models/User");

const hardCleanup = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    // 1. List all modules
    const allModules = await Module.find({});
    console.log("Current Modules in DB:");
    allModules.forEach((m) => console.log(`- ${m._id} | ${m.name}`));

    const semanticId = "sebab-akibat";

    // 2. Delete anything that is "Sebab Akibat" but NOT the semantic ID
    // We'll also check for case insensitive and spaces
    const deleteResult = await Module.deleteMany({
      $or: [{ name: { $regex: /^sebab akibat$/i } }, { name: "Sebab Akibat" }],
      _id: { $ne: semanticId },
    });
    console.log(`Deleted ${deleteResult.deletedCount} duplicate module(s).`);

    // 3. Deduplicate User Progress
    const users = await User.find({});
    let updatedUsersCount = 0;

    for (const user of users) {
      const initialCount = user.progress.length;

      // Filter out progress where moduleId is NOT in our valid list
      const validModules = await Module.find({});
      const validIds = validModules.map((m) => m._id.toString());

      // Also deduplicate: if multiple entries have same moduleId, keep the most recent one
      const progressMap = new Map();

      for (const p of user.progress) {
        const mid = p.moduleId.toString();
        if (validIds.includes(mid)) {
          if (
            !progressMap.has(mid) ||
            new Date(p.lastAccessed) >
              new Date(progressMap.get(mid).lastAccessed)
          ) {
            progressMap.set(mid, p);
          }
        }
      }

      user.progress = Array.from(progressMap.values());

      if (user.progress.length !== initialCount) {
        await user.save();
        updatedUsersCount++;
      }
    }

    console.log(
      `Cleaned up and deduplicated progress for ${updatedUsersCount} user(s).`,
    );

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

hardCleanup();
