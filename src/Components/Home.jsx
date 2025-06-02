import "../../src/index.css";
import programmingImage from "../assets/programming.webp";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Team from "./Team";

import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>
          Expert ZOHO Solutions & Services for Businesses | Advanced IT
        </title>
        <link rel="canonical" href="https://advanced-it.top/" />
      </Helmet>
      <div className="w-full p-10 mb-16 bg-[#F5F5F5]">
        <div className="hero mx-auto text-black">
          <div className="hero-content lg:w-[1080px] md:w-full flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={programmingImage}
                title="Programming Image - Advanced IT"
                alt="Programming Image - Advanced IT"
                className="w-full max-w-md md:max-w-lg lg:max-w-[80%] rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Automate Your Business with{" "}
                <span className="animated-text text-primary">ZOHO</span>
              </h1>
              <p className="py-4 text-base md:text-lg">
                Enhance and grow your business operations using Zoho One.
                Advanced IT specializes in customized Zoho CRM consulting,
                integration, and implementation across diverse industries.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn btn-primary mt-4"
              >
                <Link to="/services">All Services</Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      {/* cards */}

      <div className="mb-15">
        <div className="w-full text-center mb-15">
          <h2 className="text-4xl font-bold mb-5">
            Our <span className="animated-text">Services</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#5A38C2] rounded mb-12"></div>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-700">
            At Advanced IT, we specialize in delivering high-quality digital
            solutions tailored to your business needs. Our team offers a wide
            range of services including Zoho development, WordPress
            customization, React and Node.js applications, and custom web
            design. We combine creativity and technical expertise to help you
            grow online efficiently and effectively.
          </p>
        </div>

        <div className="lg:w-[1080px] mx-auto justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
          {/* Card 1 */}

          <div className="card w-full max-w-sm text-black shadow card-xl services">
            <div className="card-body">
              <p className="text-[25px] card-title">Zoho Customization</p>
              <p>Modeling your business processes to Zoho.</p>
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
              <p className="text-[25px] card-title">Zoho Integration</p>
              <p>Connect your Zoho to other 3rd party apps.</p>
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
              <p className="text-[25px] card-title">Zoho One</p>
              <p>
                Our Creator developer and CRM experts will help you to customize
                ZOHO CRM to setup your business.
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
              <p className="text-[25px] card-title">Zoho Consulting</p>
              <p>
                Advanced IT Solutions is an IT Consulting firm providing ZOHO
                services.
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
              <p className="text-[25px] card-title">Zoho Website</p>
              <p>
                We build business or ecommerce websites, accept orders, track
                inventory, process payments.
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
              <p className="text-[25px] card-title">Zoho Analytics & Report</p>
              <p>
                Visually analyze & unhide insights of your data using business
                intelligence software and data sources.
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

      {/* Our technical team */}
      <Team></Team>
    </div>
  );
};

export default Home;
