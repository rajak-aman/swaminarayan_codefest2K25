import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Organizers } from "@/components/Organizers";
import { Domains } from "@/components/Domains";
import { Timeline } from "@/components/Timeline";
import { Prizes } from "@/components/Prizes";
import { FAQ } from "@/components/FAQ";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Organizers />
      <Domains />
      <Timeline />
      <Prizes />
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
