import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4">
        <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Home</span>
        </Link>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using Laundri™ ("the Platform"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
            <p>Laundri™ provides an AI-powered fashion design platform that enables users to create fashion collections, connect with suppliers, and license premium collection designs.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Subscription Plans</h2>
            <p>We offer two subscription tiers:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Annual Plan:</strong> $25 per year for full platform access</li>
              <li><strong>Trial Plan:</strong> $10 for a limited 3-month trial period</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Premium Collections License</h2>
            <p>When purchasing a Premium Collection license:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>The collection remains the intellectual property of Gravitas Industries (Pty) Ltd</li>
              <li>You receive the right to manufacture, market, and sell products under your own brand</li>
              <li>Each collection is limited to a maximum of 10 licenses</li>
              <li>Designs cannot be modified, reproduced, or shared without written permission</li>
              <li>All license fees are one-time payments and non-refundable unless otherwise stated</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. User Content</h2>
            <p>You retain ownership of any content you create using the Platform. However, you grant Laundri™ a license to use, display, and process your content for the purpose of providing the service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Prohibited Uses</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Use the Platform for any unlawful purpose</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Attempt to gain unauthorized access to any part of the Platform</li>
              <li>Share licensed collections without proper authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p>Laundri™ and Gravitas Industries (Pty) Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at legal@laundri.co.za</p>
          </section>

          <p className="text-sm pt-8 border-t">
            Last updated: October 2, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
