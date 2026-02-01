import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import logoFooter from "@/assets/logo-footer.svg";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer ref={ref} className="py-10 md:py-12 bg-foreground text-background">
      <div className="container">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
          
          {/* COLUMN 1: Identity & Mission */}
          <div className="space-y-3">
            <p className="text-sm text-background/70 leading-relaxed max-w-xs">
              Architectes de croissance pour entrepreneurs ambitieux. 
              Nous transformons le chaos en systèmes rentables.
            </p>
          </div>

          {/* COLUMN 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-medium text-background/50 uppercase tracking-[0.2em]">
              Explorer
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-sm text-background/80 hover:text-accent transition-colors duration-200">
                Nos Services
              </Link>
              <Link to="/a-propos" className="text-sm text-background/80 hover:text-accent transition-colors duration-200">
                Notre Approche
              </Link>
              <Link to="/solutions" className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-200">
                Lancer mon Diagnostic
              </Link>
            </nav>
          </div>

          {/* COLUMN 3: Contact & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-medium text-background/50 uppercase tracking-[0.2em]">
              Nous Parler
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="https://wa.me/221781926969" target="_blank" rel="noopener noreferrer" className="text-sm text-background/80 hover:text-accent transition-colors duration-200">
                WhatsApp Pro
              </a>
              <a href="mailto:contact@senoptimaconsulting.com" className="text-sm text-background/80 hover:text-accent transition-colors duration-200">
                Email Support
              </a>
            </nav>
            
            {/* Legal Links */}
            <div className="pt-3 flex flex-wrap gap-x-4 gap-y-1">
              <Link to="/politique-confidentialite" className="text-xs text-background/40 hover:text-background/60 transition-colors duration-200">
                Confidentialité
              </Link>
              <Link to="/cgv" className="text-xs text-background/40 hover:text-background/60 transition-colors duration-200">
                CGV
              </Link>
              <Link to="/mentions-legales" className="text-xs text-background/40 hover:text-background/60 transition-colors duration-200">
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8 bg-background/10" />

        {/* Copyright */}
        <div className="text-left">
          <p className="text-xs text-background/40">
            © {currentYear} Sen'Optima Consulting. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
