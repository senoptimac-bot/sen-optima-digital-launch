import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, PartyPopper, ArrowLeft, ClipboardList, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAppSounds } from "@/hooks/useAppSounds";

/**
 * ============================================================================
 * CONFIGURATION TALLY.SO - À REMPLACER PAR LE CLIENT
 * ============================================================================
 * 
 * Le client doit créer un formulaire Tally contenant ces sections :
 * 
 * 1. INFOS CONTACT
 *    - Nom complet
 *    - Numéro WhatsApp
 * 
 * 2. AUDIT PROJET (15 Questions suggérées)
 *    - Avez-vous un site web actuel ? (URL)
 *    - Quel est votre CA mensuel actuel ?
 *    - Quel est votre objectif n°1 pour les 6 prochains mois ?
 *    - Quel est votre budget publicitaire mensuel ?
 *    - Quels outils marketing utilisez-vous actuellement ?
 *    - Qui est votre client idéal ?
 *    - Quels sont vos principaux concurrents ?
 *    - Qu'est-ce qui vous différencie d'eux ?
 *    - Quel est votre plus grand défi actuel ?
 *    - Avez-vous une équipe ou êtes-vous seul ?
 *    - Comment acquérez-vous vos clients actuellement ?
 *    - Quel est votre taux de conversion actuel ?
 *    - Avez-vous des témoignages clients ?
 *    - Quel est votre délai de décision ?
 *    - Qu'attendez-vous de cette collaboration ?
 * 
 * 3. PLANIFICATION
 *    - Question : "Quel jour vous arrange le plus ?" (Lundi au Vendredi)
 *    - Question : "Plutôt Matin ou Après-midi ?"
 * 
 * 4. MESSAGE DE FIN TALLY
 *    "Merci. Un consultant Sen'Optima va analyser vos réponses 
 *     et valider le créneau avec vous sous 24h via WhatsApp."
 * 
 * ============================================================================
 */
const TALLY_EMBED_URL = "https://tally.so/embed/w7Xk1L?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

const SuccessPage = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const { playSuccess } = useAppSounds();

  useEffect(() => {
    // Jouer le son de succès à l'arrivée sur la page
    playSuccess();
    
    // Cacher les confettis après 5 secondes
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, [playSuccess]);

  return (
    <>
      {/* Meta tag noindex pour SEO - Page cachée de Google */}
      <meta name="robots" content="noindex, nofollow" />
      
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />

        {/* Confetti Animation */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  top: "-10%",
                  left: `${Math.random() * 100}%`,
                  rotate: 0,
                  opacity: 1,
                }}
                animate={{
                  top: "110%",
                  rotate: Math.random() * 720,
                  opacity: 0,
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 0.5,
                  ease: "easeOut",
                }}
                className="absolute w-3 h-3"
                style={{
                  backgroundColor: ["#D4AF37", "#FFD700", "#C9A227", "#B8860B", "#FFC107"][
                    Math.floor(Math.random() * 5)
                  ],
                  borderRadius: Math.random() > 0.5 ? "50%" : "0%",
                }}
              />
            ))}
          </div>
        )}

        <div className="container relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-gold flex items-center justify-center glow-gold"
            >
              <Check className="w-12 h-12 text-accent-foreground" strokeWidth={3} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <PartyPopper className="w-6 h-6 text-accent" />
                <span className="text-accent font-medium">Paiement confirmé</span>
                <PartyPopper className="w-6 h-6 text-accent" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Paiement validé !{" "}
                <span className="text-gradient-gold">La transformation commence maintenant.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4">
                Pour préparer notre session, veuillez remplir ce{" "}
                <span className="text-foreground font-semibold">formulaire d'audit préliminaire</span>.
              </p>
              <p className="text-lg text-muted-foreground">
                Cela nous permettra d'être efficaces dès la première minute.
              </p>
            </motion.div>
          </motion.div>

          {/* Instruction Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <div className="glass-card rounded-2xl p-6 border border-accent/30 bg-accent/5">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">À la fin du formulaire</span>, indiquez vos disponibilités. 
                  Nous confirmerons l'heure exacte par{" "}
                  <span className="text-accent font-semibold">WhatsApp sous 24h</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Single Tally Form */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card rounded-3xl p-8 overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-bold text-foreground">
                    Formulaire d'Audit Préliminaire
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    15 questions pour maximiser l'impact de votre session
                  </p>
                </div>
              </div>
              
              {/* Tally Embed - Formulaire unique centralisé */}
              <div className="rounded-2xl overflow-hidden bg-transparent">
                <iframe
                  src={TALLY_EMBED_URL}
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Formulaire d'audit préliminaire Sen'Optima"
                  className="bg-transparent"
                  style={{
                    border: "none",
                    background: "transparent",
                  }}
                />
              </div>
            </motion.div>

            {/* Return Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center pt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="gap-2 glass border-foreground/20 hover:border-accent/50"
                asChild
              >
                <Link to="/">
                  <ArrowLeft className="w-4 h-4" />
                  Revenir à l'accueil
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
