import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    setIsLoading(true);
    
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");

    // Reset after 4 seconds
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section className="relative bg-[#061225] border-t border-white/5">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      
      <div className="container py-12 md:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Text Content - Left aligned */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 max-w-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium">
                Newsletter
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-accent mb-3">
              Rejoignez le cercle Sen'Optima
            </h3>
            
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Recevez nos analyses stratégiques et conseils pour structurer votre croissance directement par mail.
            </p>
          </motion.div>

          {/* Form - Right side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:w-auto"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center gap-3 py-4 px-6 rounded-xl bg-accent/10 border border-accent/20"
                >
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-accent font-medium">
                    Merci de votre confiance !
                  </span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
                >
                  <Input
                    type="email"
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 px-4 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-accent/50 focus:ring-accent/20 min-w-[280px] rounded-xl"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="h-12 px-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl group whitespace-nowrap"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                        />
                        Envoi...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Rejoindre
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
            
            {/* Privacy note */}
            <p className="text-xs text-white/30 mt-3 lg:text-right">
              En vous inscrivant, vous acceptez notre politique de confidentialité.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
