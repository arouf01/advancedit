import { motion } from "framer-motion";
import servicesImage from "../assets/services.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../utils/schemaGenerators";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const faqData = [
    {
      question: "What Zoho services do you provide?",
      answer:
        "We specialize in Zoho CRM, Zoho Creator, Zoho Books, Zoho Inventory, automation, integrations, and migration services.",
    },
    {
      question: "Do you provide custom Zoho apps?",
      answer:
        "Yes, we build tailored Zoho Creator applications to match your unique business workflows.",
    },
    {
      question: "Can you integrate Zoho with other platforms?",
      answer:
        "Absolutely! We integrate Zoho with Shopify, QuickBooks, Mailchimp, and other third-party platforms.",
    },
    {
      question: "Do you offer Zoho migration services?",
      answer:
        "Yes, we handle migration from legacy systems to Zoho with zero downtime and complete data security.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* SEO */}
      <Helmet>
        <title>Services - Advanced IT | Expert ZOHO Solutions & Services</title>
        <link rel="canonical" href="https://advanced-it.top/services" />
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
                "Advanced IT Services | Zoho CRM, Creator, and Automation Experts",
              description:
                "Discover tailored Zoho services at Advanced IT — including Zoho CRM customization, Zoho Creator app development, business process automation, and integration solutions to boost your business efficiency.",
              url: `https://advanced-it.top/services`,
              author: "Abdur Rouf",
            })
          )}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#F9F9F9] to-white text-gray-900 lg:p-10 ">
        <div className="lg:w-[1080px] mx-auto flex flex-col-reverse lg:flex-row-reverse items-center gap-12 px-6">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 1 }}
              src={servicesImage}
              alt="Services CRM - Advanced IT"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Our{" "}
              <span className="text-[#5D138B] relative">
                Services
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#5D138B]/30 rounded"></span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg mx-auto lg:mx-0">
              Advanced IT provides powerful Zoho services for businesses of all
              sizes across the globe. From CRM automation to custom apps — we
              help you thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="lg:w-[1080px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-16"
      >
        {[
          {
            title: "Zoho One",
            description:
              "Our Creator developers and CRM experts customize Zoho CRM to streamline your business workflows, provide training, and ensure smooth operations.",
          },
          {
            title: "Zoho Automation",
            description:
              "We design automation using Zoho CRM, Creator, Finance, and Campaigns — to save time, reduce errors, and boost efficiency.",
          },
          {
            title: "Zoho Integration",
            description:
              "Connect your Zoho apps with third-party tools like Mailchimp, QuickBooks, Shopify, and more — seamlessly.",
          },
          {
            title: "Zoho Websites",
            description:
              "We design and develop eCommerce-ready websites with Zoho — including inventory, payments, and analytics.",
          },
          {
            title: "Zoho Business",
            description:
              "From ERP to accounting integrations, we help businesses leverage Zoho apps for end-to-end growth.",
          },
          {
            title: "Zoho Custom Apps",
            description:
              "Tailored Zoho Creator apps for unique workflows. Fully responsive, integrated, and scalable.",
          },
          {
            title: "Zoho Migration",
            description:
              "Migrate from legacy systems to Zoho with zero data loss and business continuity assurance.",
          },
          {
            title: "SEO Marketing",
            description:
              "Boost visibility with SEO, performance content, and marketing automation powered by Zoho tools.",
          },
          {
            title: "Zoho Analytics",
            description:
              "Turn your data into insights with Zoho Analytics — dashboards, charts, KPIs, and reports.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden p-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-6 text-center">
              {service.description}
            </p>
            <div className="flex justify-center">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/contact"
                  className="px-6 py-2 rounded-full bg-[#5D138B] text-white hover:bg-[#4A0F6D] shadow-md transition duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
