import { useState } from "react";
import { Calendar, Package, Users, Clock, MapPin, DollarSign, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const eventPackages = [
  {
    id: 1,
    name: "Gold Package",
    price: "$2,999",
    description: "Perfect for intimate celebrations",
    features: [
      "4-hour photography coverage",
      "100 edited photos",
      "Basic decoration",
      "DJ services (4 hours)",
      "Catering for 50 guests"
    ],
    bookings: 45,
    revenue: "$134,955"
  },
  {
    id: 2,
    name: "Premium Package",
    price: "$4,999",
    description: "Ideal for medium-scale events",
    features: [
      "6-hour photography & videography",
      "200 edited photos + highlight reel",
      "Premium decoration",
      "DJ & live band (6 hours)",
      "Catering for 100 guests",
      "Wedding cake included"
    ],
    bookings: 67,
    revenue: "$334,933"
  },
  {
    id: 3,
    name: "Deluxe Package",
    price: "$8,999",
    description: "Ultimate luxury experience",
    features: [
      "8-hour full coverage",
      "Unlimited photos + cinematic video",
      "Luxury decoration & flowers",
      "Live band & entertainment",
      "Premium catering for 150 guests",
      "Multi-tier wedding cake",
      "Bridal suite preparation coverage"
    ],
    bookings: 23,
    revenue: "$206,977"
  }
];

const eventBookings = [
  {
    id: 1,
    eventName: "Sarah & John Wedding",
    package: "Premium Package",
    customer: "Sarah Johnson",
    date: "2024-02-14",
    venue: "Grand Plaza Hotel",
    status: "confirmed",
    vendor: "Creative Lens Studio",
    guests: 85,
    amount: "$4,999"
  },
  {
    id: 2,
    eventName: "Corporate Gala 2024",
    package: "Deluxe Package",
    customer: "Tech Solutions Inc",
    date: "2024-02-20",
    venue: "Convention Center",
    status: "pending",
    vendor: "Dream Weddings Inc",
    guests: 150,
    amount: "$8,999"
  },
  {
    id: 3,
    eventName: "Birthday Celebration",
    package: "Gold Package",
    customer: "Michael Smith",
    date: "2024-01-28",
    venue: "Private Residence",
    status: "completed",
    vendor: "Modern Events Co",
    guests: 40,
    amount: "$2,999"
  },
  {
    id: 4,
    eventName: "Anniversary Party",
    package: "Premium Package",
    customer: "Robert & Linda Davis",
    date: "2024-03-05",
    venue: "Garden Estate",
    status: "confirmed",
    vendor: "Creative Lens Studio",
    guests: 75,
    amount: "$4,999"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-success/10 text-success border-success/20";
    case "pending":
      return "bg-warning/10 text-warning border-warning/20";
    case "completed":
      return "bg-primary/10 text-primary border-primary/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function Events() {
  const [packages] = useState(eventPackages);
  const [bookings] = useState(eventBookings);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Event Management</h1>
          <p className="text-muted-foreground">Manage event packages and bookings</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create Package
        </Button>
      </div>

      <Tabs defaultValue="packages" className="space-y-6">
        <TabsList>
          <TabsTrigger value="packages">Event Packages</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
        </TabsList>

        <TabsContent value="packages" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Package className="w-8 h-8 text-primary" />
                    <Badge variant="outline">{pkg.bookings} bookings</Badge>
                  </div>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>Total Revenue</span>
                    <span className="font-semibold text-foreground">{pkg.revenue}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit
                    </Button>
                    <Button size="sm" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-chart-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total Bookings</p>
                    <p className="text-2xl font-bold">{bookings.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-chart-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-2xl font-bold">
                      {bookings.filter(b => b.status === 'pending').length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-chart-tertiary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total Guests</p>
                    <p className="text-2xl font-bold">
                      {bookings.reduce((sum, b) => sum + b.guests, 0)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-success" />
                  <div>
                    <p className="text-sm text-muted-foreground">Revenue</p>
                    <p className="text-2xl font-bold">$676,865</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bookings Table */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
              <CardDescription>Manage customer event bookings and assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Guests</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{booking.eventName}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {booking.venue}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{booking.customer}</TableCell>
                      <TableCell>{booking.package}</TableCell>
                      <TableCell>{booking.date}</TableCell>
                      <TableCell>{booking.vendor}</TableCell>
                      <TableCell>{booking.guests}</TableCell>
                      <TableCell className="font-medium">{booking.amount}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </Badge>
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