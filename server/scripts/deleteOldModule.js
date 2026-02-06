const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });
const Module = require("../models/Module");
const Course = require("../models/Course");

const deleteOldModule = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Find 'Penalaran Umum' Course
    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (!course) {
      console.log("Course not found");
      process.exit(1);
    }

    const res = await Module.deleteOne({
      courseId: course._id,
      name: "Kesesuaian Pernyataan",
    });
    console.log("Deleted count:", res.deletedCount);

    // Also check if there are any other modules with this name?
    // Just in case.

    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
deleteOldModule();
