const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');

// @route   POST /api/newsletter
// @desc    Subscribe to newsletter
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an email address'
      });
    }

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });
    
    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return res.status(400).json({
          success: false,
          message: 'This email is already subscribed to our newsletter'
        });
      } else {
        // Reactivate subscription
        existingSubscriber.isActive = true;
        existingSubscriber.subscribedAt = Date.now();
        await existingSubscriber.save();
        
        return res.json({
          success: true,
          message: 'Welcome back! Your subscription has been reactivated.'
        });
      }
    }

    // Create new subscription
    await Newsletter.create({ email });

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to our newsletter!'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to subscribe. Please try again later.'
    });
  }
});

module.exports = router;

