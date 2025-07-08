import { motion } from "motion/react";
import servicesImage from "../assets/services.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
import {
  getOrganizationSchema,
  getFaqSchema,
  getArticleSchema,
} from "../utils/schemaGenerators";
const Services = () => {
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
      <div className="w-full md:p-12 lg:p-10 p-10 mb-16 bg-[#F5F5F5]">
        <div className="hero mx-auto text-black">
          <div className="hero-content lg:w-[1080px] flex flex-col-reverse lg:flex-row-reverse items-center gap-10 px-5">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={servicesImage}
                title="Services CRM - Advanced IT"
                alt="Services CRM - Advanced IT"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Our <span className="animated-text text-primary">Services</span>
              </h1>
              <p className="py-4 text-base md:text-lg">
                Advanced IT is an IT Consulting firm providing ZOHO services for
                small to large businesses around the Globe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* All Services */}

      {/* Services Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="lg:w-[1080px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-15 justify-center px-5"
      >
        {[
          {
            title: "Zoho One",
            description:
              "Our Creator developer and CRM experts will help you to customize ZOHO CRM to setup your business workflow to run your system effectively & smoothly. Once this custom system goes live, We train client-side users, offer first-level customer support and manage relationships professionally.",
          },
          {
            title: "Zoho Automation",
            description:
              "Advanced IT is an IT Consulting firm providing ZOHO services for small to large businesses around the Globe. We understand customer needs and business processes. We plan how to integrate and implement one or more of Zoho’s 40+ products, including Zoho CRM, Zoho Creator, Zoho Finance & Campaigns.",
          },
          {
            title: "Zoho Integration",
            description:
              "We can integrate other third-party apps as per your business needs. We scratch business workflow and then customize, integrate, implement Zoho solutions for our clients. We help you connect third-party applications like Mailchimp, QuickBooks or among ZOHO apps like Zoho CRM.",
          },
          {
            title: "Zoho Websites",
            description:
              "We build business or ecommerce websites, accept orders, track inventory, process payments, manage shipping, market your brand, and analyze your data. Design your online store with our drag-and-drop builder and professional templates.",
          },
          {
            title: "Zoho Business",
            description:
              "We help connect third-party applications like Mailchimp, QuickBooks, or other systems with Zoho apps. Integrate accounting, ERP, e-Commerce Self Service portals, and more with Zoho suite.",
          },
          {
            title: "Zoho Custom Apps",
            description:
              "Develop custom solutions for unique needs. All apps are fully responsive and integrate with any Zoho service. Sell your app to millions via Zoho Marketplace.",
          },
          {
            title: "Zoho Migration",
            description:
              "Planning to upgrade from a legacy system to Zoho? We handle complex data migration ensuring historical data is preserved post-implementation and optimization.",
          },
          {
            title: "SEO Marketing",
            description:
              "We offer SEO and content services to improve your search rankings and visibility. From performance content to email marketing, we help grow your brand cost-effectively.",
          },
          {
            title: "Zoho Analytics",
            description:
              "Uncover insights from your data using Zoho Analytics with connectors, charts, widgets, dashboards and secure sharing features.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="card w-full max-w-sm bg-white text-black shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 services"
          >
            <div className="card-body">
              <p className="text-3xl font-semibold card-title justify-center text-center mb-2">
                {service.title.split(" ")[0]}{" "}
                <span className="animated-text text-primary">
                  {service.title.split(" ")[1]}
                </span>
              </p>
              <div className="divider divider-primary w-[10%] mx-auto"></div>
              <p className="mb-6 text-sm text-gray-700 leading-relaxed">
                {service.description}
              </p>
              <div className="justify-center card-actions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="btn btn-outline btn-primary"
                >
                  <Link to="/contact">Contact Us</Link>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
