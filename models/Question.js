// Schema definition for questions

const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
  selectedCount: { type: Number, default: 0 },
});

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [optionSchema],
  shares: { type: Number, default: 0 },
  comments: { type: [String], default: [] },
  reshares: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  answered: { type: Boolean, default: false },
  selected: { type: String, default: null },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  reports: { type: Number, default: 0 },
  creator: { type: String, required: true },
  explanation: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
