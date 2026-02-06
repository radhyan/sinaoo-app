const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Module = require("../models/Module");

const verifyModule = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // partial match name
    const modules = await Module.find({ name: { $regex: /sebab akibat/i } });

    console.log(`Found ${modules.length} modules matching 'Sebab Akibat'`);

    modules.forEach((m) => {
      console.log("---------------------------------------------------");
      console.log(`ID: ${m._id}`);
      console.log(`Name: ${m.name}`);
      console.log(`Steps count: ${m.steps.length}`);
      const quizStep = m.steps.find((s) => s.type === "quiz");
      if (quizStep) {
        console.log(`Quiz questions count: ${quizStep.questions.length}`);
        if (quizStep.questions.length > 0) {
          const q1 = quizStep.questions[0];
          console.log("Q1 ID:", q1.id);
          console.log("Q1 has correctAnswer:", q1.correctAnswer !== undefined);
          console.log("Q1 has explanation:", q1.explanation !== undefined);
          console.log("Q1 Explanation:", q1.explanation);
          const q8 = quizStep.questions.find((q) => q.type === "matrix");
          if (q8) {
            console.log("Matrix Question found (ID " + q8.id + ")");
            console.log(
              "Matrix has correctAnswers:",
              q8.correctAnswers !== undefined,
            );
            console.log(
              "Matrix correctAnswers:",
              JSON.stringify(q8.correctAnswers),
            );
          }
        }
      } else {
        console.log("No Quiz Step found");
      }
    });

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

verifyModule();
