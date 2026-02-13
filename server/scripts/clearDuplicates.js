const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");

const clearDuplicates = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const modules = await Module.find({});
    const sortedModules = modules.sort(
      (a, b) => (b.steps?.length || 0) - (a.steps?.length || 0),
    );

    const seen = new Set();
    const deletedIds = [];

    for (const mod of sortedModules) {
      const key = `${mod.courseId}_${mod.name.toLowerCase().trim()}`;
      if (seen.has(key)) {
        await Module.deleteOne({ _id: mod._id });
        deletedIds.push(mod._id);
        console.log(`Deleted duplicate: ${mod.name} (ID: ${mod._id})`);
      } else {
        seen.add(key);
      }
    }

    if (deletedIds.length === 0) {
      console.log("No duplicates were found or deleted.");
    } else {
      console.log(
        `Successfully deleted ${deletedIds.length} duplicate modules.`,
      );
    }

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

clearDuplicates();
