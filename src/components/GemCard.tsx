import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";

interface GemCardProps {
  name: string;
  amount: number;
  price: string;
  color: "ruby" | "sapphire" | "emerald" | "diamond";
}

export const GemCard = ({ name, amount, price, color }: GemCardProps) => {
  const colorStyles = {
    ruby: "from-red-500 to-red-700",
    sapphire: "from-blue-500 to-blue-700",
    emerald: "from-green-500 to-green-700",
    diamond: "from-purple-500 to-purple-700",
  };

  const glowStyles = {
    ruby: "shadow-[0_0_30px_rgba(239,68,68,0.6)]",
    sapphire: "shadow-[0_0_30px_rgba(59,130,246,0.6)]",
    emerald: "shadow-[0_0_30px_rgba(34,197,94,0.6)]",
    diamond: "shadow-[0_0_30px_rgba(168,85,247,0.7)]",
  };

  return (
    <Card className={`relative overflow-hidden holographic ${glowStyles[color]} transition-all hover:scale-105 cursor-pointer group`}>
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className={`relative w-20 h-20 bg-gradient-to-br ${colorStyles[color]} rounded-full flex items-center justify-center animate-float group-hover:animate-pulse-glow`}>
            <Gem className="h-10 w-10 text-white animate-rotate-slow" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
        <p className="text-center text-muted-foreground mb-4">{amount} Gems</p>
        <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 font-bold">
          {price}
        </Button>
      </div>
    </Card>
  );
};
