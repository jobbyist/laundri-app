import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const RegistrationFailed = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <XCircle className="h-24 w-24 text-destructive" />
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Payment Failed
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          We couldn't process your payment. Please try again.
        </p>

        <div className="bg-muted rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold mb-4">Common Issues:</h2>
          <ul className="text-left space-y-2 text-muted-foreground">
            <li>• Insufficient funds in your account</li>
            <li>• Incorrect card details or expired card</li>
            <li>• Card declined by your bank</li>
            <li>• Network connection issues</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground">
            If you continue to experience issues, please contact your bank or try a different payment method.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/subscribe">
              <Button size="lg" className="w-full sm:w-auto font-bold">
                Try Again
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Need help? Contact our support team at{" "}
            <a href="mailto:support@laundri.co.za" className="text-primary hover:underline">
              support@laundri.co.za
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RegistrationFailed;
