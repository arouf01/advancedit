import React from "react";
import faq from "../assets/faq.png";
import { motion } from "motion/react";
const Faq = () => {
  return (
    <div>
      <div className="w-full p-6 md:p-12 lg:p-20 mb-16 bg-[#F5F5F5]">
        <div className="hero mx-auto text-black">
          <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={faq}
                alt="Programming"
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
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked <span className="animated-text">Questions</span>
          </h2>

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
              >
                LinkedIn
              </a>
              ,
              <a
                href="https://www.facebook.com/advance.it.center01/"
                className="text-primary underline ml-1"
                target="_blank"
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
