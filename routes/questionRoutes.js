// Defines routes for Question API

const express = require('express');
const router = express.Router();
const {
  getQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion
} = require('../controllers/questionController');

// GET all questions
router.get('/', getQuestions);

// GET a single question by ID
router.get('/:id', getQuestionById);

// POST a new question
router.post('/', createQuestion);

// PUT update a question
router.put('/:id', updateQuestion);

// DELETE a question
router.delete('/:id', deleteQuestion);

module.exports = router;