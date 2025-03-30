
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Mail, Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  getAllContent,
  saveContent,
  deleteContent,
  generateId,
  SubscriberContent
} from "@/utils/fileSystem";

const AdminSubscribers = () => {
  const [subscribers, setSubscribers] = useState<SubscriberContent[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSubscriber, setCurrentSubscriber] = useState<SubscriberContent>({
    id: "",
    email: "",
    name: "",
    status: "Active",
    date: ""
  });
  
  const { toast } = useToast();

  // Load subscribers on component mount
  useEffect(() => {
    loadSubscribers();
  }, []);

  const loadSubscribers = () => {
    const subscriberContent = getAllContent<SubscriberContent>('subscriber');
    setSubscribers(subscriberContent);
  };

  const handleCreateSubscriber = () => {
    try {
      const newSubscriber = {
        ...currentSubscriber,
        id: currentSubscriber.id || generateId(),
        date: currentSubscriber.date || new Date().toISOString().split('T')[0],
      };
      
      saveContent('subscriber', newSubscriber);
      loadSubscribers();
      setCurrentSubscriber({
        id: "",
        email: "",
        name: "",
        status: "Active",
        date: ""
      });
      setIsCreateDialogOpen(false);
      
      toast({
        title: currentSubscriber.id ? "Subscriber Updated" : "Subscriber Added",
        description: `Successfully ${currentSubscriber.id ? "updated" : "added"} "${newSubscriber.email}"`,
      });
    } catch (error) {
      console.error("Error saving subscriber:", error);
      toast({
        title: "Error",
        description: "Failed to save subscriber. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEditSubscriber = (subscriber: SubscriberContent) => {
    setCurrentSubscriber(subscriber);
    setIsCreateDialogOpen(true);
  };

  const handleDeleteSubscriber = (id: string) => {
    try {
      deleteContent('subscriber', id);
      loadSubscribers();
      toast({
        title: "Subscriber Deleted",
        description: "Subscriber has been successfully deleted",
      });
    } catch (error) {
      console.error("Error deleting subscriber:", error);
      toast({
        title: "Error",
        description: "Failed to delete subscriber. Please try again.",
        variant: "destructive",
      });
    }
  };

  const filteredSubscribers = subscribers.filter(subscriber => 
    (subscriber.name?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    subscriber.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscriber Management</CardTitle>
        <CardDescription>Manage newsletter and content subscribers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search subscribers..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Subscriber
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Subscriber</DialogTitle>
                  <DialogDescription>
                    Add a new subscriber to your mailing lists
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="email" className="text-right text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="col-span-3"
                      value={currentSubscriber.email}
                      onChange={(e) => setCurrentSubscriber({ ...currentSubscriber, email: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      className="col-span-3"
                      value={currentSubscriber.name || ""}
                      onChange={(e) => setCurrentSubscriber({ ...currentSubscriber, name: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="status" className="text-right text-sm font-medium">
                      Status
                    </label>
                    <Select
                      value={currentSubscriber.status}
                      onValueChange={(value: "Active" | "Inactive") => setCurrentSubscriber({ ...currentSubscriber, status: value })}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" onClick={handleCreateSubscriber}>
                    {currentSubscriber.id ? "Update" : "Add"} Subscriber
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubscribers.length > 0 ? (
                  filteredSubscribers.map((subscriber) => (
                    <TableRow key={subscriber.id}>
                      <TableCell>{subscriber.email}</TableCell>
                      <TableCell className="font-medium">{subscriber.name || "-"}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          subscriber.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}>
                          {subscriber.status}
                        </span>
                      </TableCell>
                      <TableCell>{subscriber.date}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" onClick={() => handleEditSubscriber(subscriber)}>
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteSubscriber(subscriber.id)}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                      No subscribers found
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

export default AdminSubscribers;
