import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroConstellation from "@/assets/hero-constellation.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Constellation Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${heroConstellation})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-80" />
      
      {/* Floating Wildlife Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-wildlife-emerald rounded-full float-animation wildlife-glow opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-wildlife-gold rounded-full float-animation wildlife-glow opacity-40" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-wildlife-emerald rounded-full float-animation wildlife-glow opacity-50" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-wildlife-gold rounded-full float-animation wildlife-glow opacity-30" style={{ animationDelay: "1s" }} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wildlife-emerald/10 border border-wildlife-emerald/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-wildlife-emerald rounded-full animate-pulse" />
                <span className="text-sm font-medium text-wildlife-emerald">Available for Collaboration</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-wildlife-ivory">Dr. Simran</span>
                <br />
                <span className="text-wildlife-emerald">Prasad</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-wildlife-emerald font-medium">
                Doctoral Fellow | Wildlife Conservationist | Storyteller
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Bridging nature, science, and data to conserve the wild. Passionate about using AI and technology 
              to understand and protect our planet's most vulnerable ecosystems.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="wildlife-gradient hover:opacity-90 smooth-transition text-wildlife-midnight font-medium px-8 py-3"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-wildlife-emerald/30 text-wildlife-ivory hover:bg-wildlife-emerald/10 smooth-transition px-8 py-3"
              >
                Read My Research
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start pt-4">
              <a 
                href="https://www.linkedin.com/in/simran-prasad-2785b011b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-wildlife-emerald/10 border border-wildlife-emerald/20 hover:bg-wildlife-emerald/20 smooth-transition group"
              >
                <Linkedin className="h-5 w-5 text-wildlife-emerald group-hover:text-wildlife-ivory" />
              </a>
              <a 
                href="mailto:simran@example.com"
                className="p-3 rounded-full bg-wildlife-emerald/10 border border-wildlife-emerald/20 hover:bg-wildlife-emerald/20 smooth-transition group"
              >
                <Mail className="h-5 w-5 text-wildlife-emerald group-hover:text-wildlife-ivory" />
              </a>
              <a 
                href="#"
                className="p-3 rounded-full bg-wildlife-emerald/10 border border-wildlife-emerald/20 hover:bg-wildlife-emerald/20 smooth-transition group"
              >
                <Github className="h-5 w-5 text-wildlife-emerald group-hover:text-wildlife-ivory" />
              </a>
            </div>
          </div>
          
          {/* Portrait */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 wildlife-gradient rounded-full blur-3xl opacity-20 scale-110" />
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-wildlife-emerald/20 glow-pulse">
                <img 
                  src="/lovable-uploads/52416314-c6ac-48f6-8676-ee6bf3ac1d27.png"
                  alt="Dr. Simran Prasad - Wildlife Conservation Doctoral Fellow in traditional outfit with warm smile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Data Points */}
              <div className="absolute -top-4 -right-4 bg-card-gradient rounded-2xl p-4 border border-wildlife-emerald/20 backdrop-blur-sm">
                <div className="text-2xl font-bold text-wildlife-emerald">500+</div>
                <div className="text-xs text-muted-foreground">Research Field Interviews</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card-gradient rounded-2xl p-4 border border-wildlife-gold/20 backdrop-blur-sm">
                <div className="text-2xl font-bold text-wildlife-gold">3+ States</div>
                <div className="text-xs text-muted-foreground">Study site across the western ghats</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 text-wildlife-emerald" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;