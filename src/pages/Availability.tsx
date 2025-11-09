import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle, XCircle } from "lucide-react";

const menuAvailability = [
  { id: 1, name: "Butter Chicken", category: "Indian", available: true },
  { id: 2, name: "Paneer Tikka", category: "Indian", available: true },
  { id: 3, name: "Biryani", category: "Indian", available: false },
  { id: 4, name: "Fried Rice", category: "Chinese", available: true },
  { id: 5, name: "Chow Mein", category: "Chinese", available: true },
  { id: 6, name: "Margherita Pizza", category: "Italian", available: true },
  { id: 7, name: "Pasta Alfredo", category: "Italian", available: false },
  { id: 8, name: "Masala Chai", category: "Beverages", available: true },
  { id: 9, name: "Cold Coffee", category: "Beverages", available: true },
  { id: 10, name: "Samosa", category: "Snacks", available: true },
];

const Availability = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuAvailability.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4 font-poppins">
            Today's Menu 📋
          </h1>
          <p className="text-xl text-muted-foreground">
            Check real-time food availability from the canteen
          </p>
        </div>

        {/* Search Bar */}
        <Card className="max-w-2xl mx-auto p-6 mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for food items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 text-lg"
            />
          </div>
        </Card>

        {/* Availability List */}
        <div className="max-w-4xl mx-auto space-y-3 animate-slide-up">
          {filteredItems.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground text-lg">No items found</p>
            </Card>
          ) : (
            filteredItems.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">🍽️</div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {item.available ? (
                      <>
                        <CheckCircle className="text-accent w-6 h-6" />
                        <Badge className="bg-accent">Available</Badge>
                      </>
                    ) : (
                      <>
                        <XCircle className="text-destructive w-6 h-6" />
                        <Badge variant="destructive">Out of Stock</Badge>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Availability;
