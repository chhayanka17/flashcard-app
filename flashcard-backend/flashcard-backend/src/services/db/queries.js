const Flashcard = require('../models/Flashcard')
const Progress = require('../models/progress')
const Note = require('../models/note')
const StudySession = require('../models/Studysession')

const saveFlashcard = (data) => Flashcard.create(data)

const upsertProgress = (userId, flashcardId, status) =>
  Progress.findOneAndUpdate(
    { userId, flashcardId },
    { status, lastSeen: new Date(), $inc: { reviewCount: 1 } },
    { upsert: true, new: true }
  )

const getStats = (userId) => Progress.aggregate([
  { $match: { userId } },
  { $group: { _id: '$status', count: { $sum: 1 } } }
])

const getDueCards = (userId) => Progress.find({
  userId,
  status: 'review',
  nextReview: { $lte: new Date() }
})

const saveNote = (userId, flashcardId, content) =>
  Note.create({ userId, flashcardId, content })

const saveSession = (data) => StudySession.create(data)

module.exports = { 
  saveFlashcard, 
  upsertProgress, 
  getStats, 
  getDueCards,
  saveNote, 
  saveSession 
}