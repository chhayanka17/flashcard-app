const express = require('express');
const { generateFlashcards } = require('../controllers/flashcardController');
const Flashcard = require('../../models/Flashcard');

const router = express.Router();

router.post('/generate', generateFlashcards);

router.get('/flashcards', async (req, res) => {
  try {
    const cards = await Flashcard.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch flashcards' });
  }
});

module.exports = router;
