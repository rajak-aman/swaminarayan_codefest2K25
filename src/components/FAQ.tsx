import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in Code Fest 2K25?",
    answer: "Any student from any college or university can participate. Teams of 4 members are required.",
  },
  {
    question: "What is the participation fee?",
    answer: "The participation fee is ₹50 per person, making it ₹200 per team of 4 members.",
  },
  {
    question: "Do I need to have a team before registering?",
    answer: "Yes, you need to register as a team of 4 members. However, we will help solo participants find teammates during the registration period.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer: "Bring your laptop, chargers, student ID, and any hardware you might need for your project. Food will be available for purchase on campus.",
  },
  {
    question: "Will there be mentors available?",
    answer: "Yes! Industry experts and mentors will be available throughout the event to guide you and answer your questions.",
  },
  {
    question: "What are the judging criteria?",
    answer: "Projects will be judged based on innovation, technical implementation, design, presentation, and potential social impact.",
  },
  {
    question: "Can I work on a project I've already started?",
    answer: "No, all projects must be started during the hackathon. However, you can use existing libraries, frameworks, and APIs.",
  },
  {
    question: "Is accommodation provided?",
    answer: "The hackathon is a 30-hour event spanning across 2 days. Participants can work overnight at the venue, but accommodation is not provided.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="gradient-accent">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
