
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { getContentById, BlogContent as BlogPostContent } from "@/utils/fileSystem";
import { useToast } from "@/components/ui/use-toast";
import ReactMarkdown from "react-markdown";
import { Calendar, Clock, User, Tag } from "lucide-react";
import SubscribeForm from "@/components/blog/SubscribeForm";

const BlogContent = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostContent | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const blogPost = getContentById<BlogPostContent>('blog', id);
      
      if (blogPost) {
        setPost(blogPost);
      } else {
        toast({
          title: "Blog Post Not Found",
          description: "The requested blog post could not be found.",
          variant: "destructive",
        });
      }
    }
    
    setLoading(false);
  }, [id, toast]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
              <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
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
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="pt-6">
                <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  The blog post you're looking for doesn't exist or has been removed.
                </p>
              </CardContent>
            </Card>
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
        <article>
          {/* Header with Featured Image */}
          <header className="relative">
            {post.image ? (
              <div className="w-full h-[40vh] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 z-20">
                  <div className="container mx-auto">
                    <div className="max-w-3xl">
                      <div className="flex items-center mb-4 text-white space-x-4">
                        <span className="inline-flex items-center">
                          <Tag size={16} className="mr-1" />
                          {post.category}
                        </span>
                        <span className="inline-flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {post.date}
                        </span>
                      </div>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {post.title}
                      </h1>
                      <div className="flex items-center text-white">
                        <User size={16} className="mr-1" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center mb-4 text-gray-500 dark:text-gray-400 space-x-4">
                    <span className="inline-flex items-center">
                      <Tag size={16} className="mr-1" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    {post.title}
                  </h1>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <User size={16} className="mr-1" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                </div>
              </div>
            )}
          </header>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="max-w-3xl mx-auto">
              <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </article>

        {/* Subscribe Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Stay updated with the latest articles, tutorials, and updates.
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

export default BlogContent;
