const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Debug: Check if Telegram credentials are loaded
console.log('🔧 Environment Check:');
console.log('   TELEGRAM_BOT_TOKEN:', process.env.TELEGRAM_BOT_TOKEN ? '✅ Loaded' : '❌ Missing');
console.log('   TELEGRAM_CHAT_ID:', process.env.TELEGRAM_CHAT_ID ? '✅ Loaded' : '❌ Missing');
console.log('');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection with caching for serverless
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gebeta-tech';
  
  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    cachedDb = db;
    console.log('✅ MongoDB Connected Successfully');
    return db;
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err);
    throw err;
  }
}

// Import routes
const contactRoute = require('../backend/routes/contact');
const newsletterRoute = require('../backend/routes/newsletter');

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Gebeta Tech API is running',
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/contact', contactRoute);
app.use('/api/newsletter', newsletterRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// For Vercel serverless
module.exports = async (req, res) => {
  await connectToDatabase();
  return app(req, res);
};

// For local development
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  connectToDatabase().then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  });
}

