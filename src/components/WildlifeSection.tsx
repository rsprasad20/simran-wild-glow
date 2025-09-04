import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Award, ExternalLink } from "lucide-react";
import wildlifeWork from "@/assets/wildlife-work.jpg";

const WildlifeSection = () => {
  const projects = [
    {
      title: "Tiger Habitat Mapping with AI",
      location: "Ranthambore National Park",
      year: "2023-2024",
      description: "Developed machine learning models to predict optimal tiger habitat corridors, resulting in 23% improvement in conservation area designation.",
      impact: "150+ tigers",
      status: "Ongoing",
      tags: ["AI/ML", "GIS", "Conservation"],
      featured: true
    },
    {
      title: "Elephant Migration Patterns",
      location: "Western Ghats",
      year: "2022-2023",
      description: "Used GPS collars and predictive analytics to map elephant migration routes, reducing human-wildlife conflict by 40%.",
      impact: "800+ elephants",
      status: "Published",
      tags: ["Data Analysis", "Tracking", "Conflict Resolution"]
    },
    {
      title: "Bird Species Recovery Program",
      location: "Bharatpur Bird Sanctuary",
      year: "2021-2022",
      description: "Implemented AI-powered monitoring system for endangered migratory birds, improving population tracking accuracy.",
      impact: "50+ species",
      status: "Completed",
      tags: ["Monitoring", "AI", "Biodiversity"]
    },
    {
      title: "Marine Ecosystem Health Assessment",
      location: "Andaman Islands",
      year: "2023",
      description: "Conducted comprehensive health assessment of coral reef ecosystems using underwater drones and data analysis.",
      impact: "12 reef sites",
      status: "In Review",
      tags: ["Marine Biology", "Drones", "Ecosystem Health"]
    }
  ];

  const timeline = [
    { year: "2024", event: "Lead Researcher - AI Wildlife Conservation Lab" },
    { year: "2023", event: "Published 'Machine Learning in Conservation Biology'" },
    { year: "2022", event: "Awarded Young Conservationist Fellowship" },
    { year: "2021", event: "Started PhD in Wildlife Conservation" },
    { year: "2020", event: "Fieldwork Coordinator - Tiger Conservation Project" }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-wildlife-ivory">Wildlife</span>{" "}
            <span className="text-wildlife-emerald">Conservation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Exploring the intersection of technology and nature to create innovative solutions 
            for wildlife conservation challenges across diverse ecosystems.
          </p>
          <div className="w-24 h-1 wildlife-gradient rounded-full mx-auto mt-6" />
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-3xl overflow-hidden">
          <img 
            src={wildlifeWork}
            alt="Wildlife conservation fieldwork"
            className="w-full h-64 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wildlife-midnight/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-wildlife-ivory mb-2">Fieldwork in Action</h3>
                <p className="text-wildlife-emerald">Documenting wildlife behavior in their natural habitat</p>
              </div>
              <Button 
                variant="outline" 
                className="border-wildlife-emerald/30 text-wildlife-ivory hover:bg-wildlife-emerald/10"
              >
                View Gallery
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-wildlife-ivory mb-8">Research Projects</h3>
            <div className="grid gap-6">
              {projects.map((project) => (
                <Card 
                  key={project.title}
                  className={`bg-card-gradient border-wildlife-emerald/10 hover:border-wildlife-emerald/30 smooth-transition group ${
                    project.featured ? "ring-1 ring-wildlife-emerald/20" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-wildlife-ivory group-hover:text-wildlife-emerald smooth-transition">
                          {project.title}
                          {project.featured && (
                            <Badge className="ml-2 bg-wildlife-emerald/20 text-wildlife-emerald border-wildlife-emerald/40">
                              Featured
                            </Badge>
                          )}
                        </CardTitle>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {project.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {project.year}
                          </span>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary"
                        className={`
                          ${project.status === "Ongoing" ? "bg-wildlife-emerald/20 text-wildlife-emerald border-wildlife-emerald/40" : ""}
                          ${project.status === "Published" ? "bg-wildlife-gold/20 text-wildlife-gold border-wildlife-gold/40" : ""}
                          ${project.status === "Completed" ? "bg-blue-500/20 text-blue-400 border-blue-500/40" : ""}
                          ${project.status === "In Review" ? "bg-orange-500/20 text-orange-400 border-orange-500/40" : ""}
                        `}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-wildlife-emerald">
                        <Users className="h-4 w-4" />
                        Impact: {project.impact}
                      </div>
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <Badge 
                            key={tag}
                            variant="outline"
                            className="border-wildlife-emerald/20 text-wildlife-emerald hover:bg-wildlife-emerald/10"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-wildlife-ivory mb-8">Journey Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      index === 0 ? "bg-wildlife-emerald border-wildlife-emerald" : "border-wildlife-emerald/40"
                    }`} />
                    {index !== timeline.length - 1 && (
                      <div className="w-0.5 h-12 bg-wildlife-emerald/20 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="text-wildlife-gold font-semibold mb-1">{item.year}</div>
                    <div className="text-sm text-muted-foreground">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card-gradient border-wildlife-emerald/10 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-wildlife-emerald mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </CardContent>
          </Card>
          <Card className="bg-card-gradient border-wildlife-gold/10 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-wildlife-gold mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Species Studied</div>
            </CardContent>
          </Card>
          <Card className="bg-card-gradient border-wildlife-emerald/10 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-wildlife-emerald mb-2">8</div>
              <div className="text-sm text-muted-foreground">Publications</div>
            </CardContent>
          </Card>
          <Card className="bg-card-gradient border-wildlife-gold/10 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-wildlife-gold mb-2">5</div>
              <div className="text-sm text-muted-foreground">Conservation Awards</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WildlifeSection;