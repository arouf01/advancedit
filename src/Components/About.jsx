import React from "react";
import { motion } from "motion/react";
import aboutUs from "../assets/aboutUs.png";
import Established from "../assets/Established.jpg";
import whoAreWe from "../assets/whoAreWe.png";

import "../../src/index.css";
import Team from "./Team";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>About | Advanced IT</title>
        <link rel="canonical" href="https://advanced-it.top/about" />
      </Helmet>
      {/* About Us */}
      <div className="w-full mb-16   bg-[#F5F5F5]">
        <div className="hero mx-auto text-black">
          <div className="hero-content lg:w-[1080px] flex flex-col-reverse lg:flex-row-reverse items-center gap-10 px-5">
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
      <div className="lg:w-[1080px] p-5 md:p-12 mx-auto">
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

      {/* Our technical team */}
      <Team></Team>
    </div>
  );
};

export default About;
