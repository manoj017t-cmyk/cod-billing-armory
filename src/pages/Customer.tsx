import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    comment: "Amazing food quality and quick delivery! The butter chicken is my favorite.",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Priya Patel",
    rating: 4,
    comment: "Great service! Would love to see more vegetarian options.",
    date: "5 days ago",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    rating: 5,
    comment: "Best college canteen food ordering app! The interface is so smooth.",
    date: "1 week ago",
  },
  {
    id: 4,
    name: "Sneha Desai",
    rating: 4,
    comment: "Love the offers section. Saved so much money with the combo deals!",
    date: "1 week ago",
  },
];

const Customer = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !feedback || rating === 0) {
      toast({
        title: "Incomplete form",
        description: "Please fill all fields and provide a rating",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you for your feedback! 🌟",
      description: "Your review helps us improve our service",
    });

    setName("");
    setFeedback("");
    setRating(0);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4 font-poppins">
            Happy Customers Speak 💬
          </h1>
          <p className="text-xl text-muted-foreground">
            Read what our customers say about us
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 animate-slide-up">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "fill-golden text-golden"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </Card>
          ))}
        </div>

        {/* Submit Feedback Form */}
        <Card className="max-w-2xl mx-auto p-8">
          <h2 className="text-3xl font-bold mb-6 font-poppins">
            Submit Your Feedback
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <Label>Rating</Label>
              <div className="flex gap-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-10 h-10 cursor-pointer transition-all ${
                      star <= (hoverRating || rating)
                        ? "fill-golden text-golden scale-110"
                        : "text-muted hover:text-golden/50"
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="feedback">Your Feedback</Label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your experience with us..."
                rows={5}
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit Feedback
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Customer;
