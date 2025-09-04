import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight, BookOpen } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "AI in Wildlife Conservation: A New Frontier",
      excerpt: "Exploring how machine learning algorithms are revolutionizing species monitoring and habitat preservation efforts across the globe.",
      category: "AI & Technology",
      readTime: "8 min read",
      date: "March 15, 2024",
      featured: true,
      tags: ["AI", "Conservation", "Technology"]
    },
    {
      title: "The Language of Trees: What Forests Tell Us",
      excerpt: "Insights from recent research on plant communication and how understanding these networks can inform conservation strategies.",
      category: "Research Insights",
      readTime: "6 min read",
      date: "March 8, 2024",
      tags: ["Research", "Ecology", "Plants"]
    },
    {
      title: "Field Notes: Tracking Tigers in Ranthambore",
      excerpt: "Personal reflections from recent fieldwork documenting tiger behavior patterns and the challenges of modern wildlife research.",
      category: "Field Diary",
      readTime: "5 min read",
      date: "February 28, 2024",
      tags: ["Fieldwork", "Tigers", "India"]
    },
    {
      title: "Data Storytelling for Conservation Impact",
      excerpt: "How effective data visualization and narrative techniques can bridge the gap between scientific research and public engagement.",
      category: "Communication",
      readTime: "7 min read",
      date: "February 20, 2024",
      tags: ["Data Science", "Communication", "Impact"]
    },
    {
      title: "Book Review: The Hidden Reality of Animal Intelligence",
      excerpt: "A deep dive into recent publications exploring animal cognition and what they reveal about consciousness in the natural world.",
      category: "Book Reviews",
      readTime: "4 min read",
      date: "February 12, 2024",
      tags: ["Books", "Animal Cognition", "Review"]
    },
    {
      title: "Balancing Academia and Activism in Conservation",
      excerpt: "Navigating the intersection of rigorous scientific research and urgent conservation action in today's rapidly changing world.",
      category: "Perspective",
      readTime: "6 min read",
      date: "February 5, 2024",
      tags: ["Academia", "Activism", "Conservation"]
    }
  ];

  const categories = ["All", "AI & Technology", "Research Insights", "Field Diary", "Communication", "Book Reviews"];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wildlife-forest/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="h-8 w-8 text-wildlife-emerald" />
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-wildlife-ivory">Thoughts &</span>{" "}
              <span className="text-glow wildlife-gradient bg-clip-text text-transparent">Reflections</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing insights from the field, research discoveries, and reflections on the intersection 
            of technology, nature, and storytelling.
          </p>
          <div className="w-24 h-1 wildlife-gradient rounded-full mx-auto mt-6" />
        </div>

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

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.title} className="bg-card-gradient border-wildlife-emerald/20 mb-12 overflow-hidden group hover:border-wildlife-emerald/40 smooth-transition">
            <div className="lg:flex">
              <div className="lg:w-1/3 h-64 lg:h-auto bg-gradient-to-br from-wildlife-emerald/20 to-wildlife-gold/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-wildlife-midnight/20" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-wildlife-gold/20 text-wildlife-gold border-wildlife-gold/40">
                    Featured
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 text-wildlife-ivory/60">
                  <BookOpen className="h-8 w-8" />
                </div>
              </div>
              <div className="lg:w-2/3 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline" className="border-wildlife-emerald/20 text-wildlife-emerald">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-wildlife-ivory mb-4 group-hover:text-wildlife-emerald smooth-transition">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="outline"
                        className="border-wildlife-emerald/20 text-wildlife-emerald hover:bg-wildlife-emerald/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="wildlife-gradient hover:opacity-90 smooth-transition text-wildlife-midnight">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.title} className="bg-card-gradient border-wildlife-emerald/10 hover:border-wildlife-emerald/30 smooth-transition group">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="border-wildlife-emerald/20 text-wildlife-emerald">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-wildlife-ivory group-hover:text-wildlife-emerald smooth-transition leading-tight">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {post.date}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-wildlife-emerald hover:text-wildlife-ivory hover:bg-wildlife-emerald/10 p-2"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-1 mt-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge 
                      key={tag}
                      variant="outline"
                      className="border-wildlife-emerald/20 text-wildlife-emerald hover:bg-wildlife-emerald/10 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-card-gradient border-wildlife-emerald/20 text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-wildlife-ivory mb-4">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get notified when I publish new insights on wildlife conservation, AI research, 
              and stories from the field. No spam, just thoughtful content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-wildlife-midnight/50 border border-wildlife-emerald/20 text-wildlife-ivory placeholder:text-muted-foreground focus:outline-none focus:border-wildlife-emerald"
              />
              <Button className="wildlife-gradient hover:opacity-90 smooth-transition text-wildlife-midnight font-medium px-6">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlogSection;