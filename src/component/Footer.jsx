import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaDribbble } from 'react-icons/fa';
import r from "../image/R.png";
import logo from "../image/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
            {/* Logo and Company Name */}
            <div className="flex items-center mb-4">
              <img src={logo} alt="R" className="w-8 h-8 mr-2" />
              <img src={r} alt="RIYANSH Enterprise" className="h-8" />
            </div>
            {/* Company Description */}
            <p className="text-gray-700 text-sm mb-4">This growth plan will help you reach your resolutions and achieve the goals you have been striving towards.</p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <FaTwitter className="text-gray-500 hover:text-blue-500 cursor-pointer" size={20} />
              <FaLinkedin className="text-gray-500 hover:text-blue-800 cursor-pointer" size={20} />
              <FaFacebook className="text-gray-500 hover:text-blue-600 cursor-pointer" size={20} />
              <FaGithub className="text-gray-600 hover:text-black cursor-pointer" size={20} />
              <FaDribbble className="text-gray-500 hover:text-black cursor-pointer" size={20} />
            </div>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h6 className="font-bold mb-2">Resources</h6>
            <ul className="space-y-2">
              <li><a href="##" className="text-gray-700 hover:text-blue-500 text-sm">About Us</a></li>
              <li><a href="##" className="text-gray-700 hover:text-blue-500 text-sm">Contact Us</a></li>
              <li><a href="##" className="text-gray-700 hover:text-blue-500 text-sm">Collection</a></li>
              <li><a href="##" className="text-gray-700 hover:text-blue-500 text-sm">Custom Diamond</a></li>
            </ul>
          </div>

          {/* Diamond */}
          <div className="col-span-1">
            <h6 className="font-bold mb-2">Diamond</h6>
            <ul className="space-y-2">
              <li><a href="##" className="text-gray-700 hover:text-blue-500 text-sm">Salt and Pepper</a></li>
              <li><a href="##" className="text-gray-700 hover:text-blue-500 text-sm">White</a></li>
              <li><a href="##" className="text-gray-700 hover:text-blue-500 text-sm">Lab Grown</a></li>
              <li><a href="##" className="text-gray-700 hover:text-blue-500 text-sm">Moissanite</a></li>
            </ul>
          </div>

          {/* Legal Policy */}
          <div className="col-span-1">
            <h6 className="font-bold mb-2">Legal Policy</h6>
            <ul className="space-y-2">
              <li><a href="##" className="text-gray-700 hover:text-blue-500 text-sm">Terms</a></li>
              <li><a href="##" className="text-gray-700 hover:text-blue-500 text-sm">Privacy</a></li>
              <li><a href="##" className="text-gray-700 hover:text-blue-500 text-sm">Shipping</a></li>
              <li><a href="##" className="text-gray-700 hover:text-blue-500 text-sm">Refund</a></li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-span-1">
            <h6 className="font-bold mb-2">Address</h6>
            <p className="text-gray-700 text-sm">
              I-604 Shreenidhi Residency
              <br />
              Near Sudama chowk,
              <br />
              Motavarachha,
              <br />
              Surat, Gujarat, 394101
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-700 text-sm">© 2025 RIYANSH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
