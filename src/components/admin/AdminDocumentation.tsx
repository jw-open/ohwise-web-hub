
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Edit, Trash, Eye } from "lucide-react";
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
    <Card>
      <CardHeader>
        <CardTitle>Documentation Management</CardTitle>
        <CardDescription>Create, edit, and manage your documentation pages</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search documents..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Dialog open={isCreateDialogOpen} onOpenChange={handleDialogOpenChange}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Document
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                  <DialogTitle>{currentDocument.id ? "Edit" : "Create"} Document</DialogTitle>
                  <DialogDescription>
                    {currentDocument.id ? "Update" : "Add"} documentation details and content
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
                      value={currentDocument.title}
                      onChange={(e) => setCurrentDocument({ ...currentDocument, title: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="category" className="text-right text-sm font-medium">
                      Category
                    </label>
                    <Select
                      value={currentDocument.category}
                      onValueChange={(value) => setCurrentDocument({ ...currentDocument, category: value })}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Basics">Basics</SelectItem>
                        <SelectItem value="Technical">Technical</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="status" className="text-right text-sm font-medium">
                      Status
                    </label>
                    <Select
                      value={currentDocument.status}
                      onValueChange={(value: "Draft" | "Published") => 
                        setCurrentDocument({ ...currentDocument, status: value })}
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
                      placeholder="Write documentation content..."
                      value={currentDocument.content}
                      onChange={(e) => setCurrentDocument({ ...currentDocument, content: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" onClick={handleCreateDocument}>
                    {currentDocument.id ? "Update" : "Create"}
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
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDocuments.length > 0 ? (
                  filteredDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium">{doc.title}</TableCell>
                      <TableCell>{doc.category}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          doc.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {doc.status}
                        </span>
                      </TableCell>
                      <TableCell>{doc.date}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" onClick={() => handleViewDocument(doc.id)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleEditDocument(doc)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteDocument(doc.id)}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                      No documents found
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
