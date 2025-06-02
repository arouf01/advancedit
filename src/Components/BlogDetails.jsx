import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p className="text-lg">🚫 Blog not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      {/* SEO */}
      <Helmet>
        <title>Blog | Advanced IT</title>
        <link rel="canonical" href={`https://advanced-it.top/${id}`} />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              title={blog.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}

          <h1 className="text-4xl font-bold text-[#5A38C2] mb-2">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            {blog.date} • By {blog.author}
          </p>

          <div className="prose max-w-none prose-sm sm:prose-base prose-indigo text-gray-800">
            {blog.content.split("\n").map((line, index) => (
              <p key={index}>{line.trim()}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#5A38C2]/10 text-[#5A38C2] text-xs px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetails;
