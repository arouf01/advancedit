import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import expertZohoWebsiteDesignService from "../../assets/blogs/design-and-develop-a-responsive-website-using-zoho-sites-and-zoho-commerce.webp";
import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../../utils/schemaGenerators";

const ZohoWebsiteDesign = () => {
  const faqData = [
    {
      question: "Can you build e-commerce websites with Zoho Commerce?",
      answer:
        "Yes! I can build fully functional e-commerce websites with secure payment integration, product catalog, shopping cart, and checkout pages using Zoho Commerce.",
    },
    {
      question: "Are the websites mobile-friendly and SEO optimized?",
      answer:
        "Absolutely. All websites are responsive for desktop, tablet, and mobile devices, and I optimize them for search engines to improve visibility and traffic.",
    },
    {
      question: "Can you integrate Zoho apps with my website?",
      answer:
        "Yes. I can integrate Zoho CRM, SalesIQ, Booking, Creator, and other apps to automate business processes and improve lead management.",
    },
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Create a Professional Responsive Website in Zoho Sites & Zoho Commerce
          | Advanced IT
        </title>
        <link
          rel="canonical"
          href="https://advanced-it.top/blogs/design-and-develop-a-responsive-website-using-zoho-sites-and-zoho-commerce"
        />
        <script type="application/ld+json">
          {JSON.stringify(getOrganizationSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getFaqSchema(faqData))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(
            getArticleSchema({
              title:
                "Create a professional responsive website in Zoho Sites & Zoho Commerce with SEO",
              description:
                "I’m Abdur Rouf, a Zoho expert with 5+ years of experience helping businesses create beautiful, mobile-friendly, and results-driven websites using Zoho Sites and Zoho Commerce.",
              url: `https://advanced-it.top/blogs/design-and-develop-a-responsive-website-using-zoho-sites-and-zoho-commerce`,
              author: "Abdur Rouf",
            })
          )}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-8 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Blog Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-10"
          >
            {/* Header Image */}
            <motion.img
              whileHover={{ scale: 1.02 }}
              src={expertZohoWebsiteDesignService}
              alt="Professional Zoho Website Design Service"
              title="Create a professional responsive website in Zoho Sites & Zoho Commerce"
              className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-xl mb-8 shadow-md"
            />

            {/* Blog Content */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#5D138B] mb-4">
              Create a Professional Responsive Website in Zoho Sites & Zoho
              Commerce with SEO
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              By <span className="font-semibold text-gray-700">Abdur Rouf</span>{" "}
              • 7th Jul 2025
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I’m Abdur Rouf, a Zoho expert with 5+ years of experience helping
              businesses create beautiful, mobile-friendly, and results-driven
              websites using Zoho Sites and Zoho Commerce. Whether you're
              launching an online store or building a business site, I’ll make
              it happen.
            </p>

            {/* Services Section */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🔹 Services I Offer
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>Custom, responsive websites for PC, tablet, and mobile</li>
              <li>Zoho Sites & Zoho Commerce setup with SEO optimization</li>
              <li>E-commerce websites with secure payment integration</li>
              <li>Domain configuration for Zoho Sites/Commerce</li>
              <li>
                Integration with Zoho CRM, SalesIQ, Booking, Creator, and more
              </li>
              <li>Theme selection with professional color schemes</li>
              <li>Contact forms, photo slideshows, and advanced features</li>
              <li>Logo & favicon design (optional, additional cost)</li>
              <li>Free hosting via Zoho (e.g., sitename.zohosites.com)</li>
              <li>Convert any design into a Zoho Site</li>
            </ul>

            {/* Why Choose Me */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              ✅ Why Choose Me
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>Zoho expert with 5+ years of hands-on experience</li>
              <li>SEO-optimized and mobile-responsive design</li>
              <li>Deep integration with Zoho apps for automation</li>
              <li>Affordable pricing starting at $80</li>
              <li>Fast turnaround and clear communication</li>
            </ul>

            {/* Perfect For */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🎯 Perfect For
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Startups | E-commerce Stores | Small Businesses | Personal Brands.
              Pricing starts at $80 and may vary based on complexity.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Please message me before ordering to discuss your needs. Let’s
              build your dream site today!
            </p>

            {/* Why Advanced IT */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🏆 Why Advanced IT?
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>Official Zoho Website Expert</li>
              <li>5+ Years of Domain Expertise</li>
              <li>Tailored Solutions for Every Business</li>
              <li>Integrated Zoho Stack Support</li>
              <li>Transparent Pricing & Scalable Design</li>
              <li>Ongoing Support and Post-Delivery Guidance</li>
              <li>Let's get started today</li>
            </ul>

            {/* FAQs */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              📘 FAQs — Common Questions
            </h2>
            <div className="text-gray-700 mb-8 leading-relaxed space-y-4">
              {faqData.map((faq, idx) => (
                <p key={idx}>
                  <strong>Q:</strong> {faq.question} <br />
                  <strong>A:</strong> {faq.answer}
                </p>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="grid sm:flex-row gap-4 mt-10">
              <a
                href="https://www.fiverr.com/dev_abdur_rouf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center border border-green-500 rounded-lg p-4 bg-green-50 hover:bg-green-100 transition"
              >
                <span className="text-green-700 font-medium">
                  Need this service?
                </span>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                  View on Fiverr
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/abdur-rouf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center border border-blue-500 rounded-lg p-4 bg-blue-50 hover:bg-blue-100 transition"
              >
                <span className="text-blue-700 font-medium">
                  Connect with me on LinkedIn
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                  Visit LinkedIn
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ZohoWebsiteDesign;
