const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");

const listDuplicates = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const modules = await Module.find({});

    const seen = {};
    const toDelete = [];

    modules.forEach((mod) => {
      const key = `${mod.courseId}_${mod.name.toLowerCase()}`;
      if (seen[key]) {
        toDelete.push(mod);
      } else {
        seen[key] = mod._id;
      }
    });

    console.log("=== DUPLICATES TO DELETE ===");
    if (toDelete.length === 0) {
      console.log("None found.");
    } else {
      toDelete.forEach((d) => {
        console.log(`ID: ${d._id} | Name: ${d.name} | Course: ${d.courseId}`);
      });
    }

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

listDuplicates();
