const mongoose = require("mongoose");
require("dotenv").config({ path: "../../.env" }); // Adjusted path if running from server/scripts/tmp
const Course = require("../models/Course");

const checkCourse = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (course) {
      console.log("FOUND: " + course.name);
    } else {
      console.log("NOT FOUND");
    }
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
checkCourse();
