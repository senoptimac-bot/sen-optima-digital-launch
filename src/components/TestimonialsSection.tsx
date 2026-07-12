import { Quote } from "lucide-react";

export interface Testimonial {
  name: string;
  context: string;
  quote: string;
}

/**
 * Section témoignages/preuves. VIDE PAR DÉFAUT, INTENTIONNELLEMENT.
 *
 * Ne jamais remplir `testimonials` avec du contenu inventé : nom, contexte
 * et verbatim doivent venir de vrais clients. Tant que ce tableau est vide,
 * le composant ne rend rien (pas de section fantôme, pas de faux avis).
 * Pour l'activer : passer de vrais témoignages en props depuis Home.tsx.
 */
const TestimonialsSection = ({ testimonials = [] as Testimonial[] }: { testimonials?: Testimonial[] }) => {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-section-lg relative bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="badge-accent mb-6 inline-block">Ils témoignent</span>
          <h2 className="text-headline text-foreground">
            Ce qu'en disent <span className="italic text-accent">nos clients.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="p-8 card-cream">
              <Quote className="w-6 h-6 text-accent/40 mb-4" />
              <p className="text-body text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
