import faq from "../assets/faq.webp";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../utils/schemaGenerators";

const Faq = () => {
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
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-x-hidden">
      {/* SEO */}
      <Helmet>
        <title>FAQ - Advanced IT | Expert ZOHO Solutions & Services</title>
        <link rel="canonical" href="https://advanced-it.top/faq" />
        <script type="application/ld+json">
          {JSON.stringify(getOrganizationSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getFaqSchema(faqData))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(
            getArticleSchema({
              title: "Frequently Asked Questions | Advanced IT",
              description:
                "Get answers to the most common questions about our ZOHO services, pricing, implementation process, and support at Advanced IT.",
              url: `https://advanced-it.top/faq`,
              author: "Abdur Rouf",
            })
          )}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#F9F9F9] to-white text-gray-900 lg:p-10 mt-15">
        <div className="lg:w-[1080px] mx-auto flex flex-col-reverse lg:flex-row-reverse items-center gap-10 px-5">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={faq}
              alt="Frequently Asked Questions - Advanced IT"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Frequently Asked <span className="text-[#5D138B]">Questions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg mx-auto lg:mx-0">
              Explore detailed answers to frequently asked questions about our
              Zoho solutions, integration processes, technical support, and
              service workflows. This section is designed to provide clarity and
              assist you in navigating our offerings with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
        className="lg:w-[1080px] mx-auto grid gap-6 px-5 py-16"
      >
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              {faq.question}
            </h3>
            <p className="text-gray-700 text-base md:text-lg">{faq.answer}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Faq;
