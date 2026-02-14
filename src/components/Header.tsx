import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.svg";

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
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - larger for better visibility */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Sen'Optima Consulting"
                className="h-10 sm:h-11 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Center */}
            <ul className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`text-[13px] uppercase tracking-wider transition-colors duration-300 ${
                      location.pathname === link.href 
                        ? "text-foreground font-semibold" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side - CTA */}
            <div className="flex items-center gap-4">
              {/* CTA Button - Pill style */}
              <div className="hidden lg:block">
                <Button 
                  size="sm" 
                  className="gap-2 text-[12px] uppercase tracking-wider rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 h-10 px-5"
                  asChild
                >
                  <Link to="/diagnostic">
                    Commencer
                    <span className="w-5 h-5 rounded-full border border-accent flex items-center justify-center ml-1">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-foreground"
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
              className="fixed inset-0 bg-background/98 backdrop-blur-xl z-40 lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 top-20 bottom-0 z-50 lg:hidden overflow-auto"
            >
              <div className="container py-8">
                {/* Nav Links */}
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-4 text-lg transition-colors border-b border-border ${
                          location.pathname === link.href
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
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
                    className="w-full gap-2 h-14 text-sm uppercase tracking-wider rounded-full bg-foreground text-background hover:bg-foreground/90"
                    asChild
                  >
                    <Link to="/diagnostic" onClick={() => setIsOpen(false)}>
                      Lancer mon Audit
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Phone CTA */}
                <div className="mt-4">
                  <Button 
                    variant="outline"
                    className="w-full gap-2 h-14 text-sm uppercase tracking-wider rounded-full border-border"
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
