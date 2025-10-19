import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import zohoRecruitZiaAIImage from "../../assets/blogs/ZohoRecruitZiaAI.webp";
import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../../utils/schemaGenerators";

const ZohoRecruitZiaAI = () => {
  const faqData = [
    {
      question: "Who is Zia in Zoho Recruit?",
      answer:
        "Zia is Zoho’s AI-powered assistant that helps recruiters automate job descriptions, candidate sourcing, screening, and communication — making hiring smarter and faster.",
    },
    {
      question: "How does Zia improve the hiring process?",
      answer:
        "Zia writes optimized job descriptions, finds qualified candidates, automates screening assessments, summarizes profiles, and enables seamless communication within Zoho Recruit.",
    },
    {
      question: "Is Zia’s data processing secure?",
      answer:
        "Yes — Zia operates on Zoho’s secure LLM infrastructure, ensuring your HR and candidate data remain private and compliant.",
    },
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Smarter Hiring with AI: Meet Zia from Zoho Recruit | Advanced IT
        </title>
        <link
          rel="canonical"
          href="https://advanced-it.top/blogs/smarter-hiring-with-ai-zoho-recruit-zia"
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
              title: "Smarter Hiring with AI: Meet Zia from Zoho Recruit",
              description:
                "Discover how Zoho Recruit’s AI assistant Zia transforms hiring — from writing job descriptions to sourcing, screening, and seamless communication — helping HR teams hire smarter and faster.",
              url: "https://advanced-it.top/blogs/smarter-hiring-with-ai-zoho-recruit-zia",
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
              src={zohoRecruitZiaAIImage}
              alt="Smarter Hiring with AI — Meet Zia from Zoho Recruit"
              title="Smarter Hiring with AI: Meet Zia from Zoho Recruit"
              className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-xl mb-8 shadow-md"
            />

            {/* Blog Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#5D138B] mb-4">
              Smarter Hiring with AI: Meet Zia from Zoho Recruit!
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              By <span className="font-semibold text-gray-700">Abdur Rouf</span>{" "}
              • 19th Oct 2025
            </p>

            {/* Intro */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hi, I’m Bee — good to see you again! 🐝 If you’re like me, you’ve
              probably been hearing a lot about AI lately. According to Gartner,
              76% of HR professionals believe that not adopting AI solutions
              will soon become a competitive disadvantage.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              But here’s the catch — AI only makes a difference when it’s
              implemented right. That’s where Zoho Recruit’s{" "}
              <strong>Zia</strong> comes in — an AI-powered hiring assistant
              that helps recruiters work smarter, not harder.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🧠 AI Assist for Job Descriptions
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Before: Hours spent writing and editing job descriptions. <br />
              After: Zia crafts ready-to-post descriptions in seconds —
              consistent, engaging, and Gen Z-friendly!
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🤖 Smart Candidate Sourcing
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Before: Great candidates dropped off mid-way. <br />
              After: The Sourcing Bot guides visitors and pre-fills candidate
              data in Zoho Recruit — resulting in more qualified applicants and
              fewer drop-offs!
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              ⚙️ Automated Screening & Instant Assessments
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Before: Endless manual testing and tracking. <br />
              After: Zia brings assessments directly to your career page —
              results appear instantly, making hiring faster and more accurate.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🧩 Profile Summaries & Zia Matches
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Before: Hours spent reviewing resumes. <br />
              After: Zia generates clear summaries and instantly shortlists the
              best-fit candidates with data-driven insights.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              💬 Seamless Candidate Communication
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Before: Tedious manual follow-ups. <br />
              After: Send personalized emails or SMS right from Zoho Recruit —
              keeping candidates informed and engaged.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              ❤️ Zia Makes Hiring Human
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Zia isn’t just another AI — it’s your recruitment co-pilot. With
              no extra cost and full data privacy (powered by Zoho’s secure
              LLM), recruiters can focus on what truly matters: finding the
              right people.
            </p>

            {/* Why It Matters */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🔒 Why It Matters
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>Saves countless recruiter hours</li>
              <li>Enhances candidate experience</li>
              <li>Reduces time-to-hire</li>
              <li>Keeps your hiring data private and secure</li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              💡 Ready to Make Your Hiring Smarter?
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              With Zoho Recruit and Zia, your HR team can embrace AI-driven
              automation, simplify processes, and create more human hiring
              experiences.
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
                  Want to implement Zia in Zoho Recruit?
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
                  Connect with me on LinkedIn
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

export default ZohoRecruitZiaAI;
