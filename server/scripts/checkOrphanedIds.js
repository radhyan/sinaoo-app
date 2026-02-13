const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Course = require("../models/Course");
const User = require("../models/User");

const checkOrphanedIds = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const idsToCheck = ["6961f021813c23bcb894aa50", "6961f021813c23bcb894aa4f"];

    // Check Courses
    const courses = await Course.find({});
    for (const course of courses) {
      const found = course.modules?.filter((mid) => idsToCheck.includes(mid));
      if (found && found.length > 0) {
        console.log(
          `Course '${course.name}' contains orphaned IDs: ${found.join(", ")}`,
        );
        // Remove them
        course.modules = course.modules.filter(
          (mid) => !idsToCheck.includes(mid),
        );
        await course.save();
        console.log(`Updated course '${course.name}' to remove orphaned IDs.`);
      }
    }

    // Check Users
    const users = await User.find({});
    for (const user of users) {
      if (user.progress) {
        const initialCount = user.progress.length;
        user.progress = user.progress.filter(
          (p) => !idsToCheck.includes(p.moduleId),
        );
        if (user.progress.length < initialCount) {
          console.log(
            `User '${user.username}' had progress for orphaned IDs. Removed.`,
          );
          await user.save();
        }
      }
    }

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

checkOrphanedIds();
