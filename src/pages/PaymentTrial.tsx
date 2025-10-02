import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PaymentTrial = () => {
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing - redirect to success page
    // In a real app, this would integrate with a payment gateway
    window.location.href = "/registration-success?plan=trial";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <Link to="/subscribe" className="flex items-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Plans</span>
        </Link>
        <div className="text-xl font-black">CHECKOUT</div>
        <div className="w-32" />
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Complete Your Purchase
            </h1>
            <p className="text-xl text-muted-foreground">
              30-Day Limited Trial - $10
            </p>
          </div>

          {/* Payment Form */}
          <Card className="p-8">
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Payment Information
                </h2>
                
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input
                      id="cvc"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Cardholder Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex justify-between text-lg">
                  <span>30-Day Limited Trial</span>
                  <span className="font-bold">$10.00</span>
                </div>
                <div className="flex justify-between text-2xl font-black">
                  <span>Total</span>
                  <span className="text-primary">$10.00</span>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg font-bold">
                Pay $10.00
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By completing this purchase, you agree to our{" "}
                <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </form>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> AI Fashion Design Assistant is not included in the trial plan.
              Upgrade to the annual plan to access this feature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTrial;
