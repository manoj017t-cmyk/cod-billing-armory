import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { CreditCard, Smartphone, Wallet } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Payment = () => {
  const { total, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const finalTotal = (total + 20 + total * 0.05).toFixed(2);

  const handlePayment = () => {
    toast({
      title: "Order placed successfully! 🎉",
      description: `Your order of ₹${finalTotal} has been confirmed`,
    });
    clearCart();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4 font-poppins">
            Secure Payment Gateway 💳
          </h1>
          <p className="text-xl text-muted-foreground">
            Complete your order securely
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            {/* Amount Section */}
            <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
              <p className="text-muted-foreground mb-2">Total Amount</p>
              <p className="text-4xl font-bold text-primary">₹{finalTotal}</p>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-8">
              <Label className="text-lg font-semibold mb-4 block">
                Select Payment Method
              </Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  <Card className="p-4 cursor-pointer hover:border-primary transition-colors">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label
                        htmlFor="upi"
                        className="flex items-center gap-3 cursor-pointer flex-1"
                      >
                        <Smartphone className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-semibold">UPI Payment</p>
                          <p className="text-sm text-muted-foreground">
                            Google Pay, PhonePe, Paytm
                          </p>
                        </div>
                      </Label>
                    </div>
                  </Card>

                  <Card className="p-4 cursor-pointer hover:border-primary transition-colors">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="card" id="card" />
                      <Label
                        htmlFor="card"
                        className="flex items-center gap-3 cursor-pointer flex-1"
                      >
                        <CreditCard className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-semibold">Card Payment</p>
                          <p className="text-sm text-muted-foreground">
                            Credit / Debit Card
                          </p>
                        </div>
                      </Label>
                    </div>
                  </Card>

                  <Card className="p-4 cursor-pointer hover:border-primary transition-colors">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label
                        htmlFor="cod"
                        className="flex items-center gap-3 cursor-pointer flex-1"
                      >
                        <Wallet className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-semibold">Cash on Delivery</p>
                          <p className="text-sm text-muted-foreground">
                            Pay when you receive
                          </p>
                        </div>
                      </Label>
                    </div>
                  </Card>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Details Form */}
            {paymentMethod === "card" && (
              <div className="space-y-4 mb-8">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" maxLength={5} />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      type="password"
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="mb-8">
                <Label htmlFor="upiId">UPI ID</Label>
                <Input id="upiId" placeholder="yourname@upi" />
              </div>
            )}

            {/* Pay Button */}
            <Button
              onClick={handlePayment}
              size="lg"
              className="w-full text-lg"
            >
              {paymentMethod === "cod"
                ? "Place Order"
                : `Pay ₹${finalTotal}`}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;
