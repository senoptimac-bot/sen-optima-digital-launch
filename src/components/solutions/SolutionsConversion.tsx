import { motion } from "framer-motion";
import { CreditCard, MessageCircle, Check, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuizResult, QuizAnswers } from "@/types/solutions";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs.config";
import { toast } from "@/hooks/use-toast";

interface SolutionsConversionProps {
  result: QuizResult;
  answers: QuizAnswers;
}

const SolutionsConversion = ({ result, answers }: SolutionsConversionProps) => {
  const { price, category } = result;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("fr-FR").format(amount) + " FCFA";
  };

  const categoryLabels: Record<string, string> = {
    LAUNCHER: "Lanceur",
    GROWER: "Croissance",
    CRITICAL_LEADER: "Leader Critique",
  };

  const handlePayment = () => {
    // TODO: Integrate payment gateway
    toast({
      title: "Paiement en cours de configuration",
      description: "Cette fonctionnalité sera bientôt disponible.",
    });
  };

  const handleWhatsApp = async () => {
    // Send email notification to admin
    try {
      const templateParams = {
        category: categoryLabels[category],
        score: result.score,
        revenue_gap: formatCurrency(result.revenueGap),
        pain_points: result.painPoints.map((p) => p.title).join(", "),
        answers: JSON.stringify(answers, null, 2),
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATES.BOOKING_AND_AUDIT,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
    } catch (error) {
      console.error("Failed to send email notification");
    }

    // Open WhatsApp
    const message = encodeURIComponent(
      `Bonjour Sen'Optima ! Je viens de faire le diagnostic de maturité digitale.\n\n` +
      `📊 Mon score: ${result.score}/100\n` +
      `📂 Catégorie: ${categoryLabels[category]}\n\n` +
      `Je souhaite réserver mon Diagnostic Humain Phase 1.`
    );
    window.open(`https://wa.me/221781926969?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 relative border-t border-foreground/5">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-headline text-foreground mb-4">
            Passez à l'<span className="text-accent">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground font-subheading">
            L'IA a identifié la fracture. Réservez votre Diagnostic Humain pour obtenir le plan de traitement.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="glass-pricing-featured rounded-2xl p-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-subheading mb-6">
              <span>Diagnostic Phase 1</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-5xl font-heading font-bold text-foreground">
                {formatCurrency(price)}
              </span>
            </div>

            {/* Deductible notice */}
            <p className="text-accent text-sm font-subheading mb-8">
              100% Déductible de votre prestation
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8 text-left">
              {[
                "Appel stratégique de 45 min",
                "Analyse approfondie de votre situation",
                "Plan d'action chiffré et priorisé",
                "Devis personnalisé sur mesure",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="space-y-3">
              <Button
                onClick={handlePayment}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Payer maintenant
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-foreground/10" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-background px-3 text-sm text-muted-foreground">ou</span>
                </div>
              </div>

              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="w-full border-solution/50 text-solution hover:bg-solution/10 font-heading gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Vérifier sur WhatsApp d'abord
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-foreground/10">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-accent" />
                <span>Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-accent" />
                <span>Réponse sous 24h</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsConversion;
