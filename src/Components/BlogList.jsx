import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../../src/index.css";
const BlogList = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      {/* SEO */}
      <Helmet>
        <title>Blogs | Advanced IT</title>
        <link rel="canonical" href="https://advanced-it.top/blogs" />
      </Helmet>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mt-12">
          📚 Latest <span className="animated-text">Blog Posts</span>
        </h1>
        {/* Divider */}
        <div className="h-1 w-24 mx-auto bg-[#5A38C2] rounded mt-5 mb-20 "></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <Link to={`/blogs/${blog.id}`}>
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    title={blog.title}
                    className="w-full h-36 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-[#5A38C2] hover:underline">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {blog.date} • {blog.author}
                  </p>
                  <p className="mt-2 text-gray-700 text-sm line-clamp-3">
                    {blog.content.replace(/[#*`]/g, "").slice(0, 120)}...
                  </p>

                  <div className="flex flex-wrap mt-3 gap-1">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#5A38C2]/10 text-[#5A38C2] text-xs px-2 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
