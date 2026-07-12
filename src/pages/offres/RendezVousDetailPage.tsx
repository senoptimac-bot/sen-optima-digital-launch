import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import BackButton from "@/components/BackButton";

type Pole = "mobilite" | "business";

const RendezVousDetailPage = () => {
  const [searchParams] = useSearchParams();
  const pole: Pole = searchParams.get("pole") === "business" ? "business" : "mobilite";
  const seo = SEO_CONFIG.offresRendezVous;

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} canonicalPath={seo.canonicalPath} noIndex={seo.noIndex} />

      <div className="min-h-screen bg-background">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container max-w-2xl">
            <BackButton />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="badge-accent mb-6 inline-block">Étape 01 · Gratuit</span>
              <h1 className="text-headline text-foreground mb-6">
                Le Rendez-vous <span className="italic text-accent">Découverte.</span>
              </h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
                Avant toute démarche, nous prenons le temps d'écouter votre situation. Ce premier
                échange ne remplace pas une analyse — il nous permet de comprendre votre contexte
                pour vous orienter vers le parcours réellement adapté à votre projet.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: Clock, label: "20 à 30 minutes" },
                  { icon: Users, label: "Écoute et orientation" },
                  { icon: ShieldCheck, label: "Sans engagement" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="p-4 card-cream text-center">
                    <Icon className="w-5 h-5 text-accent mx-auto mb-2" />
                    <p className="text-sm text-foreground">{label}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-title text-foreground mb-4">Ce que nous abordons ensemble</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Votre objectif",
                  "Votre parcours",
                  "Votre situation actuelle",
                  pole === "mobilite" ? "Le pays qui vous intéresse" : "Votre activité",
                  "Les difficultés que vous rencontrez",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-body text-muted-foreground/80 leading-relaxed mb-10">
                À ce stade, nous ne réalisons aucune analyse approfondie de votre dossier — c'est
                le rôle du Diagnostic, l'étape suivante. Notre seul objectif ici est de vous
                orienter vers la bonne solution, que vous poursuiviez avec nous ou non.
              </p>

              <Button
                asChild
                size="lg"
                variant="hero"
              >
                <Link to={`/rendez-vous-decouverte?pole=${pole}`}>
                  Réserver mon rendez-vous découverte
                  <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RendezVousDetailPage;
