import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

// Import wildlife images - Indian animals from Western Ghats
import asianElephant1 from "@/assets/gallery/asian-elephant-1.jpg";
import asianElephant2 from "@/assets/gallery/asian-elephant-2.jpg";
import bengalTiger from "@/assets/gallery/bengal-tiger.jpg";
import indianLeopard from "@/assets/gallery/indian-leopard.jpg";
import indianGaur from "@/assets/gallery/indian-gaur.jpg";
import slothBear from "@/assets/gallery/sloth-bear.jpg";
import sambarDeer from "@/assets/gallery/sambar-deer.jpg";
import malabarSquirrel from "@/assets/gallery/malabar-squirrel.jpg";
import lionTailedMacaque from "@/assets/gallery/lion-tailed-macaque.jpg";
import nilgiriTahr from "@/assets/gallery/nilgiri-tahr.jpg";
import indianWildDog from "@/assets/gallery/indian-wild-dog.jpg";
import kingCobra from "@/assets/gallery/king-cobra.jpg";
import indianPangolin from "@/assets/gallery/indian-pangolin.jpg";
import indianSparrow from "@/assets/gallery/indian-sparrow.jpg";
import indianPeacock from "@/assets/gallery/indian-peacock.jpg";

interface WildlifeGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const WildlifeGallery = ({ isOpen, onClose }: WildlifeGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: asianElephant1,
      title: "Asian Elephant",
      description: "Majestic Asian elephant in Western Ghats forests"
    },
    {
      src: asianElephant2,
      title: "Asian Elephant Herd",
      description: "Asian elephant herd with calves crossing river"
    },
    {
      src: bengalTiger,
      title: "Bengal Tiger",
      description: "Magnificent Bengal tiger in Western Ghats forest"
    },
    {
      src: indianLeopard,
      title: "Indian Leopard",
      description: "Indian leopard resting on tree branch"
    },
    {
      src: indianGaur,
      title: "Indian Gaur",
      description: "Massive Indian Gaur (Indian Bison) in grassland"
    },
    {
      src: slothBear,
      title: "Sloth Bear",
      description: "Sloth bear climbing tree in Western Ghats forest"
    },
    {
      src: sambarDeer,
      title: "Sambar Deer",
      description: "Sambar deer in forest clearing with large antlers"
    },
    {
      src: malabarSquirrel,
      title: "Malabar Giant Squirrel",
      description: "Colorful Malabar Giant Squirrel in tree canopy"
    },
    {
      src: lionTailedMacaque,
      title: "Lion-tailed Macaque",
      description: "Endemic Lion-tailed Macaque in rainforest"
    },
    {
      src: nilgiriTahr,
      title: "Nilgiri Tahr",
      description: "Endangered Nilgiri Tahr on rocky mountain cliff"
    },
    {
      src: indianWildDog,
      title: "Indian Wild Dog (Dhole)",
      description: "Indian Wild Dog pack in Western Ghats forest"
    },
    {
      src: kingCobra,
      title: "King Cobra",
      description: "King Cobra with spread hood in forest floor"
    },
    {
      src: indianPangolin,
      title: "Indian Pangolin",
      description: "Endangered Indian pangolin with distinctive scales"
    },
    {
      src: indianSparrow,
      title: "House Sparrow",
      description: "House sparrow perched in natural habitat"
    },
    {
      src: indianPeacock,
      title: "Indian Peacock",
      description: "Magnificent Indian peacock with spread tail feathers"
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