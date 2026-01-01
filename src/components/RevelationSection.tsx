import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const RevelationSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Notre approche
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            La <span className="text-gradient-gold">méthode</span>, pas la magie
          </h2>
        </motion.div>

        {/* Visual Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-4 w-full px-4">
            {/* Chaos */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:flex-1 md:max-w-xs p-6 md:p-8 rounded-2xl glass-card text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Chaotic scribbles */}
                  <motion.path
                    d="M20,50 Q30,20 50,40 T80,30 Q90,60 70,70 T30,80 Q10,60 20,50"
                    fill="none"
                    stroke="hsl(var(--destructive))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M40,20 Q60,40 45,60 T60,80"
                    fill="none"
                    stroke="hsl(var(--destructive))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  />
                  <motion.path
                    d="M70,25 Q50,50 75,75"
                    fill="none"
                    stroke="hsl(var(--destructive))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">Chaos</h3>
              <p className="text-sm text-muted-foreground">Navigation à vue</p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center p-4"
            >
              <ArrowRight className="w-8 h-8 text-accent rotate-90 md:rotate-0" />
            </motion.div>

            {/* Method */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:flex-1 md:max-w-xs p-6 md:p-8 rounded-2xl glass-premium border-accent/30 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Straight organized line */}
                  <motion.line
                    x1="15" y1="50" x2="85" y2="50"
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  {/* Checkpoints */}
                  <motion.circle 
                    cx="30" cy="50" r="6" 
                    fill="hsl(var(--accent))"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  />
                  <motion.circle 
                    cx="50" cy="50" r="6" 
                    fill="hsl(var(--accent))"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                  />
                  <motion.circle 
                    cx="70" cy="50" r="6" 
                    fill="hsl(var(--accent))"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                  />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-gradient-gold mb-2">Méthode Sen'Optima</h3>
              <p className="text-sm text-muted-foreground">Structure claire</p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center p-4"
            >
              <ArrowRight className="w-8 h-8 text-accent rotate-90 md:rotate-0" />
            </motion.div>

            {/* Success */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:flex-1 md:max-w-xs p-6 md:p-8 rounded-2xl bg-gradient-gold text-accent-foreground text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Growth arrow */}
                  <motion.path
                    d="M20,80 L50,40 L80,20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                  {/* Arrow head */}
                  <motion.polygon
                    points="80,20 70,30 75,35"
                    fill="currentColor"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                  />
                  {/* Star */}
                  <motion.text
                    x="85" y="18"
                    fontSize="16"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8 }}
                  >
                    🚀
                  </motion.text>
                </svg>
              </div>
              <h3 className="font-heading font-bold mb-2">Succès</h3>
              <p className="text-sm opacity-90">Croissance durable</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Explanation Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Nous ne sommes pas une agence web classique. Nous sommes vos{" "}
            <span className="text-accent font-semibold">architectes digitaux</span>. 
            Nous construisons les <span className="text-foreground font-medium">fondations</span> (Process), 
            les <span className="text-foreground font-medium">murs</span> (Site & Outils) 
            et le <span className="text-foreground font-medium">toit</span> (Stratégie).
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RevelationSection;
