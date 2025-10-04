import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { TbBrandFiverr } from "react-icons/tb";
import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../utils/schemaGenerators";

const BlogList = () => {
  const faqData = [
    {
      question: "What services does Advanced IT provide?",
      answer:
        "Advanced IT specializes in Zoho consulting, customization, and implementation services to help businesses automate their workflows and boost productivity.",
    },
    {
      question: "What is Zoho and how can it help my business?",
      answer:
        "Zoho is a suite of cloud-based applications for business operations, including CRM, invoicing, email marketing, HR, and more. Advanced IT helps you tailor these apps to fit your business needs.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-x-hidden bg-[#F5F5F5] min-h-screen py-10 px-4 mt-15 ">
      {/* SEO */}
      <Helmet>
        <title>Blogs - Advanced IT | Expert ZOHO Solutions & Services</title>
        <link rel="canonical" href="https://advanced-it.top/blogs" />
        <script type="application/ld+json">
          {JSON.stringify(getOrganizationSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getFaqSchema(faqData))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(
            getArticleSchema({
              title: "Advanced IT Blogs | Insights on ZOHO Solutions",
              description:
                "Explore expert tips, tutorials, and industry insights on ZOHO CRM, Books, Creator, and more from Advanced IT’s blogs.",
              url: `https://advanced-it.top/blogs`,
              author: "Abdur Rouf",
            })
          )}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto my-3">
        <h1 className="text-4xl font-bold text-center mt-12">
          📚 Latest{" "}
          <span className="animated-text text-[#5D138B]">Blog Posts</span>
        </h1>

        <div className="h-1 w-24 mx-auto bg-[#5D138B] rounded mt-5 mb-12"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition duration-300"
            >
              <Link to={`/blogs/${blog.id}`}>
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    title={blog.title}
                    className="w-full h-36 md:h-40 lg:h-48 object-cover"
                  />
                )}
              </Link>

              <div className="p-5">
                <h2 className="text-lg md:text-xl font-bold text-[#5D138B] hover:underline">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {blog.date} • {blog.author}
                </p>

                <p className="mt-2 text-gray-700 text-sm line-clamp-3">
                  {blog.content?.description?.slice(0, 120)}...
                </p>

                {/* Fiverr Link */}
                {blog?.link && (
                  <p className="mt-3 text-sm text-purple-700 flex items-center gap-1">
                    <TbBrandFiverr className="text-green-600 text-lg" />
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-medium"
                    >
                      View Gig on Fiverr
                    </a>
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap mt-3 gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#5D138B]/10 text-[#5D138B] text-xs px-2 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogList;
