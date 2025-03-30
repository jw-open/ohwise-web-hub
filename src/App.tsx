
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

// Pages
import Index from "./pages/Index";
import Product from "./pages/Product";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Billing from "./pages/Billing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Documentation from "./pages/Documentation";
import DocumentationContent from "./pages/DocumentationContent";
import Security from "./pages/Security";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogContent from "./pages/BlogContent";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

// Custom scroll observer for animation
const useScrollAnimationObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

const App = () => {
  useScrollAnimationObserver();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<Product />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/documentation/:id" element={<DocumentationContent />} />
            <Route path="/security" element={<Security />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/blog/post/:id" element={<BlogContent />} />
            <Route path="/admin" element={<Admin />} />
            {/* Redirect pricing to 404 */}
            <Route path="/pricing" element={<NotFound />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
