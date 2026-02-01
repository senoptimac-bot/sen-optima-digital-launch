import type { Config } from "tailwindcss";

// Semantic colors for visual signage

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
        "display": ["clamp(2.5rem, 7vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "700" }],
        "headline": ["clamp(1.75rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.03em", fontWeight: "700" }],
        "title": ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.25", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body": ["1rem", { lineHeight: "1.7", fontWeight: "400" }],
        "caption": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "500" }],
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
        "brand-navy": {
          DEFAULT: "hsl(var(--brand-navy))",
          light: "hsl(var(--brand-navy-light))",
          dark: "hsl(var(--brand-navy-dark))",
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
        // Semantic signage colors - International standards
        "semantic-danger": "hsl(0 72% 56%)",
        "semantic-warning": "hsl(25 80% 49%)",
        "semantic-success": "hsl(152 57% 43%)",
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
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
        "pill": "9999px",
      },
      spacing: {
        /* Luxury = Space. Double margins between sections */
        "section": "clamp(6rem, 12vh, 10rem)",
        "section-lg": "clamp(8rem, 16vh, 14rem)",
        "section-xl": "clamp(10rem, 20vh, 18rem)",
      },
      boxShadow: {
        /* Apple-esque subtle shadows */
        "card": "0 10px 30px -10px rgba(0,0,0,0.03)",
        "card-hover": "0 20px 40px -15px rgba(0,0,0,0.08)",
        "premium": "0 15px 45px -15px rgba(0,0,0,0.05)",
        "gold": "0 10px 35px -10px hsl(43 75% 52% / 0.15)",
      },
      transitionTimingFunction: {
        /* Smooth Bézier curves - 0.4s feel */
        "luxury": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "500": "500ms",
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