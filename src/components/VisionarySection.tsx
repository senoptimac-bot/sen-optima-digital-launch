import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutTeamImage from "@/assets/about-team.jpg";

const VisionarySection = () => {
  return (
    <section className="py-section-lg relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={aboutTeamImage}
                alt="Équipe professionnelle Sen'Optima"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Blue Overlay - 15% for harmony */}
              <div className="absolute inset-0 bg-[hsl(220,25%,8%)] opacity-15 mix-blend-multiply" />
              <div className="absolute inset-0 rounded-3xl border border-white/10" />
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 lg:-right-8 bg-background/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-background font-bold text-lg">✓</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">5+ ans</p>
                  <p className="text-xs text-foreground/50">d'expertise digitale</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-10">
              <span className="w-1 h-1 rounded-full bg-accent" />
              <span className="text-caption text-foreground/40 uppercase tracking-widest">
                Notre Vision
              </span>
            </div>

            {/* Main Quote */}
            <h2 className="text-headline text-foreground leading-tight mb-8">
              "<span className="text-accent">L'informel</span> est une étape.
              <br />
              La <span className="text-accent">structure</span> est une destination."
            </h2>

            {/* Subtext */}
            <p className="text-body-lg text-foreground/50 leading-relaxed max-w-xl mb-10">
              Nous transformons le potentiel brut du marché sénégalais en réussite organisée et pérenne.
            </p>

            {/* CTA Button - Ghost style */}
            <Link
              to="/a-propos"
              className="inline-flex items-center text-[13px] text-foreground/50 hover:text-accent transition-colors duration-300 uppercase tracking-widest group"
            >
              Découvrir notre histoire 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionarySection;
