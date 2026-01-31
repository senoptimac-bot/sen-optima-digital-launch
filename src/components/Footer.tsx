import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Diagnostics", href: "/diagnostics" },
    { label: "À Propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Mentions Légales", href: "/mentions-legales" },
    { label: "Politique de Confidentialité", href: "/politique-confidentialite" },
    { label: "CGV", href: "/cgv" },
  ];

  return (
    <footer 
      ref={ref} 
      className="py-8 md:py-10 border-t border-gold-dark/50 bg-gold-dark"
    >
      <div className="container">
        <div className="space-y-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Navigation Links */}
            <div>
              <h3 className="text-xs text-accent/70 uppercase tracking-widest mb-4">
                Navigation
              </h3>
              <nav className="flex flex-col gap-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-gold-light/60 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xs text-accent/70 uppercase tracking-widest mb-4">
                Contact
              </h3>
              <div className="flex flex-col gap-3 text-sm text-gold-light/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Grand Mbao Cité Baobab, Dakar</span>
                </div>
                <a 
                  href="mailto:contact@senoptimaconsulting.com" 
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  <span>contact@senoptimaconsulting.com</span>
                </a>
                <a 
                  href="https://wa.me/221781926969" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>+221 78 192 69 69</span>
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-xs text-accent/70 uppercase tracking-widest mb-4">
                Légal
              </h3>
              <nav className="flex flex-col gap-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-gold-light/60 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

          </div>

          {/* Bottom Bar - Minimalist App Style */}
          <div className="pt-6 border-t border-gold-dark/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-xs text-accent/50">
                © {currentYear} Sen'Optima Consulting. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
