import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "A multi-agent AI platform built for serious engineering.",
  subtitle = "OhWise handles orchestration, context retrieval, and agent coordination so engineers can focus on the decisions.",
  primaryButtonText = "Get started",
  primaryButtonLink = "https://cloud.ohwise.com/",
}) => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
            {subtitle}
          </p>
          <a
            href={primaryButtonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white flex items-center gap-2"
            >
              {primaryButtonText}
              <ArrowRight size={16} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
