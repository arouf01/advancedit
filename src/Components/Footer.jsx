import React from "react";
import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 p-8 md:p-12 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {["/", "/services", "/contact", "/about", "/faq", "/blogs"].map(
            (path, index) => (
              <NavLink
                key={index}
                to={path}
                className="text-gray-300 hover:text-[#5D138B] font-medium transition"
              >
                {path === "/"
                  ? "Home"
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            )
          )}
        </nav>

        {/* Social Icons */}
        <nav className="flex justify-center gap-6 text-2xl">
          <a
            href="https://wa.me/1749569015"
            target="_blank"
            rel="nofollow external noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/abdur-rouf-ar/"
            target="_blank"
            rel="nofollow external noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/advance.it.center01/"
            target="_blank"
            rel="nofollow external noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>
        </nav>

        {/* Copyright */}
        <aside className="text-sm text-center text-gray-400">
          © {new Date().getFullYear()} - All rights reserved by{" "}
          <strong className="text-[#5D138B]">Advanced IT</strong>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
