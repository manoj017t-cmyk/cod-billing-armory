import { Navbar } from "@/components/Navbar";
import { FoodCard } from "@/components/FoodCard";
import internationalFood from "@/assets/international-food.jpg";

const countryFoods = {
  "Indian Thali": [
    { id: "c1", name: "Full Thali", price: 150, category: "Indian", description: "Complete meal with dal, roti, rice, sabzi" },
    { id: "c2", name: "Mini Thali", price: 100, category: "Indian", description: "Smaller portion thali" },
  ],
  "American Burgers": [
    { id: "c3", name: "Classic Burger", price: 120, category: "American", description: "Beef patty with cheese" },
    { id: "c4", name: "Veggie Burger", price: 100, category: "American", description: "Plant-based patty" },
    { id: "c5", name: "Chicken Burger", price: 140, category: "American", description: "Grilled chicken patty" },
  ],
  "Italian Pizza": [
    { id: "c6", name: "Margherita", price: 200, category: "Italian", description: "Classic cheese pizza" },
    { id: "c7", name: "Pepperoni", price: 250, category: "Italian", description: "Spicy pepperoni topping" },
    { id: "c8", name: "Veggie Supreme", price: 220, category: "Italian", description: "Loaded with veggies" },
  ],
  "Chinese Noodles": [
    { id: "c9", name: "Hakka Noodles", price: 120, category: "Chinese", description: "Spicy stir-fried noodles" },
    { id: "c10", name: "Schezwan Noodles", price: 140, category: "Chinese", description: "Extra spicy variant" },
    { id: "c11", name: "Singapore Noodles", price: 150, category: "Chinese", description: "Curry-flavored noodles" },
  ],
};

const CountryFood = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${internationalFood})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="z-10 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-poppins">
            Taste the World on Campus 🌍
          </h1>
          <p className="text-xl text-white/90">
            International cuisines at your fingertips
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {Object.entries(countryFoods).map(([section, items]) => (
          <section key={section} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 font-poppins">{section}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
              {items.map((item) => (
                <FoodCard key={item.id} {...item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CountryFood;
