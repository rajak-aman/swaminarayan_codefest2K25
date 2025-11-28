import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette, CheckCircle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const GraphicDesign = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const problemStatements = [
    {
      title: "College Event Branding",
      description: "Design a complete branding package for a college tech fest including logo, posters, social media graphics, merchandise designs, and event collateral. Create a cohesive visual identity.",
    },
    {
      title: "Mobile App UI/UX Design",
      description: "Create a complete UI/UX design for a mobile application focused on sustainable living. Include wireframes, high-fidelity mockups, user flow diagrams, and interactive prototype.",
    },
    {
      title: "Social Awareness Campaign",
      description: "Design a visual campaign for a social cause of your choice. Create infographics, social media posts, banners, and promotional materials that effectively communicate the message.",
    },
    {
      title: "Simple Logo Design",
      description: "Create a logo for a fictional local business (cafe, bookstore, or gym). Design 3-5 variations with different color schemes.",
    },
    {
      title: "Social Media Post Templates",
      description: "Design 5 Instagram post templates for a student club or organization. Include quotes, announcements, and event promotions.",
    },
    {
      title: "Movie Poster Design",
      description: "Design a creative movie poster for your favorite film or create one for an imaginary movie. Focus on composition, typography, and color mood. Great starter project to explore creative design tools and techniques.",
    },
  ];

  const evaluationCriteria = [
    "Creativity and Originality (30%)",
    "Visual Appeal & Aesthetics (25%)",
    "Concept & Message Clarity (20%)",
    "Technical Execution (15%)",
    "Presentation Quality (10%)",
  ];

  const submissionGuidelines = [
    "Submit all design files in PDF format (high resolution)",
    "Include original source files (AI, PSD, Figma link, etc.)",
    "Provide a design brief explaining concept and creative process",
    "Create a presentation deck showcasing your work",
    "Include mockups showing designs in real-world context",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 text-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-primary/10 p-6 rounded-2xl inline-block mb-6">
                <Palette className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Graphic <span className="gradient-accent">Design</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Design stunning visuals, branding materials, and user interfaces that communicate effectively
              </p>
            </div>

            {/* Problem Statements */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Palette className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Problem Statements</h2>
              </div>
              <div className="space-y-6">
                {problemStatements.map((problem, index) => (
                  <div
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      {index + 1}. {problem.title}
                    </h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Evaluation Criteria */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Evaluation Criteria</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-8">
                <ul className="space-y-4">
                  {evaluationCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Submission Guidelines */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Submission Guidelines</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-8">
                <ul className="space-y-4">
                  {submissionGuidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </span>
                      <span className="text-lg mt-1">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* <div className="text-center">
              <Button variant="hero" size="lg">
                Register for This Domain
              </Button>
            </div> */}


            {/* new button link when use click this link */}

            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSePSCWJi4dlOS_Xtdfu6x_fD0pk8zCiSiEiyXhMYI1BK6C8QQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg">
                  Register for This Domain
                </Button>
              </a>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GraphicDesign;
