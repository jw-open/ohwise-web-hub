
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Revolutionize Your Operations with Multi-Agent AI",
  subtitle = "Ohwise is the ultimate AI Ops system that seamlessly integrates text-to-SQL, customer support automation, knowledge graphs, and multi-agent collaboration.",
  primaryButtonText = "Get Started",
  primaryButtonLink = "#",
  secondaryButtonText = "Watch Demo",
  secondaryButtonLink = "#",
}) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(1 - scrollY / 500, 0);
        const transform = `translateY(${scrollY / 4}px)`;
        
        // Apply parallax effect
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = transform;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div 
          ref={heroRef}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-in" style={{ animationDelay: "0.1s" }}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <Link to={primaryButtonLink}>
              <Button 
                size="lg" 
                variant="primary"
                rightIcon={<ArrowRight size={16} />}
              >
                {primaryButtonText}
              </Button>
            </Link>
            <Link to={secondaryButtonLink}>
              <Button 
                size="lg" 
                variant="outline"
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="mt-16 md:mt-20 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="glass-card rounded-xl overflow-hidden subtle-shadow">
            <div className="w-full h-72 md:h-96 bg-gray-100 dark:bg-gray-800 relative">
              {/* Abstract UI Representation */}
              <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4">
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="h-20 rounded-lg bg-white/80 dark:bg-gray-700/80 shadow-sm flex items-center justify-center text-center p-2">
                    <span className="text-sm font-medium">Text-to-SQL Processing</span>
                  </div>
                  <div className="h-36 rounded-lg bg-white/80 dark:bg-gray-700/80 shadow-sm flex items-center justify-center text-center p-2">
                    <span className="text-sm font-medium">Customer Support Module</span>
                  </div>
                  <div className="h-20 rounded-lg bg-white/80 dark:bg-gray-700/80 shadow-sm flex items-center justify-center text-center p-2">
                    <span className="text-sm font-medium">API Integration</span>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="h-48 rounded-lg bg-blue-600/80 text-white shadow-sm flex items-center justify-center text-center p-2">
                    <span className="text-sm font-medium">Ohwise Core Engine</span>
                  </div>
                  <div className="h-36 rounded-lg bg-white/80 dark:bg-gray-700/80 shadow-sm flex items-center justify-center text-center p-2">
                    <span className="text-sm font-medium">Knowledge Graph Builder</span>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="h-32 rounded-lg bg-white/80 dark:bg-gray-700/80 shadow-sm flex items-center justify-center text-center p-2">
                    <span className="text-sm font-medium">Multi-Agent Collaboration</span>
                  </div>
                  <div className="h-24 rounded-lg bg-white/80 dark:bg-gray-700/80 shadow-sm flex items-center justify-center text-center p-2">
                    <span className="text-sm font-medium">Analytics Dashboard</span>
                  </div>
                  <div className="h-20 rounded-lg bg-white/80 dark:bg-gray-700/80 shadow-sm flex items-center justify-center text-center p-2">
                    <span className="text-sm font-medium">Secure Data Exchange</span>
                  </div>
                </div>
                
                {/* Animated Connection Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg width="100%" height="100%" stroke="currentColor" className="text-blue-500/20 dark:text-blue-400/20">
                    <line x1="33%" y1="30%" x2="50%" y2="25%" strokeWidth="2" />
                    <line x1="33%" y1="50%" x2="50%" y2="40%" strokeWidth="2" />
                    <line x1="33%" y1="70%" x2="50%" y2="70%" strokeWidth="2" />
                    <line x1="66%" y1="20%" x2="50%" y2="25%" strokeWidth="2" />
                    <line x1="66%" y1="45%" x2="50%" y2="40%" strokeWidth="2" />
                    <line x1="66%" y1="70%" x2="50%" y2="70%" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white dark:fill-gray-800"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
