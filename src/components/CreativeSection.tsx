import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Camera, Heart, Palette, ExternalLink, Play } from "lucide-react";

const CreativeSection = () => {
  const creativeProjects = [
    {
      type: "Street Dance",
      title: "Urban Rhythms",
      description: "Expressing the pulse of city life through movement, bringing joy to unexpected spaces.",
      icon: Music,
      color: "text-wildlife-gold",
      media: "video",
      featured: true
    },
    {
      type: "Photography",
      title: "Wildlife Portraits",
      description: "Capturing the soul and spirit of animals in their natural environment.",
      icon: Camera,
      color: "text-wildlife-emerald",
      media: "gallery"
    },
    {
      type: "Lifestyle",
      title: "City Explorer",
      description: "Finding beauty in urban landscapes and sharing moments of everyday magic.",
      icon: Heart,
      color: "text-wildlife-gold",
      media: "gallery"
    },
    {
      type: "Creative Writing",
      title: "Nature Narratives",
      description: "Weaving stories that connect human experiences with the natural world.",
      icon: Palette,
      color: "text-wildlife-emerald",
      media: "blog"
    }
  ];

  const highlights = [
    {
      title: "Dance Workshop Leader",
      description: "Teaching street dance to local communities",
      achievement: "50+ participants"
    },
    {
      title: "Photography Exhibition",
      description: "Wildlife conservation awareness through art",
      achievement: "Featured in 3 galleries"
    },
    {
      title: "Content Creator",
      description: "Lifestyle and science communication",
      achievement: "2K+ followers"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-wildlife-forest/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-wildlife-ivory">Creative</span>{" "}
            <span className="text-glow wildlife-gradient bg-clip-text text-transparent">Expression</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beyond research and conservation, creativity fuels my passion. From street dance to photography, 
            I explore different ways to tell stories and connect with the world around me.
          </p>
          <div className="w-24 h-1 wildlife-gradient rounded-full mx-auto mt-6" />
        </div>

        {/* Creative Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {creativeProjects.map((project) => (
            <Card 
              key={project.title}
              className={`bg-card-gradient border-wildlife-emerald/10 hover:border-wildlife-emerald/30 smooth-transition group relative overflow-hidden ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <CardContent className="p-8">
                <div className={`flex items-start gap-6 ${project.featured ? "lg:flex-row flex-col" : "flex-col"}`}>
                  
                  {/* Media Placeholder */}
                  <div className={`relative rounded-2xl bg-gradient-to-br from-wildlife-emerald/20 to-wildlife-gold/20 ${
                    project.featured ? "lg:w-1/2 w-full h-64 lg:h-80" : "w-full h-48"
                  } flex items-center justify-center group-hover:scale-105 smooth-transition overflow-hidden`}>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-wildlife-midnight/20" />
                    
                    {project.media === "video" && (
                      <div className="relative">
                        <div className="w-20 h-20 bg-wildlife-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-wildlife-gold/30">
                          <Play className="h-8 w-8 text-wildlife-gold ml-1" />
                        </div>
                        <div className="absolute inset-0 animate-ping w-20 h-20 bg-wildlife-gold/10 rounded-full" />
                      </div>
                    )}
                    
                    {project.media === "gallery" && (
                      <div className="grid grid-cols-2 gap-2 p-4">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="w-16 h-16 bg-wildlife-emerald/20 rounded-lg" />
                        ))}
                      </div>
                    )}
                    
                    {project.media === "blog" && (
                      <div className="text-center">
                        <project.icon className={`h-12 w-12 ${project.color} mx-auto mb-2`} />
                        <div className="text-sm text-muted-foreground">Latest Posts</div>
                      </div>
                    )}
                    
                    {project.featured && (
                      <Badge className="absolute top-4 right-4 bg-wildlife-gold/20 text-wildlife-gold border-wildlife-gold/40">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className={`${project.featured ? "lg:w-1/2" : "w-full"} flex-1`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-wildlife-emerald/10">
                        <project.icon className={`h-6 w-6 ${project.color}`} />
                      </div>
                      <Badge 
                        variant="outline"
                        className="border-wildlife-emerald/20 text-wildlife-emerald"
                      >
                        {project.type}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-wildlife-ivory mb-3 group-hover:text-wildlife-emerald smooth-transition">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-3">
                      <Button 
                        size="sm"
                        className="wildlife-gradient hover:opacity-90 smooth-transition text-wildlife-midnight"
                      >
                        Explore
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-wildlife-emerald/30 text-wildlife-emerald hover:bg-wildlife-emerald/10"
                      >
                        View Gallery
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements & Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="bg-card-gradient border-wildlife-emerald/10 text-center group hover:border-wildlife-gold/30 smooth-transition">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-wildlife-ivory mb-2 group-hover:text-wildlife-gold smooth-transition">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {highlight.description}
                </p>
                <div className="text-2xl font-bold text-wildlife-emerald">
                  {highlight.achievement}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Media CTA */}
        <div className="text-center bg-card-gradient rounded-3xl p-8 border border-wildlife-emerald/10">
          <h3 className="text-2xl font-bold text-wildlife-ivory mb-4">
            Follow My Creative Journey
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with me on social media to see behind-the-scenes moments, creative projects, 
            and the lighter side of wildlife research life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="wildlife-gradient hover:opacity-90 smooth-transition text-wildlife-midnight font-medium"
            >
              @simran__prasad
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              className="border-wildlife-emerald/30 text-wildlife-ivory hover:bg-wildlife-emerald/10"
            >
              @the_little_bookclub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeSection;