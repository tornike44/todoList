const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
    maxlength: [254, "Name cannot be more than 254 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
    maxlength: [254, "Description cannot be more than 254 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    default: () => Date.now() + 7 * 24 * 60 * 60 * 1000,
  },
  priorityLevel: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 3,
  },
  category: {
    type: String,
    enum: [
      "Work",
      "Personal",
      "Home",
      "Health",
      "Finance",
      "Entertainment",
      "Travel",
      "Kids",
      "Social",
      "Physical",
      "Other",
    ],
    required: true,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
