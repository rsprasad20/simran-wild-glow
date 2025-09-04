import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WildlifeSection from "@/components/WildlifeSection";
import BookshelfSection from "@/components/BookshelfSection";
import CreativeSection from "@/components/CreativeSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <WildlifeSection />
      <BookshelfSection />
      <CreativeSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
};

export default Index;
