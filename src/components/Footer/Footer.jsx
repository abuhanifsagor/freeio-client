import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {

  const navLinkClass = ({ isActive }) =>
    isActive ? "underline opcity-100 text-blue-300" : "hover:underline";

  return (
    <footer className="bg-[#1F4B3F]  text-white pb-5 pt-20 rounded-t-[50px]">
      {/* Top Row: Links & Social */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-b border-[#ffffff3a] pb-6">
        <ul className="flex gap-6 text-sm">
          <li>
            <NavLink to="/terms-conditions" className={navLinkClass}>
              Terms of Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/privacy" className={navLinkClass}>
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink to="/cookies" className={navLinkClass}>
              Cookie Policy
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <h2 className="text-base font-semibold">Follow Us</h2>
          <div className="flex scial gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 duration-200"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 duration-200"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Sections */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        <div>
          <h3 className="font-bold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="opacity-60">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li className="opacity-60">
              <NavLink to="/add-task" className={navLinkClass}>
                Add Task
              </NavLink>
            </li>
            <li className="opacity-60">
              <NavLink to="/freelancers" className={navLinkClass}>
                Freelancers
              </NavLink>
            </li>
            <li className="opacity-60">
              <NavLink to="/clients" className={navLinkClass}>
                Clients
              </NavLink>
            </li>
            <li className="opacity-60">
              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="opacity-60">
              <a href="#" className="hover:underline">
                Design & Creative
              </a>
            </li>
            <li className="opacity-60">
              <a href="#" className="hover:underline">
                Development & IT
              </a>
            </li>
            <li className="opacity-60">
              <a href="#" className="hover:underline">
                Music & Audio
              </a>
            </li>
            <li className="opacity-60">
              <a href="#" className="hover:underline">
                Programming & Tech
              </a>
            </li>
            <li className="opacity-60">
              <a href="#" className="hover:underline">
                Digital Marketing
              </a>
            </li>
            <li className="opacity-60">
              <a href="#" className="hover:underline">
                Finance & Accounting
              </a>
            </li>
            <li className="opacity-60">
              <a href="#" className="hover:underline">
                Writing & Translation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="opacity-60">
              <NavLink to="/contact" className={navLinkClass}>
                Contact Us
              </NavLink>
            </li>
            <li className="opacity-60">
              <a>Help & Support</a>
            </li>
            <li className="opacity-60">
              <a>FAQ Freeio</a>
            </li>

            <li className="opacity-60">
              <a>Services</a>
            </li>
            <li className="opacity-60"></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Subscribe</h3>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Your email"
              className="px-3 py-2 border border-gray-300 rounded-md w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="px-4 py-2 duration-300 bg-[#1d2725] text-white rounded-md hover:bg-[#0d0f0f]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="container opacity-20 text-white mx-auto mt-10" />
      <p className="text-center mt-10">
        Copyright © {new Date().getFullYear()} - All right reserved by ACME
        Industries Ltd
      </p>
    </footer>
  );
};

export default Footer;
