import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Diagnostics", href: "/diagnostics" },
    { label: "À Propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer 
      ref={ref} 
      className="py-6 border-t border-white/5"
    >
      <div className="container">
        {/* Mobile: Stack vertically, centered */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Navigation - Horizontal dock style */}
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[11px] text-white/40 hover:text-accent active:text-accent transition-colors duration-200 uppercase tracking-widest py-2 min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[11px] text-white/25 uppercase tracking-widest text-center">
            © {currentYear} Sen'Optima
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;