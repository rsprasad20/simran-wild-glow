import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, BookOpen, ExternalLink, Quote } from "lucide-react";

const BookshelfSection = () => {
  const books = [
    {
      title: "The Sixth Extinction",
      author: "Elizabeth Kolbert",
      rating: 5,
      category: "Conservation",
      color: "bg-emerald-500",
      review: "A profound exploration of humanity's impact on biodiversity. Kolbert's investigative journalism brings clarity to complex ecological concepts.",
      readDate: "March 2024",
      featured: true
    },
    {
      title: "Lab Girl",
      author: "Hope Jahren",
      rating: 5,
      category: "Science Memoir",
      color: "bg-amber-500",
      review: "Jahren beautifully weaves personal narrative with botanical science. A must-read for anyone passionate about plant life.",
      readDate: "February 2024"
    },
    {
      title: "The Hidden Life of Trees",
      author: "Peter Wohlleben",
      rating: 4,
      category: "Nature",
      color: "bg-green-600",
      review: "Fascinating insights into forest ecosystems and tree communication. Changes how you view forest walks forever.",
      readDate: "January 2024"
    },
    {
      title: "Braiding Sweetgrass",
      author: "Robin Wall Kimmerer",
      rating: 5,
      category: "Indigenous Knowledge",
      color: "bg-purple-500",
      review: "Kimmerer bridges indigenous wisdom and scientific knowledge beautifully. Essential reading for modern conservationists.",
      readDate: "December 2023"
    },
    {
      title: "The Soul of an Octopus",
      author: "Sy Montgomery",
      rating: 4,
      category: "Marine Biology",
      color: "bg-blue-500",
      review: "Montgomery's intimate portraits of octopi reveal incredible intelligence and emotional depth in marine life.",
      readDate: "November 2023"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      rating: 4,
      category: "Anthropology",
      color: "bg-orange-500",
      review: "Thought-provoking analysis of human evolution and our relationship with the natural world.",
      readDate: "October 2023"
    }
  ];

  const categories = ["All", "Conservation", "Science Memoir", "Nature", "Indigenous Knowledge", "Marine Biology"];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 wildlife-shimmer opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="h-8 w-8 text-wildlife-gold" />
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-wildlife-ivory">The Little</span>{" "}
              <span className="text-glow wildlife-gradient bg-clip-text text-transparent">Book Club</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Curating stories that bridge science, nature, and human experience. 
            Each book offers new perspectives on our relationship with the natural world.
          </p>
          <div className="w-24 h-1 wildlife-gradient rounded-full mx-auto mt-6" />
        </div>

        {/* Featured Quote */}
        <Card className="bg-card-gradient border-wildlife-gold/20 mb-12 relative overflow-hidden">
          <CardContent className="p-8">
            <Quote className="absolute top-4 left-4 h-8 w-8 text-wildlife-gold/20" />
            <Quote className="absolute bottom-4 right-4 h-8 w-8 text-wildlife-gold/20 rotate-180" />
            <blockquote className="text-center">
              <p className="text-lg lg:text-xl text-wildlife-ivory font-medium mb-4 leading-relaxed">
                "Stories have the power to change how we see the world. Through books, 
                I explore different lenses for understanding our place in nature's grand narrative."
              </p>
              <footer className="text-wildlife-gold font-medium">
                — Dr. Simran Prasad, The Little Book Club
              </footer>
            </blockquote>
          </CardContent>
        </Card>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className={`border-wildlife-emerald/20 text-wildlife-emerald hover:bg-wildlife-emerald/10 ${
                category === "All" ? "bg-wildlife-emerald/10" : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {books.map((book) => (
            <Card 
              key={book.title}
              className={`bg-card-gradient border-wildlife-emerald/10 hover:border-wildlife-emerald/30 smooth-transition group book-hover ${
                book.featured ? "ring-1 ring-wildlife-gold/30" : ""
              }`}
            >
              <CardContent className="p-6">
                {/* Book Cover Placeholder */}
                <div className={`w-full h-48 ${book.color} rounded-lg mb-4 relative overflow-hidden group-hover:scale-105 smooth-transition`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-sm leading-tight">
                      {book.title}
                    </h4>
                    <p className="text-white/80 text-xs mt-1">
                      {book.author}
                    </p>
                  </div>
                  {book.featured && (
                    <Badge className="absolute top-2 right-2 bg-wildlife-gold/20 text-wildlife-gold border-wildlife-gold/40">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Book Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="outline"
                      className="border-wildlife-emerald/20 text-wildlife-emerald"
                    >
                      {book.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${
                            i < book.rating ? "text-wildlife-gold fill-wildlife-gold" : "text-muted-foreground/30"
                          }`} 
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {book.review}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Read in {book.readDate}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-1 text-wildlife-emerald hover:text-wildlife-ivory"
                    >
                      Read Review
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Follow my reading journey and join the conversation about books that shape our understanding of nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="wildlife-gradient hover:opacity-90 smooth-transition text-wildlife-midnight font-medium"
            >
              Follow on Instagram
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              className="border-wildlife-emerald/30 text-wildlife-ivory hover:bg-wildlife-emerald/10"
            >
              Subscribe to Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookshelfSection;