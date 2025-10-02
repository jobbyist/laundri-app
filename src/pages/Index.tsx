import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, LogIn, LogOut, Facebook, Instagram, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Preloader from "@/components/Preloader";
import { AuthModal } from "@/components/AuthModal";
import { AudioPlayer } from "@/components/AudioPlayer";
import { FloatingIcons } from "@/components/FloatingIcons";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, isAuthenticated, logout, updateUser } = useAuth();
  const { toast } = useToast();

  const categories = [
    { name: "HEADWEAR", path: "/category/headwear" },
    { name: "SHIRTS", path: "/category/shirts" },
    { name: "PANTS", path: "/category/pants" },
    { name: "JACKETS", path: "/category/jackets" },
    { name: "FOOTWEAR", path: "/category/footwear" },
    { name: "UNDERWEAR", path: "/category/underwear" },
  ];

  const handleProtectedAction = (e: React.MouseEvent, path: string) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setShowAuthModal(true);
    } else if (!user?.hasPaid) {
      e.preventDefault();
      toast({
        title: "Subscription Required",
        description: "Please complete your subscription to access this feature.",
        variant: "destructive",
      });
      // Optionally redirect to subscribe page
      setTimeout(() => {
        window.location.href = "/subscribe";
      }, 1500);
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (showPreloader) {
    return <Preloader onComplete={() => setShowPreloader(false)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="flex-shrink-0">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <nav className="flex flex-col gap-6 mt-8">
                <Link to="/" className="text-2xl font-bold hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/ai-design-tool" className="text-2xl font-bold hover:text-primary transition-colors">
                  AI Design Tool
                </Link>
                <Link to="/premium-collections" className="text-2xl font-bold hover:text-primary transition-colors">
                  Premium Collections
                </Link>
                <div className="border-t border-border pt-4 mt-4">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      className="block py-2 text-lg hover:text-primary transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-border pt-4 mt-4">
                  <Link to="/contact" className="block py-2 text-lg hover:text-primary transition-colors">
                    Contact
                  </Link>
                  <Link to="/terms" className="block py-2 text-lg hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                  <Link to="/privacy" className="block py-2 text-lg hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/refund-policy" className="block py-2 text-lg hover:text-primary transition-colors">
                    Refund Policy
                  </Link>
                  <Link to="/cookies" className="block py-2 text-lg hover:text-primary transition-colors">
                    Cookie Settings
                  </Link>
                </div>
                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex gap-4 mb-4">
                    <a href="https://facebook.com/laundri.africa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="https://instagram.com/laundri.africa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="https://tiktok.com/@laundri.africa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Music className="h-6 w-6" />
                    </a>
                    <a href="https://www.google.com/share.google?q=oyg5uqiFku2rjtYHj" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="border-t border-border pt-4 mt-4 flex flex-col gap-3">
                  {isAuthenticated ? (
                    <Button onClick={handleLogout} variant="outline" className="w-full justify-start">
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out
                    </Button>
                  ) : (
                    <Button onClick={() => setShowAuthModal(true)} variant="default" className="w-full justify-start">
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign Up / Log In
                    </Button>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center flex-shrink min-w-0">
            <img 
              src="/laundriblack.svg"
              alt="Laundri Logo" 
              className="h-8 md:h-10 w-auto"
              style={{ maxWidth: '150px' }}
            />
          </Link>

          <div className="flex items-center gap-2 flex-shrink-0">
            {isAuthenticated ? (
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Welcome, {user?.name}</span>
                <Button onClick={handleLogout} variant="ghost" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Log Out
                </Button>
              </div>
            ) : (
              <Button onClick={() => setShowAuthModal(true)} variant="ghost" size="sm" className="hidden md:flex">
                <LogIn className="h-4 w-4 mr-2" />
                Sign Up / Log In
              </Button>
            )}
            <Link 
              to="/ai-design-tool" 
              onClick={(e) => handleProtectedAction(e, "/ai-design-tool")}
              className="flex-shrink-0"
            >
              <Button variant="default" className="font-bold btn-glow text-sm md:text-base px-3 md:px-4">
                Start Creating
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Typographic Layout */}
      <main className="pt-20 overflow-x-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-full">
          <div className="text-center mb-12 md:mb-20 px-2">
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
              WHERE CREATIVITY
              <br />
              <span className="text-primary">COMES CLEAN</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-2">
              At Laundri™, we believe in the power of creativity to disrupt, inspire, and shape the culture of tomorrow. Our mission is to be the laundry for ideas—scrubbing out the mundane, rinsing the ordinary, and pressing forward with bold, fresh perspectives.
            </p>
            <div className="flex gap-3 md:gap-4 justify-center flex-wrap px-2">
              <Link 
                to="/ai-design-tool"
                onClick={(e) => handleProtectedAction(e, "/ai-design-tool")}
              >
                <Button size="lg" className="font-bold text-base md:text-lg px-6 md:px-8 btn-glow">
                  Launch AI Designer
                </Button>
              </Link>
              <Link 
                to="/premium-collections"
                onClick={(e) => handleProtectedAction(e, "/premium-collections")}
              >
                <Button size="lg" variant="outline" className="font-bold text-base md:text-lg px-6 md:px-8 btn-glow">
                  Browse Collections
                </Button>
              </Link>
            </div>
          </div>

          {/* Typographic Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-32">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={category.path}
                onClick={(e) => handleProtectedAction(e, category.path)}
                className="group relative overflow-hidden rounded-lg aspect-square border border-border hover:border-primary transition-all duration-500"
              >
                <div className="absolute inset-0 bg-secondary group-hover:scale-105 transition-transform duration-500" />
                <FloatingIcons categoryName={category.name} />
                <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter group-hover:text-primary transition-colors duration-300 text-center">
                    {category.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>

          {/* Podcast Section */}
          <div className="mt-16 md:mt-32 px-2">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                  The Dirty Laundri™ Series
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Stream the latest episodes in our mini podcast-style series featuring bite-sized, deep dives into all aspects of the fashion industry in Africa and how Laundri™ fits into the mix.
                </p>
              </div>

              <div className="space-y-6">
                {/* Episode 1 */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl md:text-2xl font-black mb-2">
                    Episode 1: Artisan vs. Algorithm: Can AI Authentically Co-create with African Textiles?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Exploring the intersection of traditional African textile craftsmanship and artificial intelligence.
                  </p>
                  <AudioPlayer title="Episode 1" episodeNumber={1} />
                </div>

                {/* Episode 2 */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl md:text-2xl font-black mb-2">
                    Episode 2: From Lagos to the Metaverse: Hacking the Global Market with AI
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    How African fashion entrepreneurs are leveraging AI to break into global markets and the metaverse.
                  </p>
                  <AudioPlayer title="Episode 2" episodeNumber={2} />
                </div>

                {/* Episode 3 */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl md:text-2xl font-black mb-2">
                    Episode 3: Digital Colonialism or Cultural Renaissance? The Fight for Africa's Digital IP
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A critical examination of intellectual property rights and cultural preservation in the digital age.
                  </p>
                  <AudioPlayer title="Episode 3" episodeNumber={3} />
                </div>
              </div>

              <div className="text-center mt-8">
                <Link to="/podcast">
                  <Button variant="outline" size="lg" className="font-bold">
                    View All Episodes
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-2">
            <div className="text-center">
              <div className="text-4xl font-black mb-4 text-primary">01</div>
              <h3 className="text-2xl font-bold mb-2">AI-Powered Design</h3>
              <p className="text-muted-foreground">
                Create unique designs with our intelligent fashion design assistant
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-4 text-primary">02</div>
              <h3 className="text-2xl font-bold mb-2">On-Demand Production</h3>
              <p className="text-muted-foreground">
                Connect with Printful and AliExpress for seamless manufacturing
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-4 text-primary">03</div>
              <h3 className="text-2xl font-bold mb-2">Premium Collections</h3>
              <p className="text-muted-foreground">
                License professional designs and launch your brand instantly
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 md:mt-32">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-full">
          {/* Social Media Icons - Desktop Only */}
          <div className="hidden md:flex justify-center gap-6 mb-6">
            <a href="https://facebook.com/laundri.africa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/laundri.africa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://tiktok.com/@laundri.africa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Music className="h-6 w-6" />
            </a>
            <a href="https://www.google.com/share.google?q=oyg5uqiFku2rjtYHj" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </a>
          </div>
          
          {/* Legal Links - Desktop Only */}
          <div className="hidden md:flex justify-center gap-4 mb-6 text-sm">
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Refund Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Settings
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-sm text-muted-foreground">
              © 2025 Laundri. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Powered by Gravitas Industries (Pty) Ltd
            </div>
          </div>
        </div>
      </footer>

      <AuthModal 
        open={showAuthModal} 
        onOpenChange={setShowAuthModal}
        onAuthSuccess={updateUser}
      />
    </div>
  );
};

export default Index;
