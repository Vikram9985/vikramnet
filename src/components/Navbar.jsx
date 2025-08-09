import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
<nav className="shadow-md fixed top-0 left-0 w-full z-50 bg-black text-#FFFFFF">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Left Side - Website Name */}
          <div className="text-xl font-bold text-gray-800 text-white">
            Web
          </div>

          {/* Middle - Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-500 transition text-white">Home</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-500 transition text-white">Portfolio</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-500 transition text-white">Skill</a>
            <a href="#about" className="text-gray-700 hover:text-blue-500 transition text-white">About</a>
          </div>

          {/* Right Side - Contact Us Button (Desktop) */}
          <div className="hidden md:block">
            <a
              // href="#contact"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <a href="#portfolio" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Portfolio</a>
          <a href="#skills" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Skill</a>
          <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
