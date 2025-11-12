import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  teamName: z
    .string()
    .trim()
    .min(3, { message: "Team name must be at least 3 characters" })
    .max(50, { message: "Team name must be less than 50 characters" }),
  collegeName: z
    .string()
    .trim()
    .min(3, { message: "College name must be at least 3 characters" })
    .max(100, { message: "College name must be less than 100 characters" }),
  domain: z.string({
    required_error: "Please select a problem domain",
  }),
  leader: z.object({
    name: z
      .string()
      .trim()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(100, { message: "Name must be less than 100 characters" }),
    email: z
      .string()
      .trim()
      .email({ message: "Invalid email address" })
      .max(255, { message: "Email must be less than 255 characters" }),
    phone: z
      .string()
      .trim()
      .regex(/^[0-9]{10}$/, { message: "Phone number must be 10 digits" }),
  }),
  member2: z.object({
    name: z
      .string()
      .trim()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(100, { message: "Name must be less than 100 characters" }),
    email: z
      .string()
      .trim()
      .email({ message: "Invalid email address" })
      .max(255, { message: "Email must be less than 255 characters" }),
    phone: z
      .string()
      .trim()
      .regex(/^[0-9]{10}$/, { message: "Phone number must be 10 digits" }),
  }),
  member3: z.object({
    name: z.string().trim().max(100).optional(),
    email: z.string().trim().email().max(255).optional().or(z.literal("")),
    phone: z
      .string()
      .trim()
      .regex(/^[0-9]{10}$/)
      .optional()
      .or(z.literal("")),
  }),
  member4: z.object({
    name: z.string().trim().max(100).optional(),
    email: z.string().trim().email().max(255).optional().or(z.literal("")),
    phone: z
      .string()
      .trim()
      .regex(/^[0-9]{10}$/)
      .optional()
      .or(z.literal("")),
  }),
  projectIdea: z
    .string()
    .trim()
    .min(50, { message: "Project idea must be at least 50 characters" })
    .max(1000, { message: "Project idea must be less than 1000 characters" }),
});

const Registration = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      collegeName: "",
      domain: "",
      leader: { name: "", email: "", phone: "" },
      member2: { name: "", email: "", phone: "" },
      member3: { name: "", email: "", phone: "" },
      member4: { name: "", email: "", phone: "" },
      projectIdea: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Save to database
      const { error } = await supabase
        .from('team_registrations')
        .insert([
          {
            team_name: values.teamName,
            college: values.collegeName,
            domain: values.domain,
            leader_name: values.leader.name,
            leader_email: values.leader.email,
            leader_phone: values.leader.phone,
            member2_name: values.member2.name,
            member2_email: values.member2.email,
            member2_phone: values.member2.phone,
            member3_name: values.member3.name || null,
            member3_email: values.member3.email || null,
            member3_phone: values.member3.phone || null,
            member4_name: values.member4.name || null,
            member4_email: values.member4.email || null,
            member4_phone: values.member4.phone || null,
            project_idea: values.projectIdea,
          }
        ]);

      if (error) throw error;

      // Send confirmation email
      const emailData = {
        teamName: values.teamName,
        college: values.collegeName,
        domain: values.domain,
        leaderName: values.leader.name,
        leaderEmail: values.leader.email,
        leaderPhone: values.leader.phone,
        member2Name: values.member2.name,
        member2Email: values.member2.email,
        member2Phone: values.member2.phone,
        member3Name: values.member3.name,
        member3Email: values.member3.email,
        member3Phone: values.member3.phone,
        member4Name: values.member4.name,
        member4Email: values.member4.email,
        member4Phone: values.member4.phone,
        projectIdea: values.projectIdea,
      };

      await supabase.functions.invoke('send-registration-email', {
        body: emailData
      });

      toast({
        title: "Registration Submitted!",
        description: "Your team has been registered successfully. Check your email for confirmation.",
      });
      
      form.reset();
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: error.message || "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-accent">
              Team Registration
            </h1>
            <p className="text-muted-foreground text-lg">
              Register your team for Swaminarayan Code Fest 2K25
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Team Details */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary">Team Details</h2>
                  
                  <FormField
                    control={form.control}
                    name="teamName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Team Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your team name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="collegeName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>College/Institution Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your college name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="domain"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Problem Domain *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a problem domain" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="app-development">App Development</SelectItem>
                            <SelectItem value="graphic-design">Graphic Design</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Team Leader */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary">Team Leader *</h2>
                  
                  <FormField
                    control={form.control}
                    name="leader.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter leader's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="leader.email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="leader@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="leader.phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="1234567890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Member 2 */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary">Team Member 2 *</h2>
                  
                  <FormField
                    control={form.control}
                    name="member2.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter member's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="member2.email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="member@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="member2.phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="1234567890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Member 3 */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-muted-foreground">Team Member 3 (Optional)</h2>
                  
                  <FormField
                    control={form.control}
                    name="member3.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter member's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="member3.email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="member@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="member3.phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="1234567890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Member 4 */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-muted-foreground">Team Member 4 (Optional)</h2>
                  
                  <FormField
                    control={form.control}
                    name="member4.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter member's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="member4.email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="member@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="member4.phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="1234567890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Project Idea */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary">Project Idea *</h2>
                  
                  <FormField
                    control={form.control}
                    name="projectIdea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brief Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your project idea, approach, and expected outcomes (minimum 50 characters)"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Provide a brief overview of what you plan to build
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end gap-4 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                  >
                    Reset Form
                  </Button>
                  <Button type="submit" variant="hero" size="lg">
                    Submit Registration
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Registration;
