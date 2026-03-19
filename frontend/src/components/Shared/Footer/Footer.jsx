import React from "react";
import logo from '../../../assets/images/live-link-logo.png'

const Footer = () => {
  return (
    <footer className="bg-white mt-10">
      <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col items-center text-center space-y-6">
        
        {/* Logo & Description */}
        <div>
          <img className="max-w-7xl mx-auto" src={logo} alt="logo" width={150} height={100}  />
          <p className="mt-2 text-gray-600 text-sm max-w-md mx-auto">
            A modern microloan request & approval system designed to simplify financial workflows.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
          <a href="/" className="hover:text-black">Home</a>
          <a href="/all-loans" className="hover:text-black">All Loans</a>
          <a href="/about" className="hover:text-black">About Us</a>
          <a href="/contact" className="hover:text-black">Contact</a>
        </div>

        {/* Social */}
        <div className="flex gap-5 text-gray-500 text-sm">
          <a href="#" className="hover:text-black">X</a>
          <a href="#" className="hover:text-black">Facebook</a>
          <a href="#" className="hover:text-black">LinkedIn</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} LoanLink. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;