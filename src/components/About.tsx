import { Quote, Sparkles, Rocket, TrendingUp, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import aboutTeamImage from "@/assets/À Propos de Sen'Optima.jpg";

interface ValueItem {
  value: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const About = () => {
  const values: ValueItem[] = [
    { 
      value: "Clarté", 
      description: "Des solutions simples et compréhensibles", 
      icon: Sparkles,
      gradient: "from-blue-400 to-cyan-400"
    },
    { 
      value: "Performance", 
      description: "Des résultats mesurables et concrets", 
      icon: Rocket,
      gradient: "from-accent to-orange-400"
    },
    { 
      value: "Stratégie", 
      description: "Une vision long terme pour votre succès", 
      icon: TrendingUp,
      gradient: "from-emerald-400 to-teal-400"
    },
  ];

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
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[4/3]">
              {/* Image with blue overlay filter */}
              <img
                src={aboutTeamImage}
                alt="L'équipe Sen'Optima en action"
                className="w-full h-full object-cover object-[center_20%] sm:object-center"
                loading="lazy"
              />
              {/* Blue Overlay - 15% opacity for harmony */}
              <div className="absolute inset-0 bg-[hsl(220,25%,8%)] opacity-15 mix-blend-multiply" />
              
              {/* Decorative border glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/10" />
            </div>
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
          {values.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group relative p-8 rounded-3xl glass-premium transition-all duration-500 border border-white/10 flex flex-col items-center overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} opacity-40`}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    style={{ top: '60%', left: '20%' }}
                  />
                  <motion.div
                    className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} opacity-30`}
                    animate={{
                      y: [0, -15, 0],
                      x: [0, -8, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.2 + 0.5,
                    }}
                    style={{ top: '70%', right: '25%' }}
                  />
                </div>

                {/* Icon container with glow effect */}
                <motion.div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                  <IconComponent size={28} className="relative z-10 text-white" strokeWidth={2} />
                </motion.div>

                {/* Text content */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {item.value}
                </h3>
                <p className="text-sm text-foreground/60 text-center leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r ${item.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
