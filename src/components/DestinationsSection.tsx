import { useId } from "react";
import { motion } from "framer-motion";

const FranceFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
    <rect width="60" height="40" rx="4" fill="#fff" />
    <rect width="20" height="40" rx="4" fill="#002395" />
    <rect x="20" width="20" height="40" fill="#fff" />
    <rect x="40" width="20" height="40" rx="4" fill="#ED2939" />
  </svg>
);

const UkFlag = ({ className }: { className?: string }) => {
  const clipId = useId();
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
      <clipPath id={clipId}>
        <rect width="60" height="40" rx="4" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect width="60" height="40" fill="#00247d" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#cf142b" strokeWidth="4" />
        <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="14" />
        <path d="M30,0 V40 M0,20 H60" stroke="#cf142b" strokeWidth="8" />
      </g>
    </svg>
  );
};

const BelgiumFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
    <rect width="60" height="40" rx="4" fill="#EF3340" />
    <rect width="20" height="40" rx="4" fill="#000" />
    <rect x="20" width="20" height="40" fill="#FDDA24" />
    <rect x="40" width="20" height="40" rx="4" fill="#EF3340" />
  </svg>
);

const LuxembourgFlag = ({ className }: { className?: string }) => {
  const clipId = useId();
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
      <clipPath id={clipId}>
        <rect width="60" height="40" rx="4" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect width="60" height="40" fill="#00A1DE" />
        <rect width="60" height="13.33" fill="#ED2939" />
        <rect y="13.33" width="60" height="13.33" fill="#fff" />
      </g>
    </svg>
  );
};

const NorwayFlag = ({ className }: { className?: string }) => {
  const clipId = useId();
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
      <clipPath id={clipId}>
        <rect width="60" height="40" rx="4" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect width="60" height="40" fill="#EF2B2D" />
        <rect y="16" width="60" height="8" fill="#fff" />
        <rect x="16" width="8" height="40" fill="#fff" />
        <rect y="18" width="60" height="4" fill="#002868" />
        <rect x="18" width="4" height="40" fill="#002868" />
      </g>
    </svg>
  );
};

const CanadaFlag = ({ className }: { className?: string }) => {
  const clipId = useId();
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
      <clipPath id={clipId}>
        <rect width="60" height="40" rx="4" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect width="60" height="40" fill="#fff" />
        <rect width="15" height="40" fill="#FF0000" />
        <rect x="45" width="15" height="40" fill="#FF0000" />
        <path
          d="M30 8 L32 13 L37 11 L35 16 L40 17 L36 20 L38 25 L33 23 L33 28 L30 25 L27 28 L27 23 L22 25 L24 20 L20 17 L25 16 L23 11 L28 13 Z"
          fill="#FF0000"
        />
      </g>
    </svg>
  );
};

const destinations = [
  { name: "France", Flag: FranceFlag },
  { name: "Belgique", Flag: BelgiumFlag },
  { name: "Luxembourg", Flag: LuxembourgFlag },
  { name: "Norvège", Flag: NorwayFlag },
  { name: "Royaume-Uni", Flag: UkFlag },
  { name: "Canada", Flag: CanadaFlag },
];

const DestinationsSection = () => {
  return (
    <section className="py-section-lg relative bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <span className="badge-accent mb-6 inline-block">Nos Destinations</span>
          <h2 className="text-headline text-foreground mb-6">
            Des projets vers l'espace Schengen, <span className="italic text-accent">le Canada</span> et le Royaume-Uni.
          </h2>
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            Chaque pays a ses propres exigences. Nous préparons un dossier adapté à la
            destination visée — pas un dossier générique.
          </p>
        </motion.div>

      </div>

      <div className="relative w-full overflow-hidden border-y border-border py-6">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center shrink-0">
              {destinations.map(({ name, Flag }) => (
                <div key={name} className="flex items-center gap-3 mx-8">
                  <Flag className="w-10 h-7 rounded-[3px] border border-border shrink-0" />
                  <span className="text-body text-foreground whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <p className="text-sm text-muted-foreground/70 mt-8 max-w-2xl">
          Liste non exhaustive — l'espace Schengen compte 29 pays. Discutons de votre
          destination précise.
        </p>
      </div>
    </section>
  );
};

export default DestinationsSection;
