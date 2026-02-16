const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");

const verifySubcategories = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const modules = await Module.find({
      _id: {
        $in: [
          "simpulan-logis",
          "kesesuaian-pernyataan",
          "sebab-akibat",
          "prediksi-data",
        ],
      },
    });

    let output = "\nVerifying Module Subcategories:\n";
    output += "--------------------------------\n";
    modules.forEach((mod) => {
      output += `ID: ${mod._id.padEnd(25)} | Subcategory: ${mod.subcategory || "N/A"}\n`;
    });
    output += "--------------------------------\n";

    fs.writeFileSync(path.join(__dirname, "verification_results.txt"), output);
    console.log("Verification results written to verification_results.txt");

    process.exit(0);
  } catch (error) {
    console.error("Verification failed:", error);
    process.exit(1);
  }
};

verifySubcategories();
