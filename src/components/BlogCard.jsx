import { motion } from 'framer-motion';

const BlogCard = ({ blog }) => {
  return (
    <motion.div 
      className="blog-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
    >
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className="blog-content">
        <div className="blog-date">{blog.date}</div>
        <h3>{blog.title}</h3>
        <p className="excerpt">{blog.excerpt}</p>
        <a href={"https://uhv-nine.vercel.app/"} className="read-more">Read More</a>
      </div>
    </motion.div>
  );
};

export default BlogCard;