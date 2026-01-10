import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BestVPNs from "./pages/BestVPNs";
import BestAntivirus from "./pages/BestAntivirus";
import BestPasswordManagers from "./pages/BestPasswordManagers";
import Reviews from "./pages/Reviews";
import Comparisons from "./pages/Comparisons";
import Guides from "./pages/Guides";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/best-vpns" element={<BestVPNs />} />
          <Route path="/best-antivirus" element={<BestAntivirus />} />
          <Route path="/best-password-managers" element={<BestPasswordManagers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/comparisons" element={<Comparisons />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
