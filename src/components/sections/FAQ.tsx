
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is Ohwise?",
    answer: "Ohwise is a multi-agent AI Ops system that integrates several cutting-edge AI technologies including text-to-SQL capabilities, customer support automation, knowledge graph (GraphRAG) functionality, and multi-agent collaboration. It's designed to streamline operations and enhance productivity across your organization."
  },
  {
    id: 2,
    question: "How does the text-to-SQL feature work?",
    answer: "Ohwise's text-to-SQL feature uses natural language processing to interpret everyday language queries and convert them into SQL code. This allows non-technical team members to access database insights without needing to know SQL, while ensuring accuracy and security in the queries generated."
  },
  {
    id: 3,
    question: "What types of businesses can benefit from Ohwise?",
    answer: "Ohwise is versatile and beneficial for a wide range of businesses, from startups to enterprise-level organizations. It's particularly valuable for companies with complex data operations, customer support needs, or those looking to leverage AI for operational efficiency. Industries such as finance, healthcare, e-commerce, and technology services have seen significant benefits."
  },
  {
    id: 4,
    question: "How secure is Ohwise with our sensitive data?",
    answer: "Security is a top priority at Ohwise. We implement enterprise-grade security measures including end-to-end encryption, role-based access controls, and compliance with industry standards. Your data never leaves your secure environment unless explicitly configured to do so, and all processing follows strict security protocols."
  },
  {
    id: 5,
    question: "Can Ohwise integrate with our existing systems?",
    answer: "Yes, Ohwise is designed for seamless integration with your existing tech stack. We provide comprehensive APIs and pre-built connectors for popular platforms and databases. Our team can also work with you to develop custom integrations for specialized systems if needed."
  },
  {
    id: 6,
    question: "How is Ohwise priced?",
    answer: "Ohwise offers flexible pricing tiers based on your organization's needs. We have plans suitable for small teams, growing businesses, and enterprise organizations. Each plan includes different levels of features, usage limits, and support. For detailed pricing information, please visit our pricing page or contact our sales team for a custom quote."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prevOpenItems) => 
      prevOpenItems.includes(id)
        ? prevOpenItems.filter(itemId => itemId !== id)
        : [...prevOpenItems, id]
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.question}
                </h3>
                <span className="flex-shrink-0 ml-2">
                  {openItems.includes(item.id) ? (
                    <Minus size={20} className="text-blue-600" />
                  ) : (
                    <Plus size={20} className="text-blue-600" />
                  )}
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(item.id) 
                    ? "max-h-96 opacity-100" 
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="py-4 text-gray-600 dark:text-gray-400">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
