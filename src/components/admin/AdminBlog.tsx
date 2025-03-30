
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Edit, Trash, Eye } from "lucide-react";

// Mock data for demonstration
const MOCK_POSTS = [
  { id: 1, title: "Introducing OhWise 2.0", author: "John Doe", category: "Announcements", status: "Published", date: "2023-06-10" },
  { id: 2, title: "Best Practices for AI Integration", author: "Jane Smith", category: "Tutorials", status: "Published", date: "2023-06-15" },
  { id: 3, title: "Upcoming Features in Q3", author: "Mark Wilson", category: "Roadmap", status: "Draft", date: "2023-06-20" },
];

const AdminBlog = () => {
  const [posts, setPosts] = useState(MOCK_POSTS);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPost, setCurrentPost] = useState<{
    id?: number;
    title: string;
    author: string;
    category: string;
    content?: string;
    status: string;
  }>({ title: "", author: "", category: "Announcements", content: "", status: "Draft" });

  const handleCreatePost = () => {
    const newPost = {
      ...currentPost,
      id: posts.length + 1,
      date: new Date().toISOString().split('T')[0],
    };
    
    setPosts([...posts, newPost]);
    setCurrentPost({ title: "", author: "", category: "Announcements", content: "", status: "Draft" });
    setIsCreateDialogOpen(false);
  };

  const handleEditPost = (post: any) => {
    setCurrentPost(post);
    setIsCreateDialogOpen(true);
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blog Management</CardTitle>
        <CardDescription>Create, edit, and manage your blog posts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search blog posts..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Blog Post
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                  <DialogTitle>{currentPost.id ? "Edit" : "Create"} Blog Post</DialogTitle>
                  <DialogDescription>
                    {currentPost.id ? "Update" : "Add"} blog post details and content
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="title" className="text-right text-sm font-medium">
                      Title
                    </label>
                    <Input
                      id="title"
                      className="col-span-3"
                      value={currentPost.title}
                      onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="author" className="text-right text-sm font-medium">
                      Author
                    </label>
                    <Input
                      id="author"
                      className="col-span-3"
                      value={currentPost.author}
                      onChange={(e) => setCurrentPost({ ...currentPost, author: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="category" className="text-right text-sm font-medium">
                      Category
                    </label>
                    <Select
                      value={currentPost.category}
                      onValueChange={(value) => setCurrentPost({ ...currentPost, category: value })}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Announcements">Announcements</SelectItem>
                        <SelectItem value="Tutorials">Tutorials</SelectItem>
                        <SelectItem value="Roadmap">Roadmap</SelectItem>
                        <SelectItem value="Case Studies">Case Studies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="status" className="text-right text-sm font-medium">
                      Status
                    </label>
                    <Select
                      value={currentPost.status}
                      onValueChange={(value) => setCurrentPost({ ...currentPost, status: value })}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Draft">Draft</SelectItem>
                        <SelectItem value="Published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <label htmlFor="content" className="text-right text-sm font-medium pt-2">
                      Content
                    </label>
                    <Textarea
                      id="content"
                      className="col-span-3"
                      rows={10}
                      placeholder="Write blog content..."
                      value={currentPost.content}
                      onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" onClick={handleCreatePost}>
                    {currentPost.id ? "Update" : "Create"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          post.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {post.status}
                        </span>
                      </TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" onClick={() => console.log("View", post.id)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleEditPost(post)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeletePost(post.id)}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-4 text-muted-foreground">
                      No blog posts found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminBlog;
