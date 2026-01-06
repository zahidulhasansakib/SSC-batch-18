import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 py-10 mt-16">
      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* School Info */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-yellow-300">
            Perpeti High School
          </h3>
          <p className="mb-1">Batch: SSC 2018</p>
          <p className="mb-1">Contact: +880 1234-567890</p>
          <p className="mb-1">Email: support@perpetihigh.edu.bd</p>
          <p className="mb-1">Address: Dhaka, Bangladesh</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-yellow-300">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 transition-colors">
                Students
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:text-yellow-400 transition-colors">
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:text-yellow-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Designer */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-yellow-300">
            Stay Connected
          </h3>
          <div className="flex gap-4 text-2xl mb-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <FaYoutube />
            </a>
          </div>
          <p className="text-sm mb-2">
            <Link
              to="/privacy-policy"
              className="underline hover:text-yellow-400">
              Privacy Policy
            </Link>
          </p>
          <p className="text-lg font-extrabold mt-2">
            Designed by{" "}
            <span className="text-yellow-400 uppercase tracking-wide">
              Md Zahidul Hasan Sakib
            </span>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-gray-400 mt-10 text-sm">
        © {new Date().getFullYear()} Perpeti High School — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
