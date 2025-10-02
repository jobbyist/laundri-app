import { Link } from "react-router-dom";
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const CheckoutAILNURD = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Submitted",
      description: "Thank you! We'll contact you shortly to complete your license purchase.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <Link to="/premium-collections" className="flex items-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Collections</span>
        </Link>
        <div className="text-xl font-black">CHECKOUT</div>
        <div className="w-32" />
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-8 text-center">
            Purchase License
            <br />
            <span className="text-primary">AIL NU RD Collection</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card className="p-6 h-fit">
              <h2 className="text-2xl font-black mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <div className="font-bold">AIL NU RD Collection</div>
                    <div className="text-sm text-muted-foreground">Mustard Collection • 2025 Season</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">All design formats and files</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Supplier information and specs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Free e-commerce website setup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Custom domain name</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">Professional email setup</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span>License Fee</span>
                    <span className="font-bold">$795.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Tax</span>
                    <span>Included</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center text-2xl font-black">
                    <span>Total</span>
                    <span className="text-primary">$795.00</span>
                  </div>
                </div>

                <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                  <div className="flex items-start gap-3 mb-2">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-bold">4/10 Licenses Remaining</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    This collection is limited to 10 licenses. Secure yours now!
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="p-6">
              <h2 className="text-2xl font-black mb-4">Your Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required placeholder="john@example.com" />
                </div>
                <div>
                  <Label htmlFor="company">Company/Brand Name</Label>
                  <Input id="company" required placeholder="Your Brand Name" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" required placeholder="United States" />
                </div>
                
                <div className="bg-secondary/50 p-4 rounded-lg text-sm">
                  <p className="text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>,{" "}
                    <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, and{" "}
                    <Link to="/refund-policy" className="text-primary hover:underline">Refund Policy</Link>.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full text-lg font-bold">
                  Submit License Request
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  We'll contact you within 24 hours to process your payment and deliver your license.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutAILNURD;
