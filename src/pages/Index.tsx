import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import FAQ from "../components/sections/FAQ";
import CTASection from "../components/sections/CTASection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <CTASection
          primaryButtonLink="https://cloud.ohwise.com/"
          primaryButtonText="Get started"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
