import { NavLink } from "react-router-dom";
import AdvancedITLogo from "../assets/logo.png";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Blogs", path: "/blogs" },
  ];

  const menu = (
    <>
      {navItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-bold transition-all duration-300 ${
                isActive
                  ? "bg-[#5D138B] text-white shadow-md"
                  : "hover:bg-[#5D138B] hover:text-white"
              }`
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="shadow-md bg-[#1D232A] text-white fixed top-0 left-0 right-0 z-50">
      <div className="navbar lg:w-[1080px] mx-auto min-h-[80px]">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:scale-110 transition-transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1D232A] text-white rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
            >
              {menu}
            </ul>
          </div>
          <NavLink
            to="/"
            className="flex items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={AdvancedITLogo}
              alt="Advanced IT Logo"
              title="Advanced IT Logo"
              className="h-12 md:h-14 lg:h-16 object-contain brightness-0 invert"
              width="100%"
              height="60"
            />
          </NavLink>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{menu}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <NavLink
            to="/contact"
            className="btn border-0 bg-[#5D138B] hover:bg-[#4A0F6D] text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
