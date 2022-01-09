const express = require('express');
const router = express.Router();

// Item Model
const Quiz = require('../../models/Quiz');

// @route   GET api/quiz/getAllQuizzes
// @desc    Get all quizzes
router.get('/getAllQuizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find({});
    return res.json(quizzes);
  } catch (error) {
    return res.status(500).json({ msg: 'Server Error' });
  }
});

// @route   POST api/quiz/createNewQuiz
// @desc    Create a Quiz
router.post('/createNewQuiz', (req, res) => {
  return new Quiz({}).save().then(quiz => res.json(quiz));
});

// @route   POST api/quiz/createQuestion
// @desc    Create a question for the Quiz
router.post('/:quizId/createQuestion/', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) return res.status(404).json({ msg: 'Quiz not found' });

    const newQuestion = {
      text: req.body.text,
    };

    quiz.questions.push(newQuestion);
    await quiz.save();
    return res.json(quiz);
  } catch (error) {
    return res.status(500).json({ msg: 'Server Error' });
  }
});

// @route   POST api/quiz/createAnswer
// @desc    Create an answer for the Quiz
router.post('/:quizId/:questionId', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) return res.status(404).json({ msg: 'Quiz not found' });

    const question = quiz.questions.id(req.params.questionId);
    if (!question) return res.status(404).json({ msg: 'Question not found' });

    const answer = {
      text: req.body.text,
    };
    question.answers.push(answer);
    await quiz.save();
    return res.json(quiz);
  } catch (error) {
    return res.status(500).json({ msg: 'Server Error' });
  }
});

// @route   DELETE api/quiz/:id
// @desc    Delete a Quiz
router.delete('/:quizId', (req, res) => {
  Quiz.findById(req.params.quizId)
    .then(quiz => quiz.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
