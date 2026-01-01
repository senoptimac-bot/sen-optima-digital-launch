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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
              L'Écosystème de Croissance
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Le Digital n'est plus une option.
              <br />
              <span className="text-gradient-gold">C'est votre survie.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dans un marché saturé, ceux qui bricolent disparaissent. 
              Ceux qui se structurent dominent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equation Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="glass-premium p-8 md:p-12 rounded-2xl max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Visual Equation */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8">
              {[
                { label: "Stratégie", color: "primary" },
                { label: "+", isOperator: true },
                { label: "Visibilité", color: "accent" },
                { label: "+", isOperator: true },
                { label: "Organisation", color: "primary" },
                { label: "=", isOperator: true },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={item.isOperator 
                    ? "text-2xl md:text-3xl font-bold text-muted-foreground" 
                    : `px-4 py-2 md:px-6 md:py-3 rounded-xl ${item.color === 'accent' ? 'bg-accent/10 border-accent/30' : 'bg-primary/10 border-primary/30'} border text-sm md:text-base font-semibold`
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
                className="px-4 py-2 md:px-6 md:py-3 rounded-xl bg-gradient-to-r from-accent to-primary text-white font-bold text-sm md:text-base flex items-center gap-2"
              >
                Croissance <span className="text-xl">🚀</span>
              </motion.div>
            </div>

            <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg">
              Beaucoup d'agences vous vendent de la pub. <strong className="text-foreground">Nous, on structure votre entreprise.</strong>
              <br className="hidden md:block" />
              Si vous générez des clients mais que vous n'avez pas les outils pour les gérer, vous perdez de l'argent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars Bento Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Les <span className="text-gradient-gold">4 Piliers</span> de votre croissance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => {
              const IllustrationComponent = pillar.illustration;
              return (
                <motion.div
                  key={index}
                  className={`glass-card p-6 rounded-2xl group hover:border-accent/50 transition-all duration-300 ${
                    pillar.highlight ? 'ring-2 ring-accent/30 bg-accent/5' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {pillar.highlight && (
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">Crucial</span>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <IllustrationComponent />
                  </div>
                  
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-3 group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.message}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              La transformation <span className="text-gradient-gold">visible</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before */}
            <motion.div
              className="glass-card p-8 rounded-2xl border-red-500/20 bg-red-500/5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-500/10 text-red-400 rounded-full border border-red-500/20">
                  Sans Sen'Optima
                </span>
              </div>
              <ChaosIllustration />
              <h3 className="text-xl font-bold text-center mt-6 mb-2 text-red-400">Navigation à vue</h3>
              <p className="text-center text-muted-foreground text-sm">
                Stress, perte de temps, opportunités manquées
              </p>
            </motion.div>

            {/* After */}
            <motion.div
              className="glass-card p-8 rounded-2xl border-green-500/20 bg-green-500/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                  Avec Sen'Optima
                </span>
              </div>
              <OrderIllustration />
              <h3 className="text-xl font-bold text-center mt-6 mb-2 text-green-400">Contrôle & Croissance</h3>
              <p className="text-center text-muted-foreground text-sm">
                Structure, efficacité, résultats prévisibles
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="glass-premium p-12 rounded-3xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Votre entreprise est-elle prête à passer à la vitesse supérieure ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Découvrez où vous en êtes et les actions prioritaires pour votre croissance.
            </p>
            <Button asChild size="lg" variant="cta" className="group">
              <Link to="/diagnostics">
                Auditer mon organisation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
