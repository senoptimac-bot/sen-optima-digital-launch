import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "fr", label: "Français", flag: "🇫🇷", googleCode: "fr" },
  { code: "en", label: "English", flag: "🇬🇧", googleCode: "en" },
  { code: "zh", label: "中文", flag: "🇨🇳", googleCode: "zh-CN" },
  { code: "ru", label: "Русский", flag: "🇷🇺", googleCode: "ru" },
];

interface LanguageSelectorProps {
  isMobile?: boolean;
  onSelect?: () => void;
}

// Google Translate helper functions
const triggerGoogleTranslate = (langCode: string) => {
  // Set cookie first
  const cookieName = "googtrans";
  const cookieValue = `/auto/${langCode}`;
  document.cookie = `${cookieName}=${cookieValue};path=/;max-age=31536000;SameSite=Lax`;

  // Update URL hash (preserve React Router hash if exists)
  const currentHash = window.location.hash;
  const googtransHash = `googtrans(${langCode})`;
  
  if (currentHash.includes("googtrans")) {
    // Replace existing googtrans
    const newHash = currentHash.replace(/googtrans\([^)]+\)/, googtransHash);
    window.location.hash = newHash;
  } else if (currentHash) {
    // Append to existing hash
    window.location.hash = `${currentHash}&${googtransHash}`;
  } else {
    // New hash
    window.location.hash = googtransHash;
  }

  // Method 1: Try to use the select element if available
  const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
  if (select) {
    if (select.value !== langCode) {
      select.value = langCode;
      const event = new Event("change", { bubbles: true });
      select.dispatchEvent(event);
    }
    // Still reload to ensure translation is applied across all routes
    setTimeout(() => {
      window.location.reload();
    }, 300);
    return;
  }

  // Method 2: Reload if select not available (will be initialized on reload)
  setTimeout(() => {
    window.location.reload();
  }, 300);
};

const LanguageSelector = ({ isMobile = false, onSelect }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Check URL hash first, then localStorage, then default to French
  const getInitialLang = () => {
    const hashMatch = window.location.hash.match(/googtrans\(([^)]+)\)/);
    if (hashMatch && hashMatch[1]) {
      // If hash exists, use it
      const langFromHash = languages.find((l) => l.googleCode === hashMatch[1]);
      if (langFromHash) {
        return langFromHash.code;
      }
    }
    // If no hash, check localStorage
    const savedLang = localStorage.getItem("senoptima_lang");
    // If saved lang is fr or empty/null, return fr (default)
    if (!savedLang || savedLang === "fr") {
      return "fr";
    }
    return savedLang;
  };

  const [currentLangCode, setCurrentLangCode] = useState(getInitialLang);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === currentLangCode) || languages[0];

  // Sync state with Google Translate on mount
  useEffect(() => {
    // Sync state with URL hash or localStorage
    const hashMatch = window.location.hash.match(/googtrans\(([^)]+)\)/);
    const savedLang = localStorage.getItem("senoptima_lang");
    
    if (hashMatch && hashMatch[1]) {
      // URL hash has priority
      const langFromHash = languages.find((l) => l.googleCode === hashMatch[1]);
      if (langFromHash && langFromHash.code !== currentLangCode) {
        setCurrentLangCode(langFromHash.code);
        localStorage.setItem("senoptima_lang", langFromHash.code);
      }
    } else if (!hashMatch) {
      // No hash means we should be in French (original language)
      if (savedLang === "fr" || !savedLang) {
        // Ensure we're set to French
        if (currentLangCode !== "fr") {
          setCurrentLangCode("fr");
          localStorage.setItem("senoptima_lang", "fr");
        }
      } else if (savedLang && savedLang !== currentLangCode) {
        // Saved lang is not French, but no hash - this shouldn't happen normally
        // but we'll respect the saved lang
        setCurrentLangCode(savedLang);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: typeof languages[0]) => {
    if (currentLangCode === lang.code) {
      setIsOpen(false);
      return;
    }

    setCurrentLangCode(lang.code);
    localStorage.setItem("senoptima_lang", lang.code);
    
    // Trigger Google Translate
    if (lang.code === "fr") {
      // Reset to French (original) - remove translation completely
      
      // 1. Clear Google Translate cookie (all possible domains)
      const domains = [
        window.location.hostname,
        `.${window.location.hostname}`,
        window.location.hostname.split('.').slice(-2).join('.'),
        `.${window.location.hostname.split('.').slice(-2).join('.')}`
      ];
      
      domains.forEach(domain => {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
      
      // 2. Try to reset Google Translate select to French if available
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (select && select.value !== "fr") {
        select.value = "fr";
        const event = new Event("change", { bubbles: true });
        select.dispatchEvent(event);
      }
      
      // 3. Clean URL hash - remove googtrans completely
      const currentHash = window.location.hash;
      let cleanHash = currentHash
        .replace(/&?googtrans\([^)]+\)/g, '') // Remove googtrans from hash
        .replace(/^#&/, '#') // Clean up leading & after #
        .replace(/^#$/, ''); // Remove empty hash
      
      // 4. Build clean URL
      const baseUrl = window.location.origin + window.location.pathname + window.location.search;
      const finalUrl = cleanHash ? `${baseUrl}${cleanHash}` : baseUrl;
      
      // 5. Clear localStorage and reload
      localStorage.setItem("senoptima_lang", "fr");
      
      // 6. Navigate to clean URL
      if (window.location.href !== finalUrl) {
        window.location.href = finalUrl;
      } else {
        // If URL is already clean, just reload
        window.location.reload();
      }
    } else {
      triggerGoogleTranslate(lang.googleCode);
    }
    
    setIsOpen(false);
    onSelect?.();
  };

  if (isMobile) {
    return (
      <div className="grid grid-cols-4 gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleSelect(lang)}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-colors ${
              currentLangCode === lang.code
                ? "bg-accent/20 text-accent"
                : "bg-white/5 text-foreground/70 hover:bg-accent/10 hover:text-accent"
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="text-[10px] font-medium uppercase tracking-wider">
              {lang.code}
            </span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg glass border border-white/5 hover:border-accent/30 transition-all group"
      >
        <Globe className="w-3.5 h-3.5 text-foreground/60 group-hover:text-accent transition-colors" />
        <span className="text-xs font-medium text-foreground/70 group-hover:text-foreground transition-colors uppercase">
          {currentLang.code}
        </span>
        <ChevronDown 
          className={`w-3 h-3 text-foreground/40 transition-transform ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 z-[100] min-w-[140px] rounded-xl glass border border-white/5 shadow-xl overflow-hidden bg-[#0d1f3a]/95 backdrop-blur-xl"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                  currentLangCode === lang.code
                    ? "bg-accent/15 text-accent"
                    : "text-foreground/70 hover:bg-accent/10 hover:text-accent"
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="text-xs font-medium">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" className="hidden" />
    </div>
  );
};

export default LanguageSelector;