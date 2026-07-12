import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        heading: ["League Spartan", "Open Sans", "system-ui", "sans-serif"],
        subheading: ["Glacial Indifference", "Open Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        /* Hero Title — 64px desktop / 48px tablet / 34px mobile */
        "hero": ["clamp(2.125rem, 6vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "700" }],
        /* Section Title — 48px desktop / 40px tablet / 30px mobile */
        "section-title": ["clamp(1.875rem, 4.5vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.03em", fontWeight: "700" }],
        /* Card Title — 30px desktop / 26px tablet / 22px mobile */
        "card-title": ["clamp(1.375rem, 2.5vw, 1.875rem)", { lineHeight: "1.25", letterSpacing: "-0.02em", fontWeight: "700" }],
        /* Body Large — 22px desktop / 20px tablet / 18px mobile */
        "body-lg": ["clamp(1.125rem, 1.3vw + 0.9rem, 1.375rem)", { lineHeight: "1.7", fontWeight: "400" }],
        /* Body — 18px desktop / 17px tablet / 16px mobile */
        "body": ["clamp(1rem, 0.4vw + 0.9rem, 1.125rem)", { lineHeight: "1.7", fontWeight: "400" }],
        /* Small Text — 16px desktop / 15px tablet / 14px mobile */
        "small": ["clamp(0.875rem, 0.3vw + 0.8rem, 1rem)", { lineHeight: "1.5", fontWeight: "400" }],
        /* Caption — 14px desktop / 13px tablet / 12px mobile */
        "caption": ["clamp(0.75rem, 0.2vw + 0.7rem, 0.875rem)", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "500" }],

        /* Alias temporaires vers les nouveaux tokens — évite de casser les usages existants pendant la migration progressive (voir plan design system) */
        "display": ["clamp(2.125rem, 6vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "700" }],
        "headline": ["clamp(1.875rem, 4.5vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.03em", fontWeight: "700" }],
        "title": ["clamp(1.375rem, 2.5vw, 1.875rem)", { lineHeight: "1.25", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          dark: "hsl(var(--gold-dark))",
        },
        problem: {
          DEFAULT: "hsl(var(--problem))",
          foreground: "hsl(var(--problem-foreground))",
        },
        solution: {
          DEFAULT: "hsl(var(--solution))",
          foreground: "hsl(var(--solution-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        "cta-success": {
          DEFAULT: "hsl(var(--cta-success))",
          foreground: "hsl(var(--cta-success-foreground))",
        },
        whatsapp: {
          DEFAULT: "hsl(var(--whatsapp))",
          foreground: "hsl(var(--whatsapp-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "pill": "9999px",
      },
      spacing: {
        "section": "clamp(5rem, 10vh, 8rem)",
        "section-lg": "clamp(7rem, 14vh, 12rem)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.98)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;