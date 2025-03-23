
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
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
              Terms of Service
            </h1>
            
            <div className="prose prose-blue max-w-none dark:prose-invert text-gray-700 dark:text-gray-300">
              <p className="text-lg mb-6">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                By accessing or using the Ohwise multi-agent AI Ops system, website, and related services (collectively, the "Services"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing the Services.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                2. Description of Services
              </h2>
              <p className="mb-4">
                Ohwise provides a multi-agent AI Ops system that integrates text-to-SQL capabilities, customer support automation, knowledge graph functionality, and multi-agent collaboration tools designed to streamline operations and enhance productivity for businesses and organizations.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                3. Account Registration and Security
              </h2>
              <p className="mb-4">
                To access certain features of the Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                4. Subscription and Payments
              </h2>
              <p className="mb-4">
                Some aspects of the Services may be provided on a subscription basis. By subscribing to our Services, you agree to pay the applicable fees as they become due. All payments are non-refundable unless otherwise specified in these Terms or required by applicable law.
              </p>
              <p className="mb-4">
                We may change our fees at any time in accordance with these Terms and requirements under applicable law. We will provide you with advance notice of these fee changes via the Services. If you do not agree to the fee changes, you have the right to reject the changes by canceling your subscription before the changes take effect.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                5. User Content
              </h2>
              <p className="mb-4">
                You retain all rights in, and are solely responsible for, the content you provide, upload, or input into the Services ("User Content"). By submitting User Content to the Services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such User Content in connection with providing and improving the Services.
              </p>
              <p className="mb-4">
                You represent and warrant that: (i) you own the User Content or have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the User Content does not violate the rights of any third party or any applicable law.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                6. Prohibited Conduct
              </h2>
              <p className="mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Use the Services in any way that violates any applicable law or regulation</li>
                <li className="mb-2">Use the Services to transmit any material that is defamatory, offensive, or otherwise objectionable</li>
                <li className="mb-2">Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Services</li>
                <li className="mb-2">Use any robot, spider, crawler, scraper, or other automated means to access the Services</li>
                <li className="mb-2">Decompile, reverse engineer, disassemble, or otherwise attempt to derive the source code for any part of the Services</li>
                <li className="mb-2">Collect or store personal data about other users without their express consent</li>
                <li className="mb-2">Impersonate or attempt to impersonate Ohwise, an Ohwise employee, another user, or any other person or entity</li>
                <li className="mb-2">Use the Services in a manner that could disable, overburden, damage, or impair the Services or interfere with any other party's use of the Services</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                7. Intellectual Property Rights
              </h2>
              <p className="mb-4">
                The Services and their entire content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Ohwise, its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="mb-4">
                These Terms do not grant you any rights to use the Ohwise name, logo, or other trademarks, unless otherwise stated.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                8. Limitation of Liability
              </h2>
              <p className="mb-4">
                In no event shall Ohwise, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                9. Disclaimer of Warranties
              </h2>
              <p className="mb-4">
                The Services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. Ohwise disclaims all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p className="mb-4">
                Ohwise does not warrant that the Services will be uninterrupted or error-free, that defects will be corrected, or that the Services or the servers that make them available are free of viruses or other harmful components.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                10. Indemnification
              </h2>
              <p className="mb-4">
                You agree to defend, indemnify, and hold harmless Ohwise, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                11. Termination
              </h2>
              <p className="mb-4">
                We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p className="mb-4">
                Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services or contact us to request account deletion.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                12. Changes to Terms
              </h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="mb-4">
                By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Services.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                13. Governing Law
              </h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
              </p>
              <p className="mb-4">
                Any legal action or proceeding relating to your access to or use of the Services shall be instituted exclusively in the federal or state courts located in San Francisco, California. You agree to submit to the jurisdiction of, and agree that venue is proper in, these courts in any such legal action or proceeding.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                14. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mb-4">
                Email: legal@ohwise.com<br />
                Address: 123 AI Boulevard, Tech City, CA 94103<br />
                Phone: (555) 123-4567
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                15. Entire Agreement
              </h2>
              <p className="mb-4">
                These Terms, together with our <Link to="/privacy" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Privacy Policy</Link>, constitute the entire agreement between you and Ohwise regarding the Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Services.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
