const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const check = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const course = await Course.findOne({ name: "Penalaran Umum" });
    if (course) {
      const modules = await Module.find({ courseId: course._id });
      console.log(modules.map((m) => ({ id: m._id, name: m.name })));
    } else {
      console.log("Course not found");
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

check();
