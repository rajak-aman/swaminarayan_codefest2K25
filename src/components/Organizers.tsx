import { Users, GraduationCap, Building2, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Organizers = () => {
  const hosts = [
    {
      name: "Computer Science Department",
      role: "Host Department",
      icon: Building2,
    },
  ];

  const coordinators = [
    {
      name: "Rajak aman",
      role: "Innovation Head",
      department: "CE Department",
    },
    {
      name: "Umang singh",
      role: "Head coordinater",
      department: "CE Department",
    },
    {
      name: "Darshil parekh",
      role: "Head Coordinater",
      department: "IT Department",
    },
    {
      name: "Anas Kazi",
      role: "Editor",
      department: "CE Department",
    },
    {
      name: "Arti parmar",
      role: "Designer",
      department: "CE Department",
    },
    {
      name: "Pandey shivangi",
      role: "Designer",
      department: "CE Department",
    },
    {
     name: "Makwana kashish",
     role: "SMM",
     department: "IT Department",
   },
   {
     name: "Parth sharma",
     role: "SMM",
     department: "MECH Department",
   },
    
  ];

  const facultyAdvisors = [
    // {
    //   name: "Nimesh Vaidya",
    //   role: "(HOD CE and IT)",
    // },
    // {
    //   name: "Shivani Gajjar",
    //   role: "Faculty Advisor",
    // },
    // {
    //   name: "Ishani Dave",
    //   role: "Faculty Advisor",
    // },

  ];

  return (
    <section id="organizers" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan to-magenta bg-clip-text text-transparent">
            Meet the Organizers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The dedicated team behind Code Fest 2024
          </p>
        </div>

        {/* Host Organization */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="max-w-2xl mx-auto">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Organised by</CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground">
                  Department of Computer and IT
                  <br />
                  Faculty Coordinator- Nimesh Vaidya (HOD CE and IT)
                  Shivani Gajjar,
                  Ishani Dave,
                  Radhika Gokani and all's

                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>



        {/* Faculty Advisors */}
        {/* <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Faculty Coordinator
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {facultyAdvisors.map((faculty, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-cyan/10 rounded-full flex items-center justify-center mb-3">
                    <GraduationCap className="w-6 h-6 text-cyan" />
                  </div>
                  <CardTitle className="text-lg">{faculty.name}</CardTitle>
                  <CardDescription>{faculty.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div> */}


        {/* Coordinators */}
        <div className="mb-12 mt-5 py-5">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            Event Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coordinators.map((coordinator, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{coordinator.name}</CardTitle>
                  <CardDescription>{coordinator.role}</CardDescription>
                  <p className="text-sm text-muted-foreground">{coordinator.department}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>




      </div>
    </section>
  );
};
