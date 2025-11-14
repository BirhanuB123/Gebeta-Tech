# Chatbot Image Setup

The chatbot now uses a local image file located at `/chatbot.png` in the public folder.

## Current Image

The chatbot is configured to use `/chatbot.png` which should be placed in the `client/public/` folder.

## How to Add Your Custom Chatbot Image

1. **Find or create your chatbot image**
   - Use a PNG image with a transparent background for best results
   - Recommended size: 512x512px or 1024x1024px
   - The image should be a cute robot or AI assistant

2. **Save the image**
   - Save your image as `chatbot.png` in the `client/public/` folder
   - Full path: `client/public/chatbot.png`

3. **Alternative: Use a different name**
   If you want to use a different filename, update these lines in `client/src/components/Chatbot/Chatbot.js`:
   - Line ~152: `src="/your-filename.png"`
   - Line ~173: `src="/your-filename.png"`
   - Line ~203: `src="/your-filename.png"`
   - Line ~231: `src="/your-filename.png"`

## Free Chatbot Images Sources

- **Flaticon**: https://www.flaticon.com/search?word=chatbot
- **Freepik**: https://www.freepik.com/search?format=search&query=chatbot
- **IconFinder**: https://www.iconfinder.com/search?q=chatbot
- **Icons8**: https://icons8.com/icons/set/chatbot

## Tips for Best Results

- Use PNG format with transparent background
- Square images work best (1:1 aspect ratio)
- File size should be under 100KB for faster loading
- The image will be automatically styled with filters in the code

