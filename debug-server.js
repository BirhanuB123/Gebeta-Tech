// Debug script to check server issues
require('dotenv').config();

console.log('🔍 Debugging Server Configuration\n');

// Check environment variables
console.log('📋 Environment Variables:');
console.log('----------------------------');
console.log('MONGODB_URI:', process.env.MONGODB_URI ? '✅ Set' : '❌ Not set');
console.log('TELEGRAM_BOT_TOKEN:', process.env.TELEGRAM_BOT_TOKEN ? '✅ Set' : '❌ Not set');
console.log('TELEGRAM_CHAT_ID:', process.env.TELEGRAM_CHAT_ID ? '✅ Set' : '❌ Not set');
console.log('PORT:', process.env.PORT || '5000 (default)');
console.log('NODE_ENV:', process.env.NODE_ENV || 'development (default)');
console.log('');

// Check if files exist
const fs = require('fs');
const path = require('path');

console.log('📁 File Structure Check:');
console.log('----------------------------');

const filesToCheck = [
  'backend/models/Contact.js',
  'backend/routes/contact.js',
  'backend/utils/telegram.js',
  'api/index.js'
];

filesToCheck.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(file + ':', exists ? '✅ Exists' : '❌ Missing');
});

console.log('');

// Check dependencies
console.log('📦 Dependencies Check:');
console.log('----------------------------');

try {
  require('axios');
  console.log('axios: ✅ Installed');
} catch {
  console.log('axios: ❌ Not installed');
}

try {
  require('mongoose');
  console.log('mongoose: ✅ Installed');
} catch {
  console.log('mongoose: ❌ Not installed');
}

try {
  require('express');
  console.log('express: ✅ Installed');
} catch {
  console.log('express: ❌ Not installed');
}

console.log('');

// Test Telegram utility
console.log('🤖 Testing Telegram Utility:');
console.log('----------------------------');
try {
  const { sendTelegramNotification } = require('./backend/utils/telegram');
  console.log('Telegram utility: ✅ Loaded successfully');
} catch (error) {
  console.log('Telegram utility: ❌ Error loading');
  console.log('Error:', error.message);
}

console.log('\n');
console.log('💡 Next Steps:');
console.log('----------------------------');
console.log('1. Make sure your .env file has MONGODB_URI set');
console.log('2. Install dependencies if missing: npm install');
console.log('3. Start the server: node api/index.js');
console.log('4. Check server logs for specific errors');

