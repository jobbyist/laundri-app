import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4">
        <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Home</span>
        </Link>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black mb-8">Refund Policy</h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Subscription Refunds</h2>
            <h3 className="text-xl font-bold text-foreground mb-2">Annual Plan ($25/year)</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Full refund available within 14 days of initial purchase if no premium content has been accessed</li>
              <li>Pro-rated refunds available for cancellations after 14 days, calculated based on unused months</li>
              <li>Refunds processed within 5-10 business days</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-2 mt-4">Trial Plan ($10/3 months)</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Full refund available within 7 days of purchase if no premium content has been accessed</li>
              <li>No pro-rated refunds after the initial 7-day period</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Premium Collection License Refunds</h2>
            <p>Premium Collection licenses are generally non-refundable once the design files have been delivered. However, we may offer refunds in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>If the collection files are corrupted or incomplete, we will provide corrected files or issue a full refund</li>
              <li>If we cannot deliver the promised e-commerce setup within 30 days, you may request a partial refund ($200)</li>
              <li>Refund requests must be submitted within 30 days of purchase</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Non-Refundable Items</h2>
            <p>The following are non-refundable:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Custom design services or consultations</li>
              <li>Premium collection licenses after files have been accessed/downloaded</li>
              <li>Add-on services already rendered</li>
              <li>Third-party supplier fees</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. How to Request a Refund</h2>
            <p>To request a refund:</p>
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>Email us at refunds@laundri.co.za with your order number and reason for the request</li>
              <li>Include any relevant documentation (screenshots, error messages, etc.)</li>
              <li>Allow 2-3 business days for our team to review your request</li>
              <li>If approved, refunds will be processed to your original payment method within 5-10 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Subscription Cancellation</h2>
            <p>You may cancel your subscription at any time:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Access your account settings and select "Cancel Subscription"</li>
              <li>Your access will continue until the end of your current billing period</li>
              <li>No partial refunds for the current billing period unless within the refund window</li>
              <li>All your data and designs will be retained for 90 days after cancellation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Chargebacks</h2>
            <p>If you initiate a chargeback with your bank or credit card company:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Your account will be immediately suspended</li>
              <li>Access to all premium content and licenses will be revoked</li>
              <li>Please contact us first to resolve any billing issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Exceptional Circumstances</h2>
            <p>In cases of technical issues, service outages, or other exceptional circumstances that prevent you from using the Platform, we may offer:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Service credits</li>
              <li>Extended subscription period</li>
              <li>Full or partial refunds at our discretion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Information</h2>
            <p>For refund inquiries or disputes, contact us at:</p>
            <ul className="list-none mt-2 space-y-1">
              <li>Email: refunds@laundri.co.za</li>
              <li>Response time: 2-3 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications to Policy</h2>
            <p>We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting. Continued use of the Platform after changes constitutes acceptance of the updated policy.</p>
          </section>

          <p className="text-sm pt-8 border-t">
            Last updated: October 2, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
