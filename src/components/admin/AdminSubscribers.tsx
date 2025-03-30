
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Mail, Trash, CheckCircle } from "lucide-react";

// Mock data for demonstration
const MOCK_SUBSCRIBERS = [
  { id: 1, email: "john.doe@example.com", name: "John Doe", status: "Active", date: "2023-08-10", subscriptions: ["Blog", "Documentation"] },
  { id: 2, email: "jane.smith@example.com", name: "Jane Smith", status: "Active", date: "2023-08-15", subscriptions: ["Blog"] },
  { id: 3, email: "mark.wilson@example.com", name: "Mark Wilson", status: "Inactive", date: "2023-08-20", subscriptions: ["Documentation", "Videos"] },
];

const AdminSubscribers = () => {
  const [subscribers, setSubscribers] = useState(MOCK_SUBSCRIBERS);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSubscriber, setCurrentSubscriber] = useState<{
    id?: number;
    email: string;
    name: string;
    status: string;
    subscriptions: string[];
  }>({ email: "", name: "", status: "Active", subscriptions: ["Blog"] });

  const handleCreateSubscriber = () => {
    const newSubscriber = {
      ...currentSubscriber,
      id: subscribers.length + 1,
      date: new Date().toISOString().split('T')[0],
    };
    
    setSubscribers([...subscribers, newSubscriber]);
    setCurrentSubscriber({ email: "", name: "", status: "Active", subscriptions: ["Blog"] });
    setIsCreateDialogOpen(false);
  };

  const handleDeleteSubscriber = (id: number) => {
    setSubscribers(subscribers.filter(subscriber => subscriber.id !== id));
  };

  const handleToggleSubscription = (subscriberId: number, subscription: string) => {
    setSubscribers(subscribers.map(subscriber => {
      if (subscriber.id === subscriberId) {
        if (subscriber.subscriptions.includes(subscription)) {
          return {
            ...subscriber,
            subscriptions: subscriber.subscriptions.filter(s => s !== subscription)
          };
        } else {
          return {
            ...subscriber,
            subscriptions: [...subscriber.subscriptions, subscription]
          };
        }
      }
      return subscriber;
    }));
  };

  const filteredSubscribers = subscribers.filter(subscriber => 
    subscriber.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
                      value={currentSubscriber.name}
                      onChange={(e) => setCurrentSubscriber({ ...currentSubscriber, name: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="status" className="text-right text-sm font-medium">
                      Status
                    </label>
                    <Select
                      value={currentSubscriber.status}
                      onValueChange={(value) => setCurrentSubscriber({ ...currentSubscriber, status: value })}
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
                  <div className="grid grid-cols-4 items-start gap-4">
                    <label className="text-right text-sm font-medium pt-2">
                      Subscriptions
                    </label>
                    <div className="col-span-3 flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="blog-subscription"
                          checked={currentSubscriber.subscriptions.includes("Blog")}
                          onChange={() => {
                            if (currentSubscriber.subscriptions.includes("Blog")) {
                              setCurrentSubscriber({
                                ...currentSubscriber,
                                subscriptions: currentSubscriber.subscriptions.filter(s => s !== "Blog")
                              });
                            } else {
                              setCurrentSubscriber({
                                ...currentSubscriber,
                                subscriptions: [...currentSubscriber.subscriptions, "Blog"]
                              });
                            }
                          }}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="blog-subscription" className="text-sm text-gray-700 dark:text-gray-200">
                          Blog Updates
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="docs-subscription"
                          checked={currentSubscriber.subscriptions.includes("Documentation")}
                          onChange={() => {
                            if (currentSubscriber.subscriptions.includes("Documentation")) {
                              setCurrentSubscriber({
                                ...currentSubscriber,
                                subscriptions: currentSubscriber.subscriptions.filter(s => s !== "Documentation")
                              });
                            } else {
                              setCurrentSubscriber({
                                ...currentSubscriber,
                                subscriptions: [...currentSubscriber.subscriptions, "Documentation"]
                              });
                            }
                          }}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="docs-subscription" className="text-sm text-gray-700 dark:text-gray-200">
                          Documentation Updates
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="video-subscription"
                          checked={currentSubscriber.subscriptions.includes("Videos")}
                          onChange={() => {
                            if (currentSubscriber.subscriptions.includes("Videos")) {
                              setCurrentSubscriber({
                                ...currentSubscriber,
                                subscriptions: currentSubscriber.subscriptions.filter(s => s !== "Videos")
                              });
                            } else {
                              setCurrentSubscriber({
                                ...currentSubscriber,
                                subscriptions: [...currentSubscriber.subscriptions, "Videos"]
                              });
                            }
                          }}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="video-subscription" className="text-sm text-gray-700 dark:text-gray-200">
                          Video Content
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" onClick={handleCreateSubscriber}>
                    Add Subscriber
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Subscriptions</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubscribers.length > 0 ? (
                  filteredSubscribers.map((subscriber) => (
                    <TableRow key={subscriber.id}>
                      <TableCell className="font-medium">{subscriber.name}</TableCell>
                      <TableCell>{subscriber.email}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          subscriber.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}>
                          {subscriber.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {subscriber.subscriptions.map((subscription, i) => (
                            <span key={i} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                              {subscription}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{subscriber.date}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" onClick={() => console.log("Email", subscriber.id)}>
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
                    <TableCell colSpan={6} className="text-center py-4 text-muted-foreground">
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
