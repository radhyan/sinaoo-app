const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");

const verifyModules = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const modules = await Module.find({});
    console.log("=== FINAL MODULE LIST ===");
    modules.forEach((m) => {
      console.log(
        `ID: ${m._id} | Name: ${m.name} | Steps: ${m.steps?.length || 0}`,
      );
    });
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

verifyModules();
