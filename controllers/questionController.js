// Contains the logic for handling requests

const Question = require('../models/Question');

// @desc    Get all questions
// @route   GET /api/questions
// @access  Public
const getQuestions = async (req, res) => {
  try {
    // Fetch all questions from the database
    const questions = await Question.find();
    // res.status(200).json(questions);
    res.status(200).json(({message:"successfully get question",data:questions}))
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error });
  }
};

// @desc    Get a single question by ID
// @route   GET /api/questions/:id
// @access  Public
const getQuestionById = async (req, res) => {
  try {
    // Find a question by its ID
    const questionById = await Question.findById(req.params.id);
    
    // If question not found, return 404 error
    if (!questionById) {
      return res.status(404).json({ message: 'Question Id not found' });
    }
    
    // res.status(200).json(question);
        res.status(200).json(({message:"successfully get question Id",data:questionById}))

  } catch (error) {
    res.status(500).json({ message: 'Error fetching question', error });
  }
};

// @desc    Add a new question
// @route   POST /api/questions
// @access  Public
const createQuestion = async (req, res) => {
  try {
    // Explicitly pick fields from req.body
    const question = new Question({
      question: req.body.question,
      options: req.body.options,   // must be an array of { text, isCorrect, selectedCount }
      shares: req.body.shares,
      comments: req.body.comments,
      reshares: req.body.reshares,
      likes: req.body.likes,
      answered: req.body.answered,
      selected: req.body.selected,
      difficulty: req.body.difficulty,
      reports: req.body.reports,
      creator: req.body.creator,
      explanation: req.body.explanation,
    });

    // Save the question to the database
    const savedQuestion = await question.save();

    res.status(201).json({
      message: "Successfully created question",
      data: savedQuestion,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating question",
      error,
    });
  }
};


// @desc    Update a question
// @route   PUT /api/questions/:id
// @access  Public
const updateQuestion = async (req, res) => {
  try {
    // Find the question by ID and update it with the request body
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document and run validation
    );
    
    // If question not found, return 404 error
    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Question Id not found' });
    }
    
    // res.status(200).json(updatedQuestion);
    res.status(200).json({message:"successfully question updated", data:updateQuestion})
  } catch (error) {
    res.status(400).json({ message: 'Error updating question', error });
  }
};

// @desc    Delete a question
// @route   DELETE /api/questions/:id
// @access  Public
const deleteQuestion = async (req, res) => {
  try {
    // Find the question by ID and delete it
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    
    // If question not found, return 404 error
    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    
    res.status(200).json({ message: 'Question deleted successfully',data:deleteQuestion });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting question', error });
  }
};

// Export all controller functions
module.exports = {
  getQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};