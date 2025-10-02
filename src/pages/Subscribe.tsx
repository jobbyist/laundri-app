import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Subscribe = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Home</span>
        </Link>
        <div className="text-xl font-black">SUBSCRIBE</div>
        <div className="w-32" />
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Unlock Full Access
              <br />
              <span className="text-primary">to Laundri™</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Subscribe to access our AI design tools, premium collections, and supplier connections
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Trial Plan */}
            <Card className="p-8 hover:border-primary/50 transition-colors">
              <div className="mb-6">
                <div className="text-sm font-bold text-primary mb-2">LIMITED TRIAL</div>
                <h2 className="text-4xl font-black mb-2">$10</h2>
                <p className="text-muted-foreground">for 3 months</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>AI-powered fashion design assistant</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Access to design templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Supplier connection tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Basic collection browsing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Email support</span>
                </li>
              </ul>

              <Button size="lg" variant="outline" className="w-full text-lg font-bold">
                Start 3-Month Trial
              </Button>
            </Card>

            {/* Annual Plan */}
            <Card className="p-8 border-primary/50 bg-gradient-to-br from-card to-card/50 relative">
              <div className="absolute -top-4 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                BEST VALUE
              </div>
              
              <div className="mb-6">
                <div className="text-sm font-bold text-primary mb-2">FULL ACCESS</div>
                <h2 className="text-4xl font-black mb-2">$25</h2>
                <p className="text-muted-foreground">per year</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Everything in Trial plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Unlimited AI design requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Access to all premium collections</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Priority supplier connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Advanced design tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Priority support & consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Early access to new collections</span>
                </li>
              </ul>

              <Button size="lg" className="w-full text-lg font-bold">
                Subscribe Annually
              </Button>
            </Card>
          </div>

          {/* FAQ */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Can I cancel anytime?</h3>
                <p className="text-muted-foreground">Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">We accept all major credit cards, debit cards, and PayPal.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Can I upgrade from Trial to Annual?</h3>
                <p className="text-muted-foreground">Absolutely! You can upgrade at any time and receive a pro-rated credit for your remaining trial period.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Do subscriptions include premium collection licenses?</h3>
                <p className="text-muted-foreground">No, premium collection licenses are purchased separately. Your subscription gives you access to browse and preview all collections.</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              By subscribing, you agree to our{" "}
              <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>,{" "}
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, and{" "}
              <Link to="/refund-policy" className="text-primary hover:underline">Refund Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
