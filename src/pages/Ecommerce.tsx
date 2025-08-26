import { useState } from "react";
import { ShoppingBag, Package, TrendingUp, Eye, Edit, Trash2, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products = [
  {
    id: 1,
    name: "Custom Photo Frame",
    category: "Frames",
    price: "$24.99",
    stock: 150,
    sold: 89,
    image: "/placeholder.svg",
    status: "active"
  },
  {
    id: 2,
    name: "Personalized Coffee Mug",
    category: "Mugs",
    price: "$14.99",
    stock: 200,
    sold: 156,
    image: "/placeholder.svg",
    status: "active"
  },
  {
    id: 3,
    name: "Wedding Photo Album",
    category: "Albums",
    price: "$49.99",
    stock: 75,
    sold: 43,
    image: "/placeholder.svg",
    status: "active"
  },
  {
    id: 4,
    name: "Custom Canvas Print",
    category: "Prints",
    price: "$39.99",
    stock: 100,
    sold: 67,
    image: "/placeholder.svg",
    status: "active"
  }
];

const orders = [
  {
    id: "ORD-001",
    customer: "Emily Johnson",
    email: "emily@email.com",
    items: 3,
    total: "$89.97",
    status: "processing",
    date: "2024-01-20",
    products: ["Custom Photo Frame", "Coffee Mug", "Canvas Print"]
  },
  {
    id: "ORD-002",
    customer: "Michael Brown",
    email: "michael@email.com",
    items: 1,
    total: "$49.99",
    status: "shipped",
    date: "2024-01-19",
    products: ["Wedding Photo Album"]
  },
  {
    id: "ORD-003",
    customer: "Sarah Wilson",
    email: "sarah@email.com",
    items: 2,
    total: "$64.98",
    status: "delivered",
    date: "2024-01-18",
    products: ["Custom Photo Frame", "Canvas Print"]
  },
  {
    id: "ORD-004",
    customer: "David Lee",
    email: "david@email.com",
    items: 4,
    total: "$124.96",
    status: "pending",
    date: "2024-01-21",
    products: ["Coffee Mug", "Photo Frame", "Canvas Print", "Album"]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-success/10 text-success border-success/20";
    case "shipped":
      return "bg-primary/10 text-primary border-primary/20";
    case "processing":
      return "bg-warning/10 text-warning border-warning/20";
    case "pending":
      return "bg-muted text-muted-foreground border-muted";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function Ecommerce() {
  const [productList] = useState(products);
  const [orderList] = useState(orders);

  const totalRevenue = orderList.reduce((sum, order) => 
    sum + parseFloat(order.total.replace('$', '')), 0
  );

  const totalProducts = productList.length;
  const totalOrders = orderList.length;
  const pendingOrders = orderList.filter(order => order.status === 'pending').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">E-commerce Management</h1>
          <p className="text-muted-foreground">Manage products, orders, and inventory</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-chart-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold">{totalOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-chart-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Products</p>
                <p className="text-2xl font-bold">{totalProducts}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-chart-tertiary" />
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-warning" />
              <div>
                <p className="text-sm text-muted-foreground">Pending Orders</p>
                <p className="text-2xl font-bold">{pendingOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="products" className="space-y-6">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Catalog</CardTitle>
              <CardDescription>Manage your customizable product inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Sold</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productList.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-10 h-10 rounded-md object-cover"
                          />
                          <div>
                            <div className="font-medium">{product.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="font-medium">{product.price}</TableCell>
                      <TableCell>
                        <Badge variant={product.stock > 50 ? "secondary" : "destructive"}>
                          {product.stock}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.sold}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Active</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Orders</CardTitle>
              <CardDescription>Track and manage customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orderList.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{order.customer}</div>
                          <div className="text-sm text-muted-foreground">{order.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{order.items} items</div>
                          <div className="text-sm text-muted-foreground">
                            {order.products.slice(0, 2).join(", ")}
                            {order.products.length > 2 && ` +${order.products.length - 2} more`}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{order.total}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
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