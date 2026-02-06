const mongoose = require("mongoose");
const Course = require("./models/Course");
const Module = require("./models/Module");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/sinaoo-app")
  .then(async () => {
    console.log("Connected to MongoDB");
    const courses = await Course.find();
    console.log(`Found ${courses.length} courses:`);

    for (const c of courses) {
      const count = await Module.countDocuments({ courseId: c._id });
      console.log(`- ${c.name}: ${count} modules`);
    }

    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
