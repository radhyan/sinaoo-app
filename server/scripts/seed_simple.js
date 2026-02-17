const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");
const Course = require("../models/Course");

const seedSimple = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const course = await Course.findOne({ name: "Penalaran Umum" });
    const targetId = "penalaran-aritmatika";

    console.log("Clearing existing...");
    await Module.deleteOne({ _id: targetId });

    console.log("Creating simple module...");
    const moduleDoc = await Module.create({
      _id: targetId,
      courseId: course._id,
      name: "Pola dan Operasi Bilangan",
      description: "Simple Test",
      subcategory: "Penalaran Aritmatika",
      steps: [],
    });

    console.log("Seeded successfully:", moduleDoc.name);
    process.exit(0);
  } catch (error) {
    console.error("SIMPLE SEED ERROR:", error);
    process.exit(1);
  }
};

seedSimple();
