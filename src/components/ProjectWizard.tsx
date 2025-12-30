import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Users, 
  Briefcase, 
  Lightbulb, 
  Rocket, 
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type ObjectiveType = "site" | "clients" | "structure" | null;
type StageType = "idea" | "starting" | "growing" | null;

interface FormData {
  objective: ObjectiveType;
  stage: StageType;
  name: string;
  whatsapp: string;
  email: string;
}

const objectives = [
  { id: "site" as const, icon: Globe, label: "Lancer un site web", desc: "Créer ou refondre ma présence en ligne" },
  { id: "clients" as const, icon: Users, label: "Avoir plus de clients", desc: "Développer mon acquisition client" },
  { id: "structure" as const, icon: Briefcase, label: "Structurer mon business", desc: "Organiser et digitaliser mes processus" },
];

const stages = [
  { id: "idea" as const, icon: Lightbulb, label: "J'ai une idée", desc: "Je démarre de zéro" },
  { id: "starting" as const, icon: Rocket, label: "Je démarre", desc: "J'ai commencé récemment" },
  { id: "growing" as const, icon: TrendingUp, label: "En croissance", desc: "Je veux passer au niveau supérieur" },
];

const getRecommendation = (objective: ObjectiveType, stage: StageType) => {
  if (objective === "site" && stage === "idea") {
    return { name: "Diagnostic Site Web", price: "20.000", id: "web" };
  }
  if (objective === "site" && (stage === "starting" || stage === "growing")) {
    return { name: "Diagnostic Stratégie Digitale", price: "25.000", id: "strategy" };
  }
  if (objective === "clients") {
    return { name: "Diagnostic Stratégie Digitale", price: "25.000", id: "strategy" };
  }
  if (objective === "structure" || stage === "growing") {
    return { name: "Business Boost", price: "30.000", id: "boost" };
  }
  return { name: "Diagnostic Site Web", price: "20.000", id: "web" };
};

const ProjectWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    objective: null,
    stage: null,
    name: "",
    whatsapp: "",
    email: "",
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const canProceed = () => {
    if (step === 1) return formData.objective !== null;
    if (step === 2) return formData.stage !== null;
    if (step === 3) return formData.name && formData.whatsapp && formData.email;
    return true;
  };

  const recommendation = getRecommendation(formData.objective, formData.stage);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="wizard" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Calculateur de projet
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Trouvez votre <span className="text-gradient-gold">diagnostic idéal</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Répondez à 3 questions simples pour découvrir l'offre adaptée à vos besoins.
          </p>
        </motion.div>

        {/* Wizard Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-premium rounded-3xl p-6 md:p-10 overflow-hidden">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Étape {step} sur {totalSteps}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-gold rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Steps */}
            <AnimatePresence mode="wait" custom={step}>
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-heading font-semibold text-foreground text-center">
                    Quel est votre objectif principal ?
                  </h3>
                  <div className="grid gap-4">
                    {objectives.map((obj) => (
                      <motion.button
                        key={obj.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setFormData({ ...formData, objective: obj.id })}
                        className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 ${
                          formData.objective === obj.id
                            ? "glass-premium border-accent glow-gold-subtle"
                            : "glass-card hover:border-accent/30"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          formData.objective === obj.id ? "bg-accent/20" : "bg-accent/10"
                        }`}>
                          <obj.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{obj.label}</p>
                          <p className="text-sm text-muted-foreground">{obj.desc}</p>
                        </div>
                        {formData.objective === obj.id && (
                          <Check className="w-5 h-5 text-accent ml-auto" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-heading font-semibold text-foreground text-center">
                    Quel est votre stade actuel ?
                  </h3>
                  <div className="grid gap-4">
                    {stages.map((stg) => (
                      <motion.button
                        key={stg.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setFormData({ ...formData, stage: stg.id })}
                        className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 ${
                          formData.stage === stg.id
                            ? "glass-premium border-accent glow-gold-subtle"
                            : "glass-card hover:border-accent/30"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          formData.stage === stg.id ? "bg-accent/20" : "bg-accent/10"
                        }`}>
                          <stg.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{stg.label}</p>
                          <p className="text-sm text-muted-foreground">{stg.desc}</p>
                        </div>
                        {formData.stage === stg.id && (
                          <Check className="w-5 h-5 text-accent ml-auto" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-heading font-semibold text-foreground text-center">
                    Vos coordonnées
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Nom complet</Label>
                      <Input
                        id="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="glass-card border-border/50 focus:border-accent h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-foreground">WhatsApp</Label>
                      <Input
                        id="whatsapp"
                        placeholder="+221 7X XXX XX XX"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="glass-card border-border/50 focus:border-accent h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="glass-card border-border/50 focus:border-accent h-12"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="text-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto"
                  >
                    <Sparkles className="w-10 h-10 text-accent" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      Votre diagnostic recommandé
                    </h3>
                    <p className="text-muted-foreground">
                      Basé sur vos réponses, voici ce que nous vous conseillons :
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 rounded-2xl glass-premium glow-gold"
                  >
                    <p className="text-accent font-medium text-sm uppercase tracking-wider mb-2">
                      Recommandé pour vous
                    </p>
                    <h4 className="text-2xl font-heading font-bold text-foreground mb-1">
                      {recommendation.name}
                    </h4>
                    <p className="text-3xl font-heading font-bold text-gradient-gold">
                      {recommendation.price} <span className="text-lg text-muted-foreground">FCFA</span>
                    </p>
                  </motion.div>

                  <Button
                    variant="cta"
                    size="lg"
                    className="w-full gap-2 glow-gold-subtle hover:glow-gold"
                    asChild
                  >
                    <a
                      href={`https://wa.me/221781926969?text=${encodeURIComponent(
                        `Bonjour Sen'Optima! Je suis ${formData.name}. Suite au calculateur, je souhaite réserver le ${recommendation.name}. Mon email: ${formData.email}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Réserver maintenant
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            {step < 4 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-border/30">
                <Button
                  variant="ghost"
                  onClick={prevStep}
                  disabled={step === 1}
                  className="gap-2 text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </Button>
                <Button
                  variant="cta"
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="gap-2"
                >
                  {step === 3 ? "Voir le résultat" : "Continuer"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectWizard;
