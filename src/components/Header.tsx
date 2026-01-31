import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.svg";
// ...existing code...

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  
  const phoneNumber = "+221781926969";

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.solutions"), href: "/solutions" },
    { label: t("nav.diagnostics"), href: "/diagnostics" },
    { label: t("nav.about"), href: "/a-propos" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-foreground/5" : "bg-transparent"
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Sen'Optima Consulting"
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`text-[13px] uppercase tracking-wider transition-colors duration-300 ${
                      location.pathname === link.href 
                        ? "text-foreground" 
                        : "text-foreground/40 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Language Selector - Desktop */}
              <div className="hidden lg:block">
                {/* LanguageSelector removed */}
              </div>

              {/* CTA Button - Ghost style, gold on hover */}
              <div className="hidden lg:block">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2 text-[12px] uppercase tracking-wider border-foreground/20 bg-transparent text-foreground/60 hover:border-accent hover:text-accent hover:bg-transparent transition-all duration-300"
                  asChild
                >
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="w-3.5 h-3.5" />
                    {t("header.callExpert")}
                  </a>
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-foreground/60"
                aria-label="Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-20 bottom-0 z-50 lg:hidden overflow-auto"
            >
              <div className="container py-8">
                {/* Language Selector - Mobile */}
                <div className="mb-8">
                  {/* LanguageSelector removed */}
                </div>

                {/* Nav Links */}
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-4 text-lg transition-colors border-b border-foreground/5 ${
                          location.pathname === link.href
                            ? "text-foreground"
                            : "text-foreground/50 hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <Button 
                    variant="outline"
                    className="w-full gap-2 h-14 text-sm uppercase tracking-wider border-foreground/20 text-foreground/70 hover:border-accent hover:text-accent"
                    asChild
                  >
                    <a href={`tel:${phoneNumber}`} onClick={() => setIsOpen(false)}>
                      <Phone className="w-4 h-4" />
                      {t("header.callExpert")}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;