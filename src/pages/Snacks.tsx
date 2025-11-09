import { Navbar } from "@/components/Navbar";
import { FoodCard } from "@/components/FoodCard";

const snacksItems = [
  { id: "s1", name: "Veg Sandwich", price: 60, category: "Snacks", description: "Fresh and healthy" },
  { id: "s2", name: "French Fries", price: 70, category: "Snacks", description: "Crispy golden fries" },
  { id: "s3", name: "Samosa", price: 20, category: "Snacks", description: "Classic Indian snack" },
  { id: "s4", name: "Spring Roll", price: 40, category: "Snacks", description: "Crispy veggie rolls" },
  { id: "s5", name: "Paneer Roll", price: 80, category: "Snacks", description: "Wrapped goodness" },
  { id: "s6", name: "Cheese Toast", price: 50, category: "Snacks", description: "Cheesy delight" },
];

const beveragesItems = [
  { id: "b1", name: "Masala Chai", price: 20, category: "Beverages", description: "Hot spiced tea" },
  { id: "b2", name: "Coffee", price: 30, category: "Beverages", description: "Fresh brewed" },
  { id: "b3", name: "Cold Coffee", price: 60, category: "Beverages", description: "Chilled treat" },
  { id: "b4", name: "Lemon Tea", price: 25, category: "Beverages", description: "Refreshing blend" },
  { id: "b5", name: "Mango Shake", price: 70, category: "Beverages", description: "Thick and creamy" },
  { id: "b6", name: "Fresh Juice", price: 50, category: "Beverages", description: "Seasonal fruits" },
];

const Snacks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4 font-poppins">Quick Bites for Quick Minds 🍟</h1>
          <p className="text-xl text-muted-foreground">
            Perfect snacks and refreshing beverages
          </p>
        </div>

        {/* Snacks Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 font-poppins">Snacks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {snacksItems.map((item) => (
              <FoodCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        {/* Beverages Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 font-poppins">Beverages ☕</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {beveragesItems.map((item) => (
              <FoodCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Snacks;
