// Detailed Telegram Test
require('dotenv').config();
const axios = require('axios');

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

console.log('🔍 Detailed Telegram Diagnostics\n');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

async function runTests() {
  console.log('📋 Configuration:');
  console.log(`   Bot Token: ${TELEGRAM_BOT_TOKEN ? TELEGRAM_BOT_TOKEN.substring(0, 20) + '...' : '❌ Not set'}`);
  console.log(`   Chat ID: ${TELEGRAM_CHAT_ID || '❌ Not set'}`);
  console.log('');

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('❌ Missing credentials in .env file!');
    return;
  }

  try {
    // Test 1: Get bot info
    console.log('Test 1: Checking Bot Information...');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    const botInfo = await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`);
    console.log('✅ Bot Status: Active');
    console.log(`   Bot Username: @${botInfo.data.result.username}`);
    console.log(`   Bot Name: ${botInfo.data.result.first_name}`);
    console.log(`   Bot ID: ${botInfo.data.result.id}`);
    console.log('');

    // Test 2: Get chat info
    console.log('Test 2: Checking Chat/Channel Information...');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    try {
      const chatInfo = await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getChat?chat_id=${TELEGRAM_CHAT_ID}`);
      console.log('✅ Chat Found!');
      console.log(`   Chat Title: ${chatInfo.data.result.title}`);
      console.log(`   Chat Type: ${chatInfo.data.result.type}`);
      console.log(`   Chat ID: ${chatInfo.data.result.id}`);
      console.log('');
    } catch (chatError) {
      console.error('❌ Cannot access chat!');
      console.error(`   Error: ${chatError.response?.data?.description || chatError.message}`);
      console.log('');
      console.log('💡 This means:');
      console.log('   1. Bot is not a member of the channel/group');
      console.log('   2. Chat ID might be incorrect');
      console.log('   3. Bot was removed from the channel');
      console.log('');
      console.log('🔧 How to fix:');
      console.log('   1. Go to your Telegram channel');
      console.log('   2. Add the bot as administrator');
      console.log('   3. Give it "Post Messages" permission');
      console.log('');
      return;
    }

    // Test 3: Send a test message
    console.log('Test 3: Sending Test Message...');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    const testMessage = `
🧪 <b>Test Message from Gebeta Tech</b>

This is a test notification to verify the Telegram integration is working correctly.

✅ If you see this message, the integration is working!

📅 <b>Time:</b> ${new Date().toLocaleString('en-US', { 
  timeZone: 'Africa/Addis_Ababa',
  dateStyle: 'full',
  timeStyle: 'long'
})}
    `.trim();

    const response = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: testMessage,
        parse_mode: 'HTML'
      }
    );

    if (response.data.ok) {
      console.log('✅ SUCCESS! Message sent to Telegram!');
      console.log(`   Message ID: ${response.data.result.message_id}`);
      console.log('');
      console.log('🎉 CHECK YOUR TELEGRAM CHANNEL NOW!');
      console.log('');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('✅ ALL TESTS PASSED!');
      console.log('   Your Telegram integration is working correctly.');
      console.log('   Contact form submissions will now be sent to Telegram.');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    }

  } catch (error) {
    console.error('\n❌ ERROR OCCURRED:');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('Error:', error.message);
    
    if (error.response) {
      console.error('Status Code:', error.response.status);
      console.error('Error Details:', JSON.stringify(error.response.data, null, 2));
      console.log('');
      
      const errorCode = error.response.data.error_code;
      const description = error.response.data.description;
      
      console.log('💡 SOLUTION:');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      
      if (errorCode === 400 && description.includes('chat not found')) {
        console.log('   Problem: Bot cannot find the chat/channel');
        console.log('');
        console.log('   Steps to fix:');
        console.log('   1. Open your Telegram channel');
        console.log('   2. Click on channel name → "Administrators"');
        console.log('   3. Click "Add Administrator"');
        console.log(`   4. Search for: @${botInfo?.data?.result?.username || 'your_bot'}`);
        console.log('   5. Select the bot and enable "Post Messages"');
        console.log('   6. Click "Save"');
        console.log('   7. Run this test again');
      } else if (errorCode === 403) {
        console.log('   Problem: Bot lacks permission to send messages');
        console.log('');
        console.log('   Steps to fix:');
        console.log('   1. Go to channel → Administrators');
        console.log('   2. Find your bot in the list');
        console.log('   3. Click on it and enable "Post Messages"');
        console.log('   4. Save and run test again');
      } else if (errorCode === 401) {
        console.log('   Problem: Invalid bot token');
        console.log('');
        console.log('   Check your .env file and verify the token is correct');
      } else {
        console.log(`   Error Code: ${errorCode}`);
        console.log(`   Description: ${description}`);
      }
    }
  }
}

runTests();

