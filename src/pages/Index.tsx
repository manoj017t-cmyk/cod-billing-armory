import { Trophy, DollarSign, Shield, Zap, Coins, Gem, Target, Award } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { RewardItem } from "@/components/RewardItem";
import { GemCard } from "@/components/GemCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background tactical-grid">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Target className="h-8 w-8 text-primary animate-pulse-glow" />
              <div>
                <h1 className="text-2xl font-bold tracking-tight">ELITE COMMAND</h1>
                <p className="text-xs text-muted-foreground">Billing Operations Center</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <Coins className="h-5 w-5 text-primary animate-rotate-slow" />
                <span className="font-bold text-primary">24,750</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                <Gem className="h-5 w-5 text-accent animate-pulse-glow" />
                <span className="font-bold text-accent">1,850</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Mission Control Dashboard */}
        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Trophy className="h-8 w-8 text-primary" />
              MISSION CONTROL
            </h2>
            <p className="text-muted-foreground">Track your credits, purchases, and rewards with tactical precision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Balance"
              value="$12,450"
              subtitle="Available Credits"
              icon={DollarSign}
              variant="gold"
            />
            <StatCard
              title="Active Missions"
              value="8"
              subtitle="In Progress"
              icon={Zap}
              variant="cyan"
            />
            <StatCard
              title="Completed"
              value="142"
              subtitle="Total Missions"
              icon={Target}
              variant="premium"
            />
            <StatCard
              title="Security Level"
              value="MAX"
              subtitle="Encrypted"
              icon={Shield}
              variant="red"
            />
          </div>
        </section>

        {/* Billing Operations */}
        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-primary" />
              BILLING OPERATIONS
            </h2>
            <p className="text-muted-foreground">Every mission, every gem, every gold drop — accounted for</p>
          </div>

          <Card className="holographic p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                <Coins className="h-12 w-12 text-primary mx-auto mb-4 animate-rotate-slow" />
                <p className="text-3xl font-bold text-primary mb-2">24,750</p>
                <p className="text-sm text-muted-foreground">Gold Reserves</p>
              </div>
              <div className="text-center p-6 bg-accent/5 rounded-lg border border-accent/20">
                <Gem className="h-12 w-12 text-accent mx-auto mb-4 animate-float" />
                <p className="text-3xl font-bold text-accent mb-2">1,850</p>
                <p className="text-sm text-muted-foreground">Premium Gems</p>
              </div>
              <div className="text-center p-6 bg-mission/5 rounded-lg border border-mission/20">
                <Award className="h-12 w-12 text-mission mx-auto mb-4 animate-pulse-glow" />
                <p className="text-3xl font-bold text-mission mb-2">98.5%</p>
                <p className="text-sm text-muted-foreground">Mission Success</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Survival Rewards */}
        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Trophy className="h-8 w-8 text-primary" />
              SURVIVAL MODE REWARDS
            </h2>
            <p className="text-muted-foreground">Complete missions to unlock rare billing bonuses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RewardItem
              name="Daily Survival Bonus"
              tier="bronze"
              amount="+500 Gold"
              unlocked={true}
            />
            <RewardItem
              name="Weekly Combat Elite"
              tier="silver"
              amount="+50 Gems"
              unlocked={true}
            />
            <RewardItem
              name="Monthly Warzone Master"
              tier="gold"
              amount="+200 Gems"
              unlocked={true}
            />
            <RewardItem
              name="Legendary Operator"
              tier="diamond"
              amount="+500 Gems"
              unlocked={false}
            />
          </div>
        </section>

        {/* Premium Shop */}
        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Gem className="h-8 w-8 text-accent" />
              ARMORY OF RICHES
            </h2>
            <p className="text-muted-foreground">Upgrade your billing arsenal with premium items</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GemCard
              name="Ruby Pack"
              amount={100}
              price="$4.99"
              color="ruby"
            />
            <GemCard
              name="Sapphire Pack"
              amount={250}
              price="$9.99"
              color="sapphire"
            />
            <GemCard
              name="Emerald Pack"
              amount={500}
              price="$19.99"
              color="emerald"
            />
            <GemCard
              name="Diamond Pack"
              amount={1200}
              price="$39.99"
              color="diamond"
            />
          </div>
        </section>

        {/* Security Footer */}
        <section className="mt-12">
          <Card className="holographic p-8 text-center">
            <Shield className="h-16 w-16 text-accent mx-auto mb-4 animate-pulse-glow" />
            <h3 className="text-2xl font-bold mb-2">TOP SECRET: PAYMENT SECURITY</h3>
            <p className="text-muted-foreground mb-4">Encrypted. Shielded. Always mission-ready.</p>
            <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
              VIEW SECURITY PROTOCOLS
            </Button>
          </Card>
        </section>
      </main>

      {/* Animated Scan Line Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent h-32 animate-scan-line" />
      </div>
    </div>
  );
};

export default Index;
