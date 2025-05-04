import React from "react";
import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center bg-base-200 text-base-content p-6 md:p-10">
      <nav className="flex flex-wrap justify-center gap-4 mb-4">
        <NavLink to="/" className="link link-hover">
          Home
        </NavLink>
        <NavLink to="/services" className="link link-hover">
          Services
        </NavLink>
        <NavLink to="/contact" className="link link-hover">
          Contact
        </NavLink>
        <NavLink to="/about" className="link link-hover">
          About
        </NavLink>
        <NavLink to="/faq" className="link link-hover">
          FAQ
        </NavLink>
      </nav>

      <nav className="flex justify-center gap-6 mb-4">
        <a
          href="https://wa.me/1749569015"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-green-500"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/abdur-rouf-ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-600"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.facebook.com/advance.it.center01/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-700"
        >
          <FaFacebook />
        </a>
      </nav>

      <aside className="text-sm text-center">
        <p>
          © {new Date().getFullYear()} - All rights reserved by{" "}
          <strong>Advanced IT</strong>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
