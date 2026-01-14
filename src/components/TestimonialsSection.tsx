import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Sen'Optima a transformé notre approche commerciale. En 3 mois, notre taux de conversion a doublé grâce à leur système d'acquisition.",
    author: "Amadou Diallo",
    role: "Directeur Général",
    company: "Diallo Immobilier",
    image: "/placeholder.svg"
  },
  {
    quote: "Ce n'est pas une agence comme les autres. Ils pensent stratégie d'abord, design ensuite. Exactement ce dont j'avais besoin.",
    author: "Fatou Ndiaye",
    role: "Fondatrice",
    company: "FN Consulting",
    image: "/placeholder.svg"
  },
  {
    quote: "Le diagnostic m'a ouvert les yeux sur des problèmes que je ne voyais pas. L'accompagnement qui a suivi m'a permis de les résoudre un par un.",
    author: "Moussa Sow",
    role: "CEO",
    company: "TechSen Solutions",
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Grain texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      
      {/* Ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs text-accent uppercase tracking-[0.3em] font-light">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
            Ce qu'ils disent de <span className="text-accent italic font-serif">nous</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid - Editorial Quote Style */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Quote Card */}
              <div className="relative p-8 md:p-10 rounded-3xl glass-card border border-white/5 hover:border-accent/20 transition-all duration-500 h-full flex flex-col">
                {/* Large Quote Mark */}
                <Quote className="w-10 h-10 text-accent/30 mb-6" />
                
                {/* Quote Text - Serif for Editorial Feel */}
                <blockquote className="text-lg md:text-xl text-foreground/90 font-light leading-relaxed mb-8 flex-grow font-serif italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Section */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  {/* Avatar - Circular */}
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent/30 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Author Info */}
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-foreground/50">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Decorative Accent Line */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-foreground/40 text-sm mt-12"
        >
          Témoignages de clients ayant bénéficié de nos services de diagnostic et d'accompagnement.
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
