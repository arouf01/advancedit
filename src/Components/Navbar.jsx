import React from "react";
import { Link, NavLink } from "react-router-dom";
import AdvancedITLogo from "../assets/NavBarLogo.png";
const Navbar = () => {
  const menu = [
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/services">Services</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/faq">FAQ</a>
      </li>
      <li>
        <a href="/blogs">Blogs</a>
      </li>
    </>,
  ];

  return (
    <div className="shadow-sm bg-[#1D232A]  text-white">
      <div className="navbar lg:w-[1080px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
          <Link className="flex items-center">
            <img
              src={AdvancedITLogo}
              alt="Advanced IT Logo"
              className="h-8 sm:h-12 md:h-14 lg:h-16 xl:h-18 object-contain brightness-0 invert-[1]"
              width="180px"
              height="50px"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">{menu}</ul>
        </div>
        <div className="navbar-end">
          {
            <a href="/contact" className="btn bg-[#5A38C2]">
              Contact
            </a>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
