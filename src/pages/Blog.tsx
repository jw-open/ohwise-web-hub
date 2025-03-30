
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, Clock, User, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SubscribeForm from "../components/blog/SubscribeForm";

// Mock data for the blog
const BLOG_POSTS = [
  {
    id: 1,
    title: "Introducing OhWise 2.0: The Next Generation of AI Operations",
    excerpt: "Today, we're thrilled to announce the release of OhWise 2.0, our most significant platform update yet. This new version brings enhanced multi-agent capabilities, improved knowledge graph integration, and a completely redesigned user interface.",
    author: "Sarah Johnson",
    date: "August 15, 2023",
    readTime: "5 min read",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "How AI is Transforming DevOps: The OhWise Approach",
    excerpt: "The integration of AI into DevOps processes is no longer a future trend—it's happening now. In this post, we explore how organizations are using OhWise to automate complex workflows, reduce incident response time, and create more reliable systems.",
    author: "Michael Chen",
    date: "August 10, 2023",
    readTime: "7 min read",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Building Responsible AI Systems with OhWise",
    excerpt: "As AI systems become more prevalent, ensuring they operate ethically and responsibly is paramount. This post explains how OhWise's governance features help organizations implement AI in ways that are transparent, fair, and accountable.",
    author: "Elena Patel",
    date: "August 5, 2023",
    readTime: "6 min read",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Case Study: How FinTech Leader Reduced Incident Response Time by 75%",
    excerpt: "A leading financial technology company was struggling with lengthy incident resolution times and customer satisfaction issues. Learn how implementing OhWise's multi-agent system transformed their operations and dramatically improved response metrics.",
    author: "James Wilson",
    date: "July 28, 2023",
    readTime: "8 min read",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "Understanding Knowledge Graphs: The Foundation of Intelligent Operations",
    excerpt: "Knowledge graphs are at the heart of OhWise's intelligent decision-making capabilities. This technical deep dive explains how our platform builds, maintains, and leverages knowledge graphs to create contextually aware automation.",
    author: "Rebecca Lee",
    date: "July 20, 2023",
    readTime: "10 min read",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "OhWise Product Roadmap: What's Coming in Q4 2023",
    excerpt: "Our product team has been hard at work planning exciting new features for the OhWise platform. In this post, we share our vision for the upcoming quarter, including enhanced ML capabilities, new integration options, and expanded analytics.",
    author: "David Thompson",
    date: "July 15, 2023",
    readTime: "4 min read",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2774&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
];

const CATEGORIES = [
  "All",
  "Announcements",
  "Technical",
  "Best Practices",
  "Case Studies",
  "Tutorials"
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(BLOG_POSTS);
  
  // Filter posts based on search query and category
  useEffect(() => {
    let result = BLOG_POSTS;
    
    if (searchQuery.trim() !== "") {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (activeCategory !== "All") {
      result = result.filter(post => post.category === activeCategory);
    }
    
    setFilteredPosts(result);
  }, [searchQuery, activeCategory]);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-6 leading-tight">
                OhWise Blog
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Insights, news, and best practices from the OhWise team
              </p>
              
              {/* Search */}
              <div className="relative mx-auto max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 py-6"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-8 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="mx-auto flex flex-wrap justify-center gap-2 h-auto bg-transparent">
                {CATEGORIES.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900 dark:data-[state=active]:bg-blue-900/30 dark:data-[state=active]:text-blue-100"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <Link to={`/blog/${post.id}`} key={post.id} className="group hover:no-underline">
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md group-hover:border-blue-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="inline-flex items-center">
                            <Tag size={14} className="mr-1" />
                            {post.category}
                          </span>
                          <span className="inline-flex items-center">
                            <Clock size={14} className="mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 pt-0">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button variant="outline" onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}>
                  Reset filters
                </Button>
              </div>
            )}
            
            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="px-8">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Featured Content</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-blue-600 text-white overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Master OhWise in 30 Days</h3>
                    <p className="mb-6">
                      A complete learning path to become an OhWise expert. From basic setup to advanced multi-agent workflows.
                    </p>
                    <Button variant="secondary" className="group">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Latest Video Tutorials</h3>
                    <div className="space-y-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center gap-3 group">
                          <div className="w-16 h-9 bg-gray-200 dark:bg-gray-700 rounded flex-shrink-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {["Setting Up Your First Agent", "Building Complex Workflows", "Advanced Integration Techniques"][i-1]}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {["5:23", "8:47", "12:05"][i-1]}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button variant="link" className="p-0 h-auto">
                        View all tutorials
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Subscribe to our newsletter to receive the latest updates, articles, and resources.
              </p>
              <SubscribeForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
