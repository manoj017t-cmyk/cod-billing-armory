import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface FoodCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  description?: string;
}

export const FoodCard = ({ id, name, price, category, image, description }: FoodCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, category, image });
  };

  return (
    <Card className="food-card overflow-hidden">
      <div className="aspect-video bg-muted relative overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            🍽️
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
          <p className="font-bold text-primary text-xl">₹{price}</p>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
        )}
        <Button onClick={handleAddToCart} className="w-full" size="sm">
          <Plus className="w-4 h-4 mr-1" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
