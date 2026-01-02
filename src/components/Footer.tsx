import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigationLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Diagnostics", href: "/diagnostics" },
    { label: "À Propos", href: "/a-propos" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <footer ref={ref} className="bg-[#050E22]">
      <div className="container py-8 md:py-10">
        {/* Newsletter Section - App-like input */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-8">
          <span className="text-sm text-white/70 font-medium whitespace-nowrap">
            Rejoindre le cercle Sen'Optima
          </span>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center gap-2 py-2 px-4 rounded-lg bg-accent/10 border border-accent/30"
              >
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                  <Check className="w-3 h-3 text-accent-foreground" />
                </div>
                <span className="text-accent text-sm font-medium">
                  Merci de votre confiance !
                </span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
              >
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-10 px-4 bg-[#0A1628] border border-accent/40 text-white placeholder:text-white/40 focus:border-accent focus:ring-0 rounded-lg text-sm min-w-[240px]"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  size="sm"
                  className="h-10 px-5 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg"
                >
                  {isLoading ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                    />
                  ) : (
                    <span className="flex items-center gap-1.5">
                      Rejoindre
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation - Single line app style */}
        <nav className="flex flex-wrap items-center gap-x-1 gap-y-2 mb-6 text-left">
          {navigationLinks.map((link, index) => (
            <span key={link.href} className="flex items-center">
              <Link
                to={link.href}
                className="text-xs text-white/60 hover:text-accent transition-colors font-light"
              >
                {link.label}
              </Link>
              {index < navigationLinks.length - 1 && (
                <span className="text-white/30 mx-2 text-xs">•</span>
              )}
            </span>
          ))}
        </nav>

        {/* Minimal Signature */}
        <p className="text-xs text-white/40 font-light text-left">
          © 2026 Sen'Optima Consulting. L'excellence par la structure.
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;