import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center text-2xl font-bold tracking-wide group"
            >
              <span className="text-white">SHOP</span>
              <span className="text-[#368286] transition duration-300">
                SENSE
              </span>
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-gray-400 max-w-xs">
              Your ultimate destination for premium products and seamless
              shopping experience.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/Tshirts"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  T-shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/Hoodies"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Hoodies
                </Link>
              </li>
              <li>
                <Link
                  href="/Mugs"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Mugs
                </Link>
              </li>
              <li>
                <Link
                  href="/Jeans"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Jeans
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 ShopSense. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
