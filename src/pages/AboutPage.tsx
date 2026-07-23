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
import ReadMore from "@/components/ReadMore";

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
  "Une stratégie adaptée",
  "Une entreprise plus crédible",
  "Une meilleure organisation",
  "Des décisions éclairées",
];

const neverPromise = ["Un visa garanti", "Une admission garantie", "Un emploi garanti", "Un résultat qui dépend d'une administration ou d'un établissement"];

const manifesto = [
  "Nous préférons construire une entreprise pendant plusieurs mois plutôt que promettre des résultats en quelques semaines.",
  "Nous croyons que l'information vaut plus qu'une promesse.",
  "Nous renforçons des profils. Nous n'habillons pas des dossiers.",
  "Nous ne vendons pas une solution miracle. Nous construisons une stratégie durable.",
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
              <span className="badge-accent mb-6 inline-block">À propos de Sen'Optima</span>
              <h1 className="text-headline text-foreground mb-6">
                Nous construisons des entreprises solides. <span className="italic text-accent">Nous ouvrons ensuite les bonnes opportunités.</span>
              </h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
                Chez Sen'Optima Consulting, nous accompagnons les entrepreneurs, les professionnels et
                les organisations à structurer leurs activités, accélérer leur développement et accéder
                à des opportunités nationales et internationales.
                <br />
                <br />
                Notre métier ne consiste pas seulement à accompagner un projet. Nous construisons les
                fondations qui permettront à ce projet de réussir durablement.
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
                Pourquoi Sen'Optima <span className="italic text-accent">existe.</span>
              </h2>
              <ReadMore collapsedHeight={210} fadeFrom="from-secondary/30" className="text-body-lg text-muted-foreground leading-relaxed">
                <div className="space-y-5">
                  <p>Nous avons créé Sen'Optima après avoir constaté une réalité simple.</p>
                  <p>
                    Beaucoup d'entrepreneurs veulent développer leur activité.
                    <br />
                    Beaucoup de professionnels souhaitent évoluer.
                    <br />
                    Beaucoup rêvent d'étudier, travailler ou investir à l'international.
                  </p>
                  <p>Mais peu disposent d'une stratégie solide.</p>
                  <p className="text-foreground font-semibold">
                    Nous avons donc créé un cabinet capable d'accompagner un projet dans sa globalité.
                  </p>
                  <p>De la structuration de l'entreprise jusqu'à l'ouverture vers les opportunités internationales.</p>
                  <div className="border-l-4 border-accent pl-5 space-y-2 text-foreground">
                    <p>Nous croyons qu'une entreprise solide crée naturellement de nouvelles opportunités.</p>
                    <p>Avant de chercher des clients, nous structurons votre activité.</p>
                    <p>Avant de lancer des campagnes, nous clarifions votre stratégie.</p>
                    <p>Avant de penser à l'international, nous consolidons votre crédibilité.</p>
                  </div>
                </div>
              </ReadMore>
            </motion.div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container">
            <PhotoPlaceholder label="[PHOTO — POURQUOI SEN'OPTIMA EXISTE]" aspect="aspect-[21/9]" className="max-w-5xl mx-auto" />
          </div>
        </section>

        {/* LE FONDATEUR */}
        <section className="py-16 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <img
                  src={fondateurPhoto}
                  alt="Mandiaye Sylla, fondateur de Sen'Optima Consulting"
                  className="w-full aspect-[3/4] object-cover object-top rounded-[2rem] border-2 border-accent/30"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <span className="badge-accent mb-6 inline-block">L'origine de notre méthode</span>
                <h2 className="text-title text-foreground mb-6">
                  Mon <span className="italic text-accent">parcours.</span>
                </h2>
                <ReadMore collapsedHeight={190} fadeFrom="from-background" className="text-body text-muted-foreground leading-relaxed">
                  <div className="space-y-4">
                    <p>
                      Depuis l'âge de 12 ans, le commerce fait partie de ma vie. Grandir dans une famille de
                      commerçants m'a appris très tôt à vendre, négocier et comprendre les besoins des clients.
                    </p>
                    <p>
                      En 2020, alors que je préparais le baccalauréat, un grave accident de moto m'a laissé
                      immobilisé pendant près de six mois. Ce qui semblait être la fin de mes projets est devenu le
                      début d'une nouvelle aventure.
                    </p>
                    <p>
                      Avec un téléphone, une connexion Internet et beaucoup de discipline, je me suis formé au
                      marketing digital, au business et aux métiers du numérique grâce à des plateformes comme
                      Google, Coursera, OpenClassrooms et de nombreuses ressources spécialisées. J'ai ensuite
                      appliqué ces compétences sur le terrain en développant plusieurs projets entrepreneuriaux,
                      notamment dans le e-commerce et le marketing digital.
                    </p>
                    <p>
                      Par la suite, j'ai rejoint une agence spécialisée dans la mobilité internationale, où j'ai
                      évolué de community manager à responsable commercial. Cette expérience m'a permis
                      d'accompagner des centaines de candidats et de comprendre une réalité essentielle : la plupart
                      des échecs ne viennent pas d'un manque d'ambition, mais d'un manque de préparation, de
                      stratégie et d'informations fiables.
                    </p>
                    <p className="text-foreground font-semibold">C'est cette conviction qui a donné naissance à Sen'Optima Consulting.</p>
                    <p>
                      Aujourd'hui, notre mission est d'aider les entrepreneurs, les professionnels et les porteurs de
                      projet à construire des bases solides, développer leur activité grâce au digital et saisir des
                      opportunités, au Sénégal comme à l'international.
                    </p>
                  </div>
                </ReadMore>
                <div className="border-l-4 border-accent pl-5 mt-6 space-y-2">
                  <p className="text-body text-foreground font-semibold leading-relaxed">
                    Je préfère perdre un client plutôt que de lui vendre une illusion.
                  </p>
                  <p className="text-body text-muted-foreground italic leading-relaxed">
                    "Parce que je suis convaincu d'une chose : ce ne sont ni les origines ni les diplômes qui
                    déterminent un avenir, mais la discipline, l'apprentissage continu et la capacité à construire
                    un projet solide."
                  </p>
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
              <h2 className="text-headline text-foreground mb-6">
                Deux pôles, <span className="italic text-accent">une seule vision.</span>
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                Notre complémentarité nous permet d'accompagner un projet depuis sa structuration
                jusqu'à son développement international.
              </p>
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
              Deux pôles complémentaires.
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
                Nous croyons à la <span className="italic text-accent">croissance durable.</span>
              </h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mb-10">
              <p className="text-body-lg text-muted-foreground text-center mb-8">Nous croyons :</p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                {["à la structuration", "à l'organisation", "à la digitalisation", "à la transparence", "à la responsabilité", "à l'excellence"].map((item) => (
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
                <p className="text-body-lg text-foreground leading-relaxed mb-4">
                  Des experts mobilisés autour d'un objectif commun : faire grandir les entreprises et
                  accompagner les projets internationaux avec méthode.
                </p>
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
          <div className="container max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
              <span className="badge-accent mb-6 inline-block">Notre mission</span>
              <h2 className="text-headline text-foreground">
                Trois piliers, <span className="italic text-accent">une méthode.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 card-cream">
                <h3 className="text-title text-foreground mb-4">Développement Business</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Former une nouvelle génération d'entrepreneurs capables de créer des entreprises structurées,
                  rentables et durables.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 card-cream">
                <h3 className="text-title text-foreground mb-4">Transformation Digitale</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Accompagner la digitalisation des entreprises : présence en ligne, outils numériques et
                  automatisation, pour gagner en efficacité et en crédibilité.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-8 card-cream">
                <h3 className="text-title text-foreground mb-4">Mobilité Internationale</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Accompagner les projets d'études, de travail ou d'installation à l'étranger, une fois qu'un
                  profil ou une activité crédible est construit.
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
                Construire une nouvelle génération d'entreprises africaines <span className="text-accent">solides, innovantes et ouvertes sur le monde.</span>
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
              <h2 className="text-headline text-foreground mb-6">
                Construisons votre <span className="italic text-accent">prochain projet.</span>
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
                Que vous souhaitiez structurer votre entreprise, accélérer votre développement digital
                ou préparer un projet international, nous sommes prêts à vous accompagner.
              </p>
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
