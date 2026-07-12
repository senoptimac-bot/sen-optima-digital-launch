import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteImage from "@/components/SiteImage";

export interface ParcoursStep {
  title: string;
  /** e.g. "Gratuit", "49 000 FCFA", "25 000 FCFA". Leave undefined for "sur devis". */
  price?: string;
  duration?: string;
  /** Keep this short — the poster image above already carries most of the message. */
  description: string;
  ctaLabel: string;
  ctaHref: string;
  /** Link to a dedicated page with the full explanation of this offer. */
  detailHref?: string;
  detailLabel?: string;
  /** Optional visual shown above the card's text content. */
  image?: string;
  imageAlt?: string;
}

interface ParcoursAccompagnementProps {
  steps: ParcoursStep[];
}

const ParcoursAccompagnement = ({ steps }: ParcoursAccompagnementProps) => {
  return (
    <section className="py-section-lg relative bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="badge-accent mb-6 inline-block">Notre Parcours</span>
          <h2 className="text-headline text-foreground">
            Un parcours <span className="italic text-accent">étape par étape.</span>
          </h2>
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="card-cream overflow-hidden"
            >
              {step.image && (
                <SiteImage
                  src={step.image}
                  alt={step.imageAlt ?? step.title}
                  className="w-full h-auto object-cover"
                />
              )}

              <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-caption text-accent font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-title text-foreground">{step.title}</h3>
                </div>
                <div className="text-right shrink-0">
                  {step.price ? (
                    <span className="text-sm font-semibold text-accent whitespace-nowrap">{step.price}</span>
                  ) : (
                    <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">Sur devis</span>
                  )}
                  {step.duration && (
                    <p className="text-xs text-muted-foreground/70 whitespace-nowrap">{step.duration}</p>
                  )}
                </div>
              </div>

              <p className="text-body text-muted-foreground leading-relaxed mb-4">{step.description}</p>

              {!step.price && (
                <p className="text-sm text-muted-foreground/70 italic mb-6">
                  Honoraires établis sur devis après le diagnostic de votre projet.
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="hero"
                  className="w-full whitespace-normal text-center sm:w-auto sm:whitespace-nowrap"
                >
                  <Link to={step.ctaHref}>
                    {step.ctaLabel}
                    <span className="w-7 h-7 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </Button>

                {step.detailHref && (
                  <Link
                    to={step.detailHref}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {step.detailLabel ?? "En savoir plus"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParcoursAccompagnement;
