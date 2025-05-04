import React from "react";
import { Link, NavLink } from "react-router-dom";
import AdvancedITLogo from "../assets/NavBarLogo.png";
const Navbar = () => {
  const menu = [
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
    </>,
  ];

  return (
    <div className="navbar shadow-sm bg-[#1D232A]  text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="  btn btn-ghost lg:hidden">
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
            className="h-8 sm:h-12 md:h-14 lg:h-16 xl:h-18 w-auto object-contain"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 ">{menu}</ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
};

export default Navbar;
