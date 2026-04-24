const express = require('express')
const router = express.Router()
const { saveNote } = require('../services/db/queries')

router.post('/', async (req, res) => {
  try {
    const { userId, flashcardId, content } = req.body
    const note = await saveNote(userId, flashcardId, content)
    res.json({ success: true, note })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router