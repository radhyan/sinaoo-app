const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const User = require("../models/User");

const checkUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const count = await User.countDocuments({});
    console.log("Total Users in DB:", count);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

checkUsers();
