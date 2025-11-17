// Simple Telegram Test
const axios = require('axios');

// Your credentials
const TELEGRAM_BOT_TOKEN = '8395565514:AAHggSfT2Ta3_wfCWwktKBhprIQdYWOeMB8';
const TELEGRAM_CHAT_ID = '-1003451623104';

console.log('🧪 Testing Telegram Bot Connection...\n');

async function testTelegram() {
  try {
    // Test 1: Check bot info
    console.log('1️⃣ Checking bot info...');
    const botInfo = await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`);
    console.log('✅ Bot is valid:', botInfo.data.result.username);
    console.log('');

    // Test 2: Send test message
    console.log('2️⃣ Sending test message to channel...');
    const message = `🧪 <b>Test Message</b>\n\nThis is a test from Gebeta Tech website.\nTime: ${new Date().toLocaleString()}`;
    
    const response = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      }
    );

    if (response.data.ok) {
      console.log('✅ Message sent successfully!');
      console.log('Check your Telegram channel now!');
    } else {
      console.log('❌ Failed to send message');
      console.log('Response:', response.data);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Error Details:', JSON.stringify(error.response.data, null, 2));
      
      // Common error explanations
      if (error.response.data.error_code === 400) {
        console.log('\n💡 This usually means:');
        console.log('   - Bot is not added to the channel');
        console.log('   - Chat ID is incorrect');
        console.log('   - Bot doesn\'t have permission to post');
      }
      
      if (error.response.data.error_code === 401) {
        console.log('\n💡 Invalid bot token');
      }
    }
  }
}

testTelegram();

