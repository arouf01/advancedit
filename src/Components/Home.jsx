import React from "react";

import "../../src/index.css";
import programmingImage from "../assets/programming.png";
import mizan from "../assets/mizan.png";
import morshed from "../assets/morshed.jpg";
import arouf from "../assets/a.rouf.jpg";
import raihan from "../assets/raihan.jpg";
import sarwar from "../assets/sarwar.png";
import naim from "../assets/naim.jpg";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Team from "./Team";
const Home = () => {
  return (
    <div>
      <div className="w-full p-10 mb-16 bg-[#F5F5F5]">
        <div className="hero mx-auto text-black">
          <div className="hero-content lg:w-[1080px] md:w-full flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={programmingImage}
                alt="Programming"
                className="w-full max-w-md md:max-w-lg lg:max-w-[80%] rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
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
        <div className="lg:w-[1080px] mx-auto justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
          {/* Card 1 */}
          <div className="card w-full max-w-sm text-black shadow card-xl services">
            <div className="card-body">
              <h2 className="card-title">Zoho Customization</h2>
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
              <h2 className="card-title">Zoho Integration</h2>
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
              <h2 className="card-title">Zoho One</h2>
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
              <h2 className="card-title">Zoho Consulting</h2>
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
              <h2 className="card-title">Zoho Website</h2>
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
              <h2 className="card-title">Zoho Analytics & Report</h2>
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
