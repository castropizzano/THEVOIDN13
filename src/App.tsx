import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";
import { usePageView } from "@/hooks/useAnalytics";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import Index from "./pages/Index";
import Dissertacao from "./pages/Dissertacao";
import Autor from "./pages/Autor";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  usePageView(); // Track page views automatically
  
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
