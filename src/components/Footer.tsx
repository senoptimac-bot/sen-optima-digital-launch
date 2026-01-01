import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Diagnostics", href: "/diagnostics", highlight: true },
    { label: "À Propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#061225] border-t border-white/10">
      <div className="container py-12 md:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
          
          {/* Column 1: Brand Essence */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logoFooter} 
              alt="Sen'Optima Consulting" 
              className="h-10 w-auto"
            />
            <p className="mt-3 text-sm text-foreground/50 tracking-wider">
              Clarté · Performance · Stratégie
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-accent mb-4">
              Menu
            </h4>
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm transition-colors hover:text-accent ${
                    link.highlight 
                      ? "text-white font-medium" 
                      : "text-foreground/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-accent mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-foreground/60">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-foreground/40 flex-shrink-0" />
                <span>Grand Mbao Cité Baobab, Dakar</span>
              </div>
              <a 
                href="tel:+221781926969" 
                className="flex items-center gap-2 justify-center md:justify-start hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-foreground/40 flex-shrink-0" />
                <span>+221 78 192 69 69</span>
              </a>
              <a 
                href="mailto:contact@senoptimaconsulting.com" 
                className="flex items-center gap-2 justify-center md:justify-start hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-foreground/40 flex-shrink-0" />
                <span>contact@senoptimaconsulting.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/company/senoptima"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/senoptima"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/40">
            <p>© {currentYear} Sen'Optima Consulting. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
              <Link to="/mentions-legales" className="hover:text-accent transition-colors">
                Mentions Légales
              </Link>
              <span className="hidden md:inline">|</span>
              <span>Fait avec passion au Sénégal 🇸🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
