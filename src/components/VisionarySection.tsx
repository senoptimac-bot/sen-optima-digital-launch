import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VisionarySection = () => {
  return (
    <section className="py-section-lg relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
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
          <p className="text-body-lg text-foreground/50 leading-relaxed max-w-2xl mx-auto mb-10">
            Nous transformons le potentiel brut du marché sénégalais en réussite organisée et pérenne.
          </p>

          {/* CTA Button - Ghost style */}
          <Link
            to="/a-propos"
            className="inline-flex items-center text-[13px] text-foreground/50 hover:text-accent transition-colors duration-300 uppercase tracking-widest"
          >
            Découvrir notre histoire →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionarySection;