import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  TbBrandFiverr,
  TbBulb,
  TbRocket,
  TbTools,
  TbInfoCircle,
  TbBuildingSkyscraper,
} from "react-icons/tb";
import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../utils/schemaGenerators";

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

  const {
    title,
    image,
    date,
    author,
    tags,
    link,
    content: {
      header,
      description,
      servicesInclude,
      whyChooseMe,
      otherInfo,
      whyUs,
    },
  } = blog;

  return (
    <div className="min-h-screen bg-white px-4 py-10 text-gray-800">
      {/* SEO */}
      <Helmet>
        <title>{title} | Advanced IT</title>
        <link rel="canonical" href={`https://advanced-it.top/blogs/${id}`} />
        <script type="application/ld+json">
          {JSON.stringify(getOrganizationSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getFaqSchema([]))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(
            getArticleSchema({
              title: `${title} | Advanced IT`,
              description,
              url: `https://advanced-it.top/blogs/${id}`,
              author,
            })
          )}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 sm:p-10"
        >
          {image && (
            <img
              src={image}
              alt={title}
              title={title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}

          <h1 className="text-4xl font-bold text-[#5A38C2] mb-2">{title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            {date} • By {author}
          </p>

          <div className="space-y-6 text-base leading-relaxed">
            <div>
              <p className="text-xl font-semibold mb-1 text-purple-700">
                {header}
              </p>
              <p>{description}</p>
            </div>

            <div>
              <h2 className="flex items-center text-lg font-bold text-[#5A38C2] mt-6 mb-2">
                <TbTools className="mr-2 text-xl text-indigo-600" />
                Services I Offer
              </h2>
              <div className="pl-4 text-gray-700">
                {servicesInclude
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, i) => (
                    <p key={i}>🔹 {line}</p>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="flex items-center text-lg font-bold text-[#5A38C2] mt-6 mb-2">
                <TbBulb className="mr-2 text-xl text-yellow-500" />
                Why Choose Me
              </h2>
              <div className="pl-4 text-gray-700">
                {whyChooseMe
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, i) => (
                    <p key={i}>✅ {line}</p>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="flex items-center text-lg font-bold text-[#5A38C2] mt-6 mb-2">
                <TbInfoCircle className="mr-2 text-xl text-blue-600" />
                Perfect For
              </h2>
              <div className="pl-4 text-gray-700">
                {otherInfo
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, i) => (
                    <p key={i}>👉 {line}</p>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="flex items-center text-lg font-bold text-[#5A38C2] mt-6 mb-2">
                <TbBuildingSkyscraper className="mr-2 text-xl text-green-600" />
                Why Advanced IT?
              </h2>
              <div className="pl-4 text-gray-700">
                {whyUs
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, i) => (
                    <p key={i}>🏆 {line}</p>
                  ))}
              </div>
            </div>

            {/* Fiverr CTA */}
            {link && (
              <div className="mt-10 bg-[#1dbf73]/10 p-4 border border-[#1dbf73] rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TbBrandFiverr className="text-[#1dbf73] text-2xl" />
                  <span className="font-medium text-[#1dbf73]">
                    Need this service?
                  </span>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1dbf73] text-white px-4 py-1.5 rounded-md hover:bg-[#17a964] transition"
                >
                  View on Fiverr
                </a>
              </div>
            )}

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
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
      </div>
    </div>
  );
};

export default BlogDetails;
