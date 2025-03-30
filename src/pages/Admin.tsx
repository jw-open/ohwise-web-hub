
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, FileText, Video, BookOpen, Rss } from "lucide-react";
import AdminDocumentation from "../components/admin/AdminDocumentation";
import AdminBlog from "../components/admin/AdminBlog";
import AdminVideos from "../components/admin/AdminVideos";
import AdminSubscribers from "../components/admin/AdminSubscribers";
import { initializeContent } from "@/utils/fileSystem";
import { useToast } from "@/components/ui/use-toast";

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("documentation");
  const { toast } = useToast();
  
  // Initialize content on component mount
  useEffect(() => {
    initializeContent();
    toast({
      title: "Admin Dashboard Ready",
      description: "Content management system has been initialized",
    });
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Create, update, and manage your content
            </p>
          </div>
          
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full max-w-3xl">
              <TabsTrigger value="documentation" className="flex items-center space-x-2">
                <BookOpen size={16} />
                <span>Documentation</span>
              </TabsTrigger>
              <TabsTrigger value="blog" className="flex items-center space-x-2">
                <FileText size={16} />
                <span>Blog</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center space-x-2">
                <Video size={16} />
                <span>Videos</span>
              </TabsTrigger>
              <TabsTrigger value="subscribers" className="flex items-center space-x-2">
                <Rss size={16} />
                <span>Subscribers</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="documentation">
              <AdminDocumentation />
            </TabsContent>
            
            <TabsContent value="blog">
              <AdminBlog />
            </TabsContent>
            
            <TabsContent value="videos">
              <AdminVideos />
            </TabsContent>
            
            <TabsContent value="subscribers">
              <AdminSubscribers />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
