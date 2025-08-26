import { useState } from "react";
import { MessageSquare, Mail, Phone, Calendar, MapPin, User, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const contactSubmissions = [
  {
    id: 1,
    name: "Jennifer Martinez",
    email: "jennifer@email.com",
    phone: "+1 (555) 123-4567",
    subject: "Wedding Photography Inquiry",
    message: "Hi, I'm planning my wedding for September 2024 and would love to know more about your photography packages. The venue will be at Sunset Gardens and we're expecting around 120 guests.",
    eventType: "Wedding",
    eventDate: "2024-09-15",
    status: "new",
    submittedAt: "2024-01-22 10:30 AM",
    priority: "high"
  },
  {
    id: 2,
    name: "Robert Chen",
    email: "robert@techcorp.com",
    phone: "+1 (555) 987-6543",
    subject: "Corporate Event Planning",
    message: "We need event planning services for our annual tech conference. Expected 300+ attendees, need A/V setup, catering, and professional photography coverage.",
    eventType: "Corporate",
    eventDate: "2024-04-20",
    status: "responded",
    submittedAt: "2024-01-21 2:15 PM",
    priority: "high"
  },
  {
    id: 3,
    name: "Lisa Thompson",
    email: "lisa@email.com",
    phone: "+1 (555) 456-7890",
    subject: "Birthday Party Photography",
    message: "Looking for a photographer for my daughter's sweet 16 party. It's going to be a small gathering of about 30 people at our home.",
    eventType: "Birthday",
    eventDate: "2024-03-10",
    status: "new",
    submittedAt: "2024-01-20 9:45 AM",
    priority: "medium"
  },
  {
    id: 4,
    name: "Mark Johnson",
    email: "mark@email.com",
    phone: "+1 (555) 321-0987",
    subject: "Anniversary Celebration",
    message: "My wife and I are celebrating our 25th anniversary and would like to book photography services for our celebration dinner party.",
    eventType: "Anniversary",
    eventDate: "2024-05-12",
    status: "closed",
    submittedAt: "2024-01-19 4:20 PM",
    priority: "low"
  },
  {
    id: 5,
    name: "Amanda Davis",
    email: "amanda@email.com",
    phone: "+1 (555) 654-3210",
    subject: "Graduation Party",
    message: "Planning a graduation party for my son. Need both photography and basic event coordination. About 80 guests expected.",
    eventType: "Graduation",
    eventDate: "2024-06-08",
    status: "new",
    submittedAt: "2024-01-18 11:00 AM",
    priority: "medium"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "new":
      return "bg-primary/10 text-primary border-primary/20";
    case "responded":
      return "bg-warning/10 text-warning border-warning/20";
    case "closed":
      return "bg-success/10 text-success border-success/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-destructive/10 text-destructive border-destructive/20";
    case "medium":
      return "bg-warning/10 text-warning border-warning/20";
    case "low":
      return "bg-success/10 text-success border-success/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function Contacts() {
  const [submissions, setSubmissions] = useState(contactSubmissions);

  const updateStatus = (id: number, newStatus: string) => {
    setSubmissions(submissions.map(sub => 
      sub.id === id ? { ...sub, status: newStatus } : sub
    ));
  };

  const newSubmissions = submissions.filter(sub => sub.status === 'new').length;
  const totalSubmissions = submissions.length;
  const respondedSubmissions = submissions.filter(sub => sub.status === 'responded').length;
  const closedSubmissions = submissions.filter(sub => sub.status === 'closed').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Contact Submissions</h1>
          <p className="text-muted-foreground">Manage customer inquiries and leads</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="destructive" className="px-3 py-1">
            {newSubmissions} New
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            {totalSubmissions} Total
          </Badge>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-chart-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Inquiries</p>
                <p className="text-2xl font-bold">{totalSubmissions}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">New</p>
                <p className="text-2xl font-bold">{newSubmissions}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-warning" />
              <div>
                <p className="text-sm text-muted-foreground">Responded</p>
                <p className="text-2xl font-bold">{respondedSubmissions}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Closed</p>
                <p className="text-2xl font-bold">{closedSubmissions}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Submissions ({totalSubmissions})</TabsTrigger>
          <TabsTrigger value="new">New ({newSubmissions})</TabsTrigger>
          <TabsTrigger value="responded">Responded ({respondedSubmissions})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6">
            {submissions.map((submission) => (
              <Card key={submission.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{submission.name}</CardTitle>
                        <CardDescription className="font-medium">{submission.subject}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getPriorityColor(submission.priority)}>
                        {submission.priority}
                      </Badge>
                      <Badge className={getStatusColor(submission.status)}>
                        {submission.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      {submission.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      {submission.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      Event: {submission.eventDate}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      {submission.submittedAt}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Message:</p>
                    <p className="text-sm bg-muted/30 p-3 rounded-md">{submission.message}</p>
                  </div>

                  <div className="flex gap-3">
                    {submission.status === 'new' && (
                      <>
                        <Button 
                          onClick={() => updateStatus(submission.id, 'responded')}
                          className="bg-primary hover:bg-primary/90"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Mark as Responded
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => updateStatus(submission.id, 'closed')}
                        >
                          Close Inquiry
                        </Button>
                      </>
                    )}
                    {submission.status === 'responded' && (
                      <Button 
                        onClick={() => updateStatus(submission.id, 'closed')}
                        className="bg-success hover:bg-success/90"
                      >
                        Mark as Closed
                      </Button>
                    )}
                    {submission.status === 'closed' && (
                      <Button 
                        variant="outline"
                        onClick={() => updateStatus(submission.id, 'new')}
                      >
                        Reopen
                      </Button>
                    )}
                    <Button variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Customer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="new" className="space-y-6">
          <div className="grid gap-6">
            {submissions.filter(sub => sub.status === 'new').map((submission) => (
              <Card key={submission.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{submission.name}</CardTitle>
                        <CardDescription className="font-medium">{submission.subject}</CardDescription>
                      </div>
                    </div>
                    <Badge className={getPriorityColor(submission.priority)}>
                      {submission.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      {submission.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      {submission.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      Event: {submission.eventDate}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      {submission.submittedAt}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Message:</p>
                    <p className="text-sm bg-muted/30 p-3 rounded-md">{submission.message}</p>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      onClick={() => updateStatus(submission.id, 'responded')}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Mark as Responded
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => updateStatus(submission.id, 'closed')}
                    >
                      Close Inquiry
                    </Button>
                    <Button variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Customer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="responded" className="space-y-6">
          <div className="grid gap-6">
            {submissions.filter(sub => sub.status === 'responded').map((submission) => (
              <Card key={submission.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{submission.name}</CardTitle>
                        <CardDescription className="font-medium">{submission.subject}</CardDescription>
                      </div>
                    </div>
                    <Badge className={getPriorityColor(submission.priority)}>
                      {submission.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      {submission.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      {submission.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      Event: {submission.eventDate}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      {submission.submittedAt}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Message:</p>
                    <p className="text-sm bg-muted/30 p-3 rounded-md">{submission.message}</p>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      onClick={() => updateStatus(submission.id, 'closed')}
                      className="bg-success hover:bg-success/90"
                    >
                      Mark as Closed
                    </Button>
                    <Button variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Follow Up
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
