import { motion } from "motion/react";
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
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>About | Advanced IT</title>
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
      {/* About Us */}
      <div className="w-full p-10 mb-16  bg-[#F5F5F5]">
        <div className="hero mx-auto text-black">
          <div className="hero-content lg:w-[1080px] flex flex-col-reverse lg:flex-row-reverse items-center gap-10 px-5">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={aboutUs}
                alt="About Us - Advanced IT"
                title="About Us - Advanced IT"
                className="w-full max-w-md md:max-w-lg lg:max-w-[80%] rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                About <span className="animated-text text-primary">Us</span>
              </h1>
              <p className="py-4 text-base md:text-lg">
                Advanced IT is a tech-driven company dedicated to helping
                businesses grow through Zoho-powered solutions. We specialize in
                customizing, integrating, and implementing Zoho apps to
                streamline operations and boost efficiency. With a team that
                loves learning and building, we create smart, scalable apps and
                websites tailored to your business—always with a focus on
                quality, creativity, and results.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Established */}
      <div className="lg:w-[1080px] p-5 md:p-12 mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          <img
            className="w-full lg:w-1/2 max-w-md"
            src={Established}
            alt="About Us - Established - Advanced IT"
            title="About Us - Established - Advanced IT"
          />
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Established in <span className="animated-text">2022</span>
            </h2>
            <p className="text-base md:text-lg">
              We build our developer team with -Full stack developer – having
              wide range of technical skills so that we can deliver maximum
              output to our clients.
            </p>
            <br />
            <p className="text-base md:text-lg">
              As every business has it’s own unique nature and workflow so it is
              most important to understand client’s requirements and business
              needs so we hear our clients and understand the needs first.{" "}
              <span className="animated-text ">
                Our implementation process ensures maximum success.
              </span>
            </p>
          </div>
        </div>

        {/* Established 2 */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 mt-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who We <span className="animated-text">Are?</span>
            </h2>
            <p className="text-base md:text-lg">
              <span className="animated-text">Welcome to Advanced IT</span>, a
              dynamic IT solutions firm based in Bangladesh. We are a team of
              young, skilled, and passionate Zoho developers with extensive
              experience in delivering customized Zoho solutions. From startups
              to enterprises, we’ve successfully executed projects across a wide
              range of industries around the globe using Zoho Suite.
            </p>
          </div>

          <img
            className="w-full lg:w-1/2 max-w-md"
            src={whoAreWe}
            alt="About Us - Who Are We - Advanced IT"
            title="About Us - Who Are We - Advanced IT"
          />
        </div>
      </div>

      {/* Our technical team */}
      <Team></Team>
    </div>
  );
};

export default About;
