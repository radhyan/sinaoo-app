const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Mission = require("./models/Mission");

dotenv.config();

const missions = [
  {
    title: "Pop Quiz Harian",
    description: "Jawab 5 pertanyaan cepat untuk mengasah ingatanmu.",
    pointsReward: 50,
    type: "DAILY",
    condition: "DAILY_QUIZ",
    targetValue: 1,
    category: "QUIZ",
    isActive: true,
  },
  {
    title: "Target Belajar",
    description: "Selesaikan 2 modul hari ini.",
    pointsReward: 200,
    type: "DAILY",
    condition: "COMPLETE_MODULE",
    targetValue: 2,
    category: "TASK",
    isActive: true,
  },
];

async function seedMissions() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for seeding...");

    // Clear existing missions to avoid duplicates in this demo setting
    await Mission.deleteMany({ type: "DAILY" });
    console.log("Cleared existing daily missions.");

    await Mission.insertMany(missions);
    console.log("Seeded daily missions successfully!");

    process.exit(0);
  } catch (err) {
    console.error("Error seeding missions:", err);
    process.exit(1);
  }
}

seedMissions();
