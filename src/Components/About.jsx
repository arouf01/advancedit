import { motion } from "framer-motion";
import aboutUs from "../assets/aboutUs.webp";
import Established from "../assets/Established.webp";
import whoAreWe from "../assets/whoAreWe.webp";

import "../../src/index.css";
import Team from "./Team";
import { Helmet } from "react-helmet";
import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../utils/schemaGenerators";

const About = () => {
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

  return (
    <div className="overflow-x-hidden">
      {/* SEO */}
      <Helmet>
        <title>About - Advanced IT | Expert ZOHO Solutions & Services</title>
        <link rel="canonical" href="https://advanced-it.top/about" />
        <script type="application/ld+json">
          {JSON.stringify(getOrganizationSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getFaqSchema(faqData))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(
            getArticleSchema({
              title: "About Advanced IT | Expert in ZOHO Solutions",
              description:
                "Learn about Advanced IT, your trusted partner in ZOHO consulting, customization, and implementation. Discover our mission, vision, and the team behind the success.",
              url: `https://advanced-it.top/about`,
              author: "Abdur Rouf",
            })
          )}
        </script>
      </Helmet>

      {/* About Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#F9F9F9] to-white text-gray-900 lg:p-10 mt-15">
        <div className="lg:w-[1080px] mx-auto flex flex-col-reverse lg:flex-row-reverse items-center gap-10 px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 1 }}
              src={aboutUs}
              alt="About Us - Advanced IT"
              title="About Us - Advanced IT"
              className="w-[85%] max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              About <span className="text-[#5D138B]">Us</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg mx-auto lg:mx-0">
              Advanced IT is a tech-driven company dedicated to helping
              businesses grow through Zoho-powered solutions. We specialize in
              customizing, integrating, and implementing Zoho apps to streamline
              operations and boost efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Established Section */}
      <section className="lg:w-[1080px] mx-auto px-5 py-12 flex flex-col lg:flex-row items-center gap-8">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={Established}
          alt="Established - Advanced IT"
          title="Established - Advanced IT"
          className="w-full lg:w-1/2 max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Established in <span className="text-[#5D138B]">2022</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            We build our developer team with Full stack developers having a wide
            range of technical skills so that we can deliver maximum output to
            our clients.
          </p>
          <p className="text-gray-700 text-base md:text-lg">
            Our implementation process ensures maximum success by understanding
            client requirements and business needs before starting any project.
          </p>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="lg:w-[1080px] mx-auto px-5 py-12 flex flex-col lg:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We <span className="text-[#5D138B]">Are</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Welcome to Advanced IT, a dynamic IT solutions firm based in
            Bangladesh. We are a team of young, skilled, and passionate Zoho
            developers with extensive experience delivering customized Zoho
            solutions worldwide.
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={whoAreWe}
          alt="Who We Are - Advanced IT"
          title="Who We Are - Advanced IT"
          className="w-full lg:w-1/2 max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-lg"
        />
      </section>

      {/* Our Team */}
      <Team />
    </div>
  );
};

export default About;
