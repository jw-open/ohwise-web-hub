
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash, Eye, BookOpen, FileText, TrendingUp } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { 
  getAllContent, 
  saveContent, 
  deleteContent, 
  generateId, 
  DocumentContent 
} from "@/utils/fileSystem";
import { useNavigate } from "react-router-dom";

const AdminDocumentation = () => {
  const [documents, setDocuments] = useState<DocumentContent[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDocument, setCurrentDocument] = useState<DocumentContent>({
    id: "",
    title: "",
    category: "Basics",
    content: "",
    status: "Draft",
    date: "",
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  // Load documents on component mount
  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = () => {
    const docs = getAllContent<DocumentContent>('documentation');
    setDocuments(docs);
  };

  const handleCreateDocument = () => {
    try {
      const newDocument = {
        ...currentDocument,
        id: currentDocument.id || generateId(),
        date: currentDocument.date || new Date().toISOString().split('T')[0],
      };
      
      saveContent('documentation', newDocument);
      loadDocuments();
      setIsCreateDialogOpen(false);
      
      toast({
        title: currentDocument.id ? "Document Updated" : "Document Created",
        description: `Successfully ${currentDocument.id ? "updated" : "created"} "${newDocument.title}"`,
      });
      
      // Reset form after successful submission
      setCurrentDocument({ id: "", title: "", category: "Basics", content: "", status: "Draft", date: "" });
    } catch (error) {
      console.error("Error saving document:", error);
      toast({
        title: "Error",
        description: "Failed to save document. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEditDocument = (document: DocumentContent) => {
    // Important: Create a fresh copy of the document
    setCurrentDocument({...document});
    setIsCreateDialogOpen(true);
  };

  const handleDeleteDocument = (id: string) => {
    try {
      deleteContent('documentation', id);
      loadDocuments();
      toast({
        title: "Document Deleted",
        description: "Document has been successfully deleted",
      });
    } catch (error) {
      console.error("Error deleting document:", error);
      toast({
        title: "Error",
        description: "Failed to delete document. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleViewDocument = (id: string) => {
    navigate(`/documentation/${id}`);
  };

  const filteredDocuments = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // This ensures the dialog properly resets when it's closed
  const handleDialogOpenChange = (open: boolean) => {
    setIsCreateDialogOpen(open);
    if (!open) {
      // Reset form when dialog is closed
      setCurrentDocument({ id: "", title: "", category: "Basics", content: "", status: "Draft", date: "" });
    }
  };

  return (
    <Card className="shadow-lg border-2">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-b">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-indigo-600" />
          Documentation Management
        </CardTitle>
        <CardDescription className="text-base">
          Create, edit, and manage your documentation pages with ease
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center gap-4 flex-wrap">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search documents by title or category..."
                className="pl-10 h-11 text-base border-2 focus:border-indigo-500 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Dialog open={isCreateDialogOpen} onOpenChange={handleDialogOpenChange}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg">
                  <Plus className="mr-2 h-5 w-5" />
                  Add New Document
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader className="border-b pb-4">
                  <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                    <FileText className="w-6 h-6 text-indigo-600" />
                    {currentDocument.id ? "Edit" : "Create"} Document
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {currentDocument.id ? "Update" : "Add"} documentation details and content below
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-5 py-4">
                  <div className="grid gap-2">
                    <label htmlFor="title" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Title *
                    </label>
                    <Input
                      id="title"
                      className="h-11 border-2 focus:border-indigo-500 transition-colors"
                      placeholder="Enter document title..."
                      value={currentDocument.title}
                      onChange={(e) => setCurrentDocument({ ...currentDocument, title: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="category" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Category
                      </label>
                      <Select
                        value={currentDocument.category}
                        onValueChange={(value) => setCurrentDocument({ ...currentDocument, category: value })}
                      >
                        <SelectTrigger className="h-11 border-2">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Basics">Basics</SelectItem>
                          <SelectItem value="Technical">Technical</SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="status" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Status
                      </label>
                      <Select
                        value={currentDocument.status}
                        onValueChange={(value: "Draft" | "Published") => 
                          setCurrentDocument({ ...currentDocument, status: value })}
                      >
                        <SelectTrigger className="h-11 border-2">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Draft">Draft</SelectItem>
                          <SelectItem value="Published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="content" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Content *
                    </label>
                    <Textarea
                      id="content"
                      className="border-2 focus:border-indigo-500 transition-colors min-h-[200px]"
                      rows={12}
                      placeholder="Write your documentation content here (supports markdown)..."
                      value={currentDocument.content}
                      onChange={(e) => setCurrentDocument({ ...currentDocument, content: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter className="border-t pt-4 gap-2">
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)} className="h-10">
                    Cancel
                  </Button>
                  <Button type="submit" onClick={handleCreateDocument} className="h-10 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                    {currentDocument.id ? "Update Document" : "Create Document"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-lg border-2 overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-gray-50 dark:bg-gray-800">
                <TableRow className="border-b-2">
                  <TableHead className="font-bold text-base py-4">Title</TableHead>
                  <TableHead className="font-bold text-base py-4">Category</TableHead>
                  <TableHead className="font-bold text-base py-4">Status</TableHead>
                  <TableHead className="font-bold text-base py-4">Date</TableHead>
                  <TableHead className="text-right font-bold text-base py-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDocuments.length > 0 ? (
                  filteredDocuments.map((doc) => (
                    <TableRow key={doc.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <TableCell className="font-semibold text-base py-4">{doc.title}</TableCell>
                      <TableCell className="py-4">
                        <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50">
                          {doc.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-4">
                        <Badge 
                          className={`px-3 py-1 font-semibold ${
                            doc.status === "Published" 
                              ? "bg-green-100 text-green-800 border-green-200" 
                              : "bg-yellow-100 text-yellow-800 border-yellow-200"
                          }`}
                        >
                          {doc.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400 py-4">{doc.date}</TableCell>
                      <TableCell className="text-right py-4">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleViewDocument(doc.id)}
                            className="hover:bg-blue-50 hover:text-blue-600"
                            title="View"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleEditDocument(doc)}
                            className="hover:bg-indigo-50 hover:text-indigo-600"
                            title="Edit"
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDeleteDocument(doc.id)}
                            className="hover:bg-red-50 hover:text-red-600"
                            title="Delete"
                          >
                            <Trash className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-12">
                      <div className="flex flex-col items-center gap-3">
                        <FileText className="h-12 w-12 text-gray-400" />
                        <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
                          No documents found
                        </p>
                        <p className="text-sm text-gray-400">
                          {searchQuery ? "Try adjusting your search" : "Create your first document"}
                        </p>
                      </div>
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

export default AdminDocumentation;
