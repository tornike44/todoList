const asyncHandler = require("express-async-handler");

// get all users
const getAllUsers = asyncHandler(async (req, res) => {
  res.json({ message: "get all users" });
});

// get user by id
const getUserById = asyncHandler(async (req, res) => {
  res.json({ message: "get user by id" });
});

// create a user
const createUser = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Content can not be empty!");
  }
  res.json({ message: "create a user" });
});

// update a user
const updateUser = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Content can not be empty!");
  }
  res.json({ message: "update a user" });
});

// delete a user
const deleteUser = asyncHandler(async (req, res) => {
  res.json({ message: "delete a user" });
});

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
