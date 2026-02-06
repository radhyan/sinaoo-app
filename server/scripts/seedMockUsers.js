const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../.env") });

const User = require("../models/User");
const Title = require("../models/Title");

const mockUsers = [
  { username: "alex_bright", name: "Alex Bright", points: 2500, avatarId: 1 },
  { username: "sarah_k", name: "Sarah Korp", points: 2100, avatarId: 2 },
  { username: "budi_gaming", name: "Budi Santoso", points: 1800, avatarId: 3 },
  { username: "lucy_sky", name: "Lucy Sky", points: 1500, avatarId: 4 },
  { username: "dave_pro", name: "Dave Pro", points: 1200, avatarId: 5 },
  { username: "nina_r", name: "Nina Rozak", points: 900, avatarId: 6 },
  { username: "kevin_lee", name: "Kevin Lee", points: 800, avatarId: 7 },
  { username: "maya_w", name: "Maya Wang", points: 600, avatarId: 8 },
  { username: "rizky_p", name: "Rizky Pratama", points: 450, avatarId: 9 },
  { username: "shanti_d", name: "Shanti Devi", points: 300, avatarId: 10 },
  { username: "tom_hardy", name: "Tom Hardy", points: 200, avatarId: 1 },
  { username: "grace_ho", name: "Grace Ho", points: 150, avatarId: 2 },
];

const seedMockUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB...");

    const defaultTitle = await Title.findOne().sort({ min: 1 });

    for (const mock of mockUsers) {
      const exists = await User.findOne({ username: mock.username });
      if (!exists) {
        await User.create({
          ...mock,
          email: `${mock.username}@example.com`,
          password: "password123", // dummy password
          title: defaultTitle?._id,
          avatar: "", // match schema string type
        });
        console.log(`Created user: ${mock.username}`);
      } else {
        console.log(`User ${mock.username} already exists.`);
      }
    }

    console.log("Mock users seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedMockUsers();
