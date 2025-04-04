
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to transform your operations with AI?",
  subtitle = "Join innovative companies already using Ohwise to revolutionize their workflows.",
  primaryButtonText = "Get Started",
  primaryButtonLink = "https://cloud.ohwise.com/",
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative overflow-hidden rounded-2xl p-8 md:p-12 glass-effect bg-blue-600/20 border-blue-400/20">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 -right-4 w-32 h-32 bg-white/10 rounded-full filter blur-2xl"></div>
            <div className="absolute bottom-0 -left-4 w-32 h-32 bg-white/10 rounded-full filter blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {title}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={primaryButtonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2"
                >
                  {primaryButtonText}
                  <ArrowRight size={16} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
