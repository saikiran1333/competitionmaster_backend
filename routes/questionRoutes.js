// Defines routes for Question API

const express = require('express');
const router = express.Router();
const { getQuestions, createQuestion } = require('../controllers/questionController');

// GET all questions
router.get('/', getQuestions);

// POST a new question
router.post('/', createQuestion);

module.exports = router;
