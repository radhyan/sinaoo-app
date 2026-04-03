const http = require("http");

async function test() {
  const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

  // 1. Get a random user with a completed module
  const mongoose = require("mongoose");
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/sinaoo" || process.env.VITE_API_URL,
  ); // Assumes local mongodb

  const User = mongoose.model(
    "User",
    new mongoose.Schema({}, { strict: false }),
  );

  const user = await User.findOne({ "progress.isCompleted": true });
  if (!user) {
    console.log("No user with completed progress found");
    process.exit(1);
  }

  const completedProgress = user.get("progress").find((p) => p.isCompleted);
  console.log(
    `Found completed module ${completedProgress.moduleId} for user ${user.get("username")}`,
  );

  // 2. Try the reset payload
  const payload = {
    moduleId: completedProgress.moduleId.toString(),
    courseId: completedProgress.courseId
      ? completedProgress.courseId.toString()
      : undefined,
    completionPercentage: 0,
    isCompleted: false,
    reset: true,
    quizAnswers: {},
    flaggedQuestions: {},
  };
  console.log("Sending payload:", payload);

  const res = await fetch(
    `http://localhost:3000/api/users/${user.get("username")}/progress`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    },
  );

  const data = await res.json();
  if (!res.ok) {
    console.error("Failed:", data);
  } else {
    // Find that progress in the returned user object
    const updatedProg = data.progress.find(
      (p) => p.moduleId.toString() === completedProgress.moduleId.toString(),
    );
    console.log("Updated progress:", updatedProg);
  }
  process.exit(0);
}

test().catch(console.error);
