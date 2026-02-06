const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");

const list = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected.");
    const modules = await Module.find({}, "name _id steps");
    console.log(
      JSON.stringify(
        modules.map((m) => ({
          name: m.name,
          id: m._id,
          stepsCount: m.steps ? m.steps.length : 0,
        })),
        null,
        2,
      ),
    );
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
list();
