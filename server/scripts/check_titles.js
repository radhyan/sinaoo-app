const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Title = require("../models/Title");

const check = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const titles = await Title.find({});
    console.log("Titles seeded:", titles.length);
    titles.forEach((t) => console.log(`- ${t.title} (min: ${t.min})`));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

check();
