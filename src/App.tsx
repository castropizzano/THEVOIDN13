import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import ScrollToTop from "@/components/ScrollToTop";
import { usePageView } from "@/hooks/useAnalytics";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { TypographyControlPanel } from "@/components/TypographyControlPanel";
import { ContentEditorPanel } from "@/components/ContentEditorPanel";
import { ContentEditorProvider } from "@/hooks/useContentEditor";
import Index from "./pages/Index";
import Dissertacao from "./pages/Dissertacao";
import Autor from "./pages/Autor";
import Videos from "./pages/Videos";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminPageEditor from "./pages/AdminPageEditor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  usePageView(); // Track page views automatically
  
  return (
    <>
      <PWAInstallPrompt />
      <TypographyControlPanel />
      <ContentEditorPanel />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
        <Route path="/lowmovie" element={<ProtectedRoute><Dissertacao /></ProtectedRoute>} />
        <Route path="/dissertacao" element={<ProtectedRoute><Dissertacao /></ProtectedRoute>} />
        <Route path="/sobre" element={<ProtectedRoute><Autor /></ProtectedRoute>} />
        <Route path="/autor" element={<ProtectedRoute><Autor /></ProtectedRoute>} />
        <Route path="/galeria" element={<ProtectedRoute><Videos /></ProtectedRoute>} />
        <Route path="/videos" element={<ProtectedRoute><Videos /></ProtectedRoute>} />
        <Route path="/auth" element={<ProtectedRoute><Auth /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/pages" element={<ProtectedRoute><AdminPageEditor /></ProtectedRoute>} />
        <Route path="*" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
      </Routes>
    </>
  );
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ContentEditorProvider>
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
        </ContentEditorProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
