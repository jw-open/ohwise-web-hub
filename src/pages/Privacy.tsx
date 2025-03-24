import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Privacy = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-display font-bold mb-8 text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            
            <div className="prose prose-blue max-w-none dark:prose-invert text-gray-700 dark:text-gray-300">
              <p className="text-lg mb-6">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                1. Introduction
              </h2>
              <p className="mb-4">
                Ohwise ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our multi-agent AI Ops system, website, and related services (collectively, the "Services").
              </p>
              <p className="mb-4">
                Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect several types of information from and about users of our Services, including:
              </p>
              <h3 className="text-lg font-medium mt-6 mb-3 text-gray-900 dark:text-white">
                a. Personal Data
              </h3>
              <p className="mb-4">
                Information that can be used to identify you, such as name, email address, postal address, telephone number, billing information, and any other identifier by which you may be contacted online or offline.
              </p>
              <h3 className="text-lg font-medium mt-6 mb-3 text-gray-900 dark:text-white">
                b. Usage Data
              </h3>
              <p className="mb-4">
                Information about how you use our Services, including browser type, browser version, the pages you visit, the time and date of your visit, time spent on those pages, and other diagnostic data.
              </p>
              <h3 className="text-lg font-medium mt-6 mb-3 text-gray-900 dark:text-white">
                c. Business and Operational Data
              </h3>
              <p className="mb-4">
                Information related to your business operations that you input or is generated when using our AI Ops system, including queries, responses, workflow configurations, and other data relevant to the functionality of the Services.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We may use the information we collect about you for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Provide, maintain, and improve our Services</li>
                <li className="mb-2">Process transactions and manage your account</li>
                <li className="mb-2">Send you technical notices, updates, security alerts, and support messages</li>
                <li className="mb-2">Respond to your comments, questions, and requests</li>
                <li className="mb-2">Develop new products, services, and features</li>
                <li className="mb-2">Monitor and analyze trends, usage, and activities in connection with our Services</li>
                <li className="mb-2">Detect, prevent, and address technical issues, security breaches, and fraudulent activities</li>
                <li className="mb-2">Comply with legal obligations</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                4. How We Share Your Information
              </h2>
              <p className="mb-4">
                We may share your information with:
              </p>
              <h3 className="text-lg font-medium mt-6 mb-3 text-gray-900 dark:text-white">
                a. Service Providers
              </h3>
              <p className="mb-4">
                Third-party vendors, consultants, and other service providers who perform services on our behalf, such as data storage, maintenance services, database management, web analytics, payment processing, and improvement of the Services' features.
              </p>
              <h3 className="text-lg font-medium mt-6 mb-3 text-gray-900 dark:text-white">
                b. Compliance with Laws
              </h3>
              <p className="mb-4">
                If required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
              </p>
              <h3 className="text-lg font-medium mt-6 mb-3 text-gray-900 dark:text-white">
                c. Business Transfers
              </h3>
              <p className="mb-4">
                In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                5. Data Security
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please also recognize that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                6. Data Retention
              </h2>
              <p className="mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law, such as tax, accounting, or other legal requirements.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                7. Your Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">The right to access your personal information</li>
                <li className="mb-2">The right to rectify inaccurate or incomplete information</li>
                <li className="mb-2">The right to erasure of your personal information</li>
                <li className="mb-2">The right to restrict or object to the processing of your personal information</li>
                <li className="mb-2">The right to data portability</li>
                <li className="mb-2">The right to withdraw consent</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us at privacy@Ohwise.com.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                8. Children's Privacy
              </h2>
              <p className="mb-4">
                Our Services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                9. Changes to This Privacy Policy
              </h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                10. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-4">
                Email: privacy@Ohwise.com<br />
                Address: 123 AI Boulevard, Tech City, CA 94103<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
