const mongoose = require("mongoose");
const Achievement = require("../models/Achievement");
const path = require("path");
require("dotenv").config();

const achievementsList = [
  {
    key: "FIRST_MODULE",
    name: "The First Step",
    description: "Menyelesaikan modul pertamamu",
    pointsValue: 100,
    target: 1,
    imageUrl: "/achievements/Achievement 1.png",
  },
  {
    key: "QUIZ_PERFECT",
    name: "Quiz Hotshot",
    description: "Mendapatkan nilai 100% dalam 1 quiz",
    pointsValue: 100,
    target: 1,
    imageUrl: "/achievements/Achievement 2.png",
  },
  {
    key: "STREAK_STARTER",
    name: "Streak Starter",
    description: "Log in dan belajar selama 3 hari berturut-turut",
    pointsValue: 300,
    target: 3,
    imageUrl: "/achievements/Achievement 3.png",
  },
  {
    key: "DAILY_GRINDER",
    name: "Daily Grinder",
    description: "Menyelesaikan 2 misi harian",
    pointsValue: 200,
    target: 2,
    imageUrl: "/achievements/Achievement 4.png",
  },
  {
    key: "BOOKWORM",
    name: "Bookworm",
    description: "Menyelesaikan 2 course",
    pointsValue: 400,
    target: 2,
    imageUrl: "/achievements/Achievement 5.png",
  },
  {
    key: "TOP_CLASS",
    name: "Top of The Class",
    description: "Raih peringkat 5 besar dalam leaderboard",
    pointsValue: 500,
    target: 1,
    imageUrl: "/achievements/Achievement 6.png",
  },
];

const seedAchievements = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for seeding achievements...");

    // Clear existing achievements
    await Achievement.deleteMany({});
    console.log("Cleared existing achievements.");

    // Insert new data
    await Achievement.insertMany(achievementsList);
    console.log("Achievements seeded successfully!");

    mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  } catch (error) {
    console.error("Error seeding achievements:", error);
    process.exit(1);
  }
};

seedAchievements();
