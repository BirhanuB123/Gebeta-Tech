// Test script for Telegram integration
// Run with: node test-telegram.js

require('dotenv').config();
const { sendTelegramNotification } = require('./backend/utils/telegram');

console.log('🧪 Testing Telegram Integration...\n');

// Check environment variables
console.log('Environment Variables:');
console.log('TELEGRAM_BOT_TOKEN:', process.env.TELEGRAM_BOT_TOKEN ? '✅ Set' : '❌ Not set');
console.log('TELEGRAM_CHAT_ID:', process.env.TELEGRAM_CHAT_ID ? '✅ Set' : '❌ Not set');
console.log('');

if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
  console.error('❌ Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in your .env file');
  console.log('\nAdd these lines to your .env file:');
  console.log('TELEGRAM_BOT_TOKEN=8395565514:AAHggSfT2Ta3_wfCWwktKBhprIQdYWOeMB8');
  console.log('TELEGRAM_CHAT_ID=-1003451623104');
  process.exit(1);
}

// Test data
const testData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '+251911234567',
  company: 'Test Company',
  service: 'Website Development',
  message: 'This is a test message from the Telegram integration test script.'
};

console.log('📤 Sending test notification...\n');

sendTelegramNotification(testData)
  .then(result => {
    if (result.success) {
      console.log('✅ SUCCESS! Test notification sent to Telegram');
      console.log('Check your Telegram channel to see the message.');
    } else {
      console.log('⚠️  Notification failed:', result.message);
    }
  })
  .catch(error => {
    console.error('❌ ERROR:', error.message);
  });

