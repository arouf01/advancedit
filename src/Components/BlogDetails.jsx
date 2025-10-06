import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  TbBrandFiverr,
  TbBrandLinkedin,
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
    <div className="min-h-screen bg-[#F5F5F5] px-4 py-10 mt-15">
      {/* SEO */}
      <Helmet>
        <title>{title} - Advanced IT</title>
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
          className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-10"
        >
          {image && (
            <motion.img
              whileHover={{ scale: 1.03 }}
              src={image}
              alt={title}
              title={title}
              className="w-full max-h-[600px] object-contain rounded-xl mb-6 shadow-lg mx-auto"
            />
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-[#5D138B] mb-2">
            {title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            {date} • By {author}
          </p>

          <div className="space-y-6 text-gray-800 text-base leading-relaxed">
            {/* Header & Description */}
            <div>
              <p className="text-xl font-semibold mb-2 text-[#5D138B]">
                {header}
              </p>
              <p>{description}</p>
            </div>

            {/* Services Include */}
            <div>
              <h2 className="flex items-center text-lg font-bold text-[#5D138B] mt-6 mb-2">
                <TbTools className="mr-2 text-xl text-indigo-600" />
                Services I Offer
              </h2>
              <div className="pl-4 text-gray-700 space-y-1">
                {servicesInclude
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, i) => (
                    <p key={i}>🔹 {line}</p>
                  ))}
              </div>
            </div>

            {/* Why Choose Me */}
            <div>
              <h2 className="flex items-center text-lg font-bold text-[#5D138B] mt-6 mb-2">
                <TbBulb className="mr-2 text-xl text-yellow-500" />
                Why Choose Me
              </h2>
              <div className="pl-4 text-gray-700 space-y-1">
                {whyChooseMe
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, i) => (
                    <p key={i}>✅ {line}</p>
                  ))}
              </div>
            </div>

            {/* Perfect For */}
            <div>
              <h2 className="flex items-center text-lg font-bold text-[#5D138B] mt-6 mb-2">
                <TbInfoCircle className="mr-2 text-xl text-blue-600" />
                Perfect For
              </h2>
              <div className="pl-4 text-gray-700 space-y-1">
                {otherInfo
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, i) => (
                    <p key={i}>👉 {line}</p>
                  ))}
              </div>
            </div>

            {/* Why Advanced IT */}
            <div>
              <h2 className="flex items-center text-lg font-bold text-[#5D138B] mt-6 mb-2">
                <TbBuildingSkyscraper className="mr-2 text-xl text-green-600" />
                Why Advanced IT?
              </h2>
              <div className="pl-4 text-gray-700 space-y-1">
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
              <div className="mt-10 bg-[#1dbf73]/10 p-4 border border-[#1dbf73] rounded-2xl flex flex-col sm:flex-row items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                  <TbBrandFiverr className="text-[#1dbf73] text-2xl" />
                  <span className="font-medium text-[#1dbf73]">
                    Need this service?
                  </span>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="nofollow noopener noreferrer external"
                  className="mt-2 sm:mt-0 bg-[#1dbf73] text-white px-4 py-1.5 rounded-full hover:bg-[#17a964] transition"
                >
                  View on Fiverr
                </a>
              </div>
            )}

            {/* LinkedIn CTA */}
            <div className="mt-4 bg-[#0077B5]/10 p-4 border border-[#0077B5] rounded-2xl flex flex-col sm:flex-row items-center justify-between shadow-sm">
              <div className="flex items-center gap-2">
                <TbBrandLinkedin className="text-[#0077B5] text-2xl" />
                <span className="font-medium text-[#0077B5]">
                  Connect with me on LinkedIn
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/abdur-rouf-ar/"
                target="_blank"
                rel="nofollow noopener noreferrer external"
                className="mt-2 sm:mt-0 bg-[#0077B5] text-white px-4 py-1.5 rounded-full hover:bg-[#006097] transition"
              >
                Visit LinkedIn
              </a>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
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
      </div>
    </div>
  );
};

export default BlogDetails;
