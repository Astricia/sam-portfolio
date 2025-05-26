import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blog';

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="page-title">UHV Blog</h1>
            <p className="page-subtitle">Thoughts on Universal Human Values</p>
          </motion.div>
        </div>
      </section>

      <section className="blog-posts-section">
        <div className="container">
          <div className="blog-posts-grid">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} blog={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;