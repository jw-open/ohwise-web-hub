
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Reset error
    setError(null);
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real implementation, this would call an API endpoint
      console.log('Subscribing:', { email });
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {submitted ? (
        <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-start">
          <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400 mr-3 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-green-800 dark:text-green-300">Subscription successful!</h3>
            <p className="mt-1 text-sm text-green-700 dark:text-green-400">
              Thank you for subscribing to our newsletter. You'll start receiving updates soon.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-3 flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
            </div>
          )}
          
          <div className="flex space-x-2">
            <Input 
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
            
            <Button 
              type="submit" 
              disabled={submitting}
              className="h-12 px-6"
            >
              {submitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </form>
      )}
    </div>
  );
};

export default SubscribeForm;
