import { Trophy, Medal, Award, Gift } from "lucide-react";

const prizes = [
  {
    icon: Trophy,
    title: "1st Place",
    prize: "Prize money",
    perks: ["Trophy & Certificate", "Google certificate", "Swag Kit"],
    color: "from-yellow-500 to-yellow-600",
    glow: "shadow-yellow-500/50",
  },
  {
    icon: Medal,
    title: "2nd Place",
    prize: "Prize money",
    perks: ["Medal & Certificate", "Google certificate", "Swag Kit"],
    color: "from-gray-400 to-gray-500",
    glow: "shadow-gray-400/50",
  },
  {
    icon: Award,
    title: "3rd Place",
    prize: "Prize money",
    perks: ["Certificate", "Google certificate", "Swag Kit"],
    color: "from-orange-600 to-orange-700",
    glow: "shadow-orange-600/50",
  },
];

const specialPrizes = [
  "Best Innovation Award",
  "Best UI/UX Design",
  "Best Use of Technology",
  "Most Social Impact",
];

export const Prizes = () => {
  return (
    <section id="prizes" className="py-20 md:py-32 relative overflow-hidden bg-muted/20">
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Prizes & <span className="gradient-accent">Rewards</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compete for exciting prizes and amazing perks🏆
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`group relative bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 animate-fade-in ${
                index === 0 ? "md:-mt-8 md:scale-110" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center">
                <div className={`bg-gradient-to-br ${prize.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl ${prize.glow} group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                  <prize.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{prize.title}</h3>
                <div className="text-4xl font-bold text-primary mb-6">{prize.prize}</div>
                <div className="space-y-2">
                  {prize.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Gift className="w-4 h-4 text-primary" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Prizes */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Special <span className="gradient-accent">Category Awards</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialPrizes.map((specialPrize, index) => (
              <div
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <Award className="w-8 h-8 text-accent mx-auto mb-2 hover:rotate-12 transition-transform duration-300" />
                <p className="font-bold text-foreground">{specialPrize}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
