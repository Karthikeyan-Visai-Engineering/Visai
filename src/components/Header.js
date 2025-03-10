import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/visailogo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <Link to="/" className=" ">
          <img src={logo}  alt="Company Logo" className="logo-img " />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-xl font-extrabold text-blue-900">
            <li>
              <Link
                to="/"
                className="hover:text-red-700 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-red-700 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-red-700 transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-700 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Full-Screen Mobile Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-gray-900 to-gray-700 bg-opacity-90 flex flex-col justify-center items-center z-50 transition duration-300">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

          {/* Navigation Links */}
          <ul className="text-white text-2xl space-y-8">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-yellow-300 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-300 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
