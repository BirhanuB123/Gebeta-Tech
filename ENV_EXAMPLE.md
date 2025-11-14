# 📝 .env File Configuration Example

## Copy this template to create your .env file

Create a file named `.env` in the **ROOT** directory of your project.

---

## Basic Configuration (Required)

```env
# Server Port
PORT=5000

# MongoDB Connection (REQUIRED)
# Replace with your MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/gebeta-tech?retryWrites=true&w=majority

# Environment
NODE_ENV=development
```

---

## MongoDB Atlas Connection String Format

```
mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
```

### Example:
```
mongodb+srv://birha:MySecurePass123@cluster0.abc123.mongodb.net/gebeta-tech?retryWrites=true&w=majority
```

### Replace:
- `<username>` → Your MongoDB Atlas username (e.g., birha)
- `<password>` → Your MongoDB Atlas password (e.g., MySecurePass123)
- `<cluster>` → Your cluster address (e.g., cluster0.abc123)
- `<database>` → Database name (use: gebeta-tech)

---

## Optional: Email Notifications

If you want email notifications when someone submits a contact form:

```env
# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@gebeta-tech.com
```

### Gmail Setup:
1. Go to Google Account Settings
2. Enable 2-Step Verification
3. Create an "App Password"
4. Use that password in EMAIL_PASS

---

## Production Configuration

For production deployment (Heroku, Vercel, etc.):

```env
PORT=5000
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/gebeta-tech-production?retryWrites=true&w=majority
NODE_ENV=production
```

---

## Complete .env File Example

```env
# ============================================
# Gebeta Tech Website - Environment Variables
# ============================================

# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Atlas Connection (REQUIRED)
# Get this from: MongoDB Atlas → Connect → Connect your application
MONGODB_URI=mongodb+srv://birha:MyPassword123@cluster0.abc123.mongodb.net/gebeta-tech?retryWrites=true&w=majority

# Email Notifications (Optional)
# Uncomment and configure if you want email alerts
# EMAIL_HOST=smtp.gmail.com
# EMAIL_PORT=587
# EMAIL_USER=gebeta.tech@gmail.com
# EMAIL_PASS=your-app-password-here
# EMAIL_FROM=noreply@gebeta-tech.com

# ============================================
# Notes:
# - Never commit this file to Git
# - Keep your credentials secure
# - Use different databases for dev/production
# - Update these values on your hosting platform
# ============================================
```

---

## Important Notes

### ⚠️ Security:
- Never share your `.env` file
- Never commit `.env` to Git (it's in .gitignore)
- Use strong passwords
- Keep backups securely

### 📝 Tips:
- No spaces around the `=` sign
- No quotes needed around values
- Restart server after changing .env
- Use different values for production

### ✅ Verification:
After creating .env, test with:
```bash
npm run server
```

Look for: `✅ MongoDB Connected Successfully`

---

## Quick Setup Steps

1. **Create .env file** in project root
2. **Copy the template** above
3. **Replace** `MONGODB_URI` with your connection string
4. **Save** the file
5. **Restart** the server

---

## Where to Get MongoDB Connection String

1. Login to **MongoDB Atlas** (https://cloud.mongodb.com)
2. Click **"Connect"** button on your cluster
3. Select **"Connect your application"**
4. **Copy** the connection string
5. **Replace** `<password>` with your actual password
6. **Replace** `<database>` with `gebeta-tech`
7. **Paste** into your `.env` file

---

**All set! Your backend will now connect to MongoDB Atlas and accept data! 🎉**

