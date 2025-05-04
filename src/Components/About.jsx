import React from "react";
import { motion } from "motion/react";
import aboutUs from "../assets/aboutUs.png";
import Established from "../assets/Established.jpg";
import whoAreWe from "../assets/whoAreWe.png";

import mizan from "../assets/mizan.png";
import morshed from "../assets/morshed.jpg";
import arouf from "../assets/a.rouf.jpg";
import raihan from "../assets/raihan.jpg";
import sarwar from "../assets/sarwar.png";
import naim from "../assets/naim.jpg";
import "../../src/index.css";
const About = () => {
  return (
    <div>
      {/* About Us */}
      <div className="w-full p-6 md:p-12   bg-[#F5F5F5]">
        <div className="hero mx-auto text-black">
          <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={aboutUs}
                alt="Programming"
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
      <div className="w-[70%] p-6 md:p-12 mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          <img
            className="w-full lg:w-1/2 max-w-md"
            src={Established}
            alt="About Us"
          />
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Established in <span className="animated-text">2023</span>
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
            alt="About Us"
          />
        </div>
      </div>

      {/* Our Team */}
      <div className="w-full bg-[#F5F5F5] text-center p-15 mx-auto">
        <div>
          <h2 className="text-4xl font-bold">
            Our Technical <span className="animated-text">Team</span>
          </h2>
          {/* Divider */}
          <div className="divider divider-primary w-[10%] mx-auto"></div>

          {/* Cards */}
          <div className="w-5/6 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mb-15">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card  w-full max-w-sm mx-auto shadow-sm"
            >
              <figure className="flex justify-center pt-5">
                <img
                  src={mizan}
                  alt="Card"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Al Mizan</h2>
                <p>Website Designer || WordPress Expert</p>
              </div>
            </motion.div>
            {/* card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card  w-full max-w-sm mx-auto shadow-sm"
            >
              <figure className="flex justify-center pt-5">
                <img
                  src={raihan}
                  alt="Card"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Raihan Uddin</h2>
                <p>Zoho Developer</p>
              </div>
            </motion.div>
            {/* card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card  w-full max-w-sm mx-auto shadow-sm"
            >
              <figure className="flex justify-center pt-5">
                <img
                  src={arouf}
                  alt="Card"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Abdur Rouf</h2>
                <p>Zoho Developer</p>
              </div>
            </motion.div>
            {/* card 4 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card  w-full max-w-sm mx-auto shadow-sm"
            >
              <figure className="flex justify-center pt-5">
                <img
                  src={morshed}
                  alt="Card"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Morshed Ali</h2>
                <p>Zoho Developer</p>
              </div>
            </motion.div>
            {/* card 5 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card  w-full max-w-sm mx-auto shadow-sm"
            >
              <figure className="flex justify-center pt-5">
                <img
                  src={naim}
                  alt="Card"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Naim Ali</h2>
                <p>Zoho Developer</p>
              </div>
            </motion.div>
            {/* card 6 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card w-full max-w-sm mx-auto shadow-sm"
            >
              <figure className="flex justify-center pt-5">
                <img
                  src={sarwar}
                  alt="Card"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Sarwar Jahan</h2>
                <p>Zoho Developer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
