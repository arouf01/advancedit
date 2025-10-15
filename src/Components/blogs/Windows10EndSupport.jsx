import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import windows10EndImage from "../../assets/blogs/Windows10-EndSupport.webp";
import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../../utils/schemaGenerators";

const Windows10EndSupport = () => {
  const faqData = [
    {
      question: "When will Microsoft stop supporting Windows 10?",
      answer:
        "Microsoft will officially end support for Windows 10 on October 14, 2025. After this date, no security updates, bug fixes, or technical support will be provided.",
    },
    {
      question:
        "What happens if I continue using Windows 10 after support ends?",
      answer:
        "Continuing to use Windows 10 will expose your system to security risks, malware, and compliance issues. It’s strongly advised to upgrade to Windows 11 for continued protection.",
    },
    {
      question: "Why should businesses upgrade to Windows 11 now?",
      answer:
        "Upgrading early helps ensure compatibility, better security through TPM 2.0 and Secure Boot, AI-powered protection, and full integration with Microsoft 365 and modern tools.",
    },
  ];

  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          Windows 10 Support Ends Soon — Is Your Business Ready? | Advanced IT
        </title>
        <link
          rel="canonical"
          href="https://advanced-it.top/blogs/windows-10-end-support"
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
              title: "Windows 10 Support Ends Soon — Is Your Business Ready?",
              description:
                "Microsoft ends Windows 10 support on October 14, 2025. Learn what it means for your business, security risks of outdated systems, and why upgrading to Windows 11 is crucial.",
              url: "https://advanced-it.top/blogs/windows-10-end-support",
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
            {/* ✅ Header Image */}
            <motion.img
              whileHover={{ scale: 1.02 }}
              src={windows10EndImage}
              alt="Windows 10 End of Support 2025"
              title="Windows 10 Support Ends Soon — Is Your Business Ready?"
              className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-xl mb-8 shadow-md "
            />

            {/* ✅ Blog Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#5D138B] mb-4">
              Windows 10 Support Ends Soon — Is Your Business Ready?
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              By <span className="font-semibold text-gray-700">Abdur Rouf</span>{" "}
              • 15th Oct 2025
            </p>

            {/* ✅ Blog Content */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Microsoft will officially end support for Windows 10 on{" "}
              <strong>October 14, 2025</strong>. This isn’t just a technical
              update — it’s a cybersecurity deadline every business must prepare
              for.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🔒 What Does This Mean for You?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              After the deadline, Microsoft will stop providing security
              patches, updates, and bug fixes. This means your systems and data
              will be more vulnerable to cyberattacks.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>No more security updates or patches</li>
              <li>No bug fixes or vulnerability management</li>
              <li>No official Microsoft support</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🚨 Why It’s a Security Risk
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              According to Kaspersky, <strong>63%</strong> of successful
              cyberattacks on medium-sized businesses occur on outdated systems.
              Once Windows 10 reaches end-of-life, hackers can easily exploit
              unpatched vulnerabilities — exposing sensitive data and risking
              compliance violations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              💡 Why Upgrade to Windows 11
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>🧠 AI-powered protection & firmware safeguards</li>
              <li>🧱 TPM 2.0 & Secure Boot for stronger endpoint security</li>
              <li>⚙️ Better compatibility with Microsoft 365 & cloud tools</li>
              <li>
                🚀 Improved stability, speed, and security with modern hardware
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🧭 Tips for a Safe Transition
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>✅ Audit your existing devices for compatibility</li>
              <li>✅ Plan migration in phases to minimize downtime</li>
              <li>✅ Ensure data backup before upgrade</li>
              <li>✅ Train employees for Windows 11 features</li>
              <li>
                ✅ Use virtualization or hybrid setups if migration is gradual
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🕒 The Countdown Has Begun
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Every week after <strong>October 14, 2025</strong>, your Windows
              10 machines become more vulnerable. This isn’t just a system
              change — it’s a critical part of your business’s security
              strategy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              💬 Final Thought
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Staying on Windows 10 after 2025 is like leaving your office
              unlocked overnight — every night. Don’t wait until it’s too late.
              <strong> Migrate, modernize, and secure</strong> your business
              today.
            </p>

            {/* ✅ FAQs */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              📘 FAQs — Common Questions
            </h2>
            <div className="text-gray-700 mb-8 leading-relaxed space-y-4">
              {faqData.map((faq, index) => (
                <p key={index}>
                  <strong>Q{index + 1}:</strong> {faq.question} <br />
                  {faq.answer}
                </p>
              ))}
            </div>

            {/* ✅ Contact & CTA */}
            <div className="grid sm:flex-row gap-4 mt-10">
              <a
                href="https://www.fiverr.com/dev_abdur_rouf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center border border-green-500 rounded-lg p-4 bg-green-50 hover:bg-green-100 transition"
              >
                <span className="text-green-700 font-medium">
                  Need IT support or upgrade help?
                </span>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                  Hire on Fiverr
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/abdur-rouf-ar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center border border-blue-500 rounded-lg p-4 bg-blue-50 hover:bg-blue-100 transition"
              >
                <span className="text-blue-700 font-medium">
                  Let’s connect on LinkedIn
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                  Visit Profile
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Windows10EndSupport;
