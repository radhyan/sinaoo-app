const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedMinimalSteps = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const course = await Course.findOne({ name: "Penalaran Umum" });
    const targetId = "penalaran-aritmatika";

    process.stdout.write("Clearing existing...\n");
    await Module.deleteOne({ _id: targetId });

    process.stdout.write("Creating minimal steps module...\n");
    const moduleDoc = await Module.create({
      _id: targetId,
      courseId: course._id,
      name: "Pola dan Operasi Bilangan",
      description: "Minimal Steps Test",
      subcategory: "Penalaran Aritmatika",
      steps: [
        {
          title: "Test Step",
          type: "reading",
          content: "Hello World",
        },
      ],
    });

    process.stdout.write("Seeded successfully: " + moduleDoc.name + "\n");
    process.exit(0);
  } catch (error) {
    console.error("MINIMAL STEPS ERROR:", error);
    process.exit(1);
  }
};

seedMinimalSteps();
