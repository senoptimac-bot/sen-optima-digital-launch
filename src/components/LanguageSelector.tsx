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
  const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event("change"));
  }
};

const LanguageSelector = ({ isMobile = false, onSelect }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLangCode, setCurrentLangCode] = useState(() => {
    return localStorage.getItem("senoptima_lang") || "fr";
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === currentLangCode) || languages[0];

  // Initialize Google Translate on mount
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById("google-translate-script")) return;

    // Add Google Translate initialization function
    (window as any).googleTranslateElementInit = () => {
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
        const savedLang = localStorage.getItem("senoptima_lang");
        if (savedLang && savedLang !== "fr") {
          const lang = languages.find((l) => l.code === savedLang);
          if (lang) {
            triggerGoogleTranslate(lang.googleCode);
          }
        }
      }, 1000);
    };

    // Add the script
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
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
    setCurrentLangCode(lang.code);
    localStorage.setItem("senoptima_lang", lang.code);
    
    // Trigger Google Translate
    if (lang.code === "fr") {
      // Reset to French (original)
      const frame = document.querySelector(".goog-te-banner-frame") as HTMLIFrameElement;
      if (frame) {
        const closeBtn = frame.contentDocument?.querySelector(".goog-close-link") as HTMLElement;
        closeBtn?.click();
      }
      // Alternative: reload page without translation
      const hostUrl = window.location.href;
      const cleanUrl = hostUrl.replace(/#googtrans\([^)]+\)/g, "");
      if (hostUrl !== cleanUrl) {
        window.location.href = cleanUrl;
      }
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.reload();
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