import React from "react";
import { motion } from "motion/react";
import contactUs from "../assets/contactUs.png";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { TbBrandFiverr } from "react-icons/tb";

import "../../src/index.css";
const Contact = () => {
  return (
    <div>
      <div className="w-full bg-[#F5F5F5]">
        <div className="hero mx-auto text-black">
          <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={contactUs}
                alt="Programming"
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
      <div className="w-full text-center px-4 py-12 md:py-20 mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Have Any{" "}
            <span className="animated-text text-primary">Questions?</span>
          </h2>

          {/* Divider */}
          <div className="divider divider-primary w-1/5 sm:w-[15%] md:w-[10%] mx-auto"></div>

          {/* Cards */}
          <div className="w-full max-w-4xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {/* Whatsapp */}
            <a
              href="https://wa.me/1749569015"
              target="_blank"
              rel="noopener noreferrer"
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
                  <h2 className="card-title">WhatsApp</h2>
                </div>
              </motion.div>
            </a>
            {/* Email */}
            <a
              href="mailto:work.abdur.rouf@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
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
                  <h2 className="card-title">Email</h2>
                </div>
              </motion.div>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/advance.it.center01/"
              target="_blank"
              rel="noopener noreferrer"
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
                  <h2 className="card-title">Facebook</h2>
                </div>
              </motion.div>
            </a>
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/abdur-rouf-ar/"
              target="_blank"
              rel="noopener noreferrer"
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
                  <h2 className="card-title">LinkedIn</h2>
                </div>
              </motion.div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.fiverr.com/dev_abdur_rouf"
              target="_blank"
              rel="noopener noreferrer"
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
                  <h2 className="card-title">Fiverr</h2>
                </div>
              </motion.div>
            </a>
            {/* Fiverr */}
            <a
              href="https://github.com/arouf01"
              target="_blank"
              rel="noopener noreferrer"
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
                  <h2 className="card-title">GitHub</h2>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
