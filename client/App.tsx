import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Placeholder from "./pages/Placeholder";
import Approche from "./pages/Approche";
import Formations from "./pages/Formations";
import Demonstrations from "./pages/Demonstrations";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/notre-approche" element={<Approche />} />
          <Route path="/nos-formations" element={<Formations />} />
          <Route
            path="/demonstrations"
            element={<Placeholder title="Démonstrations" description="Intégration possible d'iframes Articulate. Demandez une démo personnalisée." />}
          />
          <Route
            path="/contact"
            element={<Placeholder title="Contact / Demande de démo" description="Un membre de l'équipe vous recontacte rapidement." />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
