import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import AIDesignTool from "./pages/AIDesignTool";
import PremiumCollections from "./pages/PremiumCollections";
import CategoryPage from "./pages/CategoryPage";
import CheckoutAILNURD from "./pages/CheckoutAILNURD";
import Subscribe from "./pages/Subscribe";
import PaymentTrial from "./pages/PaymentTrial";
import PaymentAnnual from "./pages/PaymentAnnual";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import RegistrationFailed from "./pages/RegistrationFailed";
import Podcast from "./pages/Podcast";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import RefundPolicy from "./pages/RefundPolicy";
import Cookies from "./pages/Cookies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ai-design-tool" element={<AIDesignTool />} />
            <Route path="/premium-collections" element={<PremiumCollections />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/buy-ailnurd" element={<CheckoutAILNURD />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/payment-trial" element={<PaymentTrial />} />
            <Route path="/payment-annual" element={<PaymentAnnual />} />
            <Route path="/registration-success" element={<RegistrationSuccess />} />
            <Route path="/registration-failed" element={<RegistrationFailed />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/cookies" element={<Cookies />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
