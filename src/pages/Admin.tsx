import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  UtensilsCrossed,
  TrendingUp,
  MessageSquare,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Admin = () => {
  const [newItem, setNewItem] = useState({ name: "", price: "", category: "" });

  const stats = [
    { label: "Total Orders", value: "1,234", icon: UtensilsCrossed, color: "text-primary" },
    { label: "Revenue", value: "₹45,678", icon: TrendingUp, color: "text-accent" },
    { label: "Feedbacks", value: "156", icon: MessageSquare, color: "text-secondary" },
  ];

  const mockMenuItems = [
    { id: 1, name: "Butter Chicken", price: 180, category: "Indian" },
    { id: 2, name: "Margherita Pizza", price: 250, category: "Italian" },
    { id: 3, name: "Fried Rice", price: 140, category: "Chinese" },
  ];

  const mockOrders = [
    { id: 1, customer: "Rahul", items: 3, total: 450, status: "Preparing" },
    { id: 2, customer: "Priya", items: 2, total: 320, status: "Ready" },
    { id: 3, customer: "Arjun", items: 5, total: 780, status: "Delivered" },
  ];

  const handleAddItem = () => {
    if (!newItem.name || !newItem.price || !newItem.category) {
      toast({
        title: "Incomplete details",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Item added successfully! ✅",
      description: `${newItem.name} added to menu`,
    });
    setNewItem({ name: "", price: "", category: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4 font-poppins">
            Admin Dashboard 🧑‍💼
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage menu, orders, and track performance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <stat.icon className={`w-12 h-12 mx-auto mb-3 ${stat.color}`} />
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="menu" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="menu">Menu Management</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>

          <TabsContent value="menu" className="space-y-6 mt-6">
            {/* Add New Item */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Plus className="text-primary" />
                Add New Food Item
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="itemName">Item Name</Label>
                  <Input
                    id="itemName"
                    value={newItem.name}
                    onChange={(e) =>
                      setNewItem({ ...newItem, name: e.target.value })
                    }
                    placeholder="e.g., Butter Chicken"
                  />
                </div>
                <div>
                  <Label htmlFor="itemPrice">Price (₹)</Label>
                  <Input
                    id="itemPrice"
                    type="number"
                    value={newItem.price}
                    onChange={(e) =>
                      setNewItem({ ...newItem, price: e.target.value })
                    }
                    placeholder="e.g., 180"
                  />
                </div>
                <div>
                  <Label htmlFor="itemCategory">Category</Label>
                  <Input
                    id="itemCategory"
                    value={newItem.category}
                    onChange={(e) =>
                      setNewItem({ ...newItem, category: e.target.value })
                    }
                    placeholder="e.g., Indian"
                  />
                </div>
              </div>
              <Button onClick={handleAddItem} className="mt-4" size="lg">
                <Plus className="mr-2" />
                Add Item
              </Button>
            </Card>

            {/* Menu Items List */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4">Current Menu Items</h3>
              <div className="space-y-3">
                {mockMenuItems.map((item) => (
                  <Card key={item.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.category} • ₹{item.price}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="destructive" size="icon">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4 mt-6">
            {mockOrders.map((order) => (
              <Card key={order.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">Order #{order.id}</h4>
                    <p className="text-sm text-muted-foreground">
                      Customer: {order.customer}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {order.items} items • ₹{order.total}
                    </p>
                  </div>
                  <Badge
                    variant={
                      order.status === "Delivered"
                        ? "default"
                        : order.status === "Ready"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
