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
      className="py-5 border-t border-white/5"
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Navigation - Horizontal dock style */}
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[11px] text-white/40 hover:text-accent transition-colors duration-200 uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[11px] text-white/25 uppercase tracking-widest">
            © {currentYear} Sen'Optima
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;