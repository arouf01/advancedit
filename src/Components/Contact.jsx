import { useState } from "react";
import { motion } from "framer-motion";
import contactUs from "../assets/contactUs.webp";
import customerSupport from "../assets/customerSupport.webp";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { TbBrandFiverr } from "react-icons/tb";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../utils/schemaGenerators";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const faqData = [
    {
      question: "What services does Advanced IT provide?",
      answer:
        "Advanced IT specializes in Zoho consulting, customization, and implementation services to help businesses automate workflows.",
    },
    {
      question: "How can I contact Advanced IT?",
      answer:
        "You can reach us via WhatsApp, Email, LinkedIn, Fiverr, GitHub, or by filling out the contact form below.",
    },
  ];

  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    try {
      setLoading(true);
      const response = await axios.post(
        "https://advanced-it-top-biyp.onrender.com/send-email",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.messageID) {
        toast.success("✅ Email Sent Successfully", {
          position: "bottom-right",
          autoClose: 3000,
          transition: Bounce,
        });
        e.target.reset();
      }
      setLoading(false);
    } catch (err) {
      toast.error("❌ Failed To Send Email", {
        position: "bottom-right",
        autoClose: 5000,
        transition: Bounce,
      });
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-4xl" />,
      name: "WhatsApp",
      link: "https://wa.me/1518980983",
    },
    {
      icon: <TfiEmail className="text-4xl" />,
      name: "Email",
      link: "mailto:work.abdur.rouf@gmail.com",
    },
    {
      icon: <FaFacebook className="text-4xl" />,
      name: "Facebook",
      link: "https://www.facebook.com/advance.it.center01/",
    },
    {
      icon: <FaLinkedinIn className="text-4xl" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/abdur-rouf-ar/",
    },
    {
      icon: <TbBrandFiverr className="text-4xl" />,
      name: "Fiverr",
      link: "https://www.fiverr.com/dev_abdur_rouf",
    },
    {
      icon: <FaGithub className="text-4xl" />,
      name: "GitHub",
      link: "https://github.com/arouf01",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <ToastContainer />

      {/* SEO */}
      <Helmet>
        <title>Contact - Advanced IT | Expert ZOHO Solutions & Services</title>
        <link rel="canonical" href="https://advanced-it.top/contact" />
        <script type="application/ld+json">
          {JSON.stringify(getOrganizationSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getFaqSchema(faqData))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(
            getArticleSchema({
              title: "Contact Advanced IT | Get in Touch for ZOHO Services",
              description:
                "Reach out to Advanced IT for expert ZOHO solutions, consultation, and support.",
              url: "https://advanced-it.top/contact",
              author: "Abdur Rouf",
            })
          )}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#F9F9F9] to-white text-gray-900  lg:p-10 ">
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
              src={contactUs}
              alt="Contact Advanced IT"
              className="w-[85%] max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
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
              Contact{" "}
              <span className="text-[#5D138B] relative">
                Us
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#5D138B]/30 rounded"></span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg mx-auto lg:mx-0">
              Reach out for expert Zoho solutions, automation, and consulting.
              We are ready to help your business thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="lg:w-[1080px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-16"
      >
        {contactMethods.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            target="_blank"
            rel="nofollow noopener noreferrer"
            variants={cardVariants}
            className="relative bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden p-6 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#5D138B] flex items-center justify-center text-white mb-4">
              {item.icon}
            </div>
            <p className="text-lg font-semibold text-gray-900">{item.name}</p>
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <section className="lg:w-[1080px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={customerSupport}
            alt="Customer Support"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl"
          />
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-[#5D138B] mb-6 text-center">
            Send us a Message
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-5">
            {["name", "email", "subject"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300"
                required
              />
            ))}
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-[#5D138B] text-white font-semibold hover:bg-[#4A0F6D] shadow-md transition"
            >
              {loading ? (
                <span className="loading loading-dots loading-lg text-white"></span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
