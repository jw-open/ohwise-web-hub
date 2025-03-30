
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar, Clock, ChevronLeft, Share2, Bookmark, ThumbsUp, MessageSquare, Tag } from "lucide-react";
import SubscribeForm from "../components/blog/SubscribeForm";

// Mock blog post data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Introducing OhWise 2.0: The Next Generation of AI Operations",
    content: `
      <p class="lead">Today, we're thrilled to announce the release of OhWise 2.0, our most significant platform update yet. This new version brings enhanced multi-agent capabilities, improved knowledge graph integration, and a completely redesigned user interface.</p>
      
      <h2>Revolutionizing AI Operations</h2>
      <p>Since launching OhWise, our mission has been clear: to make complex AI operations simple, efficient, and accessible to businesses of all sizes. With OhWise 2.0, we're taking a major step forward in realizing that vision.</p>
      
      <p>Our customers have been using OhWise to automate complex workflows, reduce operational overhead, and extract valuable insights from their data. Now, with version 2.0, we're introducing features that make these capabilities even more powerful and easier to implement.</p>
      
      <h2>Key Features in OhWise 2.0</h2>
      
      <h3>Enhanced Multi-Agent Orchestration</h3>
      <p>OhWise 2.0 introduces a completely redesigned agent orchestration system that enables more complex interactions between specialized AI agents. This means your agents can collaborate more effectively, share context, and solve problems that would be impossible for a single agent to handle.</p>
      
      <h3>Advanced Knowledge Graph Integration</h3>
      <p>Our knowledge graph capabilities have been significantly expanded, allowing for more nuanced relationships between data points and improved reasoning capabilities. This translates to better insights, more accurate predictions, and more effective automation.</p>
      
      <h3>Redesigned User Interface</h3>
      <p>We've completely rebuilt our user interface from the ground up, focusing on simplicity, usability, and power. The new UI makes it easier than ever to design workflows, monitor agent performance, and analyze results.</p>
      
      <h3>Expanded Integration Ecosystem</h3>
      <p>OhWise 2.0 now connects with over 50 popular tools and platforms out of the box, making it simpler to integrate into your existing technology stack. From CRMs to data warehouses, we've got you covered.</p>
      
      <h2>Customer Success Stories</h2>
      <p>During our beta testing period, several customers have already experienced the benefits of OhWise 2.0:</p>
      
      <blockquote>
        "OhWise 2.0 has transformed how we handle customer support incidents. What used to take hours now happens automatically in minutes, and with greater accuracy than ever before."
        <cite>— Sarah Johnson, CTO at TechSolutions Inc.</cite>
      </blockquote>
      
      <h2>Getting Started with OhWise 2.0</h2>
      <p>For existing customers, upgrading to OhWise 2.0 is simple and non-disruptive. Your current configurations will be automatically migrated, and our team is standing by to help with any questions.</p>
      
      <p>New to OhWise? There's never been a better time to start. Our onboarding process has been streamlined, and we offer comprehensive documentation and support to get you up and running quickly.</p>
      
      <h2>Looking Ahead</h2>
      <p>OhWise 2.0 represents a major milestone in our journey, but we're just getting started. Our roadmap for the coming year includes even more exciting features, including enhanced natural language processing capabilities, deeper analytics, and expanded customization options.</p>
      
      <p>We're incredibly grateful to our customers and partners who have provided valuable feedback and support throughout this development process. Together, we're building the future of intelligent operations.</p>
    `,
    author: "Sarah Johnson",
    authorTitle: "Chief Product Officer",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
    date: "August 15, 2023",
    readTime: "5 min read",
    category: "Announcements",
    tags: ["Product Update", "AI Operations", "Multi-agent Systems"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
];

// Mock related posts
const RELATED_POSTS = [
  {
    id: 2,
    title: "How AI is Transforming DevOps: The OhWise Approach",
    excerpt: "The integration of AI into DevOps processes is no longer a future trend—it's happening now.",
    date: "August 10, 2023",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "OhWise Product Roadmap: What's Coming in Q4 2023",
    excerpt: "Our product team has been hard at work planning exciting new features for the OhWise platform.",
    date: "July 15, 2023",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Building Responsible AI Systems with OhWise",
    excerpt: "As AI systems become more prevalent, ensuring they operate ethically and responsibly is paramount.",
    date: "August 5, 2023",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<typeof BLOG_POSTS[0] | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const foundPost = BLOG_POSTS.find(p => p.id === Number(id));
      setPost(foundPost || null);
      setLoading(false);
    }, 500);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto">
              <div className="animate-pulse">
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md mb-4 w-3/4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md mb-8 w-1/2"></div>
                <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-md mb-8"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Link to="/blog">
                <Button>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <article className="pb-16">
          {/* Hero */}
          <div className="h-96 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center text-white">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                      {post.category}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {post.title}
                  </h1>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className="prose prose-lg dark:prose-invert max-w-none mb-8" 
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
                
                {/* Tags */}
                <div className="mb-8">
                  <div className="flex items-center flex-wrap gap-2">
                    <Tag className="h-4 w-4 text-gray-500" />
                    {post.tags.map((tag, index) => (
                      <Link 
                        key={index} 
                        to={`/blog?tag=${tag}`}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Engagement */}
                <div className="flex justify-between items-center border-t border-b py-4 mb-8 border-gray-200 dark:border-gray-700">
                  <div className="flex gap-4">
                    <button className="flex items-center text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                      <ThumbsUp className="h-5 w-5 mr-1" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                      <MessageSquare className="h-5 w-5 mr-1" />
                      <span>Comment</span>
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                      <Bookmark className="h-5 w-5" />
                    </button>
                    <button className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {/* Author */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                  <div className="flex items-start sm:items-center flex-col sm:flex-row gap-4">
                    <img 
                      src={post.authorAvatar} 
                      alt={post.author} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{post.author}</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-2">{post.authorTitle}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Passionate about building tools that make AI operations more accessible and efficient for organizations of all sizes.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <Link to="/blog">
                    <Button variant="outline">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back to Blog
                    </Button>
                  </Link>
                  <div className="flex gap-2">
                    {/* Previous/Next post navigation could go here */}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3 space-y-8">
                {/* Related Posts */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {RELATED_POSTS.map(relatedPost => (
                      <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="block group">
                        <div className="flex gap-3">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-20 h-16 object-cover rounded"
                          />
                          <div>
                            <h4 className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {relatedPost.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Categories */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {["Announcements", "Technical", "Best Practices", "Case Studies", "Tutorials"].map((category, index) => (
                        <Link 
                          key={index} 
                          to={`/blog?category=${category}`} 
                          className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Subscribe Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Subscribe</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Get the latest posts delivered straight to your inbox.
                    </p>
                    <SubscribeForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
