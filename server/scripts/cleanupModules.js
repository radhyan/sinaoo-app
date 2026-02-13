const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");

const cleanupModules = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    // Define hex ID pattern (24 chars)
    const hexPattern = /^[0-9a-fA-F]{24}$/;

    const allModules = await Module.find({});
    console.log(`Total modules found: ${allModules.length}`);

    let deletedCount = 0;

    for (const mod of allModules) {
      const isHexId = hexPattern.test(mod._id);
      const hasNoContent = !mod.steps || mod.steps.length === 0;

      // Delete if it has a hex ID (transitioning to semantic) OR if it has no content
      if (isHexId || hasNoContent) {
        await Module.deleteOne({ _id: mod._id });
        console.log(
          `Deleted module: ${mod.name} (ID: ${mod._id}, Reason: ${isHexId ? "Hex ID" : "No Content"})`,
        );
        deletedCount++;
      }
    }

    console.log(`Cleanup finished. Deleted ${deletedCount} modules.`);
    process.exit(0);
  } catch (err) {
    console.error("Cleanup error:", err);
    process.exit(1);
  }
};

cleanupModules();
