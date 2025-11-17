const axios = require('axios');

/**
 * Send a message to Telegram channel/group
 * @param {Object} data - The contact form data
 */
async function sendTelegramNotification(data) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  console.log('🔔 Telegram Notification Function Called');
  console.log('   Bot Token:', TELEGRAM_BOT_TOKEN ? '✅ Present' : '❌ Missing');
  console.log('   Chat ID:', TELEGRAM_CHAT_ID || '❌ Missing');

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('⚠️  Telegram credentials not configured. Skipping notification.');
    return { success: false, message: 'Telegram not configured' };
  }

  try {
    console.log('📨 Preparing message for Telegram...');
    // Format the message
    const message = `
🔔 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
${data.phone ? `📱 <b>Phone:</b> ${data.phone}\n` : ''}${data.company ? `🏢 <b>Company:</b> ${data.company}\n` : ''}${data.service ? `🛠️ <b>Service:</b> ${data.service}\n` : ''}
💬 <b>Message:</b>
${data.message}

📅 <b>Submitted:</b> ${new Date().toLocaleString('en-US', { 
  timeZone: 'Africa/Addis_Ababa',
  dateStyle: 'full',
  timeStyle: 'short'
})}
    `.trim();

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    console.log('📡 Sending to Telegram API...');
    console.log('   URL:', url.substring(0, 50) + '...');
    console.log('   Chat ID:', TELEGRAM_CHAT_ID);

    const response = await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    });

    if (response.data.ok) {
      console.log('✅ Telegram notification sent successfully');
      return { success: true, message: 'Notification sent' };
    } else {
      console.error('❌ Telegram API returned error:', response.data);
      return { success: false, message: 'Telegram API error' };
    }

  } catch (error) {
    console.error('❌ Error sending Telegram notification:', error.message);
    
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
    
    return { 
      success: false, 
      message: error.message,
      error: error.response?.data 
    };
  }
}

module.exports = { sendTelegramNotification };

