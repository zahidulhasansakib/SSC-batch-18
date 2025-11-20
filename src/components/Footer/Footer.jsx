import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10 w-full">
      {/* FULL WIDTH GRID → NO CONTAINER */}
      <div className="px-10 md:px-20 w-full grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact Us</h3>
          <p>Email: support@winterpets.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-white">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social + Privacy */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Stay Connected
          </h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
          </div>

          <p className="mt-3">
            <Link to="/privacy-policy" className="hover:text-white underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 mt-6 text-xs">
        © {new Date().getFullYear()} Winter Pets Care — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
