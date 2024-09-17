// routes/taskRoute.js
const express = require("express");
const {
  createTask,
  getTaskById,
  getUserTasks,
  getAllTasks,
  deleteTask,
  updateTask
} = require("../controllers/taskController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Create Task
router.post("/", authMiddleware(), createTask);

// Get Task by ID
router.get("/:id", authMiddleware(), getTaskById);

// Get User's Tasks
router.get("/", authMiddleware(), getUserTasks);

// Get All Tasks (Admin Only)
router.get("/all", authMiddleware(['admin']), getAllTasks);

// Delete Task
router.delete("/:id", authMiddleware(), deleteTask);

// Edit Task
router.put("/:id", authMiddleware(), updateTask);

module.exports = router;
