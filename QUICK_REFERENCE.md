# ⚡ Quick Reference Guide - Gebeta Tech Website

## 🎯 Most Important Commands

### Start Development Server
```bash
npm run dev
```
This starts both backend (port 5000) and frontend (port 3000)

### Start Backend Only
```bash
npm run server
```

### Start Frontend Only
```bash
npm run client
```

### Build for Production
```bash
cd client
npm run build
```

---

## 📁 File Locations - Quick Access

### Need to Update Contact Info?
- `client/src/components/Contact/Contact.js` (Contact section)
- `client/src/components/Footer/Footer.js` (Footer)

### Need to Change Services?
- `client/src/components/Services/Services.js`

### Need to Update About Section?
- `client/src/components/About/About.js`

### Need to Add/Edit Portfolio Projects?
- `client/src/components/Portfolio/Portfolio.js`

### Need to Change Colors?
- `client/src/App.css` (Look for `:root` section)

### Need to Update Company Name/Logo?
- `client/src/components/Navbar/Navbar.js`
- `client/src/components/Footer/Footer.js`

---

## 🎨 Quick Customization

### Change Primary Color
Open `client/src/App.css` and find:
```css
:root {
  --primary-color: #2563eb;  /* Change this! */
}
```

### Change Company Name
Search for "Gebeta" in:
- `client/src/components/Navbar/Navbar.js`
- `client/src/components/Footer/Footer.js`
- `client/src/components/Hero/Hero.js`

### Update Email Address
Search for "info@gebeta-tech.com" and replace everywhere

### Update Phone Number
Search for "+251 911 234 567" and replace everywhere

### Update Location
Search for "Addis Ababa" and replace everywhere

---

## 🔧 Common Tasks

### Add a New Service
1. Open `client/src/components/Services/Services.js`
2. Find `servicesData` array
3. Add new object:
```javascript
{
  icon: <YourIcon />,
  title: 'Your Service',
  description: 'Description here',
  features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
}
```

### Add a New Portfolio Project
1. Open `client/src/components/Portfolio/Portfolio.js`
2. Find `portfolioData` array
3. Add new object:
```javascript
{
  id: 7,
  title: 'Project Name',
  category: 'Web Development',
  description: 'Project description',
  image: 'https://your-image-url.com',
  technologies: ['React', 'Node.js'],
  link: '#'
}
```

### Change Hero Section Text
Open `client/src/components/Hero/Hero.js` and edit the `<h1>` and `<p>` tags

---

## 🐛 Troubleshooting Quick Fixes

### MongoDB Not Connected?
```bash
# Windows
net start MongoDB

# Or use MongoDB Atlas (cloud)
# Update MONGODB_URI in .env file
```

### Port Already in Use?
Kill the process or change port in `.env`:
```
PORT=5001
```

### Can't Submit Contact Form?
1. Check if backend is running (port 5000)
2. Check MongoDB connection
3. Check browser console for errors

### Styles Not Loading?
```bash
cd client
npm start
```
Make sure you're in the client directory

### Dependencies Error?
```bash
# Reinstall everything
rm -rf node_modules client/node_modules
npm install
cd client
npm install
cd ..
```

---

## 📦 Package Management

### Install New Frontend Package
```bash
cd client
npm install package-name
```

### Install New Backend Package
```bash
npm install package-name
```

### Update All Packages
```bash
npm update
cd client
npm update
```

---

## 🌐 API Endpoints Reference

### Contact Form
```javascript
POST http://localhost:5000/api/contact
Body: {
  name: "John Doe",
  email: "john@example.com",
  phone: "+251911234567",
  company: "Company Name",
  service: "Website Development",
  message: "Your message"
}
```

### Newsletter
```javascript
POST http://localhost:5000/api/newsletter
Body: {
  email: "john@example.com"
}
```

### Health Check
```javascript
GET http://localhost:5000/api/health
```

---

## 🎯 Section IDs for Navigation

Use these IDs to link to sections:
- `#hero` - Hero section
- `#services` - Services section
- `#about` - About section
- `#portfolio` - Portfolio section
- `#contact` - Contact section

Example:
```javascript
onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
```

---

## 🎨 Available Icons

From `react-icons/fa`:
- `FaLaptopCode` - Laptop/coding
- `FaMobileAlt` - Mobile phone
- `FaPlug` - Integration/plugin
- `FaTruck` - Delivery/shipping
- `FaShoppingCart` - E-commerce
- `FaCloud` - Cloud services
- `FaEnvelope` - Email
- `FaPhone` - Phone
- `FaMapMarkerAlt` - Location
- `FaFacebook`, `FaTwitter`, `FaLinkedin`, `FaInstagram` - Social media

Import: `import { IconName } from 'react-icons/fa';`

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (max-width: 968px) { }

/* Large Desktop */
@media (min-width: 1200px) { }
```

---

## 🔐 Environment Variables

Create `.env` file in root:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gebeta-tech
NODE_ENV=development
```

For production:
```env
NODE_ENV=production
MONGODB_URI=your-mongodb-atlas-uri
```

---

## 📊 MongoDB Commands

### Connect to Local MongoDB
```bash
mongosh
```

### View Databases
```bash
show dbs
```

### Use Database
```bash
use gebeta-tech
```

### View Collections
```bash
show collections
```

### View Contacts
```bash
db.contacts.find()
```

### View Newsletters
```bash
db.newsletters.find()
```

### Delete All Contacts (for testing)
```bash
db.contacts.deleteMany({})
```

---

## 🚀 Deployment Quick Commands

### Heroku
```bash
heroku login
heroku create gebeta-tech
git push heroku main
heroku open
```

### Vercel (Frontend)
```bash
cd client
vercel --prod
```

### Build Production
```bash
cd client
npm run build
cd ..
NODE_ENV=production npm start
```

---

## 📝 Git Commands

### Initialize Git
```bash
git init
git add .
git commit -m "Initial commit"
```

### Push to GitHub
```bash
git remote add origin your-repo-url
git push -u origin main
```

### Update and Push
```bash
git add .
git commit -m "Your message"
git push
```

---

## 🎓 Learning Resources

### React
- Official Docs: https://react.dev
- Tutorial: https://react.dev/learn

### MongoDB
- Docs: https://docs.mongodb.com
- Atlas: https://www.mongodb.com/cloud/atlas

### Express
- Docs: https://expressjs.com
- Guide: https://expressjs.com/en/guide/routing.html

### Node.js
- Docs: https://nodejs.org/docs
- Tutorial: https://nodejs.dev/learn

---

## 🔍 Quick Search Commands

### Find All Uses of a Component
```bash
# Windows PowerShell
Select-String -Path "client\src\**\*.js" -Pattern "ComponentName"

# Mac/Linux
grep -r "ComponentName" client/src/
```

### Find All TODO Comments
```bash
# Windows PowerShell
Select-String -Path "**\*.js" -Pattern "TODO"

# Mac/Linux
grep -r "TODO" .
```

---

## 💡 Pro Tips

1. **Always test locally before deploying**
2. **Keep MongoDB running when testing forms**
3. **Use browser DevTools to debug**
4. **Check console for errors**
5. **Test on mobile devices**
6. **Backup your .env file**
7. **Use Git for version control**
8. **Document your changes**

---

## 📞 Quick Contact Template

For testing the contact form:
```
Name: John Doe
Email: john@example.com
Phone: +251911234567
Company: Test Company
Service: Website Development
Message: This is a test message to verify the contact form is working correctly.
```

---

## ✅ Pre-Launch Checklist

- [ ] Update all contact information
- [ ] Replace placeholder content
- [ ] Add real portfolio projects
- [ ] Test contact form
- [ ] Test newsletter subscription
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify MongoDB connection
- [ ] Set up MongoDB Atlas
- [ ] Configure environment variables
- [ ] Build for production
- [ ] Test production build
- [ ] Choose hosting platform
- [ ] Deploy to production
- [ ] Configure domain
- [ ] Set up SSL certificate
- [ ] Test live website
- [ ] Set up analytics
- [ ] Launch! 🚀

---

## 🎯 Most Common Questions

**Q: How do I change the website colors?**  
A: Edit `client/src/App.css` - look for `:root` section

**Q: How do I add my logo?**  
A: Replace the text logo in `Navbar.js` with an `<img>` tag

**Q: How do I add more services?**  
A: Edit `client/src/components/Services/Services.js` - add to `servicesData` array

**Q: How do I test the contact form?**  
A: Make sure MongoDB is running, then fill out the form on the website

**Q: How do I deploy this?**  
A: See `DEPLOYMENT.md` for detailed instructions

**Q: Can I use this for my company?**  
A: Yes! Customize it with your information and launch

---

**Need more help? Check the other documentation files:**
- `START_HERE.md` - Getting started guide
- `README.md` - Complete documentation
- `FEATURES.md` - All features explained
- `DEPLOYMENT.md` - Deployment instructions
- `PROJECT_SUMMARY.md` - Project overview

---

**🚀 Ready to build something amazing!**

