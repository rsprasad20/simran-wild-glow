import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Microscope, BarChart3, Heart, BookOpen, Camera, ExternalLink, Youtube } from "lucide-react";
import imperialLogo from "@/assets/imperial-logo.png";

const AboutSection = () => {
  const skills = [
    "Wildlife Conservation", "Data Science", "AI Research", "Field Biology",
    "Python", "R", "Machine Learning", "Statistical Analysis", 
    "Research Writing", "Grant Writing", "Photography", "Storytelling",
    "QGIS Maps", "Science Publications"
  ];

  const achievements = [
    {
      icon: GraduationCap,
      title: "PhD in Wildlife Conservation",
      description: "PhD in Wildlife Conservation with a focus on Human Elephant Conflict (HEC)",
      color: "text-wildlife-emerald"
    },
    {
      icon: Microscope,
      title: "Research Excellence",
      description: "5+ peer-reviewed publications in conservation biology",
      color: "text-wildlife-gold"
    },
    {
      icon: BarChart3,
      title: "Data Innovation",
      description: "Pioneering AI models for species behavior prediction",
      color: "text-wildlife-emerald"
    },
    {
      icon: Heart,
      title: "Conservation Impact",
      description: "• New York Academy of Science's Mentor for the 1000 Girls, 1000 Futures Program.\n• Fellow at the Center for Collaborative Conservation (CCC) at Colorado State University.\n• Keynote speaker at the 60th Annual Meeting of the Association for Tropical Biology and Conservation (ATBC) in Kigali, Rwanda",
      color: "text-wildlife-gold"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 wildlife-shimmer opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-wildlife-ivory">About</span>{" "}
            <span className="text-wildlife-emerald">Simran</span>
          </h2>
                <div className="w-24 h-1 wildlife-gradient rounded-full" />
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a PhD candidate in Wildlife Conservation with a focus on Human Elephant Conflict (HEC), I stand at the intersection of nature and technology, 
                using data science and AI to unlock the secrets of wildlife behavior and ecosystem dynamics.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began in the field, tracking endangered species and documenting their stories. 
                Today, I combine fieldwork with cutting-edge technology to create predictive models that 
                help conservationists make informed decisions about habitat protection and species recovery.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond research, I'm passionate about storytelling - whether through academic writing, 
                book reviews, or capturing the beauty of wildlife through photography. I believe that 
                data tells stories, and stories inspire action.
              </p>
            </div>
            
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-wildlife-emerald">Expertise & Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-wildlife-emerald/10 text-wildlife-emerald border-wildlife-emerald/20 hover:bg-wildlife-emerald/20 smooth-transition"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Personal Touch */}
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-card-gradient border border-wildlife-emerald/20">
              <div className="flex gap-2">
                <BookOpen className="h-6 w-6 text-wildlife-gold" />
                <Camera className="h-6 w-6 text-wildlife-emerald" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  When I'm not in the field or analyzing data, you'll find me curating book reviews 
                  for The Little Book Club or dancing in the streets of the city.
                </p>
              </div>
            </div>
          </div>
          
          {/* Achievements Grid */}
          <div className="grid gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.title} className="bg-card-gradient border-wildlife-emerald/10 hover:border-wildlife-emerald/30 smooth-transition group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-2xl bg-wildlife-emerald/10 group-hover:bg-wildlife-emerald/20 smooth-transition`}>
                      <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-wildlife-ivory mb-2">
                        {achievement.title}
                      </h3>
                      {achievement.title === "Conservation Impact" ? (
                        <ul className="text-muted-foreground space-y-1">
                          <li>• New York Academy of Science's Mentor for the 1000 Girls, 1000 Futures Program.</li>
                          <li>• Fellow at the Center for Collaborative Conservation (CCC) at Colorado State University.</li>
                          <li>• Keynote speaker at the 60th Annual Meeting of the Association for Tropical Biology and Conservation (ATBC) in Kigali, Rwanda</li>
                        </ul>
                      ) : (
                        <>
                          <p className="text-muted-foreground">
                            {achievement.description}
                          </p>
                          {achievement.title === "Research Excellence" && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-4 border-wildlife-emerald/30 hover:bg-wildlife-emerald/10"
                              asChild
                            >
                              <a 
                                href="https://www.nature.com/articles/s41598-025-14867-3" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                Read My Research
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Imperial College Card */}
            <Card className="bg-card-gradient border-wildlife-gold/20 hover:border-wildlife-gold/40 smooth-transition group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/95 group-hover:bg-white smooth-transition">
                    <img 
                      src={imperialLogo} 
                      alt="Imperial College London" 
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-wildlife-ivory mb-2">
                      A Proud Imperial Alumna
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Imperial College London - Where science meets innovation
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-wildlife-gold/30 hover:bg-wildlife-gold/10"
                      asChild
                    >
                      <a 
                        href="https://www.youtube.com/shorts/VzKPbVYGNu8" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Youtube className="h-4 w-4" />
                        Watch My Journey
                      </a>
                    </Button>
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

export default AboutSection;