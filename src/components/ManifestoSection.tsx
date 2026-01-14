import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";
import aboutTeamImage from "@/assets/about-team.jpg";

const ManifestoSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Grain texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      
      {/* Spotlight */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs text-accent uppercase tracking-[0.3em] font-light">
            Notre Histoire
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 max-w-2xl leading-tight">
            Pourquoi <span className="text-accent italic font-serif">Sen'Optima</span> ?
          </h2>
        </motion.div>

        {/* Asymmetrical Layout - Editorial Style */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            {/* Quote Block - Editorial Magazine Style */}
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-accent/20" />
              
              <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-8 pl-8 border-l-2 border-accent/30">
                Au Sénégal, 90% des entrepreneurs ont du talent. Mais sans processus, sans visibilité digitale, ils restent invisibles.
              </blockquote>
            </div>

            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p className="text-lg">
                <span className="text-foreground font-medium">Sen'Optima est né d'un constat simple :</span> les agences web vendent des sites. Nous vendons des <span className="text-accent font-medium">systèmes de croissance</span>.
              </p>
              
              <p>
                Nous ne créons pas de beaux designs pour Instagram. Nous construisons des machines d'acquisition client, des processus automatisés, des fondations solides pour des entreprises qui veulent durer.
              </p>

              <p>
                Notre approche est celle d'un <span className="text-accent">cabinet de conseil international</span> — rigueur, méthode, résultats mesurables — mais avec une compréhension profonde du marché sénégalais et africain.
              </p>
            </div>

            {/* CTA Link - Subtle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <Link 
                to="/about" 
                className="group inline-flex items-center gap-3 text-accent hover:text-accent/80 transition-colors"
              >
                <span className="text-sm uppercase tracking-widest font-medium">
                  Découvrir notre équipe
                </span>
                <span className="w-8 h-[1px] bg-accent group-hover:w-12 transition-all duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Behind the Scenes Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image - Organic rounded shape */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src={aboutTeamImage}
                  alt="L'équipe Sen'Optima en coulisses"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-accent/5" />
              </div>

              {/* Floating Stats - Offset */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -right-6 md:right-8 p-6 glass-premium rounded-2xl border border-accent/20 max-w-[200px]"
              >
                <p className="text-4xl font-bold text-accent mb-1">4+</p>
                <p className="text-sm text-foreground/60">Années d'expertise en stratégie digitale</p>
              </motion.div>

              {/* Decorative circles */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border border-accent/10 rounded-full hidden lg:block" />
              <div className="absolute top-4 -left-4 w-20 h-20 border border-accent/5 rounded-full hidden lg:block" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
