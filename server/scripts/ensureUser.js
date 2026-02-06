const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

const path = require("path");
dotenv.config({ path: path.join(__dirname, ".env") });

async function checkAndCreateUser() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB...");

    const usernames = ["radhy_demo", "Radhy"];

    for (const username of usernames) {
      let user = await User.findOne({ username });
      if (!user) {
        console.log(`User '${username}' not found. Creating it...`);
        user = new User({
          username,
          email: `${username}@sinaoo.com`,
          password: "password123",
          name: username === "Radhy" ? "Radhy" : "Radhy Demo",
        });
        await user.save();
        console.log(`User '${username}' created successfully!`);
      } else {
        console.log(`User '${username}' already exists.`);
      }

      // MOCK SEEDING FOR DEMO
      if (username === "radhy_demo") {
        console.log("Seeding mock progress for radhy_demo...");
        const Course = require("./models/Course");
        const Module = require("./models/Module");

        const course = await Course.findOne({ name: "Penalaran Umum" });
        if (course) {
          const modules = await Module.find({ courseId: course._id }).limit(2);
          if (modules.length >= 2) {
            const progress = [
              {
                courseId: course._id,
                moduleId: modules[0]._id, // First module
                completionPercentage: 0,
                isCompleted: false,
                lastAccessed: new Date(),
              },
              {
                courseId: course._id,
                moduleId: modules[1]._id, // Second module (if exists)
                completionPercentage: 0,
                isCompleted: false,
                lastAccessed: new Date(),
              },
            ];
            // Initialize or update progress
            user.progress = progress;
            await user.save();
            console.log("Mock progress seeded for radhy_demo");
          }
        }
      }
    }

    const allUsers = await User.find().select("username email");
    console.log("All users in DB:", allUsers);

    process.exit(0);
  } catch (err) {
    console.error("Error checking/creating user:", err);
    process.exit(1);
  }
}

checkAndCreateUser();
