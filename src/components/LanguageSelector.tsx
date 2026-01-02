import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

interface LanguageSelectorProps {
  isMobile?: boolean;
  onSelect?: () => void;
}

const LanguageSelector = ({ isMobile = false, onSelect }: LanguageSelectorProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
    onSelect?.();
  };

  if (isMobile) {
    return (
      <div className="grid grid-cols-4 gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-colors ${
              i18n.language === lang.code
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
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                  i18n.language === lang.code
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
    </div>
  );
};

export default LanguageSelector;