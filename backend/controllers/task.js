const asyncHandler = require("express-async-handler");

const Task = require("../models/task");

const getAllTasks = asyncHandler(async (req, res) => {
  res.json({ Task });
});

const getTaskById = asyncHandler(async (req, res) => {
  res.json({ message: "get task by id" });
});

const createTask = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Content can not be empty!");
  }

  const task = await Task.create({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
  });

  res.json({ task });
});

const updateTask = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Content can not be empty!");
  }
  res.json({ message: "update a task" });
});

const deleteTask = asyncHandler(async (req, res) => {
  res.json({ message: "delete a task" });
});

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
