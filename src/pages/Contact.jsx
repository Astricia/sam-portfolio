import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      console.log(result.text);
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus(null), 3000);
    }, (error) => {
      console.log(error.text);
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">I'd love to hear from you</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-form-wrapper"
          >
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="user_name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="user_email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </motion.button>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="status-message success"
                >
                  <FiCheckCircle /> Message sent successfully!
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="status-message error"
                >
                  <FiAlertCircle /> Failed to send message. Please try again.
                </motion.div>
              )}
            </form>

            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>Feel free to reach out through any of these channels:</p>
              
              <div className="info-item">
                <h4>Email</h4>
                <a href="mailto:contact@samrat.dev">contact@samrat.dev</a>
              </div>
              
              <div className="info-item">
                <h4>Phone</h4>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              
              <div className="info-item">
                <h4>Social Media</h4>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;