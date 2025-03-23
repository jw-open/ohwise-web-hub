
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Check, X, HelpCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const PricingToggle = ({ 
  monthly, 
  setMonthly 
}: { 
  monthly: boolean; 
  setMonthly: (monthly: boolean) => void;
}) => {
  return (
    <div className="flex items-center justify-center space-x-3 mb-8">
      <span 
        className={`text-sm font-medium ${
          monthly 
            ? 'text-gray-900 dark:text-white' 
            : 'text-gray-500 dark:text-gray-400'
        }`}
      >
        Monthly
      </span>
      <button
        className="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition duration-200 ease-in-out"
        onClick={() => setMonthly(!monthly)}
        aria-label={monthly ? "Switch to annual billing" : "Switch to monthly billing"}
      >
        <div
          className={`absolute top-1 bg-white dark:bg-gray-200 w-5 h-5 rounded-full shadow-sm transform transition-transform duration-200 ease-in-out ${
            monthly ? 'left-1' : 'left-8'
          }`}
        />
      </button>
      <div className="flex items-center">
        <span 
          className={`text-sm font-medium ${
            !monthly 
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          Annual
        </span>
        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          Save 20%
        </span>
      </div>
    </div>
  );
};

interface PlanFeature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
  tooltip?: string;
}

const features: PlanFeature[] = [
  {
    name: "AI Agents",
    starter: "3",
    professional: "10",
    enterprise: "Unlimited",
    tooltip: "The number of specialized AI agents you can deploy simultaneously."
  },
  {
    name: "Text-to-SQL Queries",
    starter: "100/mo",
    professional: "1,000/mo",
    enterprise: "Unlimited",
    tooltip: "Monthly limit for natural language to SQL query conversions."
  },
  {
    name: "Customer Support Automation",
    starter: "Basic",
    professional: "Advanced",
    enterprise: "Complete",
    tooltip: "Level of automation for customer support workflows."
  },
  {
    name: "Knowledge Graph Size",
    starter: "10MB",
    professional: "100MB",
    enterprise: "1TB+",
    tooltip: "Maximum storage for your knowledge graph data."
  },
  {
    name: "Multi-agent Workflows",
    starter: false,
    professional: true,
    enterprise: true,
    tooltip: "Ability to create complex workflows with multiple AI agents."
  },
  {
    name: "Custom Integrations",
    starter: false,
    professional: "Limited",
    enterprise: "Full",
    tooltip: "Ability to integrate with third-party tools and services."
  },
  {
    name: "API Access",
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    name: "SSO Authentication",
    starter: false,
    professional: false,
    enterprise: true
  },
  {
    name: "Dedicated Support",
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    name: "SLA",
    starter: false,
    professional: false,
    enterprise: true
  },
  {
    name: "Custom AI Training",
    starter: false,
    professional: false,
    enterprise: true
  }
];

const FeatureCheck = ({ feature }: { feature: boolean | string }) => {
  if (typeof feature === 'boolean') {
    if (feature) {
      return <Check className="w-5 h-5 text-green-500" />;
    } else {
      return <X className="w-5 h-5 text-gray-300 dark:text-gray-600" />;
    }
  } else {
    return <span className="text-sm font-medium">{feature}</span>;
  }
};

const Pricing = () => {
  const [monthly, setMonthly] = useState(true);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Header */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-in">
                Choose the plan that best fits your organization's needs.
                All plans include core Ohwise functionality.
              </p>
              
              {/* Pricing Toggle */}
              <PricingToggle monthly={monthly} setMonthly={setMonthly} />
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <div className="animate-on-scroll rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Starter</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-6 h-12">
                    Perfect for small teams and startups getting started with AI.
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">${monthly ? '49' : '39'}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">/month{monthly ? '' : ' (billed annually)'}</span>
                  </div>
                  <Link to="/billing">
                    <Button variant="outline" size="lg" fullWidth>
                      Get Started
                    </Button>
                  </Link>
                </div>
                <div className="px-6 pb-6">
                  <div className="py-4 border-t border-gray-100 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Features include:</h3>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {feature.name}
                            </span>
                            {feature.tooltip && (
                              <div className="relative ml-2">
                                <button
                                  onMouseEnter={() => setActiveTooltip(index)}
                                  onMouseLeave={() => setActiveTooltip(null)}
                                  onClick={() => setActiveTooltip(activeTooltip === index ? null : index)}
                                  className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                                >
                                  <HelpCircle className="w-4 h-4" />
                                </button>
                                {activeTooltip === index && (
                                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded shadow-lg z-10">
                                    {feature.tooltip}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900 dark:bg-gray-700"></div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <FeatureCheck feature={feature.starter} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Professional Plan */}
              <div className="animate-on-scroll rounded-2xl border-2 border-blue-500 bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-bl">
                    POPULAR
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Professional</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-6 h-12">
                    Ideal for growing businesses with advanced AI needs.
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">${monthly ? '149' : '119'}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">/month{monthly ? '' : ' (billed annually)'}</span>
                  </div>
                  <Link to="/billing">
                    <Button size="lg" fullWidth>
                      Get Started
                    </Button>
                  </Link>
                </div>
                <div className="px-6 pb-6">
                  <div className="py-4 border-t border-gray-100 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Features include:</h3>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {feature.name}
                            </span>
                            {feature.tooltip && (
                              <div className="relative ml-2">
                                <button
                                  onMouseEnter={() => setActiveTooltip(index + 100)}
                                  onMouseLeave={() => setActiveTooltip(null)}
                                  onClick={() => setActiveTooltip(activeTooltip === index + 100 ? null : index + 100)}
                                  className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                                >
                                  <HelpCircle className="w-4 h-4" />
                                </button>
                                {activeTooltip === index + 100 && (
                                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded shadow-lg z-10">
                                    {feature.tooltip}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900 dark:bg-gray-700"></div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <FeatureCheck feature={feature.professional} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="animate-on-scroll rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Enterprise</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-6 h-12">
                    Custom solutions for large organizations with complex requirements.
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">Custom</span>
                  </div>
                  <Button variant="outline" size="lg" fullWidth>
                    Contact Sales
                  </Button>
                </div>
                <div className="px-6 pb-6">
                  <div className="py-4 border-t border-gray-100 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Features include:</h3>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {feature.name}
                            </span>
                            {feature.tooltip && (
                              <div className="relative ml-2">
                                <button
                                  onMouseEnter={() => setActiveTooltip(index + 200)}
                                  onMouseLeave={() => setActiveTooltip(null)}
                                  onClick={() => setActiveTooltip(activeTooltip === index + 200 ? null : index + 200)}
                                  className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                                >
                                  <HelpCircle className="w-4 h-4" />
                                </button>
                                {activeTooltip === index + 200 && (
                                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded shadow-lg z-10">
                                    {feature.tooltip}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900 dark:bg-gray-700"></div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <FeatureCheck feature={feature.enterprise} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    question: "Can I upgrade or downgrade my plan at any time?",
                    answer: "Yes, you can upgrade your plan at any time and the new features will be immediately available. When downgrading, changes will apply at the start of your next billing cycle."
                  },
                  {
                    question: "How does the billing work?",
                    answer: "We offer both monthly and annual billing options. Annual plans come with a 20% discount compared to monthly billing. You can pay via credit card or bank transfer for enterprise plans."
                  },
                  {
                    question: "Is there a free trial available?",
                    answer: "Yes, we offer a 14-day free trial on our Professional plan so you can experience all the features before committing. No credit card is required to start your trial."
                  },
                  {
                    question: "What kind of support is included in each plan?",
                    answer: "The Starter plan includes email support with 24-hour response time. Professional plans include priority email support with 4-hour response time during business hours. Enterprise plans include dedicated support with a named account manager and phone support."
                  },
                  {
                    question: "Can I get a custom plan for my specific needs?",
                    answer: "Absolutely! Our Enterprise plan is fully customizable. Contact our sales team to discuss your specific requirements and we'll create a tailored solution for your organization."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="animate-on-scroll rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6"
                  >
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{item.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our team is here to help you find the perfect plan for your needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
                <Button size="lg">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
