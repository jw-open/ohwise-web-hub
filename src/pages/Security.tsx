import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";
import { Shield, Lock, AlertTriangle, CheckCircle, Server, FileCheck } from "lucide-react";

const Security = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="mx-auto h-16 w-16 text-blue-600 mb-6" />
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Security at Ohwise
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                How we protect your data and ensure the security of our AI operations platform
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Security Approach</h2>
              <div className="prose dark:prose-invert prose-lg mx-auto">
                <p>
                  At Ohwise, security isn't just a feature—it's a foundational principle that guides everything we do. 
                  We understand that our enterprise customers trust us with sensitive operational data and workflows, 
                  which is why we've built a comprehensive security program that incorporates industry best practices 
                  and rigorous standards.
                </p>
                <p>
                  Our security strategy encompasses multiple layers of protection, from infrastructure security and 
                  data encryption to regular penetration testing and employee security training. We're committed to 
                  maintaining the highest levels of security to protect your data and ensure the integrity of your 
                  AI operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Lock size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold ml-3">Data Encryption</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  All data is encrypted at rest and in transit using industry-standard TLS/SSL protocols and AES-256 encryption.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Server size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold ml-3">Infrastructure Security</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Our infrastructure is hosted in SOC 2 compliant data centers with 24/7 monitoring, intrusion detection, and DDoS protection.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold ml-3">Access Controls</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Robust role-based access controls, multi-factor authentication, and least privilege principles protect your account.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <AlertTriangle size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold ml-3">Vulnerability Management</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Regular security assessments, penetration testing, and vulnerability scanning to identify and address potential issues.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <FileCheck size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold ml-3">Compliance</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  We maintain compliance with relevant industry standards and regulations, including GDPR, CCPA, and SOC 2.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Shield size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold ml-3">AI Security</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Specialized security measures for AI operations, including model validation, input sanitization, and output verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Certifications */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Compliance</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <img src="/placeholder.svg" alt="SOC 2" className="max-w-full" />
                </div>
                <span className="font-medium">SOC 2</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <img src="/placeholder.svg" alt="GDPR" className="max-w-full" />
                </div>
                <span className="font-medium">GDPR</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <img src="/placeholder.svg" alt="CCPA" className="max-w-full" />
                </div>
                <span className="font-medium">CCPA</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <img src="/placeholder.svg" alt="ISO 27001" className="max-w-full" />
                </div>
                <span className="font-medium">ISO 27001</span>
              </div>
            </div>
          </div>
        </section>

        {/* Security FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Security FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-3">How is my data protected?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your data is encrypted at rest and in transit using industry-standard encryption protocols. 
                  We implement strict access controls, and all system access is logged and monitored for suspicious activity.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-3">Do you perform security testing?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, we conduct regular security assessments, including penetration testing, vulnerability scanning, 
                  and code reviews. We also employ independent security firms to perform annual security audits.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-3">How do you handle security incidents?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We have a comprehensive incident response plan that includes detection, containment, eradication, 
                  recovery, and notification procedures. We commit to notifying affected customers promptly in the 
                  event of a security breach that impacts their data.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-3">Is Ohwise compliant with industry regulations?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, Ohwise maintains compliance with relevant industry standards and regulations, including 
                  GDPR, CCPA, and SOC 2. We regularly review and update our security practices to ensure continued compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          title="Have security questions?"
          subtitle="Our security team is ready to address your specific concerns and requirements."
          primaryButtonText="Contact Security Team"
          primaryButtonLink="/contact"
          secondaryButtonText="Download Security Whitepaper"
          secondaryButtonLink="#"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;
