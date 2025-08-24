// Contains the logic for handling requests

const Question = require('../models/Question');

// @desc    Get all questions
// @route   GET /api/questions
// @access  Public
const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error });
  }
};

// @desc    Add a new question
// @route   POST /api/questions
// @access  Public
const createQuestion = async (req, res) => {
  try {
    const question = new Question(req.body); // Data comes from client
    const savedQuestion = await question.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(400).json({ message: 'Error creating question', error });
  }
};

module.exports = {
  getQuestions,
  createQuestion,
};
