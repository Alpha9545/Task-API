const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/authorize");
const { validate } = require("../middleware/validate");

router.use(protect);

// Get all tasks for logged-in user OR by userId if admin
router.get("/", getTasks); // Normal user fetches own tasks
router.get("/user/:userId", authorize("admin"), getTasks); // Admin fetches tasks of specific user

// Get single task
router.get("/:id", getTask);

// Create task
router.post(
  "/",
  [body("title").notEmpty().withMessage("Task title is required")],
  validate,
  createTask
);

// Update task
router.put(
  "/:id",
  [
    body("title").optional().notEmpty().withMessage("Title cannot be empty"),
    body("description").optional().isString().withMessage("Description must be text"),
  ],
  validate,
  updateTask
);

// Delete task
router.delete("/:id", deleteTask);

module.exports = router;
