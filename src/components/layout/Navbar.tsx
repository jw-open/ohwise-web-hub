
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const linkClass = (path: string) =>
    cn(
      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
      isActive(path)
        ? "text-blue-600 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    );

  const mobileLinkClass = (path: string) =>
    cn(
      "py-3 px-4 rounded-md font-medium text-base border-b border-gray-100 dark:border-gray-800",
      isActive(path)
        ? "text-blue-600 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300"
    );

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
          <Link to="/" className="flex items-center gap-2.5">
            <Logo size={32} />
            <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
              OhWise
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/product" className={linkClass("/product")}>Product</Link>
            <Link to="/documentation" className={linkClass("/documentation")}>Documentation</Link>
            <Link to="/blog" className={linkClass("/blog")}>Blog</Link>
            <Link
              to="/open-source"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive("/open-source")
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              )}
            >
              Open Source
            </Link>
            <Link to="/about" className={linkClass("/about")}>About</Link>
          </div>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="https://github.com/jw-open"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://cloud.ohwise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Sign in
            </a>
            <a
              href="https://cloud.ohwise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium transition-all hover:bg-gray-700 dark:hover:bg-gray-100"
            >
              Get started
            </a>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "absolute top-full left-0 w-full md:hidden overflow-hidden",
          "transition-[max-height,opacity] duration-300 ease-in-out",
          "bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/10 shadow-md",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col">
          <Link to="/product" className={mobileLinkClass("/product")}>Product</Link>
          <Link to="/documentation" className={mobileLinkClass("/documentation")}>Documentation</Link>
          <Link to="/blog" className={mobileLinkClass("/blog")}>Blog</Link>
          <Link
            to="/open-source"
            className={cn(
              "py-3 px-4 rounded-md font-medium text-base border-b border-gray-100 dark:border-gray-800",
              isActive("/open-source")
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-gray-700 dark:text-gray-300"
            )}
          >
            Open Source
          </Link>
          <Link to="/about" className={mobileLinkClass("/about")}>About</Link>
          <div className="py-4 flex flex-col gap-3 px-4">
            <a
              href="https://cloud.ohwise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm"
            >
              Sign in
            </a>
            <a
              href="https://cloud.ohwise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
