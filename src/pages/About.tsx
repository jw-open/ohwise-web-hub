import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";
import { Check } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                About <span className="text-blue-600">OhWise</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                We're building the future of AI operations for innovative enterprises
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
              <div className="prose dark:prose-invert prose-lg mx-auto">
                <p>
                  At OhWise, we believe that artificial intelligence should empower organizations to work smarter, not harder. 
                  Our mission is to create intelligent operational systems that transform how businesses handle complex workflows,
                  making AI accessible, ethical, and genuinely useful.
                </p>
                <p>
                  Founded in 2023, our team of AI specialists, engineers, and industry experts are passionate about building 
                  technology that solves real problems. We're not just creating another AI tool—we're reimagining how 
                  enterprises can leverage multi-agent systems to revolutionize their operations.
                </p>
                <p>
                  As AI continues to evolve at an unprecedented pace, we remain committed to our core values: transparency, 
                  security, and customer success. We build with these principles at the forefront, ensuring that our 
                  technology enhances human capabilities rather than replacing them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We push the boundaries of what's possible with AI, constantly exploring new approaches to solve complex problems.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We believe in open, explainable AI systems that customers can understand and trust with their critical operations.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Security</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Security is fundamental to everything we build, ensuring your data and AI operations remain protected.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Success</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We measure our success by the value we create for our customers, partnering closely to ensure real-world impact.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We design our products to be intuitive and accessible to organizations regardless of their AI expertise.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Ethical AI</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We develop AI systems with strong ethical principles, focusing on fairness, accountability, and human benefit.
                </p>
              </div>
            </div>
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
          title="Join us in our mission"
          subtitle="Get started with Ohwise today and transform the way your business operates."
          primaryButtonText="Get Started"
          primaryButtonLink="https://cloud.ohwise.com/"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
