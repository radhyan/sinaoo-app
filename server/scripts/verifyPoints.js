const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const Module = require("../models/Module");

const verifyPoints = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const modules = await Module.find({
      _id: { $in: ["simpulan-logis", "prediksi-data"] },
    });

    console.log("=== POINT VERIFICATION ===");
    for (const mod of modules) {
      let calcTotal = 0;
      const quizStep = mod.steps.find((s) => s.type === "quiz");
      if (quizStep && quizStep.questions) {
        quizStep.questions.forEach((q) => (calcTotal += q.points || 0));
      }
      console.log(`Module: ${mod.name} (${mod._id})`);
      console.log(`  points_available in DB: ${mod.points_available}`);
      console.log(`  calculated sum of q.points: ${calcTotal}`);
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

verifyPoints();
