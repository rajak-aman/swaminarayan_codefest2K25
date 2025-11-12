import { Code2, Users, Lightbulb, Trophy } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Real-world Problems",
    description: "Work on innovative challenges that matter and create impactful solutions",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Build with a team of 4 members and leverage collective creativity",
  },
  {
    icon: Lightbulb,
    title: "Learn & Grow",
    description: "Gain hands-on experience and learn from industry experts",
  },
  {
    icon: Trophy,
    title: "Win Prizes",
    description: "Compete for amazing prizes and recognition",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What is <span className="gradient-accent">Code Fest?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Swaminarayan Code Fest is a 30-hour offline hackathon organized by Shree Swaminarayan Institute 
              Of Technology, where students work in teams to solve real-world open innovation problems using 
              technology. The event fosters collaboration, creativity, critical thinking, and communication 
              skills, giving students a platform to create impactful projects in an industry-like environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <h3 className="text-primary font-bold mb-2">Team Size</h3>
                <p className="text-2xl font-bold">4 Members</p>
              </div>
              <div>
                <h3 className="text-primary font-bold mb-2">Participation Fee</h3>
                <p className="text-2xl font-bold">₹50 <span className="text-sm text-muted-foreground">per person</span></p>
              </div>
              <div>
                <h3 className="text-primary font-bold mb-2">Duration</h3>
                <p className="text-2xl font-bold">30 Hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
