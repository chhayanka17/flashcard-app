const express = require('express');
const cors = require('cors');
const flashcardRoutes = require('./routes/flashcardRoutes');
//const progressRoutes = require('./routes/progressRoutes');   // ← ADD
const noteRoutes = require('./routes/noteRoutes');           // ← ADD
const sessionRoutes = require('./routes/sessionRoutes');     // ← ADD

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', flashcardRoutes);
app.use('/api/progress', progressRoutes);   // ← ADD
app.use('/api/notes', noteRoutes);          // ← ADD
app.use('/api/sessions', sessionRoutes);    // ← ADD

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;