import React from "react";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "../ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Start building on your own infrastructure.",
  subtitle = "Open source core. Bring your own LLM. No data leaves your server.",
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
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={primaryButtonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white flex items-center gap-2 w-full sm:w-auto"
              >
                {primaryButtonText}
                <ArrowRight size={16} />
              </Button>
            </a>
            <a
              href="https://github.com/jw-open/graph2sql"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2 w-full sm:w-auto"
              >
                <Github size={16} />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
