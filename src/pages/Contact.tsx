import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get reCAPTCHA response
    const recaptchaResponse = (window as any).grecaptcha?.getResponse();
    
    if (!recaptchaResponse) {
      toast({
        title: "Verification Required",
        description: "Please complete the reCAPTCHA verification.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // In a real application, this would submit to a backend that:
    // 1. Verifies the reCAPTCHA token
    // 2. Sends the email to support@laundri.africa
    // For now, we'll simulate a successful submission
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset reCAPTCHA
      (window as any).grecaptcha?.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Have a question or need custom design work? We're here to help!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6">
            <h2 className="text-2xl font-black mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Custom Design Request"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project or inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none"
                />
              </div>

              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                All inquiries are sent to support@laundri.africa and we respond within 24 hours.
              </p>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-black mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a 
                      href="mailto:support@laundri.africa" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      support@laundri.africa
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground">Available via email</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground">Gravitas Industries (Pty) Ltd</p>
                    <p className="text-muted-foreground">South Africa</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-secondary/50">
              <h3 className="text-xl font-bold mb-3">Custom Design Services</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Looking for custom design work? We offer:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom fashion collection design</li>
                <li>• Brand identity and logo creation</li>
                <li>• Product mockups and visualization</li>
                <li>• Supplier sourcing and manufacturing setup</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Contact us to discuss your project requirements and get a quote.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
