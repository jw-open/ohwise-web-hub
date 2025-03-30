
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, Rss } from "lucide-react";
import AdminDocumentation from "../components/admin/AdminDocumentation";
import AdminBlog from "../components/admin/AdminBlog";
import AdminVideos from "../components/admin/AdminVideos";
import AdminSubscribers from "../components/admin/AdminSubscribers";
import AdminLogin from "../components/admin/AdminLogin";
import { initializeContent } from "@/utils/fileSystem";
import { useToast } from "@/components/ui/use-toast";

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("documentation");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  
  // Check authentication on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem("ohwise_admin_auth") === "true";
    setIsAuthenticated(authStatus);
    
    // Initialize content if authenticated
    if (authStatus) {
      initializeContent();
      toast({
        title: "Admin Dashboard Ready",
        description: "Content management system has been initialized",
      });
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("ohwise_admin_auth");
    setIsAuthenticated(false);
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
  };
  
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    initializeContent();
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hide navigation for admin page */}
      <div className="h-16"></div>
      
      <main className="flex-grow pt-16 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isAuthenticated ? (
            <>
              <div className="mb-8 flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    Create, update, and manage your content
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-sm"
                >
                  Logout
                </button>
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
            </>
          ) : (
            <AdminLogin onLoginSuccess={handleLoginSuccess} />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
