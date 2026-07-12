/**
 * Drives the Google Translate widget already initialized in App.tsx via the
 * standard `googtrans` cookie it reads on load, then reloads the page.
 *
 * Why not the `.goog-te-combo` select (as App.tsx's restore-on-load logic
 * does)? Verified empirically: Google's widget currently renders as a
 * link-based gadget with no such <select> in this app, so driving it that
 * way silently does nothing. The cookie is what Google's own script reads
 * on init regardless of which UI it renders, so it's the reliable lever.
 */
export type SiteLanguage = "fr" | "en";

const STORAGE_KEY = "senoptima_lang";
const COOKIE_NAME = "googtrans";

export const getSavedLanguage = (): SiteLanguage => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "en" ? "en" : "fr";
};

export const setSiteLanguage = (code: SiteLanguage) => {
  localStorage.setItem(STORAGE_KEY, code);

  if (code === "fr") {
    // Expire the cookie on both the bare host and the leading-dot domain
    // (Google sets it both ways depending on setup).
    document.cookie = `${COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    document.cookie = `${COOKIE_NAME}=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  } else {
    document.cookie = `${COOKIE_NAME}=/fr/${code}; path=/`;
  }

  window.location.reload();
};
