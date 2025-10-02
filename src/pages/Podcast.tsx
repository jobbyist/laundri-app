import { Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Episode {
  id: number;
  title: string;
  description: string;
  duration: string;
  date: string;
}

const episodes: Episode[] = [
  {
    id: 1,
    title: "How Laundri™ is Disrupting Culture by Pioneering the Integration of AI into Africa's Super Creative Fashion Industry",
    description: "Join us as we explore how artificial intelligence is revolutionizing African fashion design and empowering the next generation of creators.",
    duration: "45:32",
    date: "Oct 1, 2025"
  },
  {
    id: 2,
    title: "The Future of Sustainable Fashion Tech in Emerging Markets",
    description: "A deep dive into how technology and sustainability intersect in fashion, with a focus on African and emerging market innovations.",
    duration: "38:15",
    date: "Sep 24, 2025"
  },
  {
    id: 3,
    title: "From Concept to Collection: AI-Powered Design Workflows",
    description: "Learn how designers are using AI tools to streamline their creative process and bring collections to market faster than ever.",
    duration: "52:20",
    date: "Sep 17, 2025"
  },
  {
    id: 4,
    title: "Building Your Fashion Brand in the Digital Age",
    description: "Practical advice on leveraging digital tools, social media, and e-commerce to build a successful fashion brand from scratch.",
    duration: "41:08",
    date: "Sep 10, 2025"
  },
  {
    id: 5,
    title: "The Rise of On-Demand Fashion Manufacturing",
    description: "Exploring how on-demand production is changing the fashion industry landscape and reducing waste in the supply chain.",
    duration: "47:45",
    date: "Sep 3, 2025"
  }
];

const Podcast = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Home</span>
        </Link>
        <div className="text-xl font-black">THE DIRTY LAUNDRI™ SERIES</div>
        <div className="w-32" />
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              The Dirty Laundri™
              <br />
              <span className="text-primary">Series</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A mini podcast series exploring the intersection of fashion, technology, and African creativity
            </p>
          </div>

          {/* Episodes List */}
          <div className="space-y-6">
            {episodes.map((episode) => (
              <Card key={episode.id} className="p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-black pr-4">{episode.title}</h3>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{episode.date}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{episode.description}</p>
                    
                    {/* Audio Player */}
                    <div className="bg-secondary rounded-lg p-4">
                      <div className="flex items-center gap-4">
                        <button className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors">
                          <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
                        </button>
                        <div className="flex-1">
                          <div className="h-2 bg-background rounded-full overflow-hidden mb-2">
                            <div className="h-full bg-primary w-0"></div>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>0:00</span>
                            <span>{episode.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Subscribe Section */}
          <div className="mt-12 text-center p-8 bg-secondary/30 rounded-lg border border-border">
            <h2 className="text-2xl font-black mb-4">Subscribe for New Episodes</h2>
            <p className="text-muted-foreground mb-6">
              Get notified when we release new episodes exploring fashion, AI, and innovation
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors">
                Apple Podcasts
              </button>
              <button className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors">
                Spotify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
