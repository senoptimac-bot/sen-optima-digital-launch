import { forwardRef } from "react";
import { Link } from "react-router-dom";
const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: "Sen'Optima",
      links: [
        { label: "Présentation", href: "/a-propos" },
        { label: "Notre différence", href: "/a-propos" },
      ],
    },
    {
      title: "Explorer",
      links: [
        { label: "Expertises", href: "/#nos-expertises" },
        { label: "Academy", href: "/senoptima-academy" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Légal",
      links: [
        { label: "CGV", href: "/cgv" },
        { label: "RGPD", href: "/politique-confidentialite" },
        { label: "Mentions", href: "/mentions-legales" },
      ],
    },
  ];

  return <footer ref={ref} className="relative overflow-hidden bg-background border-t border-border">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

      <div className="container relative z-10">
        {/* Main Content */}
        <div className="py-16 md:py-24">
          {/* Bottom Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-bold text-white mb-5">{column.title}</h4>
                <nav className="flex flex-col gap-3">
                  {column.links.map(link => <Link key={link.label} to={link.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>)}
                </nav>
              </div>
            ))}

            {/* Contact Column */}
            <div>
              <h4 className="text-sm font-bold text-white mb-5">Contact</h4>
              <div className="flex flex-col gap-3">
                <a href="tel:+221781926969" className="text-sm text-white/60 hover:text-accent transition-colors duration-200">
                  Téléphone
                </a>
                <a href="https://wa.me/221781926969" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-accent transition-colors duration-200">
                  WhatsApp
                </a>
                <a href="mailto:contact@senoptimaconsulting.com" className="text-sm text-white/60 hover:text-accent transition-colors duration-200">
                  Email
                </a>
                <span className="text-sm text-white/40">Dakar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Statement */}
        <div className="py-10 border-t border-white/10 text-center">
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.1em] text-white leading-relaxed">
            Nous renforçons les profils.
            <br />
            Nous n'habillons pas les dossiers.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-xs text-white/40">
            © {currentYear} Sen'Optima Consulting.
          </p>
          <p className="text-xs text-white/25">
            Conçu avec exigence depuis Dakar.
          </p>
        </div>
      </div>
    </footer>;
});
Footer.displayName = "Footer";
export default Footer;