
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import CTASection from "../components/sections/CTASection";

const Index = () => {
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
        <Hero />
        <Features />
        
        {/* Stats Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-on-scroll">
                <p className="text-4xl md:text-5xl font-bold mb-2">300%</p>
                <p className="text-sm md:text-base text-blue-100">Productivity Increase</p>
              </div>
              <div className="animate-on-scroll">
                <p className="text-4xl md:text-5xl font-bold mb-2">85%</p>
                <p className="text-sm md:text-base text-blue-100">Cost Reduction</p>
              </div>
              <div className="animate-on-scroll">
                <p className="text-4xl md:text-5xl font-bold mb-2">24/7</p>
                <p className="text-sm md:text-base text-blue-100">Availability</p>
              </div>
              <div className="animate-on-scroll">
                <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
                <p className="text-sm md:text-base text-blue-100">Enterprise Clients</p>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        <FAQ />
        <CTASection 
          primaryButtonLink="https://cloud.ohwise.com/"
          primaryButtonText="Get Started"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
