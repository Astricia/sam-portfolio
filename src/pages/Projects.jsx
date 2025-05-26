import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="page-title">My Projects</h1>
            <p className="page-subtitle">Here are some of my recent works</p>
          </motion.div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;