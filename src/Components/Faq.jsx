import faq from "../assets/faq.webp";
import { motion } from "motion/react";
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
      <Helmet>
        <title>FAQ | Advanced IT</title>
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
      <div className="w-full p-10 mb-16 bg-[#F5F5F5]">
        <div className="hero mx-auto text-black">
          <div className="hero-content lg:w-[1080px] mx-auto px-5 flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={faq}
                alt="Frequently Asked Questions - Advanced IT"
                title="Frequently Asked Questions - Advanced IT"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Frequently Asked{" "}
                <span className="animated-text text-primary">Questions</span>
              </h1>

              <p className="py-4 text-base md:text-lg">
                Explore detailed answers to frequently asked questions about our
                Zoho solutions, integration processes, technical support, and
                service workflows. This section is designed to provide clarity
                and assist you in navigating our offerings with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full bg-white text-black p-4 mb-15 md:p-8">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Frequently Asked <span className="animated-text">Questions</span>
          </h2>
          {/* Divider */}
          <div className="h-1 w-24 mx-auto bg-[#5A38C2] rounded mb-12 "></div>
          <div className="collapse collapse-arrow border border-base-300 bg-white">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold text-lg">
              Can I trial Zoho for Free before Purchasing?
            </div>
            <div className="collapse-content text-sm">Yes. You can.</div>
          </div>

          <div className="collapse collapse-arrow border border-base-300 bg-white">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-lg">
              On which Zoho products do you provide services?
            </div>
            <div className="collapse-content text-sm">
              We provide services on all Zoho products. Starting from Zoho CRM,
              Creator, Books, Analytics, Desk to all.
            </div>
          </div>

          <div className="collapse collapse-arrow border border-base-300 bg-white">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-lg">
              What kind of services do you provide on Zoho?
            </div>
            <div className="collapse-content text-sm">
              We write code in Zoho using Deluge (Zoho’s native/own language),
              automate, develop, customize and modify default/existing settings.
              Also, integarte Zoho with 3rd party application.
            </div>
          </div>

          <div className="collapse collapse-arrow border border-base-300 bg-white">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-lg">
              Do you work on hourly or fixed price?
            </div>
            <div className="collapse-content text-sm">
              We work on both hourly and fixed price basis depends on client’s
              preference.
              <ul className="list-disc pl-5 space-y-2">
                <br />
                <li>
                  Hourly work depends on the client’s work complexity &
                  consistent flow of long-term work.
                </li>
                <li>Fixed price depends on the client’s requirements.</li>
              </ul>
            </div>
          </div>

          <div className="collapse collapse-arrow border border-base-300 bg-white">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-lg">
              Do I need to pay advance?
            </div>
            <div className="collapse-content text-sm">
              No, you don’t need to pay advance. We only take payment after the
              job is done. If you are happy with our services then you will need
              to pay.
            </div>
          </div>
          <div className="collapse collapse-arrow border border-base-300 bg-white">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-lg">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>

          <div className="collapse collapse-arrow border border-base-300 bg-white">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-lg">
              Do you provide other services outside Zoho?
            </div>
            <div className="collapse-content text-sm">
              Yes, alongside Zoho solutions, we also offer services in
              JavaScript, React, Node.js, and WordPress development to support a
              wide range of web and app projects.
            </div>
          </div>

          <div className="collapse collapse-arrow border border-base-300 bg-white">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-lg">
              Do you work in Marketplace Like Fiverr ,Freelancer.com etc since I
              do feel comfortable and secured in Marketplace?
            </div>
            <div className="collapse-content text-sm">
              Absolutely! We understand the importance of trust and security.
              You can find and work with us on popular platforms like{" "}
              <a
                href="https://www.fiverr.com/dev_abdur_rouf"
                className="text-primary underline"
                target="_blank"
                rel="nofollow external noopener noreferrer"
              >
                Fiverr
              </a>
              .
              <br />
              Feel free to also connect with us on
              <a
                href="https://www.linkedin.com/in/abdur-rouf-ar/"
                className="text-primary underline ml-1"
                target="_blank"
                rel="nofollow external noopener noreferrer"
              >
                LinkedIn
              </a>
              ,
              <a
                href="https://www.facebook.com/advance.it.center01/"
                className="text-primary underline ml-1"
                target="_blank"
                rel="nofollow external noopener noreferrer"
              >
                Facebook
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
