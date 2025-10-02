import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Cookies = () => {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  const handleSave = () => {
    toast({
      title: "Preferences Saved",
      description: "Your cookie preferences have been updated.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4">
        <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Home</span>
        </Link>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black mb-8">Cookie Settings</h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">About Cookies</h2>
            <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our Platform.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Manage Your Preferences</h2>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <Label htmlFor="necessary" className="text-lg font-bold text-foreground">
                    Necessary Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Required for the Platform to function properly. These cannot be disabled.
                  </p>
                </div>
                <Switch
                  id="necessary"
                  checked={preferences.necessary}
                  disabled
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <Label htmlFor="analytics" className="text-lg font-bold text-foreground">
                    Analytics Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Help us understand how visitors interact with our Platform by collecting and reporting information anonymously.
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, analytics: checked })
                  }
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <Label htmlFor="marketing" className="text-lg font-bold text-foreground">
                    Marketing Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, marketing: checked })
                  }
                />
              </div>
            </div>

            <Button onClick={handleSave} size="lg" className="w-full">
              Save Preferences
            </Button>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookie Details</h2>
            
            <h3 className="text-xl font-bold text-foreground mb-2">Necessary Cookies</h3>
            <p className="mb-4">These cookies are essential for the Platform to function:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>session_id:</strong> Maintains your login session</li>
              <li><strong>csrf_token:</strong> Protects against cross-site request forgery attacks</li>
              <li><strong>preferences:</strong> Stores your cookie consent choices</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-2">Analytics Cookies</h3>
            <p className="mb-4">These cookies help us improve the Platform:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>_ga:</strong> Google Analytics - distinguishes users (expires after 2 years)</li>
              <li><strong>_gid:</strong> Google Analytics - distinguishes users (expires after 24 hours)</li>
              <li><strong>_gat:</strong> Google Analytics - throttles request rate (expires after 1 minute)</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-2">Marketing Cookies</h3>
            <p className="mb-4">These cookies may be set by our advertising partners:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Used to build a profile of your interests and show relevant ads</li>
              <li>May track you across other websites</li>
              <li>Can be disabled without affecting Platform functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Managing Cookies in Your Browser</h2>
            <p className="mb-4">You can also manage cookies through your browser settings:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Questions?</h2>
            <p>If you have questions about our use of cookies, please contact us at privacy@laundri.co.za</p>
          </section>

          <p className="text-sm pt-8 border-t">
            Last updated: October 2, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
