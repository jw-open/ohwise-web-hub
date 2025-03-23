
import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";
import { Link } from "react-router-dom";
import { ChevronRight, FileText, Book, Lightbulb, Code, Video, ExternalLink } from "lucide-react";

const Documentation = () => {
  // Sample documentation categories and articles
  const categories = [
    {
      title: "Getting Started",
      icon: <Book className="text-blue-600" size={24} />,
      articles: [
        { title: "Introduction to OhWise", slug: "#introduction" },
        { title: "Quick Start Guide", slug: "#quick-start" },
        { title: "Core Concepts", slug: "#core-concepts" },
        { title: "System Requirements", slug: "#system-requirements" },
      ]
    },
    {
      title: "User Guides",
      icon: <FileText className="text-blue-600" size={24} />,
      articles: [
        { title: "Dashboard Overview", slug: "#dashboard" },
        { title: "Creating AI Workflows", slug: "#workflows" },
        { title: "Agent Configuration", slug: "#agents" },
        { title: "Monitoring & Analytics", slug: "#monitoring" },
      ]
    },
    {
      title: "API Reference",
      icon: <Code className="text-blue-600" size={24} />,
      articles: [
        { title: "Authentication", slug: "#api-auth" },
        { title: "Endpoints", slug: "#endpoints" },
        { title: "Error Handling", slug: "#errors" },
        { title: "Rate Limits", slug: "#rate-limits" },
      ]
    },
    {
      title: "Best Practices",
      icon: <Lightbulb className="text-blue-600" size={24} />,
      articles: [
        { title: "Security Guidelines", slug: "#security" },
        { title: "Performance Optimization", slug: "#performance" },
        { title: "Compliance Framework", slug: "#compliance" },
        { title: "Scaling Strategies", slug: "#scaling" },
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Documentation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Everything you need to know about using OhWise effectively
              </p>
              <div className="relative mx-auto max-w-md">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
                <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h2 className="text-xl font-bold ml-2">{category.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {category.articles.map((article, idx) => (
                      <li key={idx}>
                        <a 
                          href={article.slug} 
                          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <ChevronRight size={16} className="mr-1 flex-shrink-0" />
                          <span>{article.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`#view-all-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    View all <ChevronRight size={14} className="inline" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Updates */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Recent Updates</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <FileText className="text-blue-600" size={18} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium">API Authentication Changes</h3>
                        <span className="ml-2 text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                          Updated
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        We've updated our API authentication process to support multiple authentication methods including OAuth 2.0 and API keys.
                      </p>
                      <div className="mt-2 text-sm">
                        <span className="text-gray-500 dark:text-gray-500">Updated on May 15, 2023</span>
                        <a href="#view-changes" className="ml-4 text-blue-600 dark:text-blue-400 hover:underline">
                          View changes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <FileText className="text-green-600" size={18} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium">New Agent Configuration Guide</h3>
                        <span className="ml-2 text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                          New
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        A comprehensive guide on configuring multi-agent systems for various industry use cases.
                      </p>
                      <div className="mt-2 text-sm">
                        <span className="text-gray-500 dark:text-gray-500">Published on May 10, 2023</span>
                        <a href="#read-guide" className="ml-4 text-blue-600 dark:text-blue-400 hover:underline">
                          Read guide
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <Video className="text-blue-600 mb-4" size={32} />
                <h3 className="text-lg font-bold mb-2">Video Tutorials</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Step-by-step video guides for visual learners.
                </p>
                <a href="#videos" className="text-blue-600 dark:text-blue-400 hover:underline font-medium mt-auto flex items-center">
                  Watch now <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <Code className="text-blue-600 mb-4" size={32} />
                <h3 className="text-lg font-bold mb-2">Code Samples</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Ready-to-use code examples for common scenarios.
                </p>
                <a href="#code" className="text-blue-600 dark:text-blue-400 hover:underline font-medium mt-auto flex items-center">
                  Browse samples <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <Lightbulb className="text-blue-600 mb-4" size={32} />
                <h3 className="text-lg font-bold mb-2">Use Cases</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Real-world examples of OhWise in action.
                </p>
                <a href="#use-cases" className="text-blue-600 dark:text-blue-400 hover:underline font-medium mt-auto flex items-center">
                  Explore cases <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          title="Need help with implementation?"
          subtitle="Our team of experts is ready to assist with your specific needs."
          primaryButtonText="Contact Support"
          primaryButtonLink="/contact"
          secondaryButtonText="Join Community"
          secondaryButtonLink="#"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
