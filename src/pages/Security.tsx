import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";

const Security = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Enterprise-Grade Security
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We employ industry-leading security measures to protect your data and ensure the highest level of confidentiality, integrity, and availability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Security Feature 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Data Encryption
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your data is encrypted both in transit and at rest using advanced encryption algorithms.
                </p>
              </div>

              {/* Security Feature 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Access Control
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Strict access control policies ensure that only authorized personnel can access sensitive information.
                </p>
              </div>

              {/* Security Feature 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Regular Audits
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We conduct regular security audits and penetration testing to identify and address potential vulnerabilities.
                </p>
              </div>

              {/* Security Feature 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Compliance
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our platform is compliant with industry standards and regulations, including GDPR and HIPAA.
                </p>
              </div>

              {/* Security Feature 5 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Incident Response
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We have a dedicated incident response team ready to address any security incidents promptly and effectively.
                </p>
              </div>

              {/* Security Feature 6 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Multi-Factor Authentication
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We enforce multi-factor authentication to add an extra layer of security to your accounts.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection 
          title="Ready to experience enterprise-grade security?"
          subtitle="Start using Ohwise today with confidence in our robust security practices."
          primaryButtonText="Get Started"
          primaryButtonLink="https://cloud.ohwise.com/"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;
