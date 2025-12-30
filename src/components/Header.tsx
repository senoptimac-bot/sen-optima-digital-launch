import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À Propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Nos Diagnostics", href: "#diagnostics" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2">
            <img src={logo} alt="Sen'Optima Consulting" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <Button 
            variant="cta" 
            size="sm" 
            className="hidden lg:flex gap-2"
            asChild
          >
            <a href="tel:+221781926969">
              <Phone className="w-4 h-4" />
              Réserver un appel gratuit
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 text-foreground/80 hover:text-accent hover:bg-secondary/50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-4 pt-4">
                <Button variant="cta" className="w-full gap-2" asChild>
                  <a href="tel:+221781926969">
                    <Phone className="w-4 h-4" />
                    Réserver un appel gratuit
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
