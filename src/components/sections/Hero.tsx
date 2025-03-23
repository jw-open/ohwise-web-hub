
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

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
  subtitle = "OhWise is the ultimate AI Ops system that seamlessly integrates text-to-SQL, customer support automation, knowledge graphs, and multi-agent collaboration.",
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
                className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
              >
                {primaryButtonText}
                <ArrowRight size={16} />
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

        {/* Simplified Feature Visual */}
        <div className="mt-16 md:mt-20 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="glass-card rounded-xl overflow-hidden subtle-shadow">
            <div className="w-full h-auto md:h-96 bg-white dark:bg-gray-800 relative p-8">
              {/* Simplified and more intuitive visual representation */}
              <div className="flex flex-col items-center mb-8">
                <h3 className="text-xl font-semibold mb-2 text-center">How OhWise Works</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
                  Your business data flows through our AI system to deliver powerful insights and automation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Connect Your Data</h4>
                  <p className="text-gray-600 dark:text-gray-300">Easily connect your business data from any source without technical complexity</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">AI-Powered Analysis</h4>
                  <p className="text-gray-600 dark:text-gray-300">Our AI agents work together to understand and process your data intelligently</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Actionable Results</h4>
                  <p className="text-gray-600 dark:text-gray-300">Get automated insights, support responses, and business intelligence you can act on</p>
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
