
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Message would be sent to js@ohwise.com:", formData);
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
              Have questions about Ohwise? Our team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">Our friendly team is here to help.</p>
                <a href="mailto:js@ohwise.com" className="text-blue-600 dark:text-blue-400 font-medium">
                  js@ohwise.com
                </a>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Office</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">Visit our online headquarters.</p>
                <p className="text-gray-800 dark:text-gray-200">Online Office<br />Available 24/7</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">Mon-Fri from 8am to 5pm.</p>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  Contact via Email
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  className="bg-blue-600 text-white hover:bg-blue-700" 
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
