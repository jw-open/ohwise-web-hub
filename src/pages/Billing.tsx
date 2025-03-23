
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import { CreditCard, Calendar, User, Check, Shield, AlertCircle } from "lucide-react";

const Billing = () => {
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [billingCycle, setBillingCycle] = useState("annual");
  const [isProcessing, setIsProcessing] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Form state
  const [form, setForm] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    address: "",
    city: "",
    zipCode: "",
    country: "United States"
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const formatExpiry = (value: string) => {
    return value
      .replace(/\s/g, "")
      .replace(/^(\d{2})(\d{0,2})/, "$1/$2")
      .trim();
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d\s]/g, "");
    if (value.replace(/\s/g, "").length <= 16) {
      setForm(prev => ({ ...prev, cardNumber: formatCardNumber(value) }));
    }
    
    if (formErrors.cardNumber) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.cardNumber;
        return newErrors;
      });
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d\/]/g, "");
    if (value.replace(/\//g, "").length <= 4) {
      setForm(prev => ({ ...prev, expiry: formatExpiry(value) }));
    }
    
    if (formErrors.expiry) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.expiry;
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    // Card details validation
    if (!form.cardName.trim()) errors.cardName = "Name on card is required";
    if (!form.cardNumber.trim() || form.cardNumber.replace(/\s/g, "").length !== 16) {
      errors.cardNumber = "Valid card number is required";
    }
    if (!form.expiry.trim() || !/^\d{2}\/\d{2}$/.test(form.expiry)) {
      errors.expiry = "Valid expiry date (MM/YY) is required";
    }
    if (!form.cvc.trim() || !/^\d{3,4}$/.test(form.cvc)) {
      errors.cvc = "Valid CVC is required";
    }
    
    // Personal details validation
    if (!form.firstName.trim()) errors.firstName = "First name is required";
    if (!form.lastName.trim()) errors.lastName = "Last name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Valid email is required";
    }
    if (!form.address.trim()) errors.address = "Address is required";
    if (!form.city.trim()) errors.city = "City is required";
    if (!form.zipCode.trim()) errors.zipCode = "ZIP/Postal code is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsProcessing(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsProcessing(false);
        // Redirect to success page or show success message
        // For demo purposes, we'll just alert
        alert("Payment successful! Your subscription has been activated.");
      }, 2000);
    }
  };

  // Plan details
  const plans = {
    starter: {
      name: "Starter",
      monthly: 49,
      annual: 39 * 12,
      features: ["3 AI Agents", "100 Text-to-SQL Queries/mo", "Basic Customer Support Automation", "10MB Knowledge Graph Size"]
    },
    professional: {
      name: "Professional",
      monthly: 149,
      annual: 119 * 12,
      features: ["10 AI Agents", "1,000 Text-to-SQL Queries/mo", "Advanced Customer Support Automation", "100MB Knowledge Graph Size", "Multi-agent Workflows"]
    },
    enterprise: {
      name: "Enterprise",
      isCustom: true,
      features: ["Unlimited AI Agents", "Unlimited Text-to-SQL Queries", "Complete Customer Support Automation", "1TB+ Knowledge Graph Size", "Multi-agent Workflows", "Custom Integrations", "SSO Authentication", "Dedicated Support"]
    }
  };

  // Current selected plan
  const currentPlan = plans[selectedPlan as keyof typeof plans];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-display font-bold mb-8 text-gray-900 dark:text-white text-center">
              Complete Your Subscription
            </h1>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Billing Form Column */}
              <div className="md:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                  <form onSubmit={handleSubmit}>
                    {/* Payment Information */}
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                        <CreditCard className="mr-2 w-5 h-5 text-blue-600" />
                        Payment Information
                      </h2>
                      
                      <div className="grid gap-6 mb-6">
                        <div>
                          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Name on card
                          </label>
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            placeholder="Full name on card"
                            value={form.cardName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 rounded-md border ${
                              formErrors.cardName 
                                ? 'border-red-300 dark:border-red-700 focus:ring-red-500 focus:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                            } dark:bg-gray-700 appearance-none`}
                          />
                          {formErrors.cardName && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.cardName}
                            </p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Card number
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={form.cardNumber}
                            onChange={handleCardNumberChange}
                            className={`w-full px-4 py-2 rounded-md border ${
                              formErrors.cardNumber 
                                ? 'border-red-300 dark:border-red-700 focus:ring-red-500 focus:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                            } dark:bg-gray-700 appearance-none`}
                          />
                          {formErrors.cardNumber && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.cardNumber}
                            </p>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Expiry date
                            </label>
                            <input
                              type="text"
                              id="expiry"
                              name="expiry"
                              placeholder="MM/YY"
                              value={form.expiry}
                              onChange={handleExpiryChange}
                              className={`w-full px-4 py-2 rounded-md border ${
                                formErrors.expiry 
                                  ? 'border-red-300 dark:border-red-700 focus:ring-red-500 focus:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                              } dark:bg-gray-700 appearance-none`}
                            />
                            {formErrors.expiry && (
                              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.expiry}
                              </p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              CVC
                            </label>
                            <input
                              type="text"
                              id="cvc"
                              name="cvc"
                              placeholder="123"
                              maxLength={4}
                              value={form.cvc}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-2 rounded-md border ${
                                formErrors.cvc 
                                  ? 'border-red-300 dark:border-red-700 focus:ring-red-500 focus:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                              } dark:bg-gray-700 appearance-none`}
                            />
                            {formErrors.cvc && (
                              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.cvc}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Billing Information */}
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                        <User className="mr-2 w-5 h-5 text-blue-600" />
                        Billing Information
                      </h2>
                      
                      <div className="grid gap-6 mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              First name
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={form.firstName}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-2 rounded-md border ${
                                formErrors.firstName 
                                  ? 'border-red-300 dark:border-red-700 focus:ring-red-500 focus:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                              } dark:bg-gray-700 appearance-none`}
                            />
                            {formErrors.firstName && (
                              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.firstName}
                              </p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Last name
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={form.lastName}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-2 rounded-md border ${
                                formErrors.lastName 
                                  ? 'border-red-300 dark:border-red-700 focus:ring-red-500 focus:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                              } dark:bg-gray-700 appearance-none`}
                            />
                            {formErrors.lastName && (
                              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.lastName}
                              </p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 rounded-md border ${
                              formErrors.email 
                                ? 'border-red-300 dark:border-red-700 focus:ring-red-500 focus:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                            } dark:bg-gray-700 appearance-none`}
                          />
                          {formErrors.email && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.email}
                            </p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Company (optional)
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={form.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 appearance-none"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={form.address}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 rounded-md border ${
                              formErrors.address 
                                ? 'border-red-300 dark:border-red-700 focus:ring-red-500 focus:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                            } dark:bg-gray-700 appearance-none`}
                          />
                          {formErrors.address && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.address}
                            </p>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              City
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              value={form.city}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-2 rounded-md border ${
                                formErrors.city 
                                  ? 'border-red-300 dark:border-red-700 focus:ring-red-500 focus:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                              } dark:bg-gray-700 appearance-none`}
                            />
                            {formErrors.city && (
                              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.city}
                              </p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              ZIP / Postal code
                            </label>
                            <input
                              type="text"
                              id="zipCode"
                              name="zipCode"
                              value={form.zipCode}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-2 rounded-md border ${
                                formErrors.zipCode 
                                  ? 'border-red-300 dark:border-red-700 focus:ring-red-500 focus:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                              } dark:bg-gray-700 appearance-none`}
                            />
                            {formErrors.zipCode && (
                              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" /> {formErrors.zipCode}
                              </p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            value={form.country}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 appearance-none"
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                            <option value="Australia">Australia</option>
                            <option value="Japan">Japan</option>
                            {/* Add more countries as needed */}
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    {/* Security Note */}
                    <div className="flex items-start space-x-2 mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Your payment information is secure. We use industry-standard encryption to protect your data.
                      </p>
                    </div>
                    
                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      isLoading={isProcessing}
                      fullWidth
                    >
                      {isProcessing ? "Processing..." : "Complete Payment"}
                    </Button>
                  </form>
                </div>
              </div>
              
              {/* Order Summary Column */}
              <div className="md:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-4">
                    {/* Plan Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Selected Plan
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {Object.entries(plans).map(([key, plan]) => (
                          <button
                            key={key}
                            type="button"
                            className={`flex items-center justify-between py-2 px-3 rounded-md border ${
                              selectedPlan === key 
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                                : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                            } text-sm font-medium transition-colors`}
                            onClick={() => setSelectedPlan(key)}
                          >
                            <span>{plan.name}</span>
                            {selectedPlan === key && <Check className="w-4 h-4" />}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Billing Cycle */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Billing Cycle
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          className={`py-2 px-3 rounded-md border ${
                            billingCycle === 'monthly' 
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                              : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                          } text-sm font-medium transition-colors`}
                          onClick={() => setBillingCycle('monthly')}
                        >
                          Monthly
                        </button>
                        <button
                          type="button"
                          className={`py-2 px-3 rounded-md border ${
                            billingCycle === 'annual' 
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                              : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                          } text-sm font-medium transition-colors relative`}
                          onClick={() => setBillingCycle('annual')}
                        >
                          Annual
                          <span className="absolute -top-2 -right-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                            -20%
                          </span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Features included:
                      </h3>
                      <ul className="space-y-2">
                        {currentPlan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Price Summary */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Subtotal</span>
                        {currentPlan.isCustom ? (
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Custom Pricing</span>
                        ) : (
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            ${billingCycle === 'monthly' ? currentPlan.monthly : currentPlan.annual}
                          </span>
                        )}
                      </div>
                      
                      {billingCycle === 'annual' && !currentPlan.isCustom && (
                        <div className="flex justify-between mb-2 text-green-600 dark:text-green-400">
                          <span className="text-sm">Annual discount</span>
                          <span className="text-sm font-medium">-$({currentPlan.monthly * 12 - currentPlan.annual})</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between font-medium text-lg mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <span className="text-gray-900 dark:text-white">Total</span>
                        {currentPlan.isCustom ? (
                          <span className="text-gray-900 dark:text-white">Contact Sales</span>
                        ) : (
                          <span className="text-gray-900 dark:text-white">
                            ${billingCycle === 'monthly' ? currentPlan.monthly : currentPlan.annual}
                            <span className="text-xs text-gray-500 ml-1">
                              /{billingCycle === 'monthly' ? 'mo' : 'year'}
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Billing;
