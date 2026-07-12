import { useEffect, useId, useState } from "react";
import { getSavedLanguage, setSiteLanguage, SiteLanguage } from "@/lib/language";

interface LanguageSwitcherProps {
  className?: string;
}

const FrenchFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
    <rect width="60" height="40" rx="4" fill="#fff" />
    <rect width="20" height="40" rx="4" fill="#002395" />
    <rect x="20" width="20" height="40" fill="#fff" />
    <rect x="40" width="20" height="40" rx="4" fill="#ED2939" />
  </svg>
);

const EnglishFlag = ({ className }: { className?: string }) => {
  const clipId = useId();
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
      <clipPath id={clipId}>
        <rect width="60" height="40" rx="4" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect width="60" height="40" fill="#00247d" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#cf142b" strokeWidth="4" />
        <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="14" />
        <path d="M30,0 V40 M0,20 H60" stroke="#cf142b" strokeWidth="8" />
      </g>
    </svg>
  );
};

const LanguageSwitcher = ({ className = "" }: LanguageSwitcherProps) => {
  const [lang, setLang] = useState<SiteLanguage>("fr");

  useEffect(() => {
    setLang(getSavedLanguage());
  }, []);

  const handleSelect = (code: SiteLanguage) => {
    if (code === lang) return;
    setLang(code);
    setSiteLanguage(code);
  };

  return (
    <div
      className={`notranslate inline-flex items-center gap-1 ${className}`}
      role="group"
      aria-label="Choisir la langue du site"
      translate="no"
    >
      <button
        type="button"
        onClick={() => handleSelect("fr")}
        aria-pressed={lang === "fr"}
        aria-label="Français"
        title="Français"
        className={`w-4 h-3 rounded-[2px] overflow-hidden transition-all duration-200 ${
          lang === "fr" ? "ring-1 ring-accent ring-offset-1 ring-offset-background" : "opacity-40 hover:opacity-70"
        }`}
      >
        <FrenchFlag className="w-full h-full" />
      </button>
      <button
        type="button"
        onClick={() => handleSelect("en")}
        aria-pressed={lang === "en"}
        aria-label="English"
        title="English"
        className={`w-4 h-3 rounded-[2px] overflow-hidden transition-all duration-200 ${
          lang === "en" ? "ring-1 ring-accent ring-offset-1 ring-offset-background" : "opacity-40 hover:opacity-70"
        }`}
      >
        <EnglishFlag className="w-full h-full" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
