const express = require('express')
const router = express.Router()
const { saveSession } = require('../services/db/queries')

router.post('/', async (req, res) => {
  try {
    const { userId, gotIt, needReview, duration } = req.body
    const session = await saveSession({ userId, gotIt, needReview, duration })
    res.json({ success: true, session })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router