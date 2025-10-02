import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";

interface Collection {
  id: string;
  name: string;
  season: string;
  price: number;
  priceType: string;
  licensesAvailable: number;
  maxLicenses: number;
  pdfUrl?: string;
  description: string;
}

const collections: Collection[] = [
  {
    id: "ail-nu-rd",
    name: "AIL NU RD",
    season: "Mustard Collection • 2025 Season",
    price: 1500,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 1,
    maxLicenses: 1,
    pdfUrl: "/collections/AIL_NU_RD_Mustard.pdf",
    description: "A bold mustard-themed collection featuring innovative streetwear designs with African-inspired patterns."
  },
  {
    id: "urban-pulse",
    name: "URBAN PULSE",
    season: "Metropolitan Collection • 2025 Season",
    price: 695,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 7,
    maxLicenses: 10,
    description: "Modern urban aesthetics meet functional design in this versatile city-ready collection."
  },
  {
    id: "desert-bloom",
    name: "DESERT BLOOM",
    season: "Earth Tones Collection • 2025 Season",
    price: 850,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 2,
    maxLicenses: 10,
    description: "Warm earth tones and flowing silhouettes inspired by desert landscapes and natural beauty."
  },
  {
    id: "neon-nights",
    name: "NEON NIGHTS",
    season: "Cyber Collection • 2025 Season",
    price: 995,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 5,
    maxLicenses: 10,
    description: "Futuristic designs with vibrant neon accents perfect for the modern digital age."
  },
  {
    id: "ocean-breeze",
    name: "OCEAN BREEZE",
    season: "Coastal Collection • 2025 Season",
    price: 745,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 8,
    maxLicenses: 10,
    description: "Light, breathable fabrics in ocean-inspired colors for effortless summer style."
  },
  {
    id: "midnight-luxe",
    name: "MIDNIGHT LUXE",
    season: "Premium Evening Collection • 2025 Season",
    price: 1195,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 3,
    maxLicenses: 10,
    description: "Sophisticated evening wear with luxurious fabrics and elegant silhouettes."
  },
  {
    id: "safari-chic",
    name: "SAFARI CHIC",
    season: "Adventure Collection • 2025 Season",
    price: 825,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 6,
    maxLicenses: 10,
    description: "Safari-inspired pieces combining functionality with contemporary African design elements."
  },
  {
    id: "tech-wear",
    name: "TECH WEAR",
    season: "Performance Collection • 2025 Season",
    price: 895,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 9,
    maxLicenses: 10,
    description: "High-performance fabrics meet cutting-edge design for the tech-savvy generation."
  },
  {
    id: "vintage-revival",
    name: "VINTAGE REVIVAL",
    season: "Heritage Collection • 2025 Season",
    price: 775,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 4,
    maxLicenses: 10,
    description: "Classic vintage aesthetics reimagined with modern sustainable materials."
  },
  {
    id: "monochrome-minimal",
    name: "MONOCHROME MINIMAL",
    season: "Essential Collection • 2025 Season",
    price: 645,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 10,
    maxLicenses: 10,
    description: "Timeless black and white pieces with clean lines and versatile styling options."
  },
  {
    id: "tropical-fusion",
    name: "TROPICAL FUSION",
    season: "Resort Collection • 2025 Season",
    price: 795,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 5,
    maxLicenses: 10,
    description: "Vibrant tropical prints and lightweight fabrics perfect for vacation wardrobes."
  },
  {
    id: "arctic-edge",
    name: "ARCTIC EDGE",
    season: "Winter Collection • 2025 Season",
    price: 925,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 3,
    maxLicenses: 10,
    description: "Insulated designs with sleek silhouettes for style in cold climates."
  },
  {
    id: "bohemian-soul",
    name: "BOHEMIAN SOUL",
    season: "Free Spirit Collection • 2025 Season",
    price: 725,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 7,
    maxLicenses: 10,
    description: "Flowing fabrics and eclectic patterns celebrating artistic freedom and individuality."
  },
  {
    id: "corporate-refined",
    name: "CORPORATE REFINED",
    season: "Professional Collection • 2025 Season",
    price: 875,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 6,
    maxLicenses: 10,
    description: "Modern workwear that balances professionalism with contemporary style."
  },
  {
    id: "athleisure-pro",
    name: "ATHLEISURE PRO",
    season: "Active Collection • 2025 Season",
    price: 795,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 8,
    maxLicenses: 10,
    description: "Performance meets fashion in this versatile athletic-inspired collection."
  },
  {
    id: "heritage-craft",
    name: "HERITAGE CRAFT",
    season: "Artisan Collection • 2025 Season",
    price: 1095,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 2,
    maxLicenses: 10,
    description: "Handcrafted details and traditional techniques meet contemporary design aesthetics."
  }
];

const PremiumCollections = () => {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const { isAuthenticated, hasPaid } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isAuthenticated || !hasPaid) {
      toast({
        title: "Access Denied",
        description: "Please sign up and subscribe to access Premium Collections.",
        variant: "destructive",
      });
      navigate("/subscribe");
    }
  }, [isAuthenticated, hasPaid, navigate, toast]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="border-b border-border px-4 md:px-6 py-4 flex items-center justify-between flex-wrap gap-2">
        <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors flex-shrink-0">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold text-sm md:text-base">Back to Home</span>
        </Link>
        <div className="text-lg md:text-xl font-black">PREMIUM COLLECTIONS</div>
        <div className="w-20 md:w-32 flex-shrink-0" />
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-full">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12 md:mb-16 px-2">
            <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 tracking-tight">
              Premium Collections
              <br />
              <span className="text-primary">by Laundri™</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              White label service where you can license professional collection designs for resale under your own brand name
            </p>
          </div>

          {/* Featured Collection - AIL NU RD */}
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card to-card/50 mb-8 md:mb-12">
            <div className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-4">
                <div className="w-full md:w-auto">
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                    PREMIER COLLECTION
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-2">AIL NU RD</h2>
                  <p className="text-muted-foreground text-base md:text-lg">Mustard Collection • 2025 Season</p>
                </div>
                <div className="text-left md:text-right w-full md:w-auto">
                  <div className="text-4xl md:text-5xl font-black text-primary mb-2">$1,500</div>
                  <div className="text-muted-foreground text-sm md:text-base">once-off (incl. tax)</div>
                </div>
              </div>

              {/* PDF Viewer - Expandable */}
              <div className="bg-secondary rounded-lg overflow-hidden mb-6 border border-border">
                <iframe
                  src="/collections/AIL_NU_RD_Mustard.pdf#view=FitH&toolbar=1&navpanes=1"
                  className="w-full h-[400px] md:h-[600px]"
                  title="AIL NU RD Collection Preview"
                  style={{ border: "none", pointerEvents: "auto" }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  allow="fullscreen"
                />
              </div>

              {/* What's Included */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg md:text-xl mb-4">What's Included:</h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">All necessary design formats and files</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">Complete supplier information and specifications</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">Free e-commerce website setup</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">Custom domain name included</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">Professional email address setup</span>
                  </div>
                </div>

                <div className="bg-secondary/50 p-4 md:p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                    <h3 className="font-bold text-lg md:text-xl">License Terms</h3>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Important:</strong> The "AIL NU RD" collection
                    remains the intellectual property of Gravitas Industries (Pty) Ltd. This license
                    grants you the right to manufacture, market, and sell products from this collection
                    under your own brand name for commercial use. The collection designs cannot be
                    modified, reproduced, or shared without written permission.
                    <br /><br />
                    <strong className="text-foreground">Exclusivity:</strong> This collection will be licensed in perpetuity for single use to a predetermined number of buyers before it becomes unavailable. Use of any designs featured on our platform without consent constitutes theft of our intellectual property and will result in immediate legal action.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/buy-ailnurd" className="flex-1">
                  <Button size="lg" className="w-full text-base md:text-lg font-bold btn-glow">
                    Purchase License - 1/1 Available
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="flex-1 text-base md:text-lg font-bold btn-glow">
                  Request More Info
                </Button>
              </div>
            </div>
          </Card>

          {/* Other Collections Grid */}
          <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 px-2">All Collections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {collections.slice(1).map((collection) => (
              <Card
                key={collection.id}
                className="overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => setSelectedCollection(collection)}
              >
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-black mb-2">{collection.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4">{collection.season}</p>
                  <div className="text-2xl md:text-3xl font-black text-primary mb-2">${collection.price}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mb-4">{collection.priceType}</div>
                  <div className="text-xs md:text-sm font-bold mb-4">
                    {collection.licensesAvailable}/{collection.maxLicenses} licenses available
                  </div>
                  <Button className="w-full btn-glow">View Details</Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 md:mt-12 text-center px-2">
            <p className="text-sm md:text-base text-muted-foreground">
              Need a custom collection? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> to discuss bespoke design services.
            </p>
          </div>
        </div>
      </div>

      {/* Collection Dialog */}
      <Dialog open={!!selectedCollection} onOpenChange={() => setSelectedCollection(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black">{selectedCollection?.name}</DialogTitle>
            <DialogDescription className="text-base">
              {selectedCollection?.season}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-muted-foreground">{selectedCollection?.description}</p>
            
            <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
              <div>
                <div className="text-3xl font-black text-primary">${selectedCollection?.price}</div>
                <div className="text-sm text-muted-foreground">{selectedCollection?.priceType}</div>
              </div>
              <div className="text-right">
                <div className="font-bold">
                  {selectedCollection?.licensesAvailable}/{selectedCollection?.maxLicenses} licenses available
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold">What's Included:</h4>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>All necessary design formats and files</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Complete supplier information and specifications</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Free e-commerce website setup</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Custom domain name included</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Professional email address setup</span>
              </div>
            </div>

            <div className="p-4 bg-secondary/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Important:</strong> This collection remains the intellectual property of Gravitas Industries (Pty) Ltd. 
                This license grants you the right to manufacture, market, and sell products from this collection under your own brand name for commercial use.
                <br /><br />
                <strong className="text-foreground">Exclusivity:</strong> This collection will be licensed in perpetuity for single use to a predetermined number of buyers before it becomes unavailable. Use of any designs featured on our platform without consent constitutes theft of our intellectual property and will result in immediate legal action.
              </p>
            </div>

            <Button size="lg" className="w-full text-lg font-bold btn-glow">
              Purchase License
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PremiumCollections;
