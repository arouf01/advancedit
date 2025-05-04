import React from "react";
import { motion } from "motion/react";
import servicesImage from "../assets/services.png";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div>
      <div className="w-full md:p-12 lg:p-10 mb-16 bg-[#F5F5F5]">
        <div className="hero mx-auto text-black">
          <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={servicesImage}
                alt="Programming"
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

      <div className="w-5/6 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mb-15 ">
        {/* Card 1 */}
        <div className="card w-full max-w-sm text-black shadow card-xl services">
          <div className="card-body">
            <h2 className="text-3xl bold card-title justify-center">
              Zoho <span className="animated-text">One</span>
            </h2>
            <div className="divider divider-primary w-[10%] mx-auto"></div>
            <p className="mb-10">
              Our Creator developer and CRM experts will help you to customize
              ZOHO CRM to setup your business workflow to run your system
              effectively & smoothly.Once this custom system goes live, We train
              client-side users, offer first-level customer support and manage
              relationships Professionally
            </p>
            <div className="justify-center card-actions">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn btn-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card w-full max-w-sm text-black shadow card-xl services">
          <div className="card-body">
            <h2 className="text-3xl bold card-title justify-center">
              Zoho <span className="animated-text">Automation</span>
            </h2>
            <div className="divider divider-primary w-[10%] mx-auto"></div>
            <p>
              Advanced IT is an IT Consulting firm providing ZOHO services for
              small to large businesses around the Globe. We understand customer
              needs and business processes.we plan how to integrate and
              implement one or more of Zoho’s 40+ products, including Zoho CRM ,
              Zoho Creator, Zoho Finance & Campaigns.
            </p>
            <div className="justify-center card-actions">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn btn-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card w-full max-w-sm text-black shadow card-xl services">
          <div className="card-body">
            <h2 className="text-3xl bold card-title justify-center">
              Zoho <span className="animated-text">Integration</span>
            </h2>
            <div className="divider divider-primary w-[10%] mx-auto"></div>
            <p>
              We can integrate other third party apps as per your business
              needs. We scratch business workflow and then customize, integrate,
              implement Zoho solutions for our clients.We help you to connect
              third party applications like Mailchimp,Quickbooks or among ZOHO
              apps itself like Zoho CRM.
            </p>
            <div className="justify-center card-actions">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn btn-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card w-full max-w-sm text-black shadow card-xl services">
          <div className="card-body">
            <h2 className="text-3xl bold card-title justify-center">
              Zoho <span className="animated-text">Websites</span>
            </h2>
            <div className="divider divider-primary w-[10%] mx-auto"></div>
            <p className="mb-10">
              We build a business or ecommerce websites , accept orders, track
              inventory, process payments, manage shipping, market your brand,
              and analyze your data. Design your online store yourself with our
              drag-and-drop builder and professional website templates.
            </p>
            <div className="justify-center card-actions">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn btn-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card w-full max-w-sm text-black shadow card-xl services">
          <div className="card-body">
            <h2 className="text-3xl bold card-title justify-center">
              Zoho <span className="animated-text">Business</span>
            </h2>
            <div className="divider divider-primary w-[10%] mx-auto"></div>
            <p>
              We help you to connect third party applications like
              Mailchimp,Quickbooks or among ZOHO apps itself like Zoho CRM with
              Zoho Creator etc.We can connect accounting, ERP , e-Commerce Self
              Service portal and others with ZOHO suites.
            </p>
            <div className="justify-center card-actions">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn btn-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card w-full max-w-sm text-black shadow card-xl services">
          <div className="card-body">
            <h2 className="text-3xl bold card-title justify-center">
              Zoho <span className="animated-text">Custom Apps</span>
            </h2>
            <div className="divider divider-primary w-[10%] mx-auto"></div>
            <p>
              Develop custom solutions for the unique needs of a global client
              base. All apps you build are fully responsive across devices and
              will integrate with any Zoho service.Sell your application to
              millions of Zoho customers worldwide through the Zoho Marketplace
            </p>
            <div className="justify-center card-actions">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn btn-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="card w-full max-w-sm text-black shadow card-xl services">
          <div className="card-body">
            <h2 className="text-3xl bold card-title justify-center">
              Zoho <span className="animated-text">Migration</span>
            </h2>
            <div className="divider divider-primary w-[10%] mx-auto"></div>
            <p>
              If you’re planning to upgrade from a legacy system to an instance
              of Zoho, there’s always one nasty roadblock that can prevent you
              from having the smoothest project: that’s your data! Whether it’s
              too complicated to export and import yourself, you aren’t sure how
              it will translate to Zoho, or you just don’t have time to sit
              through a data migration yourself, your historical data is the one
              thing that completes your Zoho system after it’s been properly
              implemented and optimized.
            </p>
            <div className="justify-center card-actions">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn btn-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </motion.button>
            </div>
          </div>
        </div>
        {/* Card 8   */}
        <div className="card w-full max-w-sm text-black shadow card-xl services">
          <div className="card-body">
            <h2 className="text-3xl bold card-title justify-center">
              SEO & <span className="animated-text">Marketing</span>
            </h2>
            <div className="divider divider-primary w-[10%] mx-auto"></div>
            <p>
              We offer a full suite of search engine optimization and
              performance content services to help you understand what people
              are searching for, to help optimise your content to best answer
              these queries and to improve your ranking in search results on
              search engines, eCommerce and content sharing channels.Looking for
              a cost-effective way to grow your business? For every $1 spent on
              email marketing, $44 is made in return. Our professional email
              marketers help your business stay top-of-mind.
            </p>
            <div className="justify-center card-actions">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn btn-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </motion.button>
            </div>
          </div>
        </div>
        {/* Card 9 */}
        <div className="card w-full max-w-sm text-black shadow card-xl services">
          <div className="card-body">
            <h2 className="text-3xl bold card-title justify-center">
              Zoho<span className="animated-text">Analytics</span>
            </h2>
            <div className="divider divider-primary w-[10%] mx-auto"></div>
            <p>
              Visually Analyze & Unhide Insights Of Your Data Using Business
              Intelligence Software Data Sources – It can feed data through
              connector from many data sources like Google Drive, Drop Box and
              can upload data from Excel files Charting Tools– Zoho reports has
              variety of charting tools like bar, Map view, widget , pivot
              tables etc. Sharing – It allows to share data like chart/dashboard
              to your users based on your Organization pattern.
            </p>
            <div className="justify-center card-actions">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn btn-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
