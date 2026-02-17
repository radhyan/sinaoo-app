const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const diag = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const rawModule = await mongoose.connection
      .collection("modules")
      .findOne({ _id: "penalaran-aritmatika" });
    console.log("Raw Module from DB:", JSON.stringify(rawModule, null, 2));

    const mModule = await mongoose
      .model("Module")
      .findOne({ _id: "penalaran-aritmatika" });
    console.log("Mongoose Module from DB:", JSON.stringify(mModule, null, 2));

    process.exit(0);
  } catch (error) {
    console.error("DIAGNOSTIC ERROR:", error);
    process.exit(1);
  }
};

diag();
