import "../../src/index.css";
import programmingImage from "../assets/programming.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Team from "./Team";
import { Helmet } from "react-helmet";
import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../utils/schemaGenerators";

const Home = () => {
  const faqData = [
    {
      question: "What services does Advanced IT provide?",
      answer:
        "We provide Zoho CRM customization, Zoho Creator app development, automation, integrations, and consulting services.",
    },
    {
      question: "Do you offer Zoho consulting?",
      answer:
        "Yes, our expert consultants help businesses implement and optimize Zoho solutions tailored to their workflows.",
    },
    {
      question: "Can Advanced IT integrate Zoho with third-party apps?",
      answer:
        "Absolutely! We integrate Zoho with popular tools like QuickBooks, Shopify, Mailchimp, and more.",
    },
    {
      question: "Do you provide Zoho training?",
      answer:
        "Yes, we offer training sessions to ensure your team can use Zoho tools effectively.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* SEO */}
      <Helmet>
        <title>Advanced IT | Expert ZOHO Solutions & Services</title>
        <link rel="canonical" href="https://advanced-it.top/" />
        <script type="application/ld+json">
          {JSON.stringify(getOrganizationSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getFaqSchema(faqData))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(
            getArticleSchema({
              title: "Advanced IT | Expert ZOHO Solutions & Services",
              description:
                "Advanced IT provides professional ZOHO consulting, customization, and implementation services to streamline your business operations. Boost productivity with our end-to-end ZOHO support.",
              url: `https://advanced-it.top/`,
              author: "Abdur Rouf",
            })
          )}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#F9F9F9] to-white text-gray-900 p-10 mt-15 md:mt-15 sm:mt-15">
        <div className="hero-content lg:w-[1080px] flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              src={programmingImage}
              alt="Programming Image - Advanced IT"
              className="w-full max-w-md md:max-w-lg lg:max-w-[80%] rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Automate Your Business with{" "}
              <span className="text-[#5D138B]">ZOHO</span>
            </h1>
            <p className="py-6 text-base md:text-lg text-gray-700">
              Enhance and grow your business operations using Zoho One. Advanced
              IT specializes in customized Zoho CRM consulting, integration, and
              implementation across diverse industries.
            </p>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/services"
                className="btn border-0 bg-[#5D138B] hover:bg-[#4A0F6D] text-white px-8 py-3 rounded-full shadow-lg transition duration-300"
              >
                All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold mb-5"
          >
            Our <span className="text-[#5D138B]">Services</span>
          </motion.h2>
          <div className="h-1 w-24 mx-auto bg-[#5D138B] rounded mb-6"></div>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-700">
            At Advanced IT, we specialize in delivering high-quality digital
            solutions tailored to your business needs. Our team offers Zoho
            development, integrations, web design, and automation.
          </p>
        </div>

        {/* Cards */}
        <div className="lg:w-[1080px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Zoho Customization",
              desc: "Model your business processes to Zoho.",
            },
            {
              title: "Zoho Integration",
              desc: "Connect your Zoho to 3rd party apps.",
            },
            {
              title: "Zoho One",
              desc: "Customize Zoho CRM to fit your workflows.",
            },
            {
              title: "Zoho Consulting",
              desc: "Expert consulting services for all Zoho apps.",
            },
            {
              title: "Zoho Website",
              desc: "Build business/e-commerce websites with Zoho.",
            },
            {
              title: "Zoho Analytics & Report",
              desc: "Visualize and analyze your business data.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6">{service.desc}</p>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/contact"
                  className="btn border-0 bg-[#5D138B] hover:bg-[#4A0F6D] text-white px-6 py-2 rounded-full shadow-md"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <Team />
    </div>
  );
};

export default Home;
