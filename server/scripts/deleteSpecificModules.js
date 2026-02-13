const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");

const deleteSpecificModules = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    const idsToDelete = [
      "6961f021813c23bcb894aa50",
      "6961f021813c23bcb894aa4f",
    ];

    for (const id of idsToDelete) {
      const result = await Module.deleteOne({ _id: id });
      if (result.deletedCount > 0) {
        console.log(`Deleted module with ID: ${id}`);
      } else {
        console.log(`Module with ID: ${id} not found in collection.`);
      }
    }

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

deleteSpecificModules();
