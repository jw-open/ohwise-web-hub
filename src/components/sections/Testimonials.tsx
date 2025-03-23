
import React, { useEffect, useRef, useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Ohwise has transformed how our data scientists interact with our databases. The text-to-SQL feature alone has saved us countless hours of work.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "TechNova Inc.",
    rating: 5
  },
  {
    id: 2,
    content: "The multi-agent collaboration capability has allowed us to automate complex workflows that previously required manual coordination between teams.",
    author: "Michael Chen",
    role: "Director of AI",
    company: "DataFlow Systems",
    rating: 5
  },
  {
    id: 3,
    content: "Our customer support team is now able to handle 3x the volume of requests with the same headcount, thanks to Ohwise's automation capabilities.",
    author: "Priya Patel",
    role: "Head of Customer Success",
    company: "GlobalServe",
    rating: 4
  },
  {
    id: 4,
    content: "The knowledge graph functionality has given us insights into our data that we never would have discovered with traditional analytics approaches.",
    author: "James Wilson",
    role: "Data Science Lead",
    company: "AnalyticsPro",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          containerRef.current?.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Innovative Companies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            See how Ohwise is helping organizations transform their operations
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 z-10 hidden md:block">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 z-10 hidden md:block">
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Testimonial Slider */}
          <div className="relative overflow-hidden rounded-2xl glass-card">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full p-8 md:p-12"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < testimonial.rating 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-300 dark:text-gray-600"
                        }
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 italic font-light">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation - Dots */}
          <div className="flex justify-center space-x-2 mt-6 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-blue-600"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
