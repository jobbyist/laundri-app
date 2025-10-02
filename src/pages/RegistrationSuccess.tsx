import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";

const RegistrationSuccess = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");
  const { updateUser } = useAuth();

  useEffect(() => {
    // Mark user as having paid in localStorage
    const storedUser = localStorage.getItem("laundri_user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        user.hasPaid = true;
        user.plan = plan || user.plan;
        localStorage.setItem("laundri_user", JSON.stringify(user));
        updateUser();
      } catch (error) {
        console.error("Error updating user payment status:", error);
      }
    }
  }, [plan, updateUser]);

  const planName = plan === "trial" ? "30-Day Limited Trial" : "Full Access (1 Year)";
  const planPrice = plan === "trial" ? "$10" : "$25";

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-24 w-24 text-primary" />
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Payment Successful!
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Welcome to Laundri™! Your subscription is now active.
        </p>

        <div className="bg-muted rounded-lg p-6 mb-8">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Plan:</span>
              <span className="text-lg">{planName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Amount Paid:</span>
              <span className="text-lg font-bold text-primary">{planPrice}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Status:</span>
              <span className="text-lg text-primary font-bold">Active ✓</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground">
            You now have full access to {plan === "trial" ? "basic features" : "all features including the AI Fashion Design Assistant"}.
            {plan === "trial" && " Upgrade to annual plan anytime to unlock AI features!"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/">
              <Button size="lg" className="w-full sm:w-auto font-bold">
                Go to Homepage
              </Button>
            </Link>
            <Link to="/ai-design-tool">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold" disabled={plan === "trial"}>
                {plan === "trial" ? "AI Tool (Upgrade Required)" : "Start Designing"}
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            A confirmation email has been sent to your registered email address.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RegistrationSuccess;
