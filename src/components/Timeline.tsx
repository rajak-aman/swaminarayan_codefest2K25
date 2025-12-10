import { CheckCircle2 } from "lucide-react";

const timelineEvents = [
  {
    time: "8:00 AM",
    title: "Registration & Check-in",
    description: "Team registration and opening ceremony",
    day: "Day 1",
  },
  {
    time: "9:30 AM",
    title: "Opening Ceremony",
    description: "Inauguration ceremony with keynote speakers",
    day: "Day 1",
  },
  {
    time: "10:30 AM",
    title: "Building Begins",
    description: "Teams start working on their projects",
    day: "Day 1",
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
    description: "Networking and refreshments",
    day: "Day 1",
  },
  {
    time: "03:00 PM",
    title: "Mentor Sessions",
    description: "One-on-one mentorship with industry experts",
    day: "Day 1",
  },
  {
    time: "5:00 PM",
    title: "Mid Evaluation",
    description: "Documentation round (PPT)",
    day: "Day 1",
  },
  {
    time: "09:00 AM",
    title: "Final Evaluation",
    description: "Finalize projects and prepare video with github repo",
    day: "Day 2",
  },
  {
    time: "1:00 PM",
    title: "Semi-Finalist Declaration",
    description: "Selecting top 10 teams",
    day: "Day 2",
  },
  {
    time: "02:00 PM",
    title: "Presentations",
    description: "Teams present their solutions to judges",
    day: "Day 2",
  },
  {
    time: "3:30 PM",
    title: "Winner Declaration",
    description: "Winner announcement and prize distribution",
    day: "Day 2",
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Event <span className="gradient-accent">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative mb-8 md:mb-12 ${
                  index % 2 === 0 ? "md:text-right md:pr-[calc(50%+2rem)]" : "md:text-left md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 bg-primary rounded-full glow-cyan"></div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 mb-2 md:justify-end">
                    <span className="text-xs font-bold text-secondary px-3 py-1 bg-secondary/10 rounded-full">
                      {event.day}
                    </span>
                    <span className="text-sm font-bold text-primary">{event.time}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2 md:justify-end">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
