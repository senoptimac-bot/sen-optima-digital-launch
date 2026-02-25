import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/config/diagnostic";
import diagnosticVisual from "@/assets/diagnostic-visual.svg";
import waveLogoImg from "@/assets/logo-wave.png";
import omLogoImg from "@/assets/logo-orange-money.png";
interface DiagnosticHeroProps {
  onStart: () => void;
}
const DiagnosticHero = ({
  onStart
}: DiagnosticHeroProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " " + PRICING.currency;
  };
  return <section className="relative min-h-[100svh] flex items-center pt-16 pb-8 md:pt-20 md:pb-0 overflow-hidden">
      {/* Simple static background */}
      <div className="absolute inset-0 z-0 bg-background" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual - Illustration with floating card */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.98
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1]
        }} className="relative order-first lg:order-first">
            {/* Background shape */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-accent/10 rounded-[3rem] transform -rotate-6 hidden lg:block" />
            
            {/* Main illustration container */}
            <div className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden">
              <img src={diagnosticVisual} alt="Diagnostic de structuration business" className="w-full h-auto max-h-[500px] object-contain" loading="eager" />
            </div>

            {/* Floating notification card */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="absolute -right-4 lg:-right-8 bottom-10 lg:bottom-20 bg-card rounded-2xl p-3 lg:p-4 shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-accent flex items-center justify-center">
                  <Timer className="w-4 h-4 lg:w-5 lg:h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-muted-foreground">Diagnostic</p>
                  <p className="text-base lg:text-lg font-bold text-foreground">10-12 minutes</p>
                  <p className="text-[10px] lg:text-xs text-muted-foreground">Analyse complète</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="max-w-xl">
            {/* Badge - Accent pill */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }} className="mb-8">
              <span className="badge-accent">
                Offre de lancement
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1]
          }} className="text-display font-bold text-foreground mb-6">
              Diagnostic de <span className="italic text-accent">Structuration Business</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1]
          }} className="text-body-lg text-muted-foreground max-w-lg mb-4 leading-relaxed">
              Une évaluation claire et honnête de la solidité réelle de votre activité.
            </motion.p>

            {/* Inclusions premium */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1]
          }} className="mb-8">
              <p className="text-xs uppercase tracking-wider font-semibold text-accent mb-3">Incluant</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                {["Audit positionnement", "Analyse rentabilité", "Cartographie des opportunités", "Plan d'action 90 jours"].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-accent font-medium">
                Livrable PDF + restitution stratégique 1h30
              </p>
            </motion.div>

            {/* Pricing - Human text */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }} className="bg-card/50 border border-border rounded-2xl p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Pour accompagner le lancement de la méthode Sen'Optima, ce diagnostic est proposé à un tarif préférentiel. 
                En temps normal, une analyse de ce niveau est facturée {formatPrice(PRICING.normalPrice)}, 
                car elle permet d'éviter des erreurs coûteuses et des mois de tâtonnement.
              </p>
              <div className="flex flex-wrap items-baseline gap-3 md:gap-4 mb-4">
                <span className="text-lg text-muted-foreground line-through whitespace-nowrap">
                  {formatPrice(PRICING.normalPrice)}
                </span>
                <span className="text-2xl md:text-4xl font-heading font-bold text-accent whitespace-nowrap">
                  {formatPrice(PRICING.launchPrice)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Vous payez pour la clarté, pas pour un simple questionnaire.
              </p>
              
              {/* Payment methods */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">Moyens de paiement acceptés :</p>
                <div className="flex flex-wrap items-center gap-2 md:gap-4">
                  {/* Wave */}
                  <div className="flex items-center gap-1.5 md:gap-2 bg-[#1DC7EA]/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                    <img src={waveLogoImg} alt="Wave" className="w-4 h-4 md:w-5 md:h-5 rounded-full object-cover" />
                    <span className="text-[10px] md:text-xs font-medium text-foreground">Wave</span>
                  </div>
                  {/* Orange Money */}
                  <div className="flex items-center gap-1.5 md:gap-2 bg-[#FF6600]/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                    <img src={omLogoImg} alt="Orange Money" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                    <span className="text-[10px] md:text-xs font-medium text-foreground">Orange Money</span>
                  </div>
                  {/* Carte bancaire */}
                  
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1]
          }} className="space-y-4">
              <Button onClick={onStart} size="lg" className="group gap-3 text-sm rounded-full bg-foreground text-primary hover:bg-foreground/90 transition-all duration-300 h-14 px-8">
                Accéder au diagnostic
                <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>10–12 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Paiement sécurisé</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default DiagnosticHero;