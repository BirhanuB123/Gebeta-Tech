// API Configuration
const config = {
  // Use your actual Coolify Backend URL for production
  apiUrl: process.env.NODE_ENV === 'production' 
    ? 'http://cocko8co4kgss4wskoo48kw0.72.60.30.150.sslip.io' 
    : 'http://localhost:5000'
};

export default config;