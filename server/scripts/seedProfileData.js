const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../.env") });

const User = require("../models/User");
const Module = require("../models/Module");

const seedProfileData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB...");

    const username = "radhy_demo";
    const user = await User.findOne({ username });

    if (!user) {
      console.log(
        `User ${username} not found. Please run ensureUser.js first.`,
      );
      process.exit(1);
    }

    console.log(`Seeding data for ${username}...`);

    // 1. Mock Points History
    const mockHistory = [
      {
        description: "Penalaran Induktif",
        points: 100,
        date: new Date(Date.now() - 86400000 * 5),
      },
      {
        description: "Penalaran Induktif",
        points: 100,
        date: new Date(Date.now() - 86400000 * 4),
      },
      {
        description: "Klaim Misi: Belajar 30 Menit",
        points: 50,
        date: new Date(Date.now() - 86400000 * 3),
      },
      {
        description: "Penalaran Induktif",
        points: 100,
        date: new Date(Date.now() - 86400000 * 3),
      },
      {
        description: "Penalaran Induktif",
        points: 100,
        date: new Date(Date.now() - 86400000 * 2),
      },
      {
        description: "Klaim Misi: Target Mingguan",
        points: 200,
        date: new Date(Date.now() - 86400000 * 1),
      },
      { description: "Penalaran Induktif", points: 100, date: new Date() },
    ];

    user.pointsHistory = mockHistory;

    // Ensure total points match history for consistency in demo
    user.points = mockHistory.reduce((sum, h) => sum + h.points, 0);

    await user.save();
    console.log("Profile data seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedProfileData();
