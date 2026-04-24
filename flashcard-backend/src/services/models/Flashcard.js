const mongoose = require('mongoose')

const FlashcardSchema = new mongoose.Schema({
  question: String,
  answer: String,
  tags: [String],
  sourceText: String,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Flashcard', FlashcardSchema)