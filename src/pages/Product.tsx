
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";
import { CheckCircle, Zap, Database, Users, Brain, ArrowRight } from "lucide-react";

const Product = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Add scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in">
                Meet Ohwise
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-in">
                The complete multi-agent AI Ops system that streamlines your operations
                and enhances productivity across your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Text-to-SQL Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="mb-4 inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Text-to-SQL Capabilities
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Convert natural language to SQL queries instantly, enabling non-technical team members to access database insights without coding knowledge.
                </p>
                <ul className="space-y-3">
                  {[
                    "Natural language processing for database queries",
                    "Support for complex join operations and subqueries",
                    "Schema-aware query generation",
                    "Query optimization and validation",
                    "Integration with popular database systems"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll glass-card rounded-xl overflow-hidden subtle-shadow">
                <div className="p-6 bg-gray-50 dark:bg-gray-800">
                  <div className="rounded-lg bg-white dark:bg-gray-700 p-4 shadow-sm">
                    <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-mono bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">User Query:</span>
                    </div>
                    <div className="p-3 bg-gray-100 dark:bg-gray-600 rounded-lg mb-4">
                      <p className="font-medium">Show me sales figures for Q1 2023 grouped by region</p>
                    </div>
                    <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-mono bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">Generated SQL:</span>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg font-mono text-sm">
                      <code className="text-gray-800 dark:text-gray-200">
                        SELECT<br />
                        &nbsp;&nbsp;region,<br />
                        &nbsp;&nbsp;SUM(sales) as total_sales<br />
                        FROM<br />
                        &nbsp;&nbsp;transactions<br />
                        WHERE<br />
                        &nbsp;&nbsp;date BETWEEN '2023-01-01' AND '2023-03-31'<br />
                        GROUP BY<br />
                        &nbsp;&nbsp;region<br />
                        ORDER BY<br />
                        &nbsp;&nbsp;total_sales DESC;
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Support Automation Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate-on-scroll glass-card rounded-xl overflow-hidden subtle-shadow">
                <div className="p-6 bg-white dark:bg-gray-700">
                  <div className="rounded-lg p-4">
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-end">
                        <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">I'm having trouble connecting my account to the API</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 max-w-sm">
                          <p className="text-sm">I understand you're having API connection issues. Let me help! First, could you tell me if you're using the v1 or v2 API?</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">I think I'm using v2</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 max-w-sm">
                          <p className="text-sm">Thanks for confirming. For the v2 API, you'll need to use the new authentication method. Let me guide you through the process step by step...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 animate-on-scroll">
                <div className="mb-4 inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Customer Support Automation
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Provide exceptional customer support 24/7 with AI agents that understand context, access relevant information, and solve problems efficiently.
                </p>
                <ul className="space-y-3">
                  {[
                    "Context-aware conversations",
                    "Seamless handoff between AI and human agents",
                    "Multi-language support",
                    "Knowledge base integration",
                    "Continuous learning from interactions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Graph Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="mb-4 inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Knowledge Graph (GraphRAG)
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Build comprehensive knowledge graphs that represent complex relationships and enable advanced reasoning for more accurate and contextual AI responses.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automated knowledge extraction from documents",
                    "Entity and relationship mapping",
                    "Graph-based retrieval augmented generation",
                    "Semantic search capabilities",
                    "Visual graph exploration tools"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll glass-card rounded-xl overflow-hidden subtle-shadow">
                <div className="p-6 bg-gray-50 dark:bg-gray-800">
                  <div className="h-64 relative bg-white dark:bg-gray-700 rounded-lg p-4">
                    {/* Simple knowledge graph visualization */}
                    <svg width="100%" height="100%" viewBox="0 0 300 200">
                      {/* Nodes */}
                      <circle cx="150" cy="100" r="20" fill="#3B82F6" />
                      <circle cx="80" cy="50" r="15" fill="#3B82F6" opacity="0.8" />
                      <circle cx="50" cy="150" r="15" fill="#3B82F6" opacity="0.8" />
                      <circle cx="220" cy="50" r="15" fill="#3B82F6" opacity="0.8" />
                      <circle cx="250" cy="150" r="15" fill="#3B82F6" opacity="0.8" />
                      <circle cx="180" cy="180" r="15" fill="#3B82F6" opacity="0.8" />
                      <circle cx="120" cy="180" r="15" fill="#3B82F6" opacity="0.8" />
                      
                      {/* Connections */}
                      <line x1="150" y1="100" x2="80" y2="50" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                      <line x1="150" y1="100" x2="50" y2="150" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                      <line x1="150" y1="100" x2="220" y2="50" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                      <line x1="150" y1="100" x2="250" y2="150" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                      <line x1="150" y1="100" x2="180" y2="180" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                      <line x1="150" y1="100" x2="120" y2="180" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
                      <line x1="80" y1="50" x2="220" y2="50" stroke="#3B82F6" strokeWidth="2" opacity="0.4" />
                      <line x1="50" y1="150" x2="250" y2="150" stroke="#3B82F6" strokeWidth="2" opacity="0.4" />
                      <line x1="120" y1="180" x2="180" y2="180" stroke="#3B82F6" strokeWidth="2" opacity="0.4" />
                      
                      {/* Labels */}
                      <text x="150" y="105" textAnchor="middle" fill="white" fontSize="10">Entity</text>
                      <text x="80" y="55" textAnchor="middle" fill="white" fontSize="8">Property</text>
                      <text x="50" y="155" textAnchor="middle" fill="white" fontSize="8">Attribute</text>
                      <text x="220" y="55" textAnchor="middle" fill="white" fontSize="8">Relation</text>
                      <text x="250" y="155" textAnchor="middle" fill="white" fontSize="8">Object</text>
                      <text x="180" y="185" textAnchor="middle" fill="white" fontSize="8">Class</text>
                      <text x="120" y="185" textAnchor="middle" fill="white" fontSize="8">Type</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Agent Collaboration Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4 inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Multi-Agent Collaboration
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
              Specialized AI agents working together to solve complex problems through coordinated workflows and knowledge sharing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {[
                {
                  title: "Data Extraction Agent",
                  description: "Extracts structured data from various sources",
                  icon: <Database className="w-6 h-6 text-blue-600" />
                },
                {
                  title: "Analysis Agent",
                  description: "Processes and analyzes extracted data",
                  icon: <Brain className="w-6 h-6 text-blue-600" />
                },
                {
                  title: "Decision Agent",
                  description: "Makes recommendations based on analysis",
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />
                },
                {
                  title: "Implementation Agent",
                  description: "Executes approved recommendations",
                  icon: <Zap className="w-6 h-6 text-blue-600" />
                }
              ].map((agent, index) => (
                <div key={index} className="animate-on-scroll p-6 rounded-lg glass-card hover-lift">
                  <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    {agent.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {agent.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {agent.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Connection Arrows */}
            <div className="hidden lg:block relative max-w-4xl mx-auto h-12 mb-6">
              <svg className="w-full h-full" viewBox="0 0 800 50">
                <path d="M200,25 L600,25" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <path d="M590,15 L600,25 L590,35" stroke="#3B82F6" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Ohwise's multi-agent system enables complex workflow automation where each specialized agent contributes its expertise to solve problems that would be difficult for a single system.
            </p>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Seamless Integration
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                OhWise connects with your existing tools and workflows
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                "PostgreSQL",
                "MySQL",
                "Google",
                "X (Twitter)",
                "Wikipedia",
                "Sendgrid",
                "Jira",
                "GitHub",
                "AWS",
                "Slack"
              ].map((integration, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-3">
                    <span className="text-lg font-semibold text-blue-600">{integration.charAt(0)}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {integration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          title="Experience the power of Ohwise"
          subtitle="Schedule a demo to see how Ohwise can transform your operations."
          primaryButtonText="Get Started"
          primaryButtonLink="https://cloud.ohwise.com/"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Product;
