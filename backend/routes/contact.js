const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Try to load Telegram utility, but don't fail if it's not available
let sendTelegramNotification;
try {
  const telegram = require('../utils/telegram');
  sendTelegramNotification = telegram.sendTelegramNotification;
} catch (error) {
  console.warn('⚠️  Telegram utility not available:', error.message);
  sendTelegramNotification = null;
}

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
    }

    // Create new contact submission
    const contact = await Contact.create({
      name,
      email,
      phone,
      company,
      service,
      message
    });

    // Send Telegram notification (async, don't wait for it)
    if (sendTelegramNotification) {
      console.log('📤 Attempting to send Telegram notification...');
      sendTelegramNotification({
        name,
        email,
        phone,
        company,
        service,
        message
      }).then(result => {
        if (result.success) {
          console.log('✅ Telegram notification sent successfully!');
        } else {
          console.log('⚠️  Telegram notification failed:', result.message);
        }
      }).catch(err => {
        console.error('❌ Failed to send Telegram notification:', err.message);
        // Don't fail the request if Telegram fails
      });
    } else {
      console.log('⚠️  Telegram notification skipped (utility not loaded)');
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email
      }
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again later.'
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contact submissions (for admin)
// @access  Private (should add authentication)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});

module.exports = router;

