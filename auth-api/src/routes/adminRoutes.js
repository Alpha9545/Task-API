// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/authorize");
const User = require("../models/User");
const Task = require("../models/Task");

// GET all users (exclude admin themselves)
router.get("/users", protect, authorize("admin"), async (req, res) => {
  try {
    const users = await User.find({ role: { $ne: "admin" } }).select(
      "name email role createdAt"
    );
    res.json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET tasks by user ID (admin only)
router.get("/tasks/:userId", protect, authorize("admin"), async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.params.userId });
    res.json({ tasks });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
// DELETE a user by ID (admin only)
router.delete("/users/:userId", protect, authorize("admin"), async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.deleteOne();
    // Optional: delete all tasks of this user
    await Task.deleteMany({ createdBy: req.params.userId });

    res.json({ message: "User and their tasks deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
// DELETE a task by ID (admin only)
router.delete("/tasks/:taskId", protect, authorize("admin"), async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });

    await task.deleteOne();
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
