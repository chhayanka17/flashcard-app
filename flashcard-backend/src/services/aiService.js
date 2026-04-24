const axios = require('axios');
const generateFlashcards = async (notes) => {
  try {
    const response = await axios.post('http://localhost:5000/api/generate', {
      notes: notes
    });
    const flashcards = response.data.map(card => ({
      question: card.question,
      answer: card.answer
    }));
    return flashcards;
  } catch (error) {
    console.error('AI module error:', error.message);
    throw new Error('Failed to generate flashcards from AI module');
  }
};
module.exports = { generateFlashcards };
