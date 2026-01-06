import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

// Visual Components for each pillar
const DeviceIllustration = () => (
  <div className="relative w-full h-32 flex items-center justify-center">
    {/* Browser Window */}
    <motion.div 
      className="absolute w-24 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg border border-primary/30 backdrop-blur-sm"
      initial={{ x: -10, y: -5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex gap-1 p-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
      </div>
      <div className="px-2 space-y-1">
        <div className="h-1 w-full bg-primary/30 rounded" />
        <div className="h-1 w-3/4 bg-primary/20 rounded" />
        <div className="h-1 w-1/2 bg-primary/20 rounded" />
      </div>
    </motion.div>
    {/* Smartphone */}
    <motion.div 
      className="absolute w-12 h-20 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl border-2 border-accent/40 backdrop-blur-sm"
      initial={{ x: 20, y: 10 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-4 h-0.5 bg-accent/50 rounded-full mx-auto mt-1" />
      <div className="p-1.5 mt-1 space-y-1">
        <div className="h-1 w-full bg-accent/40 rounded" />
        <div className="h-1 w-2/3 bg-accent/30 rounded" />
        <div className="grid grid-cols-2 gap-0.5 mt-2">
          <div className="h-2 w-full bg-accent/20 rounded-sm" />
          <div className="h-2 w-full bg-accent/20 rounded-sm" />
        </div>
      </div>
    </motion.div>
  </div>
);

const FlowchartIllustration = () => (
  <div className="relative w-full h-32 flex items-center justify-center">
    <svg viewBox="0 0 120 80" className="w-full h-full">
      {/* Nodes */}
      <motion.rect 
        x="10" y="30" width="20" height="20" rx="4"
        className="fill-primary/30 stroke-primary/60"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      />
      <motion.rect 
        x="50" y="10" width="20" height="20" rx="4"
        className="fill-accent/30 stroke-accent/60"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
      <motion.rect 
        x="50" y="50" width="20" height="20" rx="4"
        className="fill-accent/30 stroke-accent/60"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
      <motion.rect 
        x="90" y="30" width="20" height="20" rx="4"
        className="fill-green-500/30 stroke-green-500/60"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      />
      {/* Connections */}
      <motion.path 
        d="M30 40 L50 20" 
        className="stroke-primary/40"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      />
      <motion.path 
        d="M30 40 L50 60" 
        className="stroke-primary/40"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      />
      <motion.path 
        d="M70 20 L90 40" 
        className="stroke-accent/40"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      />
      <motion.path 
        d="M70 60 L90 40" 
        className="stroke-accent/40"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      />
      {/* Checkmark in final node */}
      <motion.path 
        d="M95 40 L98 43 L105 36"
        className="stroke-green-400"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      />
    </svg>
  </div>
);

const FunnelIllustration = () => (
  <div className="relative w-full h-32 flex items-center justify-center">
    <svg viewBox="0 0 100 80" className="w-full h-full">
      {/* Funnel shape */}
      <motion.path
        d="M15 5 L85 5 L65 35 L65 70 L35 70 L35 35 Z"
        className="fill-primary/10 stroke-primary/40"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      {/* Funnel levels */}
      <motion.line x1="20" y1="15" x2="80" y2="15" className="stroke-accent/40" strokeWidth="1" strokeDasharray="3 2" />
      <motion.line x1="30" y1="25" x2="70" y2="25" className="stroke-accent/40" strokeWidth="1" strokeDasharray="3 2" />
      {/* Dots entering */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.circle
          key={i}
          cx={25 + i * 15}
          cy="0"
          r="3"
          className="fill-accent/60"
          initial={{ cy: -5, opacity: 0 }}
          animate={{ cy: 10, opacity: [0, 1, 1, 0] }}
          transition={{ delay: i * 0.2, duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}
      {/* Euro sign coming out */}
      <motion.text
        x="50"
        y="78"
        textAnchor="middle"
        className="fill-green-400 text-xs font-bold"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 78 }}
        transition={{ delay: 0.5 }}
      >
        €€€
      </motion.text>
    </svg>
  </div>
);

const GrowthChartIllustration = () => (
  <div className="relative w-full h-32 flex items-center justify-center p-4">
    <svg viewBox="0 0 100 60" className="w-full h-full">
      {/* Grid lines */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="10" y1={15 + i * 15} x2="90" y2={15 + i * 15} className="stroke-muted/20" strokeWidth="0.5" />
      ))}
      {/* Growth curve */}
      <motion.path
        d="M10 55 Q25 50 35 45 T55 30 T75 15 T90 5"
        className="stroke-accent"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Gradient fill under curve */}
      <motion.path
        d="M10 55 Q25 50 35 45 T55 30 T75 15 T90 5 L90 55 L10 55 Z"
        className="fill-accent/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
      {/* Data points */}
      {[[10, 55], [35, 45], [55, 30], [75, 15], [90, 5]].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="4"
          className="fill-accent stroke-background"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 * i + 0.5 }}
        />
      ))}
    </svg>
  </div>
);

// Before/After Illustrations
const ChaosIllustration = () => (
  <svg viewBox="0 0 120 80" className="w-full h-24">
    {/* Tangled lines */}
    <motion.path
      d="M10 40 Q30 10 50 50 T90 20 Q100 60 110 30"
      className="stroke-red-400/60"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M20 20 Q40 70 60 30 T100 50"
      className="stroke-orange-400/60"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.path
      d="M5 60 Q35 20 55 60 T95 40"
      className="stroke-yellow-400/60"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
    />
    {/* Question marks */}
    <motion.text x="30" y="35" className="fill-red-400/80 text-lg font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>?</motion.text>
    <motion.text x="70" y="55" className="fill-orange-400/80 text-lg font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>?</motion.text>
    <motion.text x="90" y="25" className="fill-yellow-400/80 text-lg font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>?</motion.text>
  </svg>
);

const OrderIllustration = () => (
  <svg viewBox="0 0 120 80" className="w-full h-24">
    {/* Organized grid */}
    {[0, 1, 2].map((row) =>
      [0, 1, 2, 3].map((col) => (
        <motion.rect
          key={`${row}-${col}`}
          x={15 + col * 28}
          y={10 + row * 22}
          width="22"
          height="18"
          rx="3"
          className="fill-accent/20 stroke-accent/50"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: row * 0.1 + col * 0.05 }}
        />
      ))
    )}
    {/* Checkmarks in boxes */}
    {[[26, 22], [54, 44], [82, 22], [26, 66]].map(([x, y], i) => (
      <motion.path
        key={i}
        d={`M${x - 4} ${y} L${x - 1} ${y + 3} L${x + 4} ${y - 3}`}
        className="stroke-green-400"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8 + i * 0.15 }}
      />
    ))}
  </svg>
);

const ServicesPage = () => {
  const pillars = [
    {
      title: "Sites Web, Apps & Logiciels Métiers",
      subtitle: "La Technique",
      message: "Du site vitrine à l'application de gestion complexe. Nous créons les outils technologiques sur mesure pour votre métier.",
      illustration: DeviceIllustration,
    },
    {
      title: "Digitalisation & Organisation Interne",
      subtitle: "Le Back-Office",
      message: "Le chaos interne tue la croissance. Nous installons vos CRM, automatisons vos tâches répétitives et structurons vos process.",
      illustration: FlowchartIllustration,
      highlight: true,
    },
    {
      title: "Stratégie d'Acquisition",
      subtitle: "Le Carburant",
      message: "Attirer les bons prospects, au bon moment. Un système prédictif pour ne plus dépendre du hasard.",
      illustration: FunnelIllustration,
    },
    {
      title: "Audit & Direction",
      subtitle: "La Boussole",
      message: "Avoir les outils ne suffit pas. Il faut savoir où aller. Nous définissons la feuille de route claire de votre succès.",
      illustration: GrowthChartIllustration,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-20 pt-32 px-5 md:px-0">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-caption text-white/40 uppercase tracking-widest mb-6 block">
              L'Écosystème de Croissance
            </span>
            <h1 className="font-display text-display text-white mb-6">
              Le Digital n'est plus une option.
              <br />
              <span className="text-accent">C'est votre survie.</span>
            </h1>
            <p className="text-body md:text-body-lg text-white/50 max-w-2xl mx-auto">
              Dans un marché saturé, ceux qui bricolent disparaissent. 
              Ceux qui se structurent dominent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equation Section */}
      <section className="py-section relative px-5 md:px-0">
        <div className="container">
          <motion.div
            className="glass-card p-8 md:p-12 rounded-xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8">
              {[
                { label: "Stratégie" },
                { label: "+" },
                { label: "Visibilité" },
                { label: "+" },
                { label: "Organisation" },
                { label: "=" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={item.label.length === 1 
                    ? "text-xl text-white/30" 
                    : "px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70"
                  }
                >
                  {item.label}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="px-4 py-2 rounded-lg border border-accent/30 text-accent text-sm"
              >
                Croissance
              </motion.div>
            </div>

            <p className="text-center text-white/50 max-w-3xl mx-auto">
              Beaucoup d'agences vous vendent de la pub. <span className="text-white/70">Nous, on structure votre entreprise.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-section-lg px-5 md:px-0">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-headline text-white">
              Les <span className="text-accent">4 Piliers</span> de votre croissance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pillars.map((pillar, index) => {
              const IllustrationComponent = pillar.illustration;
              return (
                <motion.div
                  key={index}
                  className="glass-card p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-4">
                    <IllustrationComponent />
                  </div>
                  
                  <span className="text-caption text-white/40 uppercase tracking-widest">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-title text-white mt-1 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-body text-white/50">
                    {pillar.message}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-section relative">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-headline text-white">
              La transformation <span className="text-accent">visible</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before */}
            <motion.div
              className="glass-card p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <span className="text-caption text-white/40 uppercase tracking-widest">
                  Sans Sen'Optima
                </span>
              </div>
              <ChaosIllustration />
              <h3 className="text-title text-center mt-6 mb-2 text-white/60">Navigation à vue</h3>
              <p className="text-center text-white/40 text-sm">
                Stress, perte de temps, opportunités manquées
              </p>
            </motion.div>

            {/* After */}
            <motion.div
              className="glass-card p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-center mb-6">
                <span className="text-caption text-accent uppercase tracking-widest">
                  Avec Sen'Optima
                </span>
              </div>
              <OrderIllustration />
              <h3 className="text-title text-center mt-6 mb-2 text-white">Contrôle & Croissance</h3>
              <p className="text-center text-white/50 text-sm">
                Structure, efficacité, résultats prévisibles
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-lg">
        <div className="container">
          <motion.div
            className="glass-card p-12 rounded-xl text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-headline text-white mb-4">
              Prêt à passer à la vitesse supérieure ?
            </h2>
            <p className="text-body text-white/50 mb-8">
              Découvrez où vous en êtes et les actions prioritaires.
            </p>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white/70 hover:border-accent hover:text-accent">
              <Link to="/diagnostics">
                Auditer mon organisation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
