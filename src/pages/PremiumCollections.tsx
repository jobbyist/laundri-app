import { Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PremiumCollections = () => {
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

          {/* Featured Collection Card */}
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card to-card/50">
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
                  <div className="text-muted-foreground">per year</div>
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
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 text-lg font-bold">
                  License This Collection
                </Button>
                <Button size="lg" variant="outline" className="flex-1 text-lg font-bold">
                  Request More Info
                </Button>
              </div>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Need a custom collection? Contact us to discuss bespoke design services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCollections;
