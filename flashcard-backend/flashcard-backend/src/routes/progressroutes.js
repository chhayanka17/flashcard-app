const express = require('express')
const router = express.Router()
const { upsertProgress, getStats, getDueCards } = require('../services/db/queries')

router.patch('/:cardId', async (req, res) => {
  try {
    const { userId, status } = req.body
    const { cardId } = req.params
    const result = await upsertProgress(userId, cardId, status)
    res.json({ success: true, result })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/stats/:userId', async (req, res) => {
  try {
    const stats = await getStats(req.params.userId)
    res.json({ success: true, stats })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/due/:userId', async (req, res) => {
  try {
    const cards = await getDueCards(req.params.userId)
    res.json({ success: true, cards })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router