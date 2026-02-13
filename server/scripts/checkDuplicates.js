const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");

const checkDuplicates = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const modules = await Module.find({});
    console.log(`Total modules found: ${modules.length}`);

    const counts = {};
    const duplicates = [];

    modules.forEach((mod) => {
      const key = `${mod.courseId}_${mod.name.toLowerCase()}`;
      if (counts[key]) {
        duplicates.push(mod);
      } else {
        counts[key] = true;
      }
    });

    if (duplicates.length === 0) {
      console.log("No duplicate modules (by courseId and name) found.");
    } else {
      console.log("Found duplicates:");
      duplicates.forEach((d) => {
        console.log(`ID: ${d._id}, Name: ${d.name}, Course: ${d.courseId}`);
      });
    }

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

checkDuplicates();
