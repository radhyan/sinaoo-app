const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Module = require("../models/Module");
const Course = require("../models/Course");

const clearModule = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const targetNameRegex = /^kesesuaian pernyataan$/i;

    // Find the module
    const moduleDoc = await Module.findOne({
      name: { $regex: targetNameRegex },
    });

    if (!moduleDoc) {
      console.error("Module 'Kesesuaian Pernyataan' not found.");
      process.exit(1);
    }

    console.log(`Found module: ${moduleDoc.name} (${moduleDoc._id})`);
    console.log(`Current step count: ${moduleDoc.steps.length}`);

    // Clear content
    moduleDoc.steps = [];
    moduleDoc.description = "Modul mengenai Kesesuaian Pernyataan"; // Reset description to generic

    await moduleDoc.save();

    console.log("Module content cleared successfully.");
    console.log(`New step count: ${moduleDoc.steps.length}`);

    process.exit(0);
  } catch (error) {
    console.error("Error clearing module:", error);
    process.exit(1);
  }
};

clearModule();
