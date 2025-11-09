import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  variant?: "gold" | "cyan" | "red" | "premium";
}

export const StatCard = ({ title, value, subtitle, icon: Icon, variant = "gold" }: StatCardProps) => {
  const variantStyles = {
    gold: "border-primary/30 glow-gold",
    cyan: "border-accent/30 glow-cyan",
    red: "border-destructive/30",
    premium: "border-premium-start/30 glow-premium",
  };

  const iconStyles = {
    gold: "text-primary",
    cyan: "text-accent",
    red: "text-destructive",
    premium: "text-premium-start",
  };

  return (
    <Card className={`relative overflow-hidden holographic ${variantStyles[variant]} transition-all hover:scale-105`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{title}</h3>
          <Icon className={`h-8 w-8 ${iconStyles[variant]} animate-pulse-glow`} />
        </div>
        <p className="text-3xl font-bold mb-2">{value}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
    </Card>
  );
};
