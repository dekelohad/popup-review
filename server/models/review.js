const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add title"],
    maxLength: 255,
  },
  content: {
    type: String,
    required: [true, "Please add content"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
