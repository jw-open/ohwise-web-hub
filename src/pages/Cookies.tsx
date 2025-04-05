import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";
import { Cookie, Info, Shield, Clock } from "lucide-react";

const Cookies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Cookie className="mx-auto h-16 w-16 text-blue-600 mb-6" />
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                How we use cookies and similar technologies on Ohwise
              </p>
              <div className="inline-block">
                <div className="py-1 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  Last updated: May 15, 2023
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="prose dark:prose-invert prose-lg mx-auto">
                <h2>What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your browser or device by websites, 
                  apps, online media, and advertisements. We use cookies to remember your preferences, 
                  understand how you interact with our website, and improve your experience.
                </p>

                <h2>How We Use Cookies</h2>
                <p>
                  Ohwise uses cookies for a variety of purposes, including:
                </p>
                <ul>
                  <li>
                    <strong>Essential cookies:</strong> These cookies are necessary for our website to function and 
                    cannot be switched off in our systems. They are usually only set in response to actions made by you 
                    which amount to a request for services, such as setting your privacy preferences, logging in, or 
                    filling in forms.
                  </li>
                  <li>
                    <strong>Performance cookies:</strong> These cookies allow us to count visits and traffic sources so 
                    we can measure and improve the performance of our site. They help us to know which pages are the most 
                    and least popular and see how visitors move around the site.
                  </li>
                  <li>
                    <strong>Functional cookies:</strong> These cookies enable the website to provide enhanced functionality 
                    and personalization. They may be set by us or by third-party providers whose services we have added to 
                    our pages.
                  </li>
                  <li>
                    <strong>Targeting cookies:</strong> These cookies may be set through our site by our advertising partners. 
                    They may be used by those companies to build a profile of your interests and show you relevant 
                    advertisements on other sites.
                  </li>
                </ul>

                <h2>Cookie Categories We Use</h2>
                <div className="mt-6 space-y-6 not-prose">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <Shield size={20} className="text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-2">Essential Cookies</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        These cookies are necessary for the website to function and cannot be switched off in our systems.
                      </p>
                      <div className="mt-2">
                        <span className="text-sm text-gray-500 dark:text-gray-500">Examples: Authentication, security, form submission</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Info size={20} className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-2">Analytics Cookies</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                      <div className="mt-2">
                        <span className="text-sm text-gray-500 dark:text-gray-500">Examples: Google Analytics, Mixpanel</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                      <Cookie size={20} className="text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-2">Functional Cookies</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Enable advanced functionality such as remembering your preferences and choices on the site.
                      </p>
                      <div className="mt-2">
                        <span className="text-sm text-gray-500 dark:text-gray-500">Examples: Language settings, dark/light mode preferences</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex items-start">
                    <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-orange-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-2">Session Cookies</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Temporary cookies that expire when you close your browser. Used to remember your actions during a single browsing session.
                      </p>
                      <div className="mt-2">
                        <span className="text-sm text-gray-500 dark:text-gray-500">Examples: Shopping cart data, form data</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="mt-8">Managing Your Cookie Preferences</h2>
                <p>
                  Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, 
                  or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and 
                  from version to version. You can however obtain information about blocking and deleting cookies via these 
                  links:
                </p>
                
                <ul>
                  <li><a href="https://support.google.com/chrome/answer/95647?hl=en" className="text-blue-600 dark:text-blue-400 hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-blue-600 dark:text-blue-400 hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 dark:text-blue-400 hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" className="text-blue-600 dark:text-blue-400 hover:underline">Microsoft Edge</a></li>
                </ul>
                
                <p>
                  Please note that if you choose to refuse cookies, you may not be able to use the full functionality of our website.
                </p>
                
                <h2>Changes to Our Cookie Policy</h2>
                <p>
                  We may update our Cookie Policy from time to time. When we make changes, we will update the "last updated" 
                  date at the top of this policy. We encourage you to review this policy periodically to stay informed about 
                  how we use cookies.
                </p>
                
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about our Cookie Policy, please contact us at:
                </p>
                <ul>
                  <li>Email: <a href="mailto:privacy@Ohwise.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@Ohwise.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Settings */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Manage Cookie Preferences</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  You can adjust your cookie preferences at any time. Required cookies can't be disabled as they are essential for 
                  the website to function properly.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="font-medium">Essential Cookies</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Required for the website to work</p>
                    </div>
                    <div>
                      <span className="inline-block py-1 px-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                        Always Active
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="font-medium">Analytics Cookies</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Help us improve our website</p>
                    </div>
                    <div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="font-medium">Functional Cookies</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Enhanced functionality and personalization</p>
                    </div>
                    <div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <h3 className="font-medium">Marketing Cookies</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Used for targeted advertising</p>
                    </div>
                    <div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          title="Have questions about our cookies policy?"
          subtitle="Our team is here to help you understand how we use cookies."
          primaryButtonText="Get Started"
          primaryButtonLink="https://cloud.ohwise.com/"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Cookies;
