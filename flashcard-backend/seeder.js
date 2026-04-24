require('dotenv').config();
const connectDB = require('./config/db');
const Flashcard = require('./models/Flashcard');
const data = require('./data/flashcards.json');

const uploadData = async () => {
  await connectDB();
  try {
    await Flashcard.deleteMany();
    await Flashcard.insertMany(data);
    console.log('✅ Flashcard Data Uploaded Successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Upload Failed:', err.message);
    process.exit(1);
  }
};

uploadData();