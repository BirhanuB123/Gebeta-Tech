# 🚀 Quick Start Guide - Gebeta Tech Website

Welcome! Follow these simple steps to run your new professional website.

## ⚡ Quick Start (3 Steps)

### Step 1: Make sure MongoDB is running

**Option A: Local MongoDB**
```bash
# Windows
net start MongoDB

# Mac/Linux
sudo systemctl start mongod
```

**Option B: Use MongoDB Atlas (Cloud)**
- Sign up at https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get your connection string
- Update `MONGODB_URI` in `.env` file

### Step 2: Start the Development Server

Open terminal in the project folder and run:

```bash
npm run dev
```

This will start both the backend (port 5000) and frontend (port 3000).

### Step 3: Open Your Browser

Visit: **http://localhost:3000**

🎉 That's it! Your website is now running!

---

## 📝 What You Get

✅ **Modern Homepage** with animated hero section  
✅ **Services Section** showcasing your tech offerings  
✅ **About Us** with company values and achievements  
✅ **Portfolio** with project showcase and filtering  
✅ **Contact Form** with backend integration  
✅ **Newsletter Subscription** system  
✅ **Fully Responsive** design for all devices  
✅ **Smooth Animations** throughout the site  

---

## 🎨 Customize Your Website

### 1. Update Company Information

**Contact Details** - Edit `client/src/components/Contact/Contact.js` and `client/src/components/Footer/Footer.js`

**About Section** - Edit `client/src/components/About/About.js`

### 2. Modify Services

Edit `client/src/components/Services/Services.js` to add/remove/modify services.

### 3. Update Portfolio Projects

Edit `client/src/components/Portfolio/Portfolio.js` to showcase your real projects.

### 4. Change Colors

Edit `client/src/App.css` and modify the CSS variables:
```css
:root {
  --primary-color: #2563eb;  /* Change to your brand color */
  --secondary-color: #1e40af;
  /* ... more colors */
}
```

---

## 🔧 Troubleshooting

### Port Already in Use?

If port 3000 or 5000 is already in use:

1. Stop the conflicting process
2. Or change the port in `.env` file:
   ```
   PORT=5001
   ```

### MongoDB Connection Error?

- Make sure MongoDB is running
- Check the `MONGODB_URI` in `.env` file
- Or use MongoDB Atlas (cloud) instead

### Dependencies Issues?

```bash
# Delete node_modules and reinstall
rm -rf node_modules client/node_modules
npm run install-all
```

---

## 📦 Production Deployment

### Build for Production

```bash
cd client
npm run build
cd ..
```

### Deploy Options

1. **Heroku** (Easy)
   - Create Heroku app
   - Add MongoDB Atlas
   - Push code

2. **Vercel** (Frontend) + **Heroku/Railway** (Backend)
   - Deploy frontend to Vercel
   - Deploy backend separately
   - Update API URLs

3. **VPS** (Full Control)
   - Ubuntu/CentOS server
   - Install Node.js & MongoDB
   - Use PM2 for process management
   - Setup Nginx as reverse proxy

---

## 📞 Need Help?

- Check the main `README.md` for detailed documentation
- Review the code comments in each component
- MongoDB docs: https://docs.mongodb.com/
- React docs: https://react.dev/

---

## 🎯 Next Steps

1. ✅ Run the website locally
2. ✅ Customize content and colors
3. ✅ Add your real projects to portfolio
4. ✅ Update contact information
5. ✅ Test contact form and newsletter
6. ✅ Deploy to production
7. ✅ Connect your domain name
8. ✅ Launch! 🚀

---

**Built with ❤️ for Gebeta Tech**

Your professional technology company website is ready to impress clients and grow your business!

