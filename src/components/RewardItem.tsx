interface RewardItemProps {
  name: string;
  tier: "bronze" | "silver" | "gold" | "diamond";
  amount: string;
  unlocked: boolean;
}

export const RewardItem = ({ name, tier, amount, unlocked }: RewardItemProps) => {
  const tierColors = {
    bronze: "from-amber-700 to-amber-900",
    silver: "from-slate-400 to-slate-600",
    gold: "from-primary to-yellow-600",
    diamond: "from-cyan-400 to-blue-600",
  };

  const tierGlow = {
    bronze: "shadow-[0_0_15px_rgba(217,119,6,0.5)]",
    silver: "shadow-[0_0_15px_rgba(148,163,184,0.5)]",
    gold: "shadow-[0_0_20px_rgba(250,204,21,0.6)]",
    diamond: "shadow-[0_0_25px_rgba(34,211,238,0.7)]",
  };

  return (
    <div className={`relative p-4 rounded-lg bg-gradient-to-br ${tierColors[tier]} ${unlocked ? tierGlow[tier] : 'opacity-50'} transition-all hover:scale-105`}>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-white uppercase tracking-wide">{name}</h4>
          <p className="text-sm text-white/80">{tier.toUpperCase()} TIER</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">{amount}</p>
          {!unlocked && (
            <p className="text-xs text-white/60">LOCKED</p>
          )}
        </div>
      </div>
      {unlocked && (
        <div className="absolute inset-0 bg-white/10 rounded-lg animate-pulse-glow" />
      )}
    </div>
  );
};
