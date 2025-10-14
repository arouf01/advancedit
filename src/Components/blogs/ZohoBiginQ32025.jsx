import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import zohobiginq32025pdates from "../../assets/blogs/zoho-bigin-q3-2025-updates.webp";
import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../../utils/schemaGenerators";

const ZohoBiginQ32025 = () => {
  const faqData = [
    {
      question: "What new automation features are available in Bigin Q3 2025?",
      answer:
        "Bigin now supports interactive WhatsApp templates with images, videos, CTAs, personalized messages using merge fields, and automated delivery updates and campaigns.",
    },
    {
      question: "How has scheduling improved in Bigin?",
      answer:
        "Booking Pages now allow customers to book online/offline meetings, auto-generate Zoom/Zoho Meeting links, and add offline meeting details directly to your calendar.",
    },
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Zoho Bigin Q3 2025 Updates – Smarter, Faster & More Connected |
          Advanced IT
        </title>
        <link
          rel="canonical"
          href="https://advanced-it.top/blogs/zoho-bigin-q3-2025-updates"
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
                "Zoho Bigin Q3 2025 Updates – Smarter, Faster & More Connected",
              description:
                "Zoho’s Bigin CRM just got even more powerful, affordable, and easier to use. Packed with automation, mobility, and AI-driven features, these updates are designed to help small businesses scale faster without complexity.",
              url: `https://advanced-it.top/blogs/zoho-bigin-q3-2025-updates`,
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
              src={zohobiginq32025pdates}
              alt="Zoho Bigin Q3 2025 Updates"
              title="Zoho Bigin Q3 2025 Updates – Smarter, Faster & More Connected"
              className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-xl mb-8 shadow-md"
            />

            {/* Blog Content */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#5D138B] mb-4">
              Zoho Bigin Q3 2025 Updates – Smarter, Faster & More Connected
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              By <span className="font-semibold text-gray-700">Abdur Rouf</span>{" "}
              • 4th Oct 2025
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Zoho’s Bigin CRM just got even more powerful, affordable, and
              easier to use. Packed with automation, mobility, and AI-driven
              features, these updates are designed to help small businesses
              scale faster without complexity. Here’s what’s new this quarter 👇
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              💬 WhatsApp Automation
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>
                Create interactive WhatsApp templates with images, videos & CTAs
              </li>
              <li>
                Personalize messages with merge fields (Order #, Customer Name,
                etc.)
              </li>
              <li>
                Automate delivery updates, thank-you notes, and cross-sell
                campaigns using Workflows
              </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              📅 Smarter Scheduling with Booking Pages
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>Customers can easily book online/offline meetings</li>
              <li>Auto-generate Zoom/Zoho Meeting links</li>
              <li>Add offline meeting details directly to your calendar</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🍏 Upgrades for Apple Devices
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>
                Sleek new Liquid Glass design on iOS 26, iPadOS 26, macOS Tahoe
                & watchOS 26
              </li>
              <li>
                AI-powered call transcripts, smart suggestions & daily to-do
                lists
              </li>
              <li>
                Brand new Apple Watch app: track tasks, calls, revenue & share
                business card via QR code
              </li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              📝 Audit Logs & Enhanced Calling
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>Precise filters to track any action performed in CRM</li>
              <li>
                Improved telephony & RingCentral integration on iOS/iPadOS
              </li>
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

export default ZohoBiginQ32025;
