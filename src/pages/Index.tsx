import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Preloader from "@/components/Preloader";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/hooks/use-auth";
import { useTheme } from "next-themes";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, isAuthenticated, logout, updateUser } = useAuth();
  const { theme } = useTheme();

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
                <div className="border-t border-border pt-4 mt-4 flex flex-col gap-3">
                  <ThemeToggle />
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
              src={theme === "dark" ? "/laundriwhite.svg" : "/laundriblack.svg"}
              alt="Laundri Logo" 
              className="h-8 md:h-10 w-auto"
              style={{ maxWidth: '150px' }}
            />
          </Link>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
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
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter group-hover:text-primary transition-colors duration-300 text-center">
                    {category.name}
                  </h2>
                </div>
              </Link>
            ))}
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
