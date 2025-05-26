import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="footer"
    >
      <div className="container">
        <div className="footer-content">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="logo"
          >
            SAMRAT
          </motion.div>
          
          <div className="social-links">
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <FaTwitter size={24} />
            </motion.a>
          </div>
        </div>
        
        <div className="copyright">
          © {new Date().getFullYear()} SAMRAT. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;