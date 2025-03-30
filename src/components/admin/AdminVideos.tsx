
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Edit, Trash, PlayCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  getAllContent,
  saveContent,
  deleteContent,
  generateId,
  VideoContent
} from "@/utils/fileSystem";

const AdminVideos = () => {
  const [videos, setVideos] = useState<VideoContent[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentVideo, setCurrentVideo] = useState<VideoContent>({
    id: "",
    title: "",
    duration: "",
    category: "Tutorials",
    description: "",
    status: "Draft",
    date: "",
    url: ""
  });
  const { toast } = useToast();

  // Load videos on component mount
  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = () => {
    const videoContent = getAllContent<VideoContent>('video');
    setVideos(videoContent);
  };

  const handleCreateVideo = () => {
    try {
      const newVideo = {
        ...currentVideo,
        id: currentVideo.id || generateId(),
        date: currentVideo.date || new Date().toISOString().split('T')[0],
      };
      
      saveContent('video', newVideo);
      loadVideos();
      setCurrentVideo({
        id: "",
        title: "",
        duration: "",
        category: "Tutorials",
        description: "",
        status: "Draft",
        date: "",
        url: ""
      });
      setIsCreateDialogOpen(false);
      
      toast({
        title: currentVideo.id ? "Video Updated" : "Video Added",
        description: `Successfully ${currentVideo.id ? "updated" : "added"} "${newVideo.title}"`,
      });
    } catch (error) {
      console.error("Error saving video:", error);
      toast({
        title: "Error",
        description: "Failed to save video. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEditVideo = (video: VideoContent) => {
    setCurrentVideo(video);
    setIsCreateDialogOpen(true);
  };

  const handleDeleteVideo = (id: string) => {
    try {
      deleteContent('video', id);
      loadVideos();
      toast({
        title: "Video Deleted",
        description: "Video has been successfully deleted",
      });
    } catch (error) {
      console.error("Error deleting video:", error);
      toast({
        title: "Error",
        description: "Failed to delete video. Please try again.",
        variant: "destructive",
      });
    }
  };

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Video Management</CardTitle>
        <CardDescription>Upload, edit, and manage your video content</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search videos..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Video
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                  <DialogTitle>{currentVideo.id ? "Edit" : "Add"} Video</DialogTitle>
                  <DialogDescription>
                    {currentVideo.id ? "Update" : "Add"} video details and content
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
                      value={currentVideo.title}
                      onChange={(e) => setCurrentVideo({ ...currentVideo, title: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="url" className="text-right text-sm font-medium">
                      Video URL
                    </label>
                    <Input
                      id="url"
                      className="col-span-3"
                      value={currentVideo.url}
                      onChange={(e) => setCurrentVideo({ ...currentVideo, url: e.target.value })}
                      placeholder="https://www.youtube.com/watch?v=..."
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="duration" className="text-right text-sm font-medium">
                      Duration
                    </label>
                    <Input
                      id="duration"
                      className="col-span-3"
                      value={currentVideo.duration}
                      onChange={(e) => setCurrentVideo({ ...currentVideo, duration: e.target.value })}
                      placeholder="MM:SS"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="category" className="text-right text-sm font-medium">
                      Category
                    </label>
                    <Select
                      value={currentVideo.category}
                      onValueChange={(value) => setCurrentVideo({ ...currentVideo, category: value })}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Tutorials">Tutorials</SelectItem>
                        <SelectItem value="Technical">Technical</SelectItem>
                        <SelectItem value="Overview">Overview</SelectItem>
                        <SelectItem value="Case Studies">Case Studies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="status" className="text-right text-sm font-medium">
                      Status
                    </label>
                    <Select
                      value={currentVideo.status}
                      onValueChange={(value: "Draft" | "Published") => 
                        setCurrentVideo({ ...currentVideo, status: value })}
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
                    <label htmlFor="description" className="text-right text-sm font-medium pt-2">
                      Description
                    </label>
                    <Textarea
                      id="description"
                      className="col-span-3"
                      rows={5}
                      placeholder="Write video description..."
                      value={currentVideo.description}
                      onChange={(e) => setCurrentVideo({ ...currentVideo, description: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" onClick={handleCreateVideo}>
                    {currentVideo.id ? "Update" : "Add"}
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
                  <TableHead>Duration</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVideos.length > 0 ? (
                  filteredVideos.map((video) => (
                    <TableRow key={video.id}>
                      <TableCell className="font-medium">{video.title}</TableCell>
                      <TableCell>{video.duration}</TableCell>
                      <TableCell>{video.category}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          video.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {video.status}
                        </span>
                      </TableCell>
                      <TableCell>{video.date}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" onClick={() => window.open(video.url, '_blank')}>
                            <PlayCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleEditVideo(video)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteVideo(video.id)}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-4 text-muted-foreground">
                      No videos found
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

export default AdminVideos;
