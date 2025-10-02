import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const categories = [
    { name: "HEADWEAR", path: "/category/headwear" },
    { name: "SHIRTS", path: "/category/shirts" },
    { name: "PANTS", path: "/category/pants" },
    { name: "JACKETS", path: "/category/jackets" },
    { name: "FOOTWEAR", path: "/category/footwear" },
    { name: "UNDERWEAR", path: "/category/underwear" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
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
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="text-2xl font-black tracking-tight">
            LAUNDRI.
          </Link>

          <Link to="/ai-design-tool">
            <Button variant="default" className="font-bold">
              Start Creating
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section with Typographic Layout */}
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              CREATE YOUR
              <br />
              <span className="text-primary">FASHION LABEL</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Design, connect with suppliers, and launch your brand with our AI-powered platform
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/ai-design-tool">
                <Button size="lg" className="font-bold text-lg px-8">
                  Launch AI Designer
                </Button>
              </Link>
              <Link to="/premium-collections">
                <Button size="lg" variant="outline" className="font-bold text-lg px-8">
                  Browse Collections
                </Button>
              </Link>
            </div>
          </div>

          {/* Typographic Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={category.path}
                className="group relative overflow-hidden rounded-lg aspect-square border border-border hover:border-primary transition-all duration-500"
              >
                <div className="absolute inset-0 bg-secondary group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
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
      <footer className="border-t border-border mt-32">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Laundri. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Powered by Gravitas Industries (Pty) Ltd
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
