import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Users, Code, MessageCircle, Video, PenTool, Globe } from "lucide-react";
import fondateurPhoto from "@/assets/fondateur-portrait.jpg";
import ibrahimaDiagnePhoto from "@/assets/ibrahima-diagne-portrait.jpg";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import BackButton from "@/components/BackButton";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

const founders = [
  {
    name: "Mandiaye Sylla",
    role: "Fondateur & Directeur Général",
    tags: ["Développement des entrepreneurs", "Marketing digital", "Business en ligne", "Transformation digitale"],
    photo: fondateurPhoto,
    photoPosition: "object-top",
  },
  {
    name: "Ibrahima Diagne",
    role: "Directeur des Relations Internationales",
    tags: ["Mobilité internationale", "Orientation académique", "Stratégie de projet", "Accompagnement international"],
    photo: ibrahimaDiagnePhoto,
    photoPosition: "object-[center_40%]",
  },
];

const teamRoles = [
  { label: "Consultants", icon: Users },
  { label: "Développeurs", icon: Code },
  { label: "Community Managers", icon: MessageCircle },
  { label: "Vidéastes", icon: Video },
  { label: "Créateurs de contenu", icon: PenTool },
  { label: "Partenaires internationaux", icon: Globe },
];

const promises = [
  "Des informations vérifiées",
  "Des conseils personnalisés",
  "Une approche basée sur la réalité",
  "Un accompagnement structuré",
];

const neverPromise = ["Un visa garanti", "Une admission garantie", "Un emploi garanti", "Un résultat qui dépend d'une administration ou d'un établissement"];

const manifesto = [
  "Nous préférons préparer un projet pendant six mois plutôt que promettre un départ en six semaines.",
  "Nous croyons que l'information vaut plus qu'une promesse.",
  "Nous renforçons des profils. Nous n'habillons pas des dossiers.",
  "Nous ne vendons pas un visa. Nous construisons un dossier qui a une chance d'aboutir.",
  "Une bonne préparation coûte du temps. Une mauvaise préparation coûte de l'argent — et parfois un projet entier.",
  "Nous préférons dire la vérité sur un projet fragile plutôt que vendre un espoir fragile.",
  "Un raccourci n'a jamais construit un dossier solide.",
  "Nous accompagnons des personnes, pas des dossiers anonymes.",
  "Ce que nous ne pouvons pas garantir, nous ne le promettons jamais.",
  "Notre réussite se mesure à la solidité des projets que nous accompagnons, pas à la rapidité de nos promesses.",
];

const AboutPage = () => {
  const seo = SEO_CONFIG.about;

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} canonicalPath={seo.canonicalPath} keywords={seo.keywords} />

      <div className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative py-20 pt-32 md:py-28 md:pt-40 overflow-hidden">
          <div className="container relative z-10">
            <BackButton />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <span className="badge-accent mb-6 inline-block">À propos de Sen'Optima Consulting</span>
              <h1 className="text-headline text-foreground mb-6">
                Nous préparons des personnes. <span className="italic text-accent">Pas seulement des dossiers.</span>
              </h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
                Notre conviction est simple : un projet solide commence toujours par une personne bien préparée.
                <br />
                Pas par une promesse. Pas par un raccourci.
              </p>
              <Button asChild size="lg" variant="hero">
                <a href="#notre-philosophie">
                  Découvrir notre méthode
                  <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* NOTRE HISTOIRE */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-accent mb-6 inline-block">Notre histoire</span>
              <h2 className="text-headline text-foreground mb-8">
                Pourquoi Sen'Optima <span className="italic text-accent">est née.</span>
              </h2>
              <div className="space-y-5 text-body-lg text-muted-foreground leading-relaxed">
                <p>Sen'Optima Consulting est née d'un constat simple.</p>
                <p>
                  Chaque année, des milliers de jeunes investissent leur argent dans des projets de mobilité
                  internationale ou de création d'entreprise sans disposer des bonnes informations.
                </p>
                <p>
                  Certains suivent des conseils trouvés sur les réseaux sociaux.
                  <br />
                  D'autres font confiance à des intermédiaires qui promettent des résultats impossibles.
                </p>
                <p>
                  Beaucoup perdent du temps. Beaucoup perdent de l'argent.
                  <br />
                  Parfois plusieurs millions de francs CFA.
                </p>
                <p className="text-foreground font-semibold">Nous avons choisi une autre approche.</p>
                <div className="border-l-4 border-accent pl-5 space-y-2 text-foreground">
                  <p>Avant de parler de procédures, nous parlons de préparation.</p>
                  <p>Avant de parler de départ, nous parlons de projet.</p>
                  <p>Avant de parler de réussite, nous parlons de réalité.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container">
            <PhotoPlaceholder label="[PHOTO — POURQUOI SEN'OPTIMA EST NÉE]" aspect="aspect-[21/9]" className="max-w-5xl mx-auto" />
          </div>
        </section>

        {/* LE FONDATEUR */}
        <section className="py-16 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <img
                  src={fondateurPhoto}
                  alt="Mandiaye Sylla, fondateur de Sen'Optima Consulting"
                  className="w-full aspect-[3/4] object-cover object-top rounded-[2rem] border-2 border-accent/30"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <span className="badge-accent mb-6 inline-block">Le fondateur</span>
                <h2 className="text-title text-foreground mb-6">
                  Un parcours construit sur <span className="italic text-accent">l'expérience du terrain.</span>
                </h2>
                <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
                  <p>
                    Avant de créer Sen'Optima Consulting, j'ai travaillé comme responsable commercial dans une agence
                    spécialisée dans la mobilité internationale.
                  </p>
                  <p>
                    Cette expérience m'a permis de comprendre les attentes des candidats, mais également les
                    nombreuses erreurs qui conduisent à l'échec d'un projet.
                  </p>
                  <p>
                    J'ai vu des personnes investir des sommes importantes dans des démarches mal préparées.
                    <br />
                    J'ai vu des dossiers montés sans véritable stratégie.
                  </p>
                  <p className="text-foreground font-semibold">
                    J'ai surtout compris qu'un bon accompagnement ne consiste pas à vendre un voyage.
                    <br />
                    Il consiste à préparer une personne.
                  </p>
                  <p>C'est cette conviction qui a donné naissance à Sen'Optima Consulting.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LES DEUX FONDATEURS */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
              <span className="badge-accent mb-6 inline-block">Deux fondateurs, une vision</span>
              <h2 className="text-headline text-foreground">
                Deux expertises, <span className="italic text-accent">une même méthode.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-cream overflow-hidden"
                >
                  {founder.photo ? (
                    <img src={founder.photo} alt={founder.name} className={`w-full aspect-[4/3] object-cover ${founder.photoPosition}`} />
                  ) : (
                    <PhotoPlaceholder label={`[PHOTO — ${founder.name.toUpperCase()}]`} aspect="aspect-[4/3]" className="rounded-none border-0" />
                  )}
                  <div className="p-8">
                    <h3 className="text-title text-foreground mb-1">{founder.name}</h3>
                    <p className="text-sm text-accent font-medium mb-5">{founder.role}</p>
                    <div className="flex flex-wrap gap-2">
                      {founder.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full border border-border text-xs text-foreground/70 bg-background">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-body-lg text-foreground font-semibold mt-12 max-w-xl mx-auto leading-relaxed"
            >
              Deux expertises complémentaires.
              <br />
              <span className="text-accent">Une même vision : construire des projets durables.</span>
            </motion.p>
          </div>
        </section>

        {/* NOTRE PHILOSOPHIE */}
        <section id="notre-philosophie" className="py-20 md:py-32 scroll-mt-24">
          <div className="container max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="badge-accent mb-6 inline-block">Notre philosophie</span>
              <h2 className="text-headline text-foreground leading-tight">
                Nous refusons <span className="italic text-accent">les raccourcis.</span>
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mb-10">
              <p className="text-body-lg text-muted-foreground text-center mb-8">Nous croyons :</p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                {["à la préparation", "à la transparence", "à l'éducation", "à la responsabilité"].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 card-cream">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-body text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="border-l-4 border-accent pl-5">
              <p className="text-body text-muted-foreground leading-relaxed mb-2">
                Nous ne promettons jamais une décision qui appartient aux autorités compétentes.
              </p>
              <p className="text-body font-semibold text-foreground leading-relaxed">
                Nous promettons en revanche un accompagnement sérieux, structuré et honnête.
              </p>
            </motion.div>
          </div>
        </section>

        {/* NOTRE ÉQUIPE */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="badge-accent mb-6 inline-block">Notre équipe</span>
                <h2 className="text-title text-foreground mb-6">
                  Une organisation <span className="italic text-accent">professionnelle.</span>
                </h2>
                <p className="text-body text-muted-foreground leading-relaxed mb-6">
                  Autour des fondateurs, Sen'Optima rassemble des profils complémentaires :
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {teamRoles.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3 text-sm text-foreground bg-background rounded-full border border-border pl-1.5 pr-4 py-1.5"
                    >
                      <span className="w-8 h-8 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  Chaque membre intervient dans son domaine d'expertise afin d'offrir une expérience cohérente et
                  professionnelle.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <PhotoPlaceholder label="[PHOTO ÉQUIPE SEN'OPTIMA]" aspect="aspect-[4/3]" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* NOTRE MISSION */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
              <span className="badge-accent mb-6 inline-block">Notre mission</span>
              <h2 className="text-headline text-foreground">
                Deux missions, <span className="italic text-accent">une méthode.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 card-cream">
                <h3 className="text-title text-foreground mb-4">Mobilité Internationale</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Permettre aux étudiants, travailleurs et familles de construire un projet international crédible,
                  documenté et réaliste.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 card-cream">
                <h3 className="text-title text-foreground mb-4">Développement Business</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Former une nouvelle génération d'entrepreneurs capables de créer des entreprises structurées,
                  rentables et durables.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NOTRE ENGAGEMENT */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
              <span className="badge-accent mb-6 inline-block">Notre engagement</span>
              <h2 className="text-headline text-foreground">
                Ce que nous <span className="italic text-accent">promettons.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-title text-foreground mb-5">Nous promettons</h3>
                <ul className="space-y-3">
                  {promises.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body text-foreground">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h3 className="text-title text-foreground mb-5">Nous ne promettons jamais</h3>
                <ul className="space-y-3">
                  {neverPromise.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body text-muted-foreground">
                      <X className="w-5 h-5 text-destructive/70 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-l-4 border-accent pl-5">
              <p className="text-body text-muted-foreground leading-relaxed mb-2">
                Notre engagement porte sur la qualité de notre accompagnement.
              </p>
              <p className="text-body font-semibold text-foreground leading-relaxed">
                Les décisions finales appartiennent toujours aux autorités compétentes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CHIFFRE CLÉ / OBJECTIF */}
        <section className="py-20 md:py-32 bg-foreground">
          <div className="container max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary/50 mb-6 inline-block">
                Notre objectif
              </span>
              <p className="text-2xl md:text-4xl font-heading font-bold text-primary leading-tight">
                Former des <span className="text-accent">milliers</span> de jeunes africains à construire des
                projets solides — plutôt que de poursuivre des promesses irréalistes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MANIFESTE */}
        <section className="py-20 md:py-32">
          <div className="container max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="badge-accent mb-6 inline-block">Notre manifeste</span>
              <h2 className="text-headline text-foreground">
                Ce en quoi nous <span className="italic text-accent">croyons.</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {manifesto.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="text-lg md:text-xl text-foreground leading-relaxed text-center border-b border-border/50 pb-8 last:border-0"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 md:py-32 bg-secondary/20">
          <div className="container max-w-xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-headline text-foreground mb-8">
                Vous avez un projet ? <span className="italic text-accent">Discutons-en.</span>
              </h2>
              <Button asChild size="lg" variant="hero">
                <Link to="/rendez-vous-decouverte">
                  Réserver un rendez-vous découverte
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

export default AboutPage;
