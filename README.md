# Gebeta Tech - Professional Technology Company Website

A modern, full-stack MERN (MongoDB, Express, React, Node.js) website for Gebeta Tech, a leading technology solutions provider in Ethiopia.

## 🚀 Features

- **Modern & Responsive Design**: Beautiful UI/UX that works seamlessly on all devices
- **Full MERN Stack**: MongoDB, Express.js, React, Node.js
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Fully functional contact form with backend API
- **Newsletter Subscription**: Email subscription system
- **Service Showcase**: Highlighting web development, mobile apps, and integrations
- **Portfolio Section**: Display of completed projects
- **SEO Optimized**: Built with SEO best practices

## 📋 Services Offered

- Website Development
- Mobile App Development (iOS & Android)
- App Integration & API Services
- E-Commerce Solutions
- Cloud Solutions
- Delivery App (Coming Soon!)

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Framer Motion (animations)
- React Icons
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- Body Parser
- Nodemailer (for email notifications)

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Step 1: Clone the repository
```bash
git clone <repository-url>
cd Gebeta-Tech
```

### Step 2: Install dependencies

Install root dependencies:
```bash
npm install
```

Install client dependencies:
```bash
cd client
npm install
cd ..
```

### Step 3: Environment Setup

Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Update the `.env` file with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gebeta-tech
NODE_ENV=development

# Optional: Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@gebeta-tech.com
```

### Step 4: Start MongoDB

Make sure MongoDB is running on your system:
```bash
# For Windows (if MongoDB is installed as a service)
net start MongoDB

# For Mac/Linux
sudo systemctl start mongod
```

Or use MongoDB Atlas (cloud) by updating the `MONGODB_URI` in `.env`.

### Step 5: Run the application

Development mode (runs both frontend and backend):
```bash
npm run dev
```

Or run separately:

Backend only:
```bash
npm run server
```

Frontend only:
```bash
npm run client
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🌐 Production Deployment

### Build the frontend
```bash
cd client
npm run build
cd ..
```

### Set environment to production
Update `.env`:
```
NODE_ENV=production
```

### Start the server
```bash
npm start
```

## 📁 Project Structure

```
Gebeta-Tech/
├── backend/
│   ├── models/
│   │   ├── Contact.js
│   │   └── Newsletter.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── newsletter.js
│   └── server.js
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Hero/
│   │   │   ├── Services/
│   │   │   ├── About/
│   │   │   ├── Portfolio/
│   │   │   ├── Contact/
│   │   │   └── Footer/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🔌 API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contact` - Get all contact submissions (admin)

### Newsletter
- **POST** `/api/newsletter` - Subscribe to newsletter

### Health Check
- **GET** `/api/health` - Check API status

## 🎨 Customization

### Colors
Update CSS variables in `client/src/App.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... more colors */
}
```

### Content
- Update company information in components
- Modify services in `client/src/components/Services/Services.js`
- Update portfolio projects in `client/src/components/Portfolio/Portfolio.js`
- Change contact information in `client/src/components/Contact/Contact.js`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔒 Security Features

- Input validation on both frontend and backend
- MongoDB injection protection
- CORS configuration
- Environment variables for sensitive data
- Sanitized error messages

## 🚀 Future Enhancements

- [ ] Admin dashboard for managing contacts
- [ ] Blog section
- [ ] Multi-language support (Amharic/English)
- [ ] Advanced analytics
- [ ] Client testimonials section
- [ ] Live chat integration
- [ ] Delivery app launch page

## 📞 Contact

**Gebeta Tech**
- Email: info@gebeta-tech.com
- Phone: +251 911 234 567
- Location: Addis Ababa, Ethiopia

## 📄 License

This project is licensed under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ by Gebeta Tech Team

