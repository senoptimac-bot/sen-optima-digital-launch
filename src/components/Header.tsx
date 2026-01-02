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

  // Lock body scroll when mobile menu is open
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Sen'Optima Consulting"
                  className="h-10 md:h-12 w-auto"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`relative text-sm font-medium transition-colors duration-200 group ${
                      location.pathname === link.href 
                        ? "text-accent" 
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Language Selector - Desktop */}
              <div className="hidden lg:block">
                <LanguageSelector />
              </div>

              {/* CTA Button - Desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="hidden lg:block"
              >
                <Button variant="cta" size="sm" className="gap-2" asChild>
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="w-4 h-4" />
                    {t("header.callExpert")}
                  </a>
                </Button>
              </motion.div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl glass text-foreground"
                aria-label="Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Bottom Sheet Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - no blur on mobile for performance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[rgba(7,20,40,0.9)] z-40 lg:hidden"
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
            >
              <div className="bg-[#0d1f3a] border-t border-accent/30 rounded-t-3xl p-6 pb-10">
                {/* Handle */}
                <div className="w-12 h-1.5 bg-foreground/20 rounded-full mx-auto mb-6" />

                {/* Language Selector - Mobile */}
                <div className="mb-6">
                  <LanguageSelector isMobile onSelect={() => setIsOpen(false)} />
                </div>

                {/* Nav Links */}
                <ul className="space-y-2 mb-6">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                          location.pathname === link.href
                            ? "bg-accent/10 text-accent"
                            : "text-foreground hover:bg-accent/10 hover:text-accent"
                        }`}
                      >
                        <span className="font-medium">{link.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="cta" 
                  className="w-full gap-2 h-14 text-base"
                  asChild
                >
                  <a href={`tel:${phoneNumber}`} onClick={() => setIsOpen(false)}>
                    <Phone className="w-5 h-5" />
                    {t("header.callExpert")}
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
};

export default Header;