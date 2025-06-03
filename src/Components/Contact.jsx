import { useState } from "react";
import { motion } from "motion/react";
import contactUs from "../assets/contactUs.webp";
import customerSupport from "../assets/customerSupport.webp";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { TbBrandFiverr } from "react-icons/tb";
import { Bounce, ToastContainer, toast } from "react-toastify";

import "../../src/index.css";
import { Helmet } from "react-helmet";
import axios from "axios";

import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../utils/schemaGenerators";

const Contact = () => {
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
    {
      question:
        "Can you integrate Zoho with other platforms like WordPress or Shopify?",
      answer:
        "Yes, we specialize in integrating Zoho with third-party platforms like WordPress, Shopify, WooCommerce, and more using APIs and custom workflows.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work across various industries including education, healthcare, finance, real estate, and e-commerce—anywhere Zoho automation can add value.",
    },
    {
      question: "How long does a Zoho implementation take?",
      answer:
        "Implementation timelines vary depending on project size, but most small to medium implementations are completed within 2–4 weeks.",
    },
    {
      question: "Do you provide training for Zoho apps?",
      answer:
        "Yes, we offer personalized training sessions to help your team get comfortable using Zoho tools effectively.",
    },
    {
      question: "Can you migrate data from my current CRM to Zoho?",
      answer:
        "Yes, we assist with secure data migration from your existing system to Zoho CRM with zero downtime.",
    },
  ];

  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://advanced-it-top-biyp.onrender.com/send-email",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response);
      if (response.data.messageID) {
        toast.success("Email Sent Successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setLoading(false);
      }

      form.reset();
    } catch (error) {
      console.log("Error:", error);
      toast.error("Failed To Send Email", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* SEO */}
      <Helmet>
        <title>Contact | Advanced IT</title>
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
                "Reach out to Advanced IT for expert ZOHO solutions, consultation, and support. Get personalized assistance to optimize your business with our ZOHO services.",
              url: `https://advanced-it.top/contact`,
              author: "Abdur Rouf",
            })
          )}
        </script>
      </Helmet>
      <div className="w-full p-10 mb-16 bg-[#F5F5F5]">
        <div className="hero mx-auto text-black">
          <div className="hero-content lg:w-[1080px] px-5 flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={contactUs}
                title="Contact Us - Advanced IT"
                alt="Contact Us - Advanced IT"
                className="w-full max-w-md md:max-w-lg lg:max-w-[80%] rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Contact <span className="animated-text text-primary">Us</span>
              </h1>
              <p className="py-4 text-base md:text-lg">
                We are a dedicated team specializing in building elegant apps
                and websites on Zoho. Our passion for learning and innovation
                drives everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="w-full mb-16 text-center ">
        <div className="lg:w-[1080px] px-5 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have Any{" "}
            <span className="animated-text text-primary">Questions?</span>
          </h2>

          {/* Divider */}
          <div className="h-1 w-24 mx-auto bg-[#5A38C2] rounded my-5 "></div>

          {/* Cards */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {/* Whatsapp */}
            <a
              href="https://wa.me/1749569015"
              target="_blank"
              rel="nofollow external noopener noreferrer"
              className="mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="contact_us card w-72 shadow-md"
              >
                <figure className="flex justify-center pt-6">
                  <div className="w-16 h-16 rounded-full bg-[#5938C2] flex items-center justify-center text-white">
                    <FaWhatsapp className="text-4xl" />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <p className="text-[18px] card-title">WhatsApp</p>
                </div>
              </motion.div>
            </a>
            {/* Email */}
            <a
              href="mailto:work.abdur.rouf@gmail.com"
              target="_blank"
              rel="nofollow external noopener noreferrer"
              className="mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="contact_us card w-72 shadow-md"
              >
                <figure className="flex justify-center pt-6">
                  <div className="w-16 h-16 rounded-full bg-[#5938C2] flex items-center justify-center text-white">
                    <TfiEmail className="text-4xl" />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <p className="text-[18px] card-title">Email</p>
                </div>
              </motion.div>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/advance.it.center01/"
              target="_blank"
              rel="nofollow external noopener noreferrer"
              className="mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="contact_us card w-72 shadow-md"
              >
                <figure className="flex justify-center pt-6">
                  <div className="w-16 h-16 rounded-full bg-[#5938C2] flex items-center justify-center text-white">
                    <FaFacebook className="text-4xl" />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <p className="text-[18px] card-title">Facebook</p>
                </div>
              </motion.div>
            </a>
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/abdur-rouf-ar/"
              target="_blank"
              rel="nofollow external noopener noreferrer"
              className="mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="contact_us card w-72 shadow-md"
              >
                <figure className="flex justify-center pt-6">
                  <div className="w-16 h-16 rounded-full bg-[#5938C2] flex items-center justify-center text-white">
                    <FaLinkedinIn className="text-4xl" />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <p className="text-[18px] card-title">LinkedIn</p>
                </div>
              </motion.div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.fiverr.com/dev_abdur_rouf"
              target="_blank"
              rel="nofollow external noopener noreferrer"
              className="mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="contact_us card w-72 shadow-md"
              >
                <figure className="flex justify-center pt-6">
                  <div className="w-16 h-16 rounded-full bg-[#5938C2] flex items-center justify-center text-white">
                    <TbBrandFiverr className="text-4xl" />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <p className="text-[18px] card-title">Fiverr</p>
                </div>
              </motion.div>
            </a>
            {/* Fiverr */}
            <a
              href="https://github.com/arouf01"
              target="_blank"
              rel="nofollow external noopener noreferrer"
              className="mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="contact_us card w-72 shadow-md"
              >
                <figure className="flex justify-center pt-6">
                  <div className="w-16 h-16 rounded-full bg-[#5938C2] flex items-center justify-center text-white">
                    <FaGithub className="text-4xl" />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <p className="text-[18px] card-title">GitHub</p>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full py-10 bg-[#F5F5F5]">
        <div className="hero mx-auto text-black">
          <div className="hero-content lg:w-[1080px] px-5 flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={customerSupport} // replace with your image
                alt="Customer Support - Advanced IT"
                title="Customer Support - Advanced IT"
                className="w-full max-w-md md:max-w-lg lg:max-w-[80%] rounded-lg"
              />
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2">
              <div className="card bg-white w-full shadow-xl mt-6">
                <div className="card-body">
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="label" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="input w-full bg-white border border-gray-300"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="label" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="input w-full bg-white border border-gray-300"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label className="label" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="input w-full bg-white border border-gray-300"
                        placeholder="Enter subject"
                        required
                      />
                    </div>

                    <div>
                      <label className="label" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="textarea w-full bg-white border border-gray-300"
                        placeholder="Type your message"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-neutral w-full disabled:!bg-[#070709] disabled:cursor-not-allowed"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="text-white loading loading-dots loading-lg"></span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
