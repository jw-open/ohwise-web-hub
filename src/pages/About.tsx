import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";
import { Link } from "react-router-dom";
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

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Team Member 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">JD</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Jane Doe</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">CEO & Co-Founder</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Former AI Research Lead at TechCorp with 15+ years of experience in enterprise AI solutions.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">JS</span>
                </div>
                <h3 className="text-xl font-bold mb-1">John Smith</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">CTO & Co-Founder</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Previously led engineering at AI Innovations, specializing in distributed systems and AI infrastructure.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">AR</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Alex Rodriguez</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Chief AI Officer</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  PhD in Machine Learning with extensive research in multi-agent systems and enterprise applications.
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

        {/* CTA Section */}
        <CTASection 
          title="Join us on our mission"
          subtitle="Ready to transform your operations with ethical, powerful AI?"
          primaryButtonText="Get Started"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
