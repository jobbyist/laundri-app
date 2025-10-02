import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";

const CategoryPage = () => {
  const { category } = useParams();
  const categoryName = category?.toUpperCase() || "CATEGORY";
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isAuthenticated, hasPaid, updateUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (isAuthenticated && !hasPaid) {
      toast({
        title: "Subscription Required",
        description: "Please complete your subscription to access category pages.",
        variant: "destructive",
      });
      navigate("/subscribe");
    }
  }, [isAuthenticated, hasPaid, navigate, toast]);

  const handleProtectedAction = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setShowAuthModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Home</span>
        </Link>
        <div className="text-xl font-black">{categoryName}</div>
        <div className="w-32" />
      </header>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">{categoryName}</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Design custom {category} with our AI-powered tool. Choose from pre-made fabrics and
            templates, then connect with on-demand suppliers.
          </p>
          <Link to="/ai-design-tool" onClick={handleProtectedAction}>
            <Button size="lg" className="text-lg font-bold px-12">
              Start Designing {categoryName}
            </Button>
          </Link>
        </div>
      </div>

      <AuthModal 
        open={showAuthModal} 
        onOpenChange={setShowAuthModal}
        onAuthSuccess={updateUser}
      />
    </div>
  );
};

export default CategoryPage;
