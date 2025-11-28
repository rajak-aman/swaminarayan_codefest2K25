import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, CheckCircle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AppDevelopment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const problemStatements = [
    {
      title: "Health & Wellness Tracker",
      description: "Develop a mobile app that helps users track their daily health metrics, set fitness goals, and get personalized recommendations. Include features for meal planning and workout routines.",
    },
    {
      title: "Local Business Connect",
      description: "Create an app that connects local businesses with customers, featuring local deals, reviews, booking systems, and community engagement features.",
    },
    {
      title: "Student Productivity Assistant",
      description: "Build a comprehensive productivity app for students with task management, study timer, notes organization, and collaborative study group features.",
    },
    {
      title: "Simple Calculator App",
      description: "Design a basic calculator app with arithmetic operations, clear functions, and a clean interface. Add a history feature to view past calculations. Perfect first mobile app project to learn UI basics and state management.",
    },
    {
      title: "Daily Expense Tracker",
      description: "Create an easy-to-use expense tracking app where users can log daily expenses, categorize spending, and view monthly summaries with simple charts. Learn about data storage and basic data visualization.",
    },
    {
      title: "Recipe Finder App",
      description: "Build a recipe browsing app where users can search for recipes, view ingredients and instructions, and save favorites. Use a free recipe API to fetch data. Great for learning API integration in mobile apps.",
    },
  ];

  const evaluationCriteria = [
    "Innovation and Uniqueness (25%)",
    "User Interface & User Experience (20%)",
    "Technical Complexity (25%)",
    "Functionality & Performance (20%)",
    "Presentation & Demo (10%)",
  ];

  const submissionGuidelines = [
    "Submit APK/IPA file or provide access to TestFlight/Play Store beta",
    "Include source code repository with detailed README file",
    "Create a 5-minute demo video showcasing app functionality",
    "Document app architecture, frameworks used, and API integrations",
    "Provide installation guide and known issues/limitations",
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
                <Smartphone className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                App <span className="gradient-accent">Development</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Develop innovative mobile applications that solve everyday challenges and enhance user experience
              </p>
            </div>

            {/* Problem Statements */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Smartphone className="w-8 h-8 text-primary" />
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


            {/* new registration button on click event*/}

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

export default AppDevelopment;
