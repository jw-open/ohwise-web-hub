
import React, { useEffect, useRef } from "react";
import { Database, Users, Brain, Sparkles, Code, ShieldCheck } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Text-to-SQL",
    description: "Convert natural language queries into SQL code, empowering non-technical users to access data insights.",
    icon: <Database className="w-6 h-6 text-blue-600" />
  },
  {
    id: 2,
    title: "Customer Support Automation",
    description: "Automated response systems that understand context and provide helpful, human-like support.",
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    id: 3,
    title: "Knowledge Graph (GraphRAG)",
    description: "Build comprehensive knowledge graphs to represent complex relationships and enable advanced reasoning.",
    icon: <Brain className="w-6 h-6 text-blue-600" />
  },
  {
    id: 4,
    title: "Multi-Agent Collaboration",
    description: "Specialized AI agents working together to solve complex problems through coordinated workflows.",
    icon: <Sparkles className="w-6 h-6 text-blue-600" />
  },
  {
    id: 5,
    title: "API Integration",
    description: "Seamlessly connect with existing tools and platforms through robust API connectivity.",
    icon: <Code className="w-6 h-6 text-blue-600" />
  },
  {
    id: 6,
    title: "Enterprise-Grade Security",
    description: "End-to-end encryption and security protocols to keep your data and operations protected.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  }
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={featuresRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Modern AI Operations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Ohwise combines cutting-edge AI technologies to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="animate-on-scroll p-6 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-blue-100 dark:hover:border-blue-900 hover:shadow-md transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
