import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.svg";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expertisesOpen, setExpertisesOpen] = useState(false);
  const [mobileExpertisesOpen, setMobileExpertisesOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const phoneNumber = "+221781926969";

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/a-propos" },
    {
      label: t("nav.expertises"),
      href: "/nos-expertises",
      children: [
        { label: t("nav.mobility"), href: "/nos-expertises/mobilite-internationale" },
        { label: t("nav.business"), href: "/nos-expertises/developpement-entreprises" },
        { label: t("nav.academy"), href: "/senoptima-academy" },
      ],
    },
    { label: t("nav.projects"), href: "/nos-projets" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const isExpertisesActive =
    location.pathname.startsWith("/nos-expertises") || location.pathname === "/senoptima-academy";

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
            <ul className="hidden lg:flex items-center gap-1 lg:gap-2 xl:gap-4">
              {navLinks.map((link) =>
                link.children ? (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setExpertisesOpen(true)}
                    onMouseLeave={() => setExpertisesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-[13px] uppercase tracking-wide transition-colors duration-300 ${
                        isExpertisesActive
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-300 ${
                          expertisesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {expertisesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        >
                          <div className="bg-background border border-border rounded-2xl shadow-lg p-2 min-w-[240px]">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className={`block px-4 py-3 rounded-xl text-sm transition-colors duration-200 ${
                                  location.pathname === child.href
                                    ? "text-foreground font-semibold bg-secondary/50"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`text-[13px] uppercase tracking-wide transition-colors duration-300 ${
                        location.pathname === link.href
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Right side - CTA */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher />

              {/* CTA Button - Pill style */}
              <div className="hidden lg:block">
                <Button
                  size="sm"
                  variant="hero"
                  className="gap-1.5 text-[12px] uppercase tracking-wide h-10 px-3.5"
                  asChild
                >
                  <Link to="/contact">
                    Discuter de mon projet
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
                  {navLinks.map((link) =>
                    link.children ? (
                      <li key={link.href} className="border-b border-border">
                        <button
                          onClick={() => setMobileExpertisesOpen(!mobileExpertisesOpen)}
                          className={`w-full flex items-center justify-between py-4 text-lg transition-colors ${
                            isExpertisesActive
                              ? "text-foreground font-semibold"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              mobileExpertisesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpertisesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 pl-4 space-y-3">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    to={child.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-1 text-base transition-colors ${
                                      location.pathname === child.href
                                        ? "text-foreground font-semibold"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
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
                    )
                  )}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <Button
                    variant="hero"
                    className="w-full h-14 text-sm uppercase tracking-wider"
                    asChild
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Discuter de mon projet
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
