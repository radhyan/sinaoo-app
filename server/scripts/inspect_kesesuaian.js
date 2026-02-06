const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Module = require("../models/Module");
const Course = require("../models/Course");

const inspect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected.");

    // Find Kesesuaian Pernyataan
    // Try multiple case variations or regex
    const modules = await Module.find({
      name: { $regex: /kesesuaian pernyataan/i },
    });

    console.log(
      `Found ${modules.length} modules matching 'Kesesuaian Pernyataan'.`
    );

    modules.forEach((m) => {
      console.log("---------------------------------------------------");
      console.log(`ID: ${m._id}`);
      console.log(`Name: ${m.name}`);
      console.log(`Steps: ${m.steps ? m.steps.length : 0}`);
      if (m.steps && m.steps.length > 0) {
        m.steps.forEach((s, idx) => {
          console.log(`  Step ${idx + 1}: ${s.type} - ${s.title}`);
          if (s.title) console.log(`    Title: ${s.title}`);
          // Print a snippet of content if reading
          if (s.type === "reading" && s.content) {
            console.log(
              `    Content Snippet: ${s.content.substring(0, 100)}...`
            );
          }
        });
      }
    });

    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

inspect();
