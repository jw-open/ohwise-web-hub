
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <Logo size={32} />
              <span className="font-display font-bold text-xl">OhWise</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A multi-agent AI Ops system for modern enterprises
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://github.com/jw-open/"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Product column */}
          <div className="col-span-1">
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/product"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/documentation"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div className="col-span-1">
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div className="col-span-1">
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            © 2026 OhWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
