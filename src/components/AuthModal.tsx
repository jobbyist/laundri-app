import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthSuccess: () => void;
}

export function AuthModal({ open, onOpenChange, onAuthSuccess }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<"year" | "trial" | null>(null);
  const { toast } = useToast();

  const handleSignUp = () => {
    if (!email || !password || !name || !selectedPlan) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields and select a plan.",
        variant: "destructive",
      });
      return;
    }

    // Mock authentication - in real app this would call API
    localStorage.setItem("laundri_user", JSON.stringify({ email, name, plan: selectedPlan }));
    toast({
      title: "Account Created!",
      description: `Welcome to Laundri™! You've selected the ${selectedPlan === "year" ? "$25/year (promotional price)" : "$10/30-day trial"} plan.`,
    });
    onAuthSuccess();
    onOpenChange(false);
    resetForm();
  };

  const handleLogIn = () => {
    if (!email || !password) {
      toast({
        title: "Missing Information",
        description: "Please enter your email and password.",
        variant: "destructive",
      });
      return;
    }

    // Check for admin credentials
    if (email === "admin@laundri.xyz" && password === "Laundri101$") {
      localStorage.setItem("laundri_user", JSON.stringify({ 
        email, 
        name: "Admin User",
        plan: "year",
        hasPaid: true,
        isAdmin: true
      }));
      toast({
        title: "Admin Access Granted!",
        description: "You have full access to all features.",
      });
      onAuthSuccess();
      onOpenChange(false);
      resetForm();
      return;
    }

    // Mock authentication - in real app this would call API
    localStorage.setItem("laundri_user", JSON.stringify({ email, name: "User" }));
    toast({
      title: "Welcome Back!",
      description: "You've successfully logged in.",
    });
    onAuthSuccess();
    onOpenChange(false);
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setSelectedPlan(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-[425px] max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-black">Join Laundri™</DialogTitle>
          <DialogDescription className="text-sm">
            Choose your plan and start creating with our AI-powered fashion design tools.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup" className="text-sm">Sign Up</TabsTrigger>
            <TabsTrigger value="login" className="text-sm">Log In</TabsTrigger>
          </TabsList>

          <TabsContent value="signup" className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signup-name" className="text-sm">Full Name</Label>
              <Input
                id="signup-name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email" className="text-sm">Email</Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password" className="text-sm">Password</Label>
              <Input
                id="signup-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-sm"
              />
            </div>

            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
              <Label className="text-sm sm:text-base font-semibold">Choose Your Plan</Label>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                <button
                  onClick={() => setSelectedPlan("year")}
                  className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-left ${
                    selectedPlan === "year"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-base sm:text-lg">Full Access</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Complete access to all features
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <div className="font-black text-lg sm:text-xl">$25</div>
                      <div className="text-xs sm:text-sm text-muted-foreground line-through">$49</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 sm:mt-2">1 Year Subscription</div>
                  <div className="text-xs text-primary mt-1">Promo ends Dec 1, 2025</div>
                </button>

                <button
                  onClick={() => setSelectedPlan("trial")}
                  className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-left ${
                    selectedPlan === "trial"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-base sm:text-lg">Limited Trial</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Try before you commit
                      </div>
                    </div>
                    <div className="font-black text-lg sm:text-xl">$10</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 sm:mt-2">30-Day Trial</div>
                  <div className="text-xs text-muted-foreground mt-1 italic">* No AI Design Assistant</div>
                </button>
              </div>
            </div>

            <Button onClick={handleSignUp} className="w-full text-sm sm:text-base" size="lg">
              Create Account & Subscribe
            </Button>
          </TabsContent>

          <TabsContent value="login" className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-email" className="text-sm">Email</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password" className="text-sm">Password</Label>
              <Input
                id="login-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-sm"
              />
            </div>
            <Button onClick={handleLogIn} className="w-full text-sm sm:text-base" size="lg">
              Log In
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
