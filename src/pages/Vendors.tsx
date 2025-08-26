import { useState } from "react";
import { Users, UserCheck, UserX, Mail, Phone, MapPin, Calendar, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const pendingVendors = [
  {
    id: 1,
    name: "John Photography Studio",
    email: "john@photostudio.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    specialization: "Wedding Photography",
    experience: "5 years",
    portfolio: "portfolio.com/john",
    appliedDate: "2024-01-15"
  },
  {
    id: 2,
    name: "Elite Event Planners",
    email: "contact@eliteevents.com",
    phone: "+1 (555) 987-6543",
    location: "Los Angeles, CA",
    specialization: "Corporate Events",
    experience: "8 years",
    portfolio: "eliteevents.com/work",
    appliedDate: "2024-01-12"
  }
];

const activeVendors = [
  {
    id: 1,
    name: "Creative Lens Studio",
    email: "info@creativelens.com",
    phone: "+1 (555) 456-7890",
    location: "San Francisco, CA",
    specialization: "Portrait Photography",
    rating: 4.8,
    completedEvents: 127,
    joinedDate: "2023-06-15",
    status: "active"
  },
  {
    id: 2,
    name: "Dream Weddings Inc",
    email: "hello@dreamweddings.com",
    phone: "+1 (555) 321-0987",
    location: "Chicago, IL",
    specialization: "Wedding Planning",
    rating: 4.9,
    completedEvents: 89,
    joinedDate: "2023-03-20",
    status: "active"
  },
  {
    id: 3,
    name: "Modern Events Co",
    email: "team@modernevents.com",
    phone: "+1 (555) 654-3210",
    location: "Miami, FL",
    specialization: "Corporate Events",
    rating: 4.6,
    completedEvents: 156,
    joinedDate: "2023-01-10",
    status: "active"
  }
];

export function Vendors() {
  const [pending, setPending] = useState(pendingVendors);
  const [active, setActive] = useState(activeVendors);

  const handleApprove = (id: number) => {
    const vendor = pending.find(v => v.id === id);
    if (vendor) {
      setPending(pending.filter(v => v.id !== id));
      setActive([...active, {
        ...vendor,
        rating: 0,
        completedEvents: 0,
        joinedDate: new Date().toISOString().split('T')[0],
        status: "active" as const
      }]);
    }
  };

  const handleReject = (id: number) => {
    setPending(pending.filter(v => v.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Vendor Management</h1>
          <p className="text-muted-foreground">Manage vendor applications and active partnerships</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="px-3 py-1">
            <Users className="w-4 h-4 mr-2" />
            {active.length} Active
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            <UserCheck className="w-4 h-4 mr-2" />
            {pending.length} Pending
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pending">Pending Applications ({pending.length})</TabsTrigger>
          <TabsTrigger value="active">Active Vendors ({active.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-6">
          <div className="grid gap-6">
            {pending.map((vendor) => (
              <Card key={vendor.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={`/placeholder.svg`} />
                        <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{vendor.name}</CardTitle>
                        <CardDescription>{vendor.specialization}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">Pending Review</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      {vendor.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      {vendor.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      {vendor.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      {vendor.experience} experience
                    </div>
                    <div className="flex items-center gap-2 text-sm col-span-2">
                      <span className="text-muted-foreground">Portfolio:</span>
                      <a href={`https://${vendor.portfolio}`} className="text-primary hover:underline">
                        {vendor.portfolio}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => handleApprove(vendor.id)}
                      className="bg-success hover:bg-success/90"
                    >
                      <UserCheck className="w-4 h-4 mr-2" />
                      Approve
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleReject(vendor.id)}
                      className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <UserX className="w-4 h-4 mr-2" />
                      Reject
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {pending.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Pending Applications</h3>
                  <p className="text-muted-foreground">All vendor applications have been reviewed.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="active" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Vendors</CardTitle>
              <CardDescription>Manage your approved vendor partners</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Specialization</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Events</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {active.map((vendor) => (
                    <TableRow key={vendor.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{vendor.name}</div>
                            <div className="text-sm text-muted-foreground">{vendor.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{vendor.specialization}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{vendor.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>{vendor.completedEvents}</TableCell>
                      <TableCell>{vendor.joinedDate}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Active</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}