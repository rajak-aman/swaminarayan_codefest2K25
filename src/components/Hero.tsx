import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award } from "lucide-react";


export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-15T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Animated Stars/Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header Text */}
          <p className="text-sm md:text-base text-muted-foreground mb-6 uppercase tracking-widest">
            Presented by Shree Swaminarayan Institute Of Technology
          </p>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-glow-cyan">SWAMINARAYAN</span>
            <span className="block gradient-accent text-4xl sm:text-6xl md:text-8xl lg:text-9xl my-2">
              Code Fest
            </span>
            <span className="block text-glow-magenta">2K25</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed px-4">
            Join us for an innovative 30-hour offline hackathon where creativity meets technology.
            Build groundbreaking solutions, learn from industry experts, and compete for amazing prizes!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => window.open('https://forms.gle/vE1vviPWodiQaiY99', '_blank')}
            >
              Register Now
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="neon" size="xl">
              Explore
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto px-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 sm:p-6 hover:scale-105 transition-transform">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-glow-cyan mb-1">30:00:00</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Runtime</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 sm:p-6 hover:scale-105 transition-transform">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-glow-cyan mb-1">GDSC</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Google Student Ambassador</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 sm:p-6 hover:scale-105 transition-transform">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-glow-cyan mb-1">REWARDS.EXE</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Win Prizes</div>
            </div>

          </div>

          {/* Countdown Timer */}
          <div className="mt-12">
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Event Starts In</p>
            <div className="flex justify-center gap-4 flex-wrap">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="bg-card/70 backdrop-blur-sm border-2 border-primary/30 rounded-lg p-4 min-w-[80px] glow-cyan"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary">{value.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-muted-foreground uppercase mt-1">{unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
