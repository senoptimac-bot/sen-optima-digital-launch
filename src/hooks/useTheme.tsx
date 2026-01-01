import { useEffect, createContext, useContext, ReactNode } from "react";

interface ThemeContextType {
  theme: "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const root = window.document.documentElement;
    // Force dark mode only
    root.classList.remove("light");
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
