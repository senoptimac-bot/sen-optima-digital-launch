import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import logoHeader from "@/assets/logo-header.png";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      ref={ref} 
      className="py-16 md:py-20 bg-[hsl(0_0%_98%)] border-t border-[hsl(0_0%_93.5%)]"
    >
      <div className="container max-w-5xl">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-left">
          
          {/* COLUMN 1: Brand Identity */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img 
                src={logoHeader} 
                alt="Sen'Optima" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-brand-navy-light leading-relaxed max-w-xs">
              Architectes de croissance pour entrepreneurs ambitieux. 
              Nous transformons le chaos en systèmes rentables.
            </p>
          </div>

          {/* COLUMN 2: Navigation */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold text-brand-navy uppercase tracking-[0.15em]">
              Explorer
            </h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/services" 
                className="group text-sm text-brand-navy-light hover:text-brand-navy transition-colors duration-300 flex items-center gap-1"
              >
                Nos Services
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <Link 
                to="/a-propos" 
                className="group text-sm text-brand-navy-light hover:text-brand-navy transition-colors duration-300 flex items-center gap-1"
              >
                Notre Approche
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <Link 
                to="/solutions" 
                className="group text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-300 flex items-center gap-1"
              >
                Lancer mon Diagnostic
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </nav>
          </div>

          {/* COLUMN 3: Contact */}
          <div className="space-y-5">
            <h4 className="text-xs font-semibold text-brand-navy uppercase tracking-[0.15em]">
              Contact
            </h4>
            <nav className="flex flex-col gap-3">
              <a 
                href="https://wa.me/221781926969" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group text-sm text-brand-navy-light hover:text-brand-navy transition-colors duration-300 flex items-center gap-1"
              >
                WhatsApp Pro
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              <a 
                href="mailto:contact@senoptimaconsulting.com" 
                className="group text-sm text-brand-navy-light hover:text-brand-navy transition-colors duration-300 flex items-center gap-1"
              >
                Email Support
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </nav>
          </div>
        </div>

        {/* Separator - Very subtle gold accent */}
        <Separator className="my-12 bg-[hsl(0_0%_90%)]" />

        {/* Bottom Bar: Copyright + Legal */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-brand-navy-light/60">
            © {currentYear} Sen'Optima Consulting. Tous droits réservés.
          </p>
          
          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link 
              to="/politique-confidentialite" 
              className="text-xs text-brand-navy-light/50 hover:text-brand-navy transition-colors duration-300"
            >
              Confidentialité
            </Link>
            <Link 
              to="/cgv" 
              className="text-xs text-brand-navy-light/50 hover:text-brand-navy transition-colors duration-300"
            >
              CGV
            </Link>
            <Link 
              to="/mentions-legales" 
              className="text-xs text-brand-navy-light/50 hover:text-brand-navy transition-colors duration-300"
            >
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
