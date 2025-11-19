import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// Query client removed - static site
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import Index from "./pages/Index";
import Dissertacao from "./pages/Dissertacao";
import Autor from "./pages/Autor";
import Videos from "./pages/Videos";
import StyleGuide from "./pages/StyleGuide";
import NotFound from "./pages/NotFound";

// Static site - no query client needed

const AppContent = () => {
  return (
    <>
      <PWAInstallPrompt />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lowmovie" element={<Dissertacao />} />
        <Route path="/dissertacao" element={<Dissertacao />} />
        <Route path="/sobre" element={<Autor />} />
        <Route path="/autor" element={<Autor />} />
        <Route path="/galeria" element={<Videos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <ErrorBoundary>
    <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <ScrollToTop />
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
  </ErrorBoundary>
);

export default App;
