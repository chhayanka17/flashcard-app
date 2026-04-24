const mongoose = require('mongoose')

const ProgressSchema = new mongoose.Schema({
  userId: String,
  flashcardId: String,
  status: { type: String, enum: ['got_it', 'review', 'new'], default: 'new' },
  reviewCount: { type: Number, default: 0 },
  lastSeen: Date,
  nextReview: Date
})

module.exports = mongoose.model('Progress', ProgressSchema)