require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');  // ← fix this line
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully!');
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log('❌ MongoDB connection error:', err));