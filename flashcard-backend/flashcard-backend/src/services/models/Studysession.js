const mongoose = require('mongoose')

const StudySessionSchema = new mongoose.Schema({
  userId: String,
  gotIt: Number,
  needReview: Number,
  duration: Number,
  completedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('StudySession', StudySessionSchema)