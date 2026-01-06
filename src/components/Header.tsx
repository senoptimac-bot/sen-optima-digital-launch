import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.svg";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  
  const phoneNumber = "+221781926969";

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "/services" },
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
                <LanguageSelector />
              </div>

              {/* CTA Button - Ghost style, gold on hover */}
              <div className="hidden lg:block">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2 text-[12px] uppercase tracking-wider border-foreground/20 bg-transparent text-foreground/60 hover:border-accent hover:text-accent hover:bg-transparent transition-all duration-300 h-11"
                  asChild
                >
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="w-3.5 h-3.5" />
                    {t("header.callExpert")}
                  </a>
                </Button>
              </div>

              {/* Mobile Menu Toggle - Burger minimaliste */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-3 text-foreground/70 hover:text-foreground transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu - Fullscreen Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full flex flex-col pt-24 px-6"
            >
              {/* Language Selector - Mobile */}
              <div className="mb-10">
                <LanguageSelector isMobile onSelect={() => setIsOpen(false)} />
              </div>

              {/* Nav Links - Large touch targets */}
              <nav className="flex-1">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-4 text-2xl font-display font-semibold transition-colors ${
                          location.pathname === link.href
                            ? "text-foreground"
                            : "text-foreground/50 hover:text-foreground active:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA - Touch-friendly */}
              <motion.div 
                className="pb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  variant="outline"
                  className="w-full gap-3 h-14 text-base uppercase tracking-wider border-foreground/20 text-foreground/70 hover:border-accent hover:text-accent active:scale-[0.98] transition-all"
                  asChild
                >
                  <a href={`tel:${phoneNumber}`} onClick={() => setIsOpen(false)}>
                    <Phone className="w-5 h-5" />
                    {t("header.callExpert")}
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;