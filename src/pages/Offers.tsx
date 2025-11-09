import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, Tag } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const offers = [
  {
    id: "o1",
    title: "Buy 2 Get 1 Free 🎉",
    description: "On all pizzas - Limited time offer",
    code: "PIZZA3",
    discount: "33% OFF",
    color: "from-primary to-secondary",
  },
  {
    id: "o2",
    title: "Happy Hour Special ⏰",
    description: "50% off on beverages (4-6 PM)",
    code: "HAPPY50",
    discount: "50% OFF",
    color: "from-accent to-green-500",
  },
  {
    id: "o3",
    title: "Student Special Combo 🎓",
    description: "Meal + Drink at ₹99 only",
    code: "STUDENT99",
    discount: "₹99 ONLY",
    color: "from-golden to-primary",
  },
  {
    id: "o4",
    title: "Weekend Feast 🍽️",
    description: "Free dessert with orders above ₹500",
    code: "WEEKEND",
    discount: "FREE DESSERT",
    color: "from-secondary to-destructive",
  },
];

const Offers = () => {
  const [couponCode, setCouponCode] = useState("");

  const applyCoupon = () => {
    if (!couponCode) {
      toast({
        title: "Enter a coupon code",
        description: "Please enter a valid coupon code",
        variant: "destructive",
      });
      return;
    }
    
    const validCoupon = offers.find(
      (offer) => offer.code.toLowerCase() === couponCode.toLowerCase()
    );

    if (validCoupon) {
      toast({
        title: "Coupon applied! 🎉",
        description: `${validCoupon.title} - ${validCoupon.discount}`,
      });
    } else {
      toast({
        title: "Invalid coupon",
        description: "Please check the coupon code and try again",
        variant: "destructive",
      });
    }
    setCouponCode("");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4 font-poppins">
            Special Offers 🎁
          </h1>
          <p className="text-xl text-muted-foreground">
            Save big with our exclusive deals and combos
          </p>
        </div>

        {/* Coupon Input */}
        <Card className="max-w-2xl mx-auto p-6 mb-12 warm-shadow">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Tag className="text-primary" />
            Have a Coupon Code?
          </h2>
          <div className="flex gap-3">
            <Input
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              className="text-lg"
            />
            <Button onClick={applyCoupon} size="lg">
              Apply
            </Button>
          </div>
        </Card>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden food-card">
              <div className={`h-32 bg-gradient-to-r ${offer.color} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <Gift className="w-12 h-12 mx-auto mb-2" />
                  <Badge variant="secondary" className="text-lg px-4 py-1">
                    {offer.discount}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-muted-foreground mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    Limited time
                  </div>
                  <code className="bg-muted px-3 py-1 rounded font-mono font-bold">
                    {offer.code}
                  </code>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
