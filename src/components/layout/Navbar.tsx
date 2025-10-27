
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  // Check if current route is active
  const isActive = (path: string) => location.pathname === path;

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-sm" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative h-8 w-8 mr-3">
              {/* Gradient circle matching favicon */}
              <div className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-br from-indigo-600 to-purple-600"></div>
              {/* Inner O shape with nodes */}
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                {/* Outer O circle */}
                <div className="h-6 w-6 rounded-full border-2 border-white"></div>
                {/* Central node */}
                <div className="absolute h-2 w-2 rounded-full bg-white"></div>
                {/* Top node */}
                <div className="absolute h-1.5 w-1.5 rounded-full bg-white -top-0.5 left-1/2 transform -translate-x-1/2"></div>
                {/* Right node */}
                <div className="absolute h-1.5 w-1.5 rounded-full bg-white right-0 top-1/2 transform -translate-y-1/2"></div>
                {/* Bottom node */}
                <div className="absolute h-1.5 w-1.5 rounded-full bg-white -bottom-0.5 left-1/2 transform -translate-x-1/2"></div>
                {/* Left node */}
                <div className="absolute h-1.5 w-1.5 rounded-full bg-white left-0 top-1/2 transform -translate-y-1/2"></div>
              </div>
            </div>
            <span className="font-display font-bold text-xl">OhWise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/product" 
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive("/product") 
                  ? "text-blue-600 dark:text-blue-400" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              )}
            >
              Product
            </Link>
            <Link 
              to="/documentation" 
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive("/documentation") 
                  ? "text-blue-600 dark:text-blue-400" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              )}
            >
              Documentation
            </Link>
            <Link 
              to="/blog" 
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive("/blog") 
                  ? "text-blue-600 dark:text-blue-400" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              )}
            >
              Blog
            </Link>
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://cloud.ohwise.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sign in
            </a>
            <a 
              href="https://cloud.ohwise.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium transition-all hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow"
            >
              Sign up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col pt-20 px-4 transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        )}
      >
        <Link 
          to="/product" 
          className={cn(
            "py-3 px-4 rounded-md font-medium border-b border-gray-100 dark:border-gray-800",
            isActive("/product") 
              ? "text-blue-600 dark:text-blue-400" 
              : "text-gray-700 dark:text-gray-300"
          )}
        >
          Product
        </Link>
        <Link 
          to="/documentation" 
          className={cn(
            "py-3 px-4 rounded-md font-medium border-b border-gray-100 dark:border-gray-800",
            isActive("/documentation") 
              ? "text-blue-600 dark:text-blue-400" 
              : "text-gray-700 dark:text-gray-300"
          )}
        >
          Documentation
        </Link>
        <Link 
          to="/blog" 
          className={cn(
            "py-3 px-4 rounded-md font-medium border-b border-gray-100 dark:border-gray-800",
            isActive("/blog") 
              ? "text-blue-600 dark:text-blue-400" 
              : "text-gray-700 dark:text-gray-300"
          )}
        >
          Blog
        </Link>
        <div className="mt-4 flex flex-col space-y-3 px-4">
          <a 
            href="https://cloud.ohwise.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 text-center rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium"
          >
            Sign in
          </a>
          <a 
            href="https://cloud.ohwise.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 text-center rounded-md bg-blue-600 text-white font-medium"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
