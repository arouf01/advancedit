import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import zohoCreatorRFQImage from "../../assets/blogs/zohoCreatorRFQImage.webp";
import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../../utils/schemaGenerators";

const ZohoCreatorRFQ = () => {
  const faqData = [
    {
      question: "What is Zoho Creator RFQ?",
      answer:
        "Zoho Creator RFQ is a custom-built application that automates the Request for Quotation process, integrates with Zoho Books and Inventory, and simplifies vendor management.",
    },
    {
      question: "Why choose Zoho Creator over Odoo for RFQs?",
      answer:
        "Zoho Creator is a low-code platform that’s easier to customize, integrates directly with Zoho Books and Inventory, and offers better automation with less setup complexity.",
    },
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Simplify RFQ Management with Zoho Creator | Advanced IT</title>
        <link
          rel="canonical"
          href="https://advanced-it.top/blogs/simplify-rfq-management-with-zoho-creator"
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
              title: "Simplify RFQ Management with Zoho Creator",
              description:
                "Learn how Zoho Creator automates the RFQ process with seamless Zoho Books integration, smart vendor selection, and custom reports—making procurement simple and efficient.",
              url: `https://advanced-it.top/blogs/simplify-rfq-management-with-zoho-creator`,
              author: "Abdur Rouf",
            })
          )}
        </script>
      </Helmet>

      {/* Blog Body */}
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
              src={zohoCreatorRFQImage}
              alt="Simplify RFQ Management with Zoho Creator"
              title="Simplify RFQ Management with Zoho Creator"
              className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-xl mb-8 shadow-md"
            />

            {/* Blog Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#5D138B] mb-4">
              Simplify RFQ Management with Zoho Creator
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              By <span className="font-semibold text-gray-700">Abdur Rouf</span>{" "}
              • 29th Oct 2025
            </p>

            {/* Intro */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Managing Requests for Quotation (RFQs) can get complicated —
              especially if you’ve tried doing it in Odoo and found the setup
              too complex or automation missing. That’s why many businesses are
              now switching to Zoho Creator, a low-code platform that lets you
              build and automate your RFQ process effortlessly — no heavy coding
              required!
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🧾 1️⃣ Create an RFQ
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8 leading-relaxed">
              <li>Add line items directly from Zoho Books or Inventory</li>
              <li>Set issue and response dates</li>
              <li>Select vendors automatically from Zoho Books</li>
              <li>
                Submit RFQs with attachments and track every request in one
                place
              </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              📩 2️⃣ Review Vendor Quotations
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8 leading-relaxed">
              <li>View all vendor submissions under each RFQ</li>
              <li>Compare quotations with ease</li>
              <li>
                Mark the winning bid and link it directly to a Purchase Order in
                Zoho Books
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              📦 3️⃣ Manage Inventory & Reports
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8 leading-relaxed">
              <li>Track items, bins, and batches</li>
              <li>Automate tax setup and low-stock alerts</li>
              <li>
                Generate custom RFQ reports and dashboards using Zoho Analytics
              </li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              ⚙️ 4️⃣ Automate Purchase Orders & Delivery Notes
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8 leading-relaxed">
              <li>Create POs automatically from winning quotations</li>
              <li>Manage serials, documents, and delivery notes with ease</li>
            </ul>

            {/* Comparison Section */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              💡 Why Choose Zoho Creator Over Odoo
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8 leading-relaxed">
              <li>Easy to customize — no coding required</li>
              <li>Seamless integration with Zoho Books & Inventory</li>
              <li>Automated vendor selection and RFQ tracking</li>
              <li>Real-time notifications and detailed reports</li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🚀 Ready to Streamline Your Procurement Workflow?
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Try Zoho Creator RFQ today and experience smarter automation for
              your business. Simplify procurement, eliminate manual steps, and
              boost efficiency with Advanced IT’s custom Zoho Creator solutions.
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
                  Need Zoho Creator automation?
                </span>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                  View on Fiverr
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/abdur-rouf-ar"
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

export default ZohoCreatorRFQ;
