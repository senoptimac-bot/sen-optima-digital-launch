import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aminata Diallo",
    role: "Fondatrice, Teranga Mode",
    content: "Sen'Optima a transformé ma présence en ligne. En 2 mois, mes ventes ont triplé grâce à leur stratégie digitale.",
    avatar: "AD",
  },
  {
    name: "Moussa Ndiaye",
    role: "CEO, MN Consulting",
    content: "Une équipe professionnelle qui comprend vraiment les défis des entrepreneurs africains. Recommandé à 100%!",
    avatar: "MN",
  },
  {
    name: "Fatou Seck",
    role: "Directrice, Dakar Events",
    content: "Le Business Boost a été un game changer pour mon entreprise. Merci pour l'accompagnement de qualité.",
    avatar: "FS",
  },
  {
    name: "Ibrahima Ba",
    role: "Fondateur, Tech Sénégal",
    content: "Leur approche méthodique et leur expertise m'ont permis de structurer efficacement ma startup.",
    avatar: "IB",
  },
  {
    name: "Aissatou Sy",
    role: "Artisane, Créations Aïda",
    content: "Grâce à leur diagnostic, j'ai enfin une stratégie claire pour développer mon activité en ligne.",
    avatar: "AS",
  },
  {
    name: "Ousmane Fall",
    role: "Coach, Success Academy",
    content: "Un partenaire de confiance pour tous vos projets digitaux. Résultats concrets et mesurables.",
    avatar: "OF",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 container"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Ce que disent nos <span className="text-gradient-gold">clients</span>
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* First Row - Left to Right */}
          <div className="flex gap-6 mb-6 animate-marquee-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex gap-6 animate-marquee-right">
            {[...testimonials.reverse(), ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[320px] md:w-[380px] p-6 rounded-2xl glass-card hover:glow-gold-subtle transition-all duration-300 group">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
      ))}
    </div>
    
    <div className="relative mb-4">
      <Quote className="absolute -top-2 -left-1 w-6 h-6 text-accent/20" />
      <p className="text-foreground/80 leading-relaxed pl-4">
        "{testimonial.content}"
      </p>
    </div>

    <div className="flex items-center gap-3 pt-4 border-t border-border/30">
      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-heading font-bold text-sm">
        {testimonial.avatar}
      </div>
      <div>
        <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
