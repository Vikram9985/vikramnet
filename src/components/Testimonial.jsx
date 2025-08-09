import React from "react";
// import { Shield } from "lucide-react";
import footerImg from "../assets/image.jpg"; // replace with your image
function Testimonial() {
  return (
    <div className="bg-black text-white p-3" id="about">
      {/* Testimonial */}
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 py-20 text-center">
        <h2 className="text-xl font-bold mb-4">Kaleb Lechtenberg</h2>
        <p className="max-w-3xl mx-auto text-lg font-light">
          "Working with this freelancer has been great. His attention to detail is
          unparalleled and finished all work ahead of schedule. Will gladly send
          more work and I do not hesitate to recommend him to you on your project
          also."
        </p>
        <div className="flex justify-center mt-6">
          {/* <Shield size={32} /> */}
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-black py-10">
        <div className="bg-purple-500 flex items-center gap-6 rounded-lg max-w-5xl mx-auto p-6">
          {/* Image */}
          <img
            src={footerImg}
            alt="Laptop Workspace"
            className="w-32 h-32 object-cover rounded-md"
          />

          {/* Text */}
          <div className="text-white text-sm">
            <p className="font-medium">
              Thanks for visiting my website
            </p>
            <p className="opacity-80">
              If you have any questions you can write me to any of my social
              networks, I am sure I will answer you.
            </p>
          </div>
        </div>
      </div>
      

      {/* Footer */}
      <footer className="flex justify-between items-center max-w-6xl mx-auto py-6 border-t border-gray-800 p-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">⚡ Web</span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm opacity-80">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#about" className="hover:text-white">About Me</a>
        </div>
      </footer>
    </div>
  );
}

export default Testimonial;
