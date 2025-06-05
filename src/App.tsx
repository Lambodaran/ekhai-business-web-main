
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import CursorTrail from "@/components/ui/CursorTrail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ITSolutions from "./pages/ITSolutions";
import LegalServices from "./pages/LegalServices";
import CSREventPlanners from "./pages/CSREventPlanners";
import Recruitment from "./pages/Recruitment";
import Internships from "./pages/Internships";
import Souvenir from "./pages/Souvenir";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CursorTrail />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />}>
            <Route path="it-solutions" element={<ITSolutions />} />
            <Route path="legal" element={<LegalServices />} />
            <Route path="csr" element={<CSREventPlanners />} />
            <Route path="recruitment" element={<Recruitment />} />
            <Route path="internships" element={<Internships />} />
            <Route path="souvenir" element={<Souvenir />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
