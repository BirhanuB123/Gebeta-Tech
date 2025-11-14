import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaMobile, FaRocket, FaCheckCircle, FaStar, FaUsers, FaAward } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const target1 = 50;
    const target2 = 30;
    const target3 = 5;

    const timer1 = setInterval(() => {
      setCount1(prev => {
        if (prev >= target1) {
          clearInterval(timer1);
          return target1;
        }
        return prev + Math.ceil(target1 / steps);
      });
    }, duration / steps);

    const timer2 = setInterval(() => {
      setCount2(prev => {
        if (prev >= target2) {
          clearInterval(timer2);
          return target2;
        }
        return prev + Math.ceil(target2 / steps);
      });
    }, duration / steps);

    const timer3 = setInterval(() => {
      setCount3(prev => {
        if (prev >= target3) {
          clearInterval(timer3);
          return target3;
        }
        return prev + 1;
      });
    }, duration / steps);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <FaStar className="badge-icon" />
              <span>Leading Tech Solutions in Ethiopia</span>
            </motion.div>

            <h1>
              Transform Your Business with
              <span className="gradient-text"> Innovative Technology</span>
            </h1>

            <p>
              We deliver cutting-edge web development, mobile applications, and seamless 
              integrations that drive growth. From startups to enterprises, we're your 
              trusted technology partner in Ethiopia.
            </p>

            <div className="hero-features">
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <FaCheckCircle className="feature-icon" />
                <span>Modern & Scalable Solutions</span>
              </motion.div>
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <FaCheckCircle className="feature-icon" />
                <span>24/7 Premium Support</span>
              </motion.div>
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <FaCheckCircle className="feature-icon" />
                <span>100% Client Satisfaction</span>
              </motion.div>
            </div>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Start Your Project <FaArrowRight />
              </button>
              <button className="btn btn-secondary" onClick={scrollToServices}>
                Explore Services
              </button>
            </div>

            <div className="hero-stats">
              <motion.div 
                className="stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="stat-icon">
                  <FaRocket />
                </div>
                <h3>{count1}+</h3>
                <p>Projects Delivered</p>
              </motion.div>
              <motion.div 
                className="stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="stat-icon">
                  <FaUsers />
                </div>
                <h3>{count2}+</h3>
                <p>Happy Clients</p>
              </motion.div>
              <motion.div 
                className="stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <div className="stat-icon">
                  <FaAward />
                </div>
                <h3>{count3}+</h3>
                <p>Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="visual-glow"></div>
            <div className="floating-cards">
              <motion.div 
                className="floating-card card-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
                transition={{ 
                  scale: { duration: 0.5, delay: 0.4 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="card-glow"></div>
                <FaCode className="card-icon" />
                <h4>Web Development</h4>
                <p>Modern & Responsive</p>
                <div className="card-badge">Professional</div>
              </motion.div>

              <motion.div 
                className="floating-card card-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                transition={{ 
                  scale: { duration: 0.5, delay: 0.6 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }
                }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="card-glow"></div>
                <FaMobile className="card-icon" />
                <h4>Mobile Apps</h4>
                <p>iOS & Android</p>
                <div className="card-badge">Native</div>
              </motion.div>

              <motion.div 
                className="floating-card card-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -25, 0] }}
                transition={{ 
                  scale: { duration: 0.5, delay: 0.8 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
                }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="card-glow"></div>
                <FaRocket className="card-icon" />
                <h4>Delivery App</h4>
                <p>Coming Soon</p>
                <div className="card-badge hot">Hot! 🔥</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

