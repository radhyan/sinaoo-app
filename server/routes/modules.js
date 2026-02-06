const express = require("express");
const Module = require("../models/Module");

const router = express.Router();

// 1. Get Single Module by ID
router.get("/:moduleId", async (req, res) => {
  try {
    const { moduleId } = req.params;
    const module = await Module.findById(moduleId);
    if (!module) {
      return res.status(404).json({ error: "Module not found" });
    }
    res.json(module);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
