import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { UtensilsCrossed, Gift } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroFood})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 z-10 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-poppins">
            Welcome to CampusBite! 🍕
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Order Your Favorite Food on Campus
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="text-lg px-8">
                <UtensilsCrossed className="mr-2" />
                Browse Menu
              </Button>
            </Link>
            <Link to="/offers">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Gift className="mr-2" />
                View Offers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 font-poppins">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/menu">
            <Card className="p-6 text-center food-card hover:shadow-xl">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2">Full Menu</h3>
              <p className="text-muted-foreground">Explore all cuisines</p>
            </Card>
          </Link>
          
          <Link to="/snacks">
            <Card className="p-6 text-center food-card hover:shadow-xl">
              <div className="text-6xl mb-4">🍟</div>
              <h3 className="text-xl font-semibold mb-2">Quick Bites</h3>
              <p className="text-muted-foreground">Snacks & beverages</p>
            </Card>
          </Link>
          
          <Link to="/offers">
            <Card className="p-6 text-center food-card hover:shadow-xl">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold mb-2">Special Offers</h3>
              <p className="text-muted-foreground">Save on combos</p>
            </Card>
          </Link>
          
          <Link to="/cart">
            <Card className="p-6 text-center food-card hover:shadow-xl">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-2">Your Cart</h3>
              <p className="text-muted-foreground">View & checkout</p>
            </Card>
          </Link>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { emoji: "🍛", name: "Indian" },
              { emoji: "🍜", name: "Chinese" },
              { emoji: "🍕", name: "Italian" },
              { emoji: "🍔", name: "American" },
              { emoji: "🌮", name: "Mexican" },
            ].map((category) => (
              <Link key={category.name} to="/menu">
                <Card className="p-6 text-center food-card">
                  <div className="text-5xl mb-2">{category.emoji}</div>
                  <h3 className="font-semibold">{category.name}</h3>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 CampusBite. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/customer" className="text-muted-foreground hover:text-primary">
              Reviews
            </Link>
            <Link to="/availability" className="text-muted-foreground hover:text-primary">
              Menu Availability
            </Link>
            <Link to="/admin" className="text-muted-foreground hover:text-primary">
              Admin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
