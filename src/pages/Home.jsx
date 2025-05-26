import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-text"
            >
              <h1>
                <AnimatedText text="Hi, I'm Samrat" />
              </h1>
              <h2>
                <AnimatedText text="Full Stack Developer & Designer" />
              </h2>
              <p>
                I create beautiful, functional websites and applications with a focus on user experience and clean code.
              </p>
              <div className="hero-buttons">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/projects" className="btn-primary">View My Work</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="btn-secondary">Contact Me</Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hero-image"
            >
              <div className="image-wrapper">
                <img src="/assets/images/hero-image.png" alt="Samrat" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              {['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'Python', 'UI/UX Design', 'MongoDB', 'Firebase'].map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;