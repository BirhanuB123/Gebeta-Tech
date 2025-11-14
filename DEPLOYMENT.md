# 🚀 Deployment Guide - Gebeta Tech Website

Complete guide for deploying your MERN stack website to production.

---

## 📋 Pre-Deployment Checklist

- [ ] Test all features locally
- [ ] Update contact information
- [ ] Add real portfolio projects
- [ ] Configure environment variables
- [ ] Set up MongoDB Atlas (cloud database)
- [ ] Test contact form and newsletter
- [ ] Optimize images
- [ ] Build frontend for production
- [ ] Choose hosting platform

---

## 🌐 Deployment Options

### Option 1: Heroku (Easiest - Recommended for Beginners)

**Pros:** Easy setup, free tier available, automatic deployments  
**Cons:** Sleeps after 30 min of inactivity (free tier)

#### Step-by-Step:

1. **Create Heroku Account**
   ```bash
   # Install Heroku CLI
   # Visit: https://devcenter.heroku.com/articles/heroku-cli
   
   # Login
   heroku login
   ```

2. **Create Heroku App**
   ```bash
   heroku create gebeta-tech
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI="your-mongodb-atlas-uri"
   heroku config:set NODE_ENV=production
   ```

4. **Deploy**
   ```bash
   git init
   git add .
   git commit -m "Initial deployment"
   git push heroku main
   ```

5. **Open Your App**
   ```bash
   heroku open
   ```

---

### Option 2: Vercel (Frontend) + Railway (Backend)

**Pros:** Excellent performance, free tier, automatic HTTPS  
**Cons:** Requires separate frontend/backend deployment

#### Frontend (Vercel):

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy Frontend**
   ```bash
   cd client
   npm run build
   vercel --prod
   ```

3. **Configure**
   - Set build command: `npm run build`
   - Set output directory: `build`

#### Backend (Railway):

1. **Create Railway Account**
   - Visit: https://railway.app

2. **Deploy from GitHub**
   - Connect your repository
   - Railway auto-detects Node.js

3. **Set Environment Variables**
   - Add `MONGODB_URI`
   - Add `NODE_ENV=production`
   - Add `PORT=5000`

4. **Update Frontend API URL**
   ```javascript
   // In client/src/components/Contact/Contact.js
   // and client/src/components/Footer/Footer.js
   // Change:
   axios.post('http://localhost:5000/api/contact', ...)
   // To:
   axios.post('https://your-railway-url.railway.app/api/contact', ...)
   ```

---

### Option 3: DigitalOcean / AWS / VPS (Full Control)

**Pros:** Complete control, best performance, scalable  
**Cons:** Requires server management knowledge

#### Setup Ubuntu Server:

1. **Create Droplet/Instance**
   - Ubuntu 22.04 LTS
   - At least 1GB RAM
   - SSH access

2. **Connect to Server**
   ```bash
   ssh root@your-server-ip
   ```

3. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Install MongoDB**
   ```bash
   # Or use MongoDB Atlas (recommended)
   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
   sudo apt-get update
   sudo apt-get install -y mongodb-org
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```

5. **Install Nginx**
   ```bash
   sudo apt-get install nginx
   ```

6. **Clone Your Project**
   ```bash
   cd /var/www
   git clone your-repository-url gebeta-tech
   cd gebeta-tech
   npm install
   cd client
   npm install
   npm run build
   cd ..
   ```

7. **Configure PM2 (Process Manager)**
   ```bash
   sudo npm install -g pm2
   pm2 start backend/server.js --name gebeta-tech
   pm2 startup
   pm2 save
   ```

8. **Configure Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/gebeta-tech
   ```

   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;

       location / {
           root /var/www/gebeta-tech/client/build;
           try_files $uri /index.html;
       }

       location /api {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/gebeta-tech /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

9. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

10. **Setup Firewall**
    ```bash
    sudo ufw allow 'Nginx Full'
    sudo ufw allow OpenSSH
    sudo ufw enable
    ```

---

## 🗄️ MongoDB Atlas Setup (Recommended)

1. **Create Account**
   - Visit: https://www.mongodb.com/cloud/atlas
   - Sign up for free

2. **Create Cluster**
   - Choose free tier (M0)
   - Select region closest to your users
   - Create cluster

3. **Configure Access**
   - Database Access: Create user with password
   - Network Access: Add IP (0.0.0.0/0 for all IPs)

4. **Get Connection String**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password

5. **Update Environment Variables**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/gebeta-tech?retryWrites=true&w=majority
   ```

---

## 🔧 Environment Variables for Production

Create `.env` file or set in hosting platform:

```env
# Required
NODE_ENV=production
MONGODB_URI=your-mongodb-atlas-uri
PORT=5000

# Optional (Email notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@gebeta-tech.com
```

---

## 📊 Post-Deployment Tasks

### 1. Test Everything
- [ ] Homepage loads correctly
- [ ] All sections visible
- [ ] Navigation works
- [ ] Contact form submits successfully
- [ ] Newsletter subscription works
- [ ] Mobile responsive
- [ ] All links work

### 2. Setup Monitoring
- [ ] Google Analytics
- [ ] Error tracking (Sentry)
- [ ] Uptime monitoring (UptimeRobot)
- [ ] Performance monitoring

### 3. SEO Setup
- [ ] Google Search Console
- [ ] Submit sitemap
- [ ] Meta tags
- [ ] Open Graph tags
- [ ] robots.txt

### 4. Security
- [ ] HTTPS enabled
- [ ] Security headers
- [ ] Rate limiting
- [ ] Input validation
- [ ] CORS configured

### 5. Backup Strategy
- [ ] MongoDB backups (Atlas automatic)
- [ ] Code repository backup
- [ ] Environment variables documented
- [ ] Deployment documentation

---

## 🌍 Domain Setup

### 1. Purchase Domain
- Namecheap
- GoDaddy
- Google Domains
- Ethiopian domain (.et)

### 2. Configure DNS

For Heroku:
```
Type: CNAME
Name: www
Value: your-app.herokuapp.com
```

For VPS:
```
Type: A
Name: @
Value: your-server-ip

Type: A
Name: www
Value: your-server-ip
```

### 3. Wait for Propagation
- Usually 1-24 hours
- Check: https://dnschecker.org

---

## 📈 Performance Optimization

### 1. Enable Compression
```javascript
// In backend/server.js
const compression = require('compression');
app.use(compression());
```

### 2. Cache Static Assets
```javascript
// In backend/server.js
app.use(express.static('client/build', {
  maxAge: '1y',
  etag: false
}));
```

### 3. Optimize Images
- Use WebP format
- Compress images
- Lazy loading
- CDN for images

### 4. Enable CDN
- Cloudflare (free)
- AWS CloudFront
- Fastly

---

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Heroku

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: "gebeta-tech"
          heroku_email: "your-email@example.com"
```

---

## 🆘 Troubleshooting

### Issue: App crashes on Heroku
```bash
heroku logs --tail
```

### Issue: Database connection fails
- Check MongoDB Atlas IP whitelist
- Verify connection string
- Check user permissions

### Issue: Frontend not loading
- Check build directory
- Verify static file serving
- Check console for errors

### Issue: API calls fail
- Check CORS configuration
- Verify API URL
- Check network tab in browser

---

## 📞 Support Resources

- **Heroku Docs**: https://devcenter.heroku.com
- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com
- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **DigitalOcean Tutorials**: https://www.digitalocean.com/community/tutorials

---

## ✅ Deployment Checklist

- [ ] MongoDB Atlas configured
- [ ] Environment variables set
- [ ] Frontend built for production
- [ ] Backend tested
- [ ] Domain configured
- [ ] SSL certificate installed
- [ ] Monitoring setup
- [ ] Backups configured
- [ ] SEO optimized
- [ ] Performance tested
- [ ] Security hardened
- [ ] Documentation updated

---

**🎉 Congratulations! Your website is now live!**

Share it with the world: `https://your-domain.com`

