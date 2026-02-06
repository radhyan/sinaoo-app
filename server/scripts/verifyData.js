const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const Module = require("../models/Module");

const verify = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected.");

    const mod = await Module.findOne({ name: "Kesesuaian Pernyataan" });
    if (!mod) {
      console.log("Module NOT FOUND in DB.");
    } else {
      console.log("Module FOUND:", mod._id);
      console.log("Name:", mod.name);
      console.log("Steps count:", mod.steps?.length);
      console.log("First Step:", mod.steps?.[0]);
    }
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
verify();
