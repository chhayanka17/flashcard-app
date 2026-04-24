const aiService = require('../services/aiService');
const { saveFlashcard } = require('../services/db/queries');

const generateFlashcards = async (req, res, next) => {
  try {
    const { notes } = req.body;

    if (!notes || typeof notes !== 'string') {
      return res.status(400).json({ error: 'Notes are required and must be a string.' });
    }

    const flashcards = await aiService.generateFlashcards(notes);

    // ← ADD THESE 3 LINES
    for (const card of flashcards) {
      await saveFlashcard(card);
    }

    res.json({ flashcards });
  } catch (error) {
    next(error);
  }
};

module.exports = { generateFlashcards };