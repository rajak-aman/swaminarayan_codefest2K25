import { Building2 } from "lucide-react";

export const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 md:py-32 relative overflow-hidden bg-muted/20">
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-accent">Sponsors</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Supported by leading organizations who believe in innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border-2 border-dashed border-border rounded-2xl p-12 text-center hover:border-primary/50 transition-colors">
            <Building2 className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">Become a Sponsor</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join us in empowering the next generation of innovators. Partner with Code Fest 2K25 
              and showcase your brand to talented students and developers.
            </p>
            <a
              href="mailto:sponsors@codefest.com"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Contact us for sponsorship opportunities →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
