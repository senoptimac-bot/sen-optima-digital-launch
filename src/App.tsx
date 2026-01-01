import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Layout from "./components/Layout";
import Preloader from "./components/Preloader";
import { SoundProvider } from "./components/SoundContext";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import DiagnosticsPage from "./pages/DiagnosticsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has already visited (session storage)
    const visited = sessionStorage.getItem('senoptima_visited');
    if (visited) {
      setIsLoading(false);
      setHasVisited(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('senoptima_visited', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SoundProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <AnimatePresence mode="wait">
              {isLoading && !hasVisited && (
                <Preloader onComplete={handlePreloaderComplete} />
              )}
            </AnimatePresence>
            <BrowserRouter>
              <ScrollToTop />
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/diagnostics" element={<DiagnosticsPage />} />
                  <Route path="/a-propos" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </TooltipProvider>
        </SoundProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
