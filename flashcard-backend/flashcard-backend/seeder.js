const connectDB = require('./config/db');          // ✅ db.js stays in config
const Flashcard = require('./models/Flashcard');   // ✅ models is now at root
require('dotenv').config();

const data = require('./data/flashcards.json');    // ✅ data is now at root

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