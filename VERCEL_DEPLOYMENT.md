# 🚀 Deploying Gebeta Tech to Vercel

This guide will walk you through deploying your MERN stack application to Vercel.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ A GitHub account
- ✅ A Vercel account (sign up at [vercel.com](https://vercel.com))
- ✅ A MongoDB Atlas account for cloud database

---

## Step 1: Set Up MongoDB Atlas (Cloud Database)

Your app needs a cloud MongoDB database since Vercel is serverless.

### 1.1 Create MongoDB Atlas Account
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new cluster (choose the FREE tier)

### 1.2 Set Up Database Access
1. In MongoDB Atlas, go to **Database Access**
2. Click **"Add New Database User"**
3. Create a username and password (save these!)
4. Grant **"Read and Write to any database"** privileges

### 1.3 Configure Network Access
1. Go to **Network Access**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - This is needed for Vercel's dynamic IPs

### 1.4 Get Your Connection String
1. Go to **Database** → **Connect** → **Connect your application**
2. Copy the connection string (looks like):
   ```
   mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
3. Replace `<password>` with your actual database password
4. Add your database name: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/gebeta-tech?retryWrites=true&w=majority`

---

## Step 2: Push Your Code to GitHub

### 2.1 Initialize Git Repository (if not already done)
```bash
cd C:\Users\birha\OneDrive\Documents\Gebeta-Tech
git add .
git commit -m "Prepare for Vercel deployment"
```

### 2.2 Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click **"+"** → **"New repository"**
3. Name it: `gebeta-tech` (or any name you prefer)
4. Don't initialize with README
5. Click **"Create repository"**

### 2.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/gebeta-tech.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### 3.1 Import Project
1. Go to [vercel.com](https://vercel.com) and log in
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository (`gebeta-tech`)

### 3.2 Configure Project Settings
- **Framework Preset**: Other
- **Root Directory**: `./` (leave as is)
- **Build Command**: Vercel will auto-detect from `vercel.json`
- **Output Directory**: `client/build`

### 3.3 Add Environment Variables
Click **"Environment Variables"** and add:

| Name | Value |
|------|-------|
| `MONGODB_URI` | Your MongoDB Atlas connection string |
| `NODE_ENV` | `production` |

**Important**: Paste your complete MongoDB connection string from Step 1.4

### 3.4 Deploy
1. Click **"Deploy"**
2. Wait for the build to complete (2-3 minutes)
3. Your site will be live at: `https://gebeta-tech.vercel.app` (or similar)

---

## Step 4: Test Your Deployment

### 4.1 Test the Website
1. Visit your Vercel URL
2. Navigate through all pages
3. Test the chatbot

### 4.2 Test API Endpoints
1. Try submitting the contact form
2. Try subscribing to the newsletter
3. Check if data is saved to MongoDB Atlas:
   - Go to MongoDB Atlas → **Database** → **Browse Collections**
   - Check `contacts` and `newsletters` collections

---

## 🔧 Troubleshooting

### Build Failed
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify `vercel.json` configuration

### API Not Working
1. Check environment variables are set correctly
2. Verify MongoDB connection string:
   - Has correct username/password
   - Includes database name
   - No special characters in password (or URL encode them)

### MongoDB Connection Error
- Ensure IP whitelist includes `0.0.0.0/0`
- Verify database user has correct permissions
- Check connection string format

### Form Submissions Not Saving
1. Go to Vercel → **Deployments** → **Functions**
2. Click on your API function to view logs
3. Check for error messages

---

## 🎯 Next Steps

### Custom Domain (Optional)
1. Go to Vercel project → **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

### Automatic Deployments
- Every push to `main` branch automatically deploys to production
- Create a `dev` branch for testing changes before production

### Monitor Your Application
- View logs: Vercel Dashboard → **Functions** → **Logs**
- Analytics: Vercel Dashboard → **Analytics**
- Performance: Vercel Dashboard → **Speed Insights**

---

## 📝 Environment Variables Reference

For local development, create a `.env` file in the root:

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/gebeta-tech?retryWrites=true&w=majority
NODE_ENV=development
PORT=5000
```

For production (Vercel), set these in the Vercel dashboard under **Environment Variables**.

---

## 🔄 Making Updates

### To update your live site:
```bash
# Make your changes
git add .
git commit -m "Your update message"
git push origin main
```

Vercel will automatically detect the push and redeploy (usually takes 1-2 minutes).

---

## 📞 Support

If you encounter issues:
1. Check Vercel's build logs
2. Review MongoDB Atlas logs
3. Check browser console for errors (F12)
4. Review this documentation

---

## ✅ Deployment Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created with read/write permissions
- [ ] Network access configured (0.0.0.0/0)
- [ ] Connection string saved
- [ ] Code pushed to GitHub
- [ ] Vercel project created and connected to GitHub
- [ ] Environment variables set in Vercel
- [ ] First deployment successful
- [ ] Website loads correctly
- [ ] Contact form works
- [ ] Newsletter subscription works
- [ ] Data saving to MongoDB Atlas verified

---

**Congratulations! Your Gebeta Tech website is now live! 🎉**

Visit your site at: `https://your-project-name.vercel.app`

