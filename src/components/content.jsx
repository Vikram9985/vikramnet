import React from "react";
import logo from "../assets/image.jpg";
import { FaInstagram, FaBehance, FaLinkedin, FaTwitter, FaTelegram, FaMedium } from "react-icons/fa";

function Content() {
  return (
    <div>

    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 mt-16 w-full" id="home">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2  items-center">
        
        {/* LEFT SECTION */}
        <div>
          {/* Heading */}
          <h1 className="text-7xl md:text-7xl font-extrabold leading-tight">
            PRODUCT <br /> DESIGNER
          </h1>

          {/* Gradient Name */}
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 text-transparent bg-clip-text mt-4">
            CRISTIAN MUÑOZ
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-2xl">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaBehance className="hover:text-blue-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
            <FaTelegram className="hover:text-sky-500 cursor-pointer" />
            <FaMedium className="hover:text-gray-400 cursor-pointer" />
          </div>

          {/* Download Button */}
          <button className="mt-6 bg-gray-800 px-6 py-3 rounded-md hover:bg-gray-700 transition">
            Download Curriculum Vitae ©
          </button>
        </div>

        {/* RIGHT SECTION - IMAGE */}
        <div className="flex justify-center">
  <img
    src={logo}
    alt="Workspace"
    className="hidden lg:block rounded-lg shadow-lg w-[1000px] h-[500px] object-cover"
  />
</div>


      </div>
      
    </div>

    
  </div>

  );
}

export default Content;
