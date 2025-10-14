import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import zohocmMultiSelectLookupField from "../../assets/blogs/zohocrm-multi-select-lookup-field.webp";
import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../../utils/schemaGenerators";

const ZohoMultiSelectLookup = () => {
  const faqData = [
    {
      question: "What is a Multi-Select Lookup in Zoho CRM?",
      answer:
        "A Multi-Select Lookup allows you to link multiple records from one module to a single record in another module, creating a many-to-many relationship.",
    },
    {
      question: "What is a Linking Module and why is it useful?",
      answer:
        "A Linking Module acts as a bridge between two modules, storing relationship-specific data like lease dates, amounts, or custom connection details.",
    },
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Understanding Zoho CRM’s Multi-Select Lookup & Linking Module |
          Advanced IT
        </title>
        <link
          rel="canonical"
          href="https://advanced-it.top/blogs/understanding-zoho-crm-multi-select-lookup-and-linking-module"
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
                "Understanding Zoho CRM’s Multi-Select Lookup & Linking Module",
              description:
                "Learn how Multi-Select Lookup Fields and Linking Modules in Zoho CRM help you create many-to-many relationships for smarter automation, tracking, and reporting.",
              url: `https://advanced-it.top/blogs/understanding-zoho-crm-multi-select-lookup-and-linking-module`,
              author: "Abdur Rouf",
            })
          )}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-8 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-10"
          >
            {/* Header Image */}
            <motion.img
              whileHover={{ scale: 1.02 }}
              src={zohocmMultiSelectLookupField}
              alt="Zoho CRM Multi-Select Lookup and Linking Module"
              title="Understanding Zoho CRM’s Multi-Select Lookup & Linking Module"
              className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-xl mb-8 shadow-md"
            />

            {/* Blog Content */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#5D138B] mb-4">
              Understanding Zoho CRM’s Multi-Select Lookup & Linking Module
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              By <span className="font-semibold text-gray-700">Abdur Rouf</span>{" "}
              • 12th Oct 2025
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In Zoho CRM, relationships define how your data connects — and
              Multi-Select Lookup Fields plus Linking Modules take this to the
              next level!
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🔗 Multi-Select Lookup — Build Many-to-Many Relationships
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Multi-Select Lookup Fields allow you to connect multiple records
              across modules. This creates many-to-many relationships that give
              your CRM data more depth and flexibility.
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>
                <strong>Example 1:</strong> One PolicyHolder can have multiple
                Policies.
              </li>
              <li>
                <strong>Example 2:</strong> One Policy can belong to multiple
                PolicyHolders.
              </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🧩 Linking Module — The Bridge Between Two Modules
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A Linking Module is the “bridge” that stores relationship-specific
              data between two modules. You can even add custom fields like Rent
              Amount, Lease Start Date, or Relationship Type to track
              connection-based information.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              This setup is perfect when you want to maintain context and data
              for each unique relationship rather than just the link itself.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              📊 Reporting & Insights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Linking Modules also enhance reporting capabilities. You can
              create detailed dashboards and reports to analyze cross-module
              data connections, helping you make data-driven decisions.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              💡 Why It Matters
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>
                Perfect for Real Estate, Education, Insurance, and Project
                Management industries.
              </li>
              <li>
                <strong>Lookup Field →</strong> One-to-Many Relationship
              </li>
              <li>
                <strong>Multi-Select Lookup →</strong> Many-to-Many Relationship
              </li>
              <li>
                <strong>Linking Module →</strong> Stores relationship-specific
                data
              </li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🚀 Smarter CRM Setup
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Want a smarter Zoho CRM setup with Multi-Select Lookups, Linking
              Modules, and automated workflows? Let’s make it happen!
            </p>

            {/* CTA Section */}
            <div className="grid sm:flex-row gap-4 mt-10">
              <a
                href="https://www.fiverr.com/dev_abdur_rouf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center border border-green-500 rounded-lg p-4 bg-green-50 hover:bg-green-100 transition"
              >
                <span className="text-green-700 font-medium">
                  Need this setup?
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

export default ZohoMultiSelectLookup;
