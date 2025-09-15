import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

// Import wildlife images
import tigerImage from "@/assets/gallery/tiger.jpg";
import elephantsImage from "@/assets/gallery/elephants.jpg";
import pangolinImage from "@/assets/gallery/pangolin.jpg";
import pigeonsImage from "@/assets/gallery/pigeons.jpg";

interface WildlifeGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const WildlifeGallery = ({ isOpen, onClose }: WildlifeGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: tigerImage,
      title: "Bengal Tiger",
      description: "Majestic Bengal tiger in its natural habitat"
    },
    {
      src: elephantsImage,
      title: "Asian Elephants",
      description: "Herd of Asian elephants with calves"
    },
    {
      src: pangolinImage,
      title: "Pangolin",
      description: "Endangered pangolin showing distinctive scales"
    },
    {
      src: pigeonsImage,
      title: "Urban Pigeons",
      description: "Pigeons adapting to urban environments"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-wildlife-midnight/95 border-wildlife-emerald/20">
        <DialogHeader>
          <DialogTitle className="text-wildlife-ivory text-2xl">Wildlife Gallery</DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          {/* Main Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-wildlife-midnight/80 border-wildlife-emerald/30 text-wildlife-ivory hover:bg-wildlife-emerald/20"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-wildlife-midnight/80 border-wildlife-emerald/30 text-wildlife-ivory hover:bg-wildlife-emerald/20"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Image Info */}
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-wildlife-emerald mb-2">
              {images[currentIndex].title}
            </h3>
            <p className="text-muted-foreground">
              {images[currentIndex].description}
            </p>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full smooth-transition ${
                  index === currentIndex
                    ? "bg-wildlife-emerald"
                    : "bg-wildlife-emerald/30 hover:bg-wildlife-emerald/50"
                }`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WildlifeGallery;