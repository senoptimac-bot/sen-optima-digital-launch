import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisionarySection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl glass-premium">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Avatar / Photo placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full glass-card flex items-center justify-center overflow-hidden">
                  {/* Abstract avatar */}
                  <div className="w-full h-full bg-gradient-to-br from-accent/30 to-primary/20 flex items-center justify-center">
                    <User className="w-16 h-16 md:w-20 md:h-20 text-accent/60" />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-accent/30" />
                  <div className="absolute inset-2 rounded-full border border-accent/10" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl font-heading font-medium text-foreground leading-relaxed mb-4"
                >
                  "Derrière les algorithmes, il y a des humains engagés pour le Sénégal."
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <p className="font-heading font-bold text-gradient-gold text-lg">
                    Mandiaye Sylla
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fondateur, Sen'Optima Consulting
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    variant="outline"
                    className="gap-2 glass border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                    asChild
                  >
                    <Link to="/a-propos">
                      Lire notre Manifesto
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-accent/5 blur-xl" />
            <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-accent/5 blur-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionarySection;
