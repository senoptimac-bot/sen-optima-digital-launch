import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <section id="apropos" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Notre philosophie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent mt-3">
            À Propos de Sen'Optima
          </h2>
        </motion.div>

        {/* Split Screen Layout - Text Left / Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Manifesto Card */}
            <div className="relative p-8 md:p-10 rounded-3xl glass-premium">
              {/* Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg"
              >
                <Quote className="w-6 h-6 text-background" />
              </motion.div>

              <blockquote className="text-xl md:text-2xl font-heading font-medium text-foreground leading-relaxed mb-6 pt-4">
                Chez Sen'Optima, nous pensons que chaque entrepreneur mérite un accompagnement clair.
              </blockquote>

              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                Nous ne promettons pas la magie. Nous offrons le{" "}
                <span className="text-accent font-semibold">travail</span>, la{" "}
                <span className="text-accent font-semibold">méthode</span> et la{" "}
                <span className="text-accent font-semibold">rigueur</span>.
              </p>

              {/* Decorative line */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="font-heading font-bold text-foreground">Sen'Optima Consulting</p>
                    <p className="text-sm text-foreground/50">
                      Cabinet de conseil digital basé à Dakar, Sénégal
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm text-foreground/50">
                      Disponible pour nouveaux projets
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              {/* Image with blue overlay filter */}
              <img
                src={aboutTeamImage}
                alt="L'équipe Sen'Optima en action"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Blue Overlay - 15% opacity for harmony */}
              <div className="absolute inset-0 bg-[hsl(220,25%,8%)] opacity-15 mix-blend-multiply" />
              
              {/* Decorative border glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/10" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 lg:-left-8 bg-background/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">+</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">100+</p>
                  <p className="text-xs text-foreground/50">Projets réalisés</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20"
        >
          {[
            { value: "Clarté", description: "Des solutions simples et compréhensibles" },
            { value: "Performance", description: "Des résultats mesurables et concrets" },
            { value: "Stratégie", description: "Une vision long terme pour votre succès" },
          ].map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="text-center p-6 rounded-2xl glass-card transition-all duration-300 border border-white/10"
            >
              <h3 className="text-lg font-heading font-bold text-accent mb-2">
                {item.value}
              </h3>
              <p className="text-sm text-foreground/60">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
