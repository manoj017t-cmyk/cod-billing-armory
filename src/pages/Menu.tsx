import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FoodCard } from "@/components/FoodCard";
import { Button } from "@/components/ui/button";

const menuItems = {
  Indian: [
    { id: "1", name: "Butter Chicken", price: 180, category: "Indian", description: "Creamy tomato curry" },
    { id: "2", name: "Paneer Tikka", price: 150, category: "Indian", description: "Grilled cottage cheese" },
    { id: "3", name: "Biryani", price: 200, category: "Indian", description: "Aromatic rice dish" },
    { id: "4", name: "Dal Makhani", price: 120, category: "Indian", description: "Creamy lentils" },
  ],
  Chinese: [
    { id: "5", name: "Fried Rice", price: 140, category: "Chinese", description: "Wok-tossed rice" },
    { id: "6", name: "Chow Mein", price: 150, category: "Chinese", description: "Stir-fried noodles" },
    { id: "7", name: "Manchurian", price: 130, category: "Chinese", description: "Crispy veggie balls" },
    { id: "8", name: "Spring Rolls", price: 100, category: "Chinese", description: "Crispy appetizer" },
  ],
  Italian: [
    { id: "9", name: "Margherita Pizza", price: 250, category: "Italian", description: "Classic cheese pizza" },
    { id: "10", name: "Pasta Alfredo", price: 200, category: "Italian", description: "Creamy white sauce" },
    { id: "11", name: "Lasagna", price: 220, category: "Italian", description: "Layered pasta" },
    { id: "12", name: "Garlic Bread", price: 80, category: "Italian", description: "Toasted with butter" },
  ],
  Continental: [
    { id: "13", name: "Grilled Sandwich", price: 120, category: "Continental", description: "Toasted delight" },
    { id: "14", name: "French Fries", price: 80, category: "Continental", description: "Crispy fries" },
    { id: "15", name: "Club Sandwich", price: 150, category: "Continental", description: "Triple-decker" },
    { id: "16", name: "Veggie Burger", price: 130, category: "Continental", description: "Healthy patty" },
  ],
  Mexican: [
    { id: "17", name: "Tacos", price: 140, category: "Mexican", description: "Crunchy shells" },
    { id: "18", name: "Burrito", price: 180, category: "Mexican", description: "Wrapped delight" },
    { id: "19", name: "Nachos", price: 120, category: "Mexican", description: "Cheesy chips" },
    { id: "20", name: "Quesadilla", price: 150, category: "Mexican", description: "Grilled tortilla" },
  ],
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Indian");
  const categories = Object.keys(menuItems);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4 font-poppins">Explore Our Menu 🍲</h1>
          <p className="text-xl text-muted-foreground">
            Choose from our diverse selection of cuisines
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="lg"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {menuItems[selectedCategory as keyof typeof menuItems].map((item) => (
            <FoodCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
