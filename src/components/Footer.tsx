import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();
  const navLinks = [{
    label: "Services",
    href: "/services"
  }, {
    label: "À Propos",
    href: "/a-propos"
  }, {
    label: "Solutions",
    href: "/solutions"
  }, {
    label: "Contact",
    href: "/contact"
  }];
  const legalLinks = [{
    label: "Confidentialité",
    href: "/politique-confidentialite"
  }, {
    label: "CGV",
    href: "/cgv"
  }, {
    label: "Mentions Légales",
    href: "/mentions-legales"
  }];
  return <footer ref={ref} className="relative bg-background text-foreground overflow-hidden border-t border-border">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="container relative z-10">
        {/* Main Content */}
        <div className="py-16 md:py-24">
          {/* Top Section - Big CTA */}
          <div className="mb-16 md:mb-24">
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl mb-8">
              Discutons de votre 
              <span className="text-accent"> prochaine étape</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:contact@senoptimaconsulting.com" className="group inline-flex items-center gap-3 px-6 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-all duration-300">
                <Mail className="w-5 h-5" />
                Envoyer un Email
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-bold text-foreground mb-4">Sen'Optima</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Architectes de croissance pour entrepreneurs ambitieux.
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] mb-5">
                Navigation
              </h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map(link => <Link key={link.href} to={link.href} className="group text-sm text-foreground/70 hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>)}
              </nav>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] mb-5">
                Légal
              </h4>
              <nav className="flex flex-col gap-3">
                {legalLinks.map(link => <Link key={link.href} to={link.href} className="text-sm text-foreground/50 hover:text-foreground/70 transition-colors duration-200">
                    {link.label}
                  </Link>)}
              </nav>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] mb-5">
                Contact Direct
              </h4>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/221781926969" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200">
                  +221 78 192 69 69
                </a>
                <a href="mailto:contact@senoptimaconsulting.com" className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200 break-all">
                  contact@senoptimaconsulting.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Sen'Optima Consulting. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Dakar, Sénégal
          </p>
        </div>
      </div>
    </footer>;
});
Footer.displayName = "Footer";
export default Footer;