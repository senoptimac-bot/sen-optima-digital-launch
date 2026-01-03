import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component
 * Automatically scrolls to top when navigating between pages
 * Also re-applies Google Translate if active
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    
    // Re-apply Google Translate after route change
    const reapplyTranslation = () => {
      const hashMatch = window.location.hash.match(/googtrans\(([^)]+)\)/);
      const savedLang = localStorage.getItem("senoptima_lang");
      
      if (hashMatch && hashMatch[1] && (window as any).google?.translate) {
        setTimeout(() => {
          const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
          if (select && select.value !== hashMatch[1]) {
            select.value = hashMatch[1];
            select.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }, 100);
      } else if (savedLang && savedLang !== "fr" && (window as any).google?.translate) {
        const langCodes: Record<string, string> = {
          "fr": "fr",
          "en": "en",
          "zh": "zh-CN",
          "ru": "ru"
        };
        const googleCode = langCodes[savedLang];
        if (googleCode) {
          setTimeout(() => {
            const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
            if (select && select.value !== googleCode) {
              select.value = googleCode;
              select.dispatchEvent(new Event("change", { bubbles: true }));
            }
          }, 100);
        }
      }
    };

    reapplyTranslation();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
