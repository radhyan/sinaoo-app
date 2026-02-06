const mongoose = require("mongoose");
const Title = require("./models/Title");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, ".env") });

const titlesList = [
  {
    title: "Maba Halu",
    min: 0,
    max: 500,
    image: "/titles/Title 1.png",
  },
  {
    title: "Sobat Ambis",
    min: 500,
    max: 1000,
    image: "/titles/Title 2.png",
  },
  {
    title: "Suhu",
    min: 1000,
    max: 2000,
    image: "/titles/Title 3.png",
  },
  {
    title: "Valedictorian",
    min: 2000,
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
