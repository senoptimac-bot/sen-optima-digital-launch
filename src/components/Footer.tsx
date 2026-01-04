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
      className="border-t border-foreground/5 py-6"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Navigation - App style, horizontal, tiny text */}
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[11px] text-foreground/40 hover:text-accent transition-colors duration-300 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright - Minimal */}
          <p className="text-[11px] text-foreground/30 uppercase tracking-wider">
            © {currentYear} Sen'Optima Consulting
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;