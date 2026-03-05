const express = require("express");
const Module = require("../models/Module");
const User = require("../models/User");

const router = express.Router();

// 1. Get Single Module by ID
router.get("/:moduleId", async (req, res) => {
  try {
    const { moduleId } = req.params;
    const module = await Module.findById(moduleId);
    if (!module) {
      return res.status(404).json({ error: "Module not found" });
    }

    let rank = null;
    const { username } = req.query;
    if (username) {
      const user = await User.findOne({ username });
      if (user) {
        if ((user.points || 0) > 0) {
          rank =
            (await User.countDocuments({ points: { $gt: user.points } })) + 1;
        }
      }
    }

    res.json({ ...module.toObject(), rank });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
