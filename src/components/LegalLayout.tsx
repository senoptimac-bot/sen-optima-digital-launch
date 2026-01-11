import React from "react";
import { Link, useLocation } from "react-router-dom";

const legalLinks = [
  { label: "Mentions Légales", href: "/mentions-legales" },
  { label: "Politique de Confidentialité", href: "/politique-confidentialite" },
  { label: "CGV", href: "/cgv" },
];

const LegalLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <section className="container py-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Sidebar */}
        <aside className="md:w-64 w-full md:sticky top-24 pt-20">
          <nav className="bg-white/5 rounded-2xl p-6 mb-8 md:mb-0 border border-white/10">
            <ul className="space-y-3">
              {legalLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`block font-medium text-base transition-colors rounded px-2 py-1.5 ${location.pathname === link.href ? "bg-accent/10 text-accent" : "text-foreground/60 hover:text-accent"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </section>
  );
};

export default LegalLayout;
