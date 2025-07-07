import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { TbBrandFiverr } from "react-icons/tb";
import "../../src/index.css";
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
    {
      question: "How do I get started with Advanced IT?",
      answer:
        "You can contact us via WhatsApp, Email, or the contact form on our website. We'll schedule a free consultation to understand your business and suggest the right Zoho solution.",
    },
    {
      question: "Do you offer Zoho CRM customization?",
      answer:
        "Yes, we provide complete customization of Zoho CRM based on your business processes, including workflows, automation, custom fields, and integrations.",
    },
    {
      question: "Is support available after project delivery?",
      answer:
        "Absolutely! We offer post-delivery support plans to ensure your system runs smoothly and grows with your business.",
    },
    {
      question:
        "Can you integrate Zoho with other platforms like WordPress or Shopify?",
      answer:
        "Yes, we specialize in integrating Zoho with third-party platforms like WordPress, Shopify, WooCommerce, and more using APIs and custom workflows.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work across various industries including education, healthcare, finance, real estate, and e-commerce—anywhere Zoho automation can add value.",
    },
    {
      question: "How long does a Zoho implementation take?",
      answer:
        "Implementation timelines vary depending on project size, but most small to medium implementations are completed within 2–4 weeks.",
    },
    {
      question: "Do you provide training for Zoho apps?",
      answer:
        "Yes, we offer personalized training sessions to help your team get comfortable using Zoho tools effectively.",
    },
    {
      question: "Can you migrate data from my current CRM to Zoho?",
      answer:
        "Yes, we assist with secure data migration from your existing system to Zoho CRM with zero downtime.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      {/* SEO */}
      <Helmet>
        <title>Blogs | Advanced IT</title>
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

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mt-12">
          📚 Latest <span className="animated-text">Blog Posts</span>
        </h1>

        <div className="h-1 w-24 mx-auto bg-[#5A38C2] rounded mt-5 mb-20"></div>

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
              </Link>

              <div className="p-4">
                <h2 className="text-lg font-semibold text-[#5A38C2] hover:underline">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {blog.date} • {blog.author}
                </p>

                <p className="mt-2 text-gray-700 text-sm line-clamp-3">
                  {blog.content?.description?.slice(0, 120)}...
                </p>

                {/* Fiverr Link with Icon */}
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
