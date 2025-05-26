import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="page-title">About Me</h1>
            <p className="page-subtitle">Get to know me better</p>
          </motion.div>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="about-image"
            >
              <div className="image-wrapper">
                <img src="/assets/images/about-image.jpg" alt="About Samrat" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="about-text"
            >
              <h2>
                <AnimatedText text="Who is Samrat?" />
              </h2>
              <p>
                I'm a passionate full-stack developer with expertise in creating modern, responsive web applications. 
                With over 5 years of experience in the industry, I've worked with startups and established companies 
                to bring their digital visions to life.
              </p>
              <p>
                My approach combines technical excellence with an eye for design, ensuring that the products I build 
                are not only functional but also delightful to use. I believe in writing clean, maintainable code 
                and staying up-to-date with the latest technologies and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through blog posts and talks.
              </p>
              
              <div className="experience-timeline">
                <h3>My Journey</h3>
                <div className="timeline-item">
                  <h4>Senior Developer at TechCorp</h4>
                  <span className="timeline-date">2021 - Present</span>
                  <p>Leading frontend development and mentoring junior developers.</p>
                </div>
                <div className="timeline-item">
                  <h4>Full Stack Developer at StartupX</h4>
                  <span className="timeline-date">2018 - 2021</span>
                  <p>Built and maintained the company's flagship product.</p>
                </div>
                <div className="timeline-item">
                  <h4>Computer Science Degree</h4>
                  <span className="timeline-date">2014 - 2018</span>
                  <p>Graduated with honors from State University.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;