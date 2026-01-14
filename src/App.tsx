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
import useAudioUnlock from "./hooks/useAudioUnlock";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs.config";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import DiagnosticsPage from "./pages/DiagnosticsPage";
import SuccessPage from "./pages/SuccessPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import PolitiqueConfidentialitePage from "./pages/PolitiqueConfidentialitePage";
import CGVPage from "./pages/CGVPage";
import FormulaireDiagnosticPage from "./pages/FormulaireDiagnosticPage";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);
  
  // Unlock audio on first user interaction (mobile browsers)
  useAudioUnlock();

  useEffect(() => {
    // Initialiser EmailJS avec la clé publique
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    
    // Check if user has already visited (session storage)
    const visited = sessionStorage.getItem('senoptima_visited');
    if (visited) {
      setIsLoading(false);
      setHasVisited(true);
    }

    // Initialize Google Translate globally
    const initGoogleTranslate = () => {
      // Check if script already exists
      if (document.getElementById("google-translate-script") || (window as any).google?.translate) {
        return;
      }

      // Initialize function
      (window as any).googleTranslateElementInit = () => {
        try {
          new (window as any).google.translate.TranslateElement(
            {
              pageLanguage: "fr",
              includedLanguages: "fr,en,zh-CN,ru",
              autoDisplay: false,
              layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "google_translate_element"
          );

          // Apply saved language after initialization
          setTimeout(() => {
            const hashMatch = window.location.hash.match(/googtrans\(([^)]+)\)/);
            const savedLang = localStorage.getItem("senoptima_lang");
            
            // Check if we're returning to French (no hash and saved lang is fr or empty)
            const isReturningToFrench = !hashMatch && (!savedLang || savedLang === "fr");
            
            if (isReturningToFrench) {
              // Ensure Google Translate is set to French (original)
              const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
              if (select && select.value !== "fr") {
                select.value = "fr";
                const event = new Event("change", { bubbles: true });
                select.dispatchEvent(event);
              }
              return;
            }
            
            if (hashMatch && hashMatch[1]) {
              // Language from URL hash
              const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
              if (select && select.value !== hashMatch[1]) {
                select.value = hashMatch[1];
                select.dispatchEvent(new Event("change", { bubbles: true }));
              }
            } else if (savedLang && savedLang !== "fr") {
              // Language from localStorage (only if not French)
              const langCodes: Record<string, string> = {
                "fr": "fr",
                "en": "en",
                "zh": "zh-CN",
                "ru": "ru"
              };
              const googleCode = langCodes[savedLang];
              if (googleCode && googleCode !== "fr") {
                const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
                if (select && select.value !== googleCode) {
                  select.value = googleCode;
                  select.dispatchEvent(new Event("change", { bubbles: true }));
                  // Update URL hash
                  window.location.hash = `googtrans(${googleCode})`;
                }
              }
            }
          }, 500);
        } catch (error) {
          console.error("Google Translate initialization error:", error);
        }
      };

      // Add hidden translate element if it doesn't exist
      if (!document.getElementById("google_translate_element")) {
        const translateDiv = document.createElement("div");
        translateDiv.id = "google_translate_element";
        translateDiv.style.display = "none";
        document.body.appendChild(translateDiv);
      }

      // Add the script
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => {
        console.error("Failed to load Google Translate script");
      };
      document.body.appendChild(script);
    };

    initGoogleTranslate();
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
                  <Route path="/formulaire-diagnostic" element={<FormulaireDiagnosticPage />} />
                  <Route path="/merci" element={<SuccessPage />} />
                  <Route path="/a-propos" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
                  <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
                  <Route path="/cgv" element={<CGVPage />} />
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
