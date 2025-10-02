import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
    price: 795,
    priceType: "once-off (incl. tax)",
    licensesAvailable: 4,
    maxLicenses: 10,
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Home</span>
        </Link>
        <div className="text-xl font-black">PREMIUM COLLECTIONS</div>
        <div className="w-32" />
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Premium Collections
              <br />
              <span className="text-primary">by Laundri™</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              White label service where you can license professional collection designs for resale under your own brand name
            </p>
          </div>

          {/* Featured Collection - AIL NU RD */}
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card to-card/50 mb-12">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                    FEATURED COLLECTION
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-2">AIL NU RD</h2>
                  <p className="text-muted-foreground text-lg">Mustard Collection • 2025 Season</p>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-black text-primary mb-2">$795</div>
                  <div className="text-muted-foreground">once-off (incl. tax)</div>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="bg-secondary rounded-lg overflow-hidden mb-6 border border-border">
                <iframe
                  src="/collections/AIL_NU_RD_Mustard.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  className="w-full h-[600px]"
                  title="AIL NU RD Collection Preview"
                  style={{ border: "none" }}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

              {/* What's Included */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <h3 className="font-bold text-xl mb-4">What's Included:</h3>
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

                <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                    <h3 className="font-bold text-xl">License Terms</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Important:</strong> The "AIL NU RD" collection
                    remains the intellectual property of Gravitas Industries (Pty) Ltd. This license
                    grants you the right to manufacture, market, and sell products from this collection
                    under your own brand name for commercial use. The collection designs cannot be
                    modified, reproduced, or shared without written permission.
                    <br /><br />
                    <strong className="text-foreground">Exclusivity:</strong> Every collection will be licensed to a maximum of 10 individuals or entities before it becomes unavailable.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/buy-ailnurd" className="flex-1">
                  <Button size="lg" className="w-full text-lg font-bold">
                    Purchase License - 4/10 Available
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="flex-1 text-lg font-bold">
                  Request More Info
                </Button>
              </div>
            </div>
          </Card>

          {/* Other Collections Grid */}
          <h2 className="text-3xl font-black mb-8">All Collections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.slice(1).map((collection) => (
              <Card
                key={collection.id}
                className="overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => setSelectedCollection(collection)}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-black mb-2">{collection.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{collection.season}</p>
                  <div className="text-3xl font-black text-primary mb-2">${collection.price}</div>
                  <div className="text-sm text-muted-foreground mb-4">{collection.priceType}</div>
                  <div className="text-sm font-bold mb-4">
                    {collection.licensesAvailable}/{collection.maxLicenses} licenses available
                  </div>
                  <Button className="w-full">View Details</Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Need a custom collection? Contact us to discuss bespoke design services.
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
                <strong className="text-foreground">Exclusivity:</strong> Every collection will be licensed to a maximum of 10 individuals or entities before it becomes unavailable.
              </p>
            </div>

            <Button size="lg" className="w-full text-lg font-bold">
              Purchase License
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PremiumCollections;
