# 🔧 Backend Setup Guide - MongoDB Atlas Connection

## ✅ Your Backend is Ready to Accept Data!

Your backend server is fully configured to accept and save data from:
- ✅ Contact Form
- ✅ Newsletter Subscription

---

## 📝 .env File Configuration

### **IMPORTANT: .env File Location**

The `.env` file should be in the **ROOT** directory, not in the `backend` folder:

```
Gebeta-Tech/
├── .env          ← HERE (root directory)
├── backend/
├── client/
└── package.json
```

If you created it in `backend/.env`, please **move it to the root** directory.

---

## 🔑 MongoDB Atlas Connection String

### Step 1: Get Your Connection String

1. Go to **MongoDB Atlas** (https://cloud.mongodb.com)
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string

It looks like:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/gebeta-tech?retryWrites=true&w=majority
```

### Step 2: Update Your .env File

Open the `.env` file in the **root directory** and replace the MONGODB_URI:

```env
PORT=5000
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/gebeta-tech?retryWrites=true&w=majority
NODE_ENV=development
```

**Replace:**
- `YOUR_USERNAME` → Your MongoDB Atlas username
- `YOUR_PASSWORD` → Your MongoDB Atlas password
- `YOUR_CLUSTER` → Your cluster name (e.g., cluster0.abc123)

### Example:

```env
PORT=5000
MONGODB_URI=mongodb+srv://birha:MyPassword123@cluster0.abc123.mongodb.net/gebeta-tech?retryWrites=true&w=majority
NODE_ENV=development
```

---

## 🔒 MongoDB Atlas Security Configuration

### Allow Network Access

1. Go to **MongoDB Atlas Dashboard**
2. Click **"Network Access"** (left sidebar)
3. Click **"Add IP Address"**
4. Choose one:
   - **"Allow Access from Anywhere"** → `0.0.0.0/0` (for development)
   - **"Add Current IP Address"** (your specific IP)
5. Click **"Confirm"**

### Database User

1. Go to **"Database Access"** (left sidebar)
2. Make sure you have a user created
3. Note the **username** and **password**
4. User should have **"Read and write to any database"** permission

---

## 🚀 Start the Backend Server

Once your `.env` file is configured:

```bash
# Make sure you're in the root directory
cd C:\Users\birha\OneDrive\Documents\Gebeta-Tech

# Start the backend
npm run server
```

You should see:
```
🚀 Server running on port 5000
📍 Environment: development
✅ MongoDB Connected Successfully
```

If you see **"✅ MongoDB Connected Successfully"** - you're all set! 🎉

---

## 🧪 Testing the Backend

### Test 1: Health Check

Open your browser and visit:
```
http://localhost:5000/api/health
```

You should see:
```json
{
  "status": "ok",
  "message": "Gebeta Tech API is running",
  "timestamp": "2024-..."
}
```

### Test 2: Contact Form

With the frontend running, fill out the contact form and submit.

Check if data is saved:
```bash
# Visit MongoDB Atlas Dashboard
# Go to "Browse Collections"
# You should see "contacts" collection with your data
```

### Test 3: Newsletter

Subscribe to the newsletter on your website.

Check MongoDB Atlas:
```bash
# Browse Collections → newsletters collection
# You should see the subscribed email
```

---

## 📊 Database Structure

Your MongoDB database will have:

### Collections:

1. **contacts** - Stores contact form submissions
   ```json
   {
     "_id": "...",
     "name": "John Doe",
     "email": "john@example.com",
     "phone": "+251911234567",
     "company": "Tech Company",
     "service": "Website Development",
     "message": "I need a website...",
     "status": "new",
     "createdAt": "2024-..."
   }
   ```

2. **newsletters** - Stores newsletter subscriptions
   ```json
   {
     "_id": "...",
     "email": "subscriber@example.com",
     "isActive": true,
     "subscribedAt": "2024-..."
   }
   ```

---

## 🔧 Backend API Endpoints

Your backend provides these endpoints:

### 1. Contact Form
```
POST http://localhost:5000/api/contact
```

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+251911234567",
  "company": "Tech Company",
  "service": "Website Development",
  "message": "I need a website"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "data": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### 2. Newsletter Subscription
```
POST http://localhost:5000/api/newsletter
```

**Body:**
```json
{
  "email": "subscriber@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to our newsletter!"
}
```

### 3. Get All Contacts (Admin)
```
GET http://localhost:5000/api/contact
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [...]
}
```

### 4. Health Check
```
GET http://localhost:5000/api/health
```

---

## 🐛 Troubleshooting

### Issue: "MongoDB Connection Error"

**Solution:**
1. Check your connection string in `.env`
2. Verify username and password are correct
3. Check Network Access in MongoDB Atlas (allow your IP)
4. Make sure cluster is running (not paused)

### Issue: "Cannot find module 'dotenv'"

**Solution:**
```bash
npm install
```

### Issue: ".env file not loading"

**Solution:**
1. Make sure `.env` is in the ROOT directory (not in `backend/`)
2. Restart the server after editing `.env`
3. No spaces around the `=` sign in `.env`

### Issue: "Error: listen EADDRINUSE :::5000"

**Solution:**
Port 5000 is already in use. Either:
- Kill the existing process
- Change PORT in `.env` to 5001 or another port

### Issue: Frontend can't connect to backend

**Solution:**
1. Make sure backend is running on port 5000
2. Check `client/package.json` has: `"proxy": "http://localhost:5000"`
3. Restart both frontend and backend

---

## ✅ Verification Checklist

- [ ] `.env` file is in the ROOT directory (not in backend/)
- [ ] MongoDB Atlas connection string is correct
- [ ] Network Access is configured in MongoDB Atlas
- [ ] Database user has proper permissions
- [ ] Backend server starts successfully
- [ ] See "✅ MongoDB Connected Successfully" message
- [ ] Health check endpoint works
- [ ] Contact form saves data to MongoDB
- [ ] Newsletter subscription works
- [ ] Can see data in MongoDB Atlas dashboard

---

## 📱 Frontend-Backend Connection

The frontend is already configured to connect to the backend:

**Contact Form:** `client/src/components/Contact/Contact.js`
```javascript
axios.post('http://localhost:5000/api/contact', formData)
```

**Newsletter:** `client/src/components/Footer/Footer.js`
```javascript
axios.post('http://localhost:5000/api/newsletter', { email })
```

---

## 🚀 Run Everything

### Development (Recommended):
```bash
# Runs both frontend and backend together
npm run dev
```

### Separate terminals:
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

---

## 📊 View Your Data

### In MongoDB Atlas:
1. Go to your cluster
2. Click **"Browse Collections"**
3. Select `gebeta-tech` database
4. View collections: `contacts`, `newsletters`

### Via API:
```
http://localhost:5000/api/contact
```

---

## 🎉 Success!

Once everything is set up, your website will:
- ✅ Accept contact form submissions
- ✅ Store data in MongoDB Atlas
- ✅ Accept newsletter subscriptions
- ✅ Show success/error messages
- ✅ Validate all inputs
- ✅ Work in production when deployed

---

## 🔐 Security Notes

### For Production:
1. **Never commit `.env`** to Git (already in .gitignore)
2. **Use strong passwords** for MongoDB
3. **Restrict IP access** in MongoDB Atlas
4. **Use environment variables** on hosting platform
5. **Enable CORS** only for your domain

### .gitignore includes:
```
.env
node_modules/
```

So your credentials stay safe! 🔒

---

## 🌟 Next Steps

1. **Configure your .env file** with MongoDB Atlas URI
2. **Start the backend server** and verify connection
3. **Test the contact form** on your website
4. **Test newsletter subscription**
5. **Check MongoDB Atlas** to see saved data
6. **Deploy to production** when ready!

---

## 💡 Pro Tips

- Keep a backup of your `.env` file securely
- Test all forms before going live
- Monitor MongoDB Atlas dashboard for submissions
- Set up email notifications (optional)
- Use separate databases for dev/production

---

**Your backend is ready to go! Just update the `.env` file with your MongoDB Atlas connection string and you're all set! 🚀**

Need help? Check the troubleshooting section above!

