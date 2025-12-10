import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, CheckCircle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const WebDevelopment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const problemStatements = [
    {
      title: "Social Impact Platform",
      description: "Build a web application that connects volunteers with local NGOs and social causes. Include features for event management, volunteer tracking, and impact analytics.",
    },
    {
      title: "Smart Campus Portal",
      description: "Create a comprehensive campus management system with modules for attendance, assignments, events, and real-time notifications for students and faculty.",
    },
    {
      title: "E-Learning Hub",
      description: "Develop an interactive learning platform with video lectures, quizzes, progress tracking, and peer-to-peer discussion forums.",
    },
    {
      title: "Personal Portfolio Website",
      description: "Design a simple portfolio website to showcase your projects, skills, and achievements. Include sections for about, projects, contact form, and a blog. Perfect for beginners to learn HTML, CSS, and basic JavaScript.",
    },
    {
      title: "To-Do List Application",
      description: "Create a web-based task manager where users can add, edit, delete, and mark tasks as complete. Add features like task categories, due dates, and priority levels and AI Content Assistant. Great for learning CRUD operations and local storage.",
    },
    {
      title: "Weather Information Dashboard",
      description: "Build a simple weather app that shows current weather and forecast using a free weather API. Display temperature, humidity, wind speed, and weather icons. Learn API integration and data visualization basics.",
    },
  ];

  const evaluationCriteria = [
    "Innovation and Creativity (25%)",
    "User Interface & Experience (20%)",
    "Technical Implementation (25%)",
    "Functionality & Features (20%)",
    "Presentation & Documentation (10%)",
  ];

  const submissionGuidelines = [
    "Submit a working demo/prototype of your web application",
    "Provide source code repository (GitHub/GitLab) with clear README",
    "Include a 5-minute video demonstration of key features",
    "Document technology stack, APIs used, and setup instructions",
    "Submit project documentation with architecture diagrams",
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
                <Code className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Web <span className="gradient-accent">Development</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Create dynamic and responsive web applications for social impact and smart communication
              </p>
            </div>

            {/* Problem Statements */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Code className="w-8 h-8 text-primary" />
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

          {/* new button for click event */}

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

export default WebDevelopment;
