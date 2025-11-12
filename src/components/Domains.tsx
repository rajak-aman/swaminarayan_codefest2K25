import { Globe, Smartphone, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const domains = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Create dynamic and responsive web applications for social impact and smart communication.",
    path: "/web-development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Develop innovative mobile applications that solve everyday challenges and enhance user experience.",
    path: "/app-development",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Design stunning visuals, branding materials, and user interfaces that communicate effectively.",
    path: "/graphic-design",
  },
];

export const Domains = () => {
  const navigate = useNavigate();

  return (
    <section id="domains" className="py-20 md:py-32 relative overflow-hidden bg-muted/20">
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Problem <span className="gradient-accent">Domains</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our innovative problem statements across these cutting-edge domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {domains.map((domain, index) => (
            <Card
              key={index}
              onClick={() => navigate(domain.path)}
              className="group bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 p-8 hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <domain.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{domain.description}</p>
                  <span className="text-primary text-sm font-medium group-hover:underline">
                    View Problem Statements →
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
