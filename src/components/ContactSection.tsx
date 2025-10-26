import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Instagram, Youtube, MapPin, Calendar, Users, Award } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  subject: z.string()
    .trim()
    .min(1, "Subject is required")
    .max(200, "Subject must be less than 200 characters"),
  message: z.string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const collaborationTypes = [
    {
      title: "Research Collaboration",
      description: "Joint research projects in wildlife conservation and AI applications",
      icon: Award,
      color: "text-wildlife-emerald"
    },
    {
      title: "Speaking Engagements",
      description: "Conferences, workshops, and academic presentations",
      icon: Users,
      color: "text-wildlife-gold"
    },
    {
      title: "Writing & Media",
      description: "Science communication, articles, and interviews",
      icon: Mail,
      color: "text-wildlife-emerald"
    },
    {
      title: "Mentorship",
      description: "Guiding students and early-career conservationists",
      icon: Calendar,
      color: "text-wildlife-gold"
    }
  ];

  const onSubmit = (data: ContactFormValues) => {
    // Form data is now validated and safe to use
    toast.success("Message sent! I'll get back to you within 48 hours.");
    form.reset();
    // TODO: Implement actual form submission (e.g., send to an API endpoint)
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-wildlife-ivory">Let's</span>{" "}
            <span className="text-wildlife-emerald">Collaborate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're interested in research collaboration, speaking engagements, 
            or simply want to discuss wildlife conservation, I'd love to hear from you.
          </p>
          <div className="w-24 h-1 wildlife-gradient rounded-full mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <Card className="bg-card-gradient border-wildlife-emerald/20">
            <CardHeader>
              <CardTitle className="text-2xl text-wildlife-ivory">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-wildlife-emerald">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name"
                              className="bg-wildlife-midnight/50 border-wildlife-emerald/20 text-wildlife-ivory placeholder:text-muted-foreground focus:border-wildlife-emerald"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-wildlife-emerald">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your.email@example.com"
                              className="bg-wildlife-midnight/50 border-wildlife-emerald/20 text-wildlife-ivory placeholder:text-muted-foreground focus:border-wildlife-emerald"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-wildlife-emerald">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What would you like to discuss?"
                            className="bg-wildlife-midnight/50 border-wildlife-emerald/20 text-wildlife-ivory placeholder:text-muted-foreground focus:border-wildlife-emerald"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-wildlife-emerald">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project, idea, or how we might collaborate..."
                            rows={6}
                            className="bg-wildlife-midnight/50 border-wildlife-emerald/20 text-wildlife-ivory placeholder:text-muted-foreground focus:border-wildlife-emerald resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                
                <div className="flex gap-3">
                  <Button 
                    type="submit"
                    className="wildlife-gradient hover:opacity-90 smooth-transition text-wildlife-midnight font-medium flex-1"
                  >
                    Send Message
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    className="border-wildlife-emerald/30 text-wildlife-emerald hover:bg-wildlife-emerald/10"
                  >
                    Schedule Call
                  </Button>
                </div>
                
                  <p className="text-xs text-muted-foreground">
                    I'll get back to you within 48 hours. For urgent matters, please reach out via LinkedIn.
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info & Collaboration Types */}
          <div className="space-y-8">
            
            {/* Direct Contact */}
            <Card className="bg-card-gradient border-wildlife-emerald/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-wildlife-ivory mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/simran-prasad-2785b011b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-wildlife-emerald/5 hover:bg-wildlife-emerald/10 smooth-transition border border-wildlife-emerald/20 group"
                  >
                    <div className="p-3 rounded-xl bg-wildlife-emerald/10 group-hover:bg-wildlife-emerald/20 smooth-transition">
                      <Linkedin className="h-6 w-6 text-wildlife-emerald" />
                    </div>
                    <div>
                      <div className="font-medium text-wildlife-ivory">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">Professional networking</div>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:simranprasaduae@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-wildlife-gold/5 hover:bg-wildlife-gold/10 smooth-transition border border-wildlife-gold/20 group"
                  >
                    <div className="p-3 rounded-xl bg-wildlife-gold/10 group-hover:bg-wildlife-gold/20 smooth-transition">
                      <Mail className="h-6 w-6 text-wildlife-gold" />
                    </div>
                    <div>
                      <div className="font-medium text-wildlife-ivory">Email</div>
                      <div className="text-sm text-muted-foreground">Direct correspondence</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/simran__prasad/?igsh=MXR3N3FjaXZkZTdsZg%3D%3D#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-wildlife-emerald/5 hover:bg-wildlife-emerald/10 smooth-transition border border-wildlife-emerald/20 group"
                  >
                    <div className="p-3 rounded-xl bg-wildlife-emerald/10 group-hover:bg-wildlife-emerald/20 smooth-transition">
                      <Instagram className="h-6 w-6 text-wildlife-emerald" />
                    </div>
                    <div>
                      <div className="font-medium text-wildlife-ivory">Instagram</div>
                      <div className="text-sm text-muted-foreground">Creative & lifestyle updates</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.youtube.com/shorts/VzKPbVYGNu8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-wildlife-gold/5 hover:bg-wildlife-gold/10 smooth-transition border border-wildlife-gold/20 group"
                  >
                    <div className="p-3 rounded-xl bg-wildlife-gold/10 group-hover:bg-wildlife-gold/20 smooth-transition">
                      <Youtube className="h-6 w-6 text-wildlife-gold" />
                    </div>
                    <div>
                      <div className="font-medium text-wildlife-ivory">YouTube</div>
                      <div className="text-sm text-muted-foreground">Short videos & talks</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Collaboration Types */}
            <Card className="bg-card-gradient border-wildlife-emerald/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-wildlife-ivory mb-6">Collaboration Opportunities</h3>
                <div className="space-y-4">
                  {collaborationTypes.map((type) => (
                    <div key={type.title} className="flex items-start gap-4 p-4 rounded-xl bg-wildlife-emerald/5 border border-wildlife-emerald/10">
                      <div className="p-2 rounded-lg bg-wildlife-emerald/10">
                        <type.icon className={`h-5 w-5 ${type.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-wildlife-ivory mb-1">{type.title}</h4>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Status */}
            <Card className="bg-card-gradient border-wildlife-gold/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-wildlife-emerald rounded-full animate-pulse" />
                  <h3 className="text-lg font-bold text-wildlife-ivory">Current Status</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-wildlife-gold" />
                    <span className="text-sm text-muted-foreground">Based in Dubai, United Arab Emirates, open to global collaboration</span>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-wildlife-emerald/20 text-wildlife-emerald border-wildlife-emerald/40">
                      Accepting Research Partnerships
                    </Badge>
                    <Badge className="bg-wildlife-gold/20 text-wildlife-gold border-wildlife-gold/40">
                      Speaking Engagements Available
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;