const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// Load env vars
dotenv.config({ path: path.join(__dirname, "../.env") });

// Import Models
const Module = require("../models/Module");
const Course = require("../models/Course");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Connected to MongoDB.");

    // Check Module
    const module = await Module.findOne({ _id: "logika-kuantor" });
    if (module) {
      console.log("✅ Module 'logika-kuantor' found in DB.");
      console.log("   _id:", module._id);
      console.log("   Name:", module.name);
      console.log("   Subcategory:", module.subcategory);
      console.log("   CourseId:", module.courseId);
    } else {
      console.error("❌ Module 'logika-kuantor' NOT found in DB.");
    }

    // Check Course
    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (course) {
      console.log("✅ Course 'Penalaran Umum' found in DB.");
      console.log("   _id:", course._id);

      // Verify module reference manually (since Course schema lacks modules array)
      if (
        module &&
        module.courseId &&
        module.courseId.toString() === course._id.toString()
      ) {
        console.log("✅ Module is used correct Course ID.");
      } else {
        console.error("❌ Module courseId does NOT match Course _id.");
        console.log("Module courseId:", module ? module.courseId : "N/A");
        console.log("Course _id:", course._id);
      }
    } else {
      console.error("❌ Course 'Penalaran Umum' NOT found in DB.");
    }

    await mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
