const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Title = require("../models/Title");

const titlesList = [
  {
    title: "Maba Halu",
    min: 0,
    max: 999,
    image: "/titles/Title 1.png",
  },
  {
    title: "Sobat Ambis",
    min: 1000,
    max: 1999,
    image: "/titles/Title 2.png",
  },
  {
    title: "Suhu",
    min: 2000,
    max: 3999,
    image: "/titles/Title 3.png",
  },
  {
    title: "Valedictorian",
    min: 4000,
    max: Infinity,
    image: "/titles/Title 4.png",
  },
];

const seedTitles = async () => {
  try {
    console.log("Connecting to:", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for seeding titles...");

    // Drop collection to clear everything including indexes
    try {
      await mongoose.connection.db.collection("titles").drop();
      console.log("Collection 'titles' dropped successfully.");
    } catch (e) {
      console.log(
        "Collection 'titles' not found or could not be dropped, skipping...",
      );
    }

    // Insert new data
    console.log("Inserting titles...");
    for (const t of titlesList) {
      console.log(`- Inserting title: ${t.title}`);
      await new Title(t).save();
    }
    console.log("Titles seeded successfully!");
  } catch (error) {
    console.error("CRITICAL Error seeding titles:");
    console.error(JSON.stringify(error, null, 2));
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
};

seedTitles();
