/**
 * Études de cas — Sen'Optima Consulting.
 *
 * Règle stricte : uniquement des collaborations réelles et documentées, ou
 * des méthodologies génériques honnêtement présentées comme telles.
 * Jamais de client fictif, jamais de métrique inventée, jamais de stack
 * technique précis pour un projet dont on n'est pas certain de la stack.
 */
import imgDekkuwaay from "@/assets/projets/dekkuwaay.png";
import imgP3 from "@/assets/projets/p3.png";
import imgGhmTransport from "@/assets/projets/ghm_Transport.png";
import imgMusee from "@/assets/projets/musee.png";
import imgSenOptimaSite from "@/assets/projets/senoptima-site.jpg";
import imgAcademyIdentity from "@/assets/academy-business-launch.jpg";

export type ProjectCategory = "projet" | "concept" | "cas-etude";

export interface PortfolioProject {
  id: string;
  slug: string;
  category: ProjectCategory;
  /** True for generic methodology write-ups that aren't tied to a real named client engagement. */
  isMethodologyGuide?: boolean;
  image?: string;
  title: string;
  sector: string;
  typeLabel: string;
  description: string;
  /** "Notre intervention" — disciplines mobilized, not a sentence. */
  intervention: string[];
  /** Honest, non-numeric results — real delivered features, never invented metrics. */
  results: string[];
  /** Only technologies we're actually certain about. Leave generic if unverified. */
  technologies: string[];
  context: string;
  problematique: string;
  approche: string[];
  url?: string;
  screenshots: string[];
}

export const categoryLabels: Record<ProjectCategory, { title: string; subtitle: string }> = {
  projet: {
    title: "Nos projets",
    subtitle: "Les projets réellement terminés.",
  },
  concept: {
    title: "Nos concepts",
    subtitle: "Ce que nous construisons, en ce moment, pour notre propre cabinet.",
  },
  "cas-etude": {
    title: "Cas d'étude",
    subtitle: "Notre méthode appliquée à des situations concrètes.",
  },
};

export const portfolioProjects: PortfolioProject[] = [
  // ---- NOS PROJETS (réellement terminés) ----
  {
    id: "1",
    slug: "ghm-transport",
    category: "projet",
    image: imgGhmTransport,
    title: "GHM Transport",
    sector: "Transport",
    typeLabel: "Site vitrine premium",
    description: "Site vitrine pour une entreprise de location de véhicules active depuis 2015 à Dakar.",
    intervention: ["Stratégie", "UX/UI", "Développement", "Contenu"],
    results: ["Site responsive", "Présentation claire de la flotte", "Formulaire de contact fonctionnel"],
    technologies: ["Site web responsive", "Hébergement web"],
    context:
      "GHM (Gaston Hélène Mendy) loue des véhicules à Dakar depuis 2015, avec une approche familiale et un service client attentif. L'entreprise avait besoin d'une présence en ligne à la hauteur de sa réputation locale.",
    problematique:
      "Une entreprise reconnue localement, mais sans vitrine en ligne pour convertir sa réputation en visibilité et en contacts qualifiés.",
    approche: [
      "Un site vitrine simple, rapide et facile à mettre à jour",
      "Une présentation claire des services et de la flotte",
      "Un parcours de contact direct, sans friction",
    ],
    url: "https://ghmtransports.com/",
    screenshots: [imgGhmTransport],
  },
  {
    id: "2",
    slug: "musee-civilisations-noires",
    category: "projet",
    image: imgMusee,
    title: "Site Musée des Civilisations Noires",
    sector: "Culture",
    typeLabel: "Site institutionnel",
    description: "Site présentant l'histoire et les collections du musée, avec une visite virtuelle.",
    intervention: ["UX/UI", "Développement", "Contenu"],
    results: ["Visite virtuelle intégrée", "Navigation par thématique", "Déploiement stable sur Netlify"],
    technologies: ["Site statique", "Netlify"],
    context:
      "Le musée des Civilisations Noires souhaitait un site capable de valoriser ses collections et son histoire pour un public en ligne, au-delà de la visite physique.",
    problematique: "Rendre un patrimoine culturel dense accessible et engageant pour un visiteur en ligne.",
    approche: [
      "Une structure de navigation claire par thématique",
      "Une visite virtuelle intégrée",
      "Un design sobre qui met les contenus en avant",
    ],
    url: "https://mcn-museedescivilisationsnoires.netlify.app/",
    screenshots: [imgMusee],
  },
  {
    id: "3",
    slug: "boulangerie",
    category: "projet",
    image: imgP3,
    title: "Site de Boulangerie",
    sector: "Commerce",
    typeLabel: "Vitrine e-commerce",
    description: "Vitrine en ligne permettant aux clients de consulter les produits et passer commande.",
    intervention: ["UX/UI", "Développement"],
    results: ["Catalogue produits en ligne", "Parcours de commande simplifié"],
    technologies: ["Catalogue produits", "Prise de commande en ligne"],
    context: "Une boulangerie souhaitant permettre à ses clients de découvrir ses produits et de commander en ligne.",
    problematique: "Donner à une clientèle de proximité un moyen simple de découvrir les produits et de commander sans friction.",
    approche: ["Un catalogue produits clair et appétissant", "Un parcours de commande en quelques clics"],
    screenshots: [imgP3],
  },
  {
    id: "4",
    slug: "dekkuwaay",
    category: "projet",
    image: imgDekkuwaay,
    title: "Dekkuwaay",
    sector: "Immobilier",
    typeLabel: "Plateforme immobilière",
    description: "Application web complète de gestion immobilière : bâtiments, locataires, loyers, rendez-vous.",
    intervention: ["Stratégie", "UX/UI", "Développement", "Administration système"],
    results: [
      "Dashboard de gestion centralisé",
      "Génération automatique de quittances PDF",
      "Interface multi-rôles (admin, agent, client)",
      "Carte interactive des biens",
    ],
    technologies: ["Application web full-stack", "Génération de documents PDF", "Cartographie interactive"],
    context:
      "Un projet de gestion immobilière au Sénégal avait besoin d'un outil centralisant la gestion des bâtiments, des appartements, des locataires et des loyers — un ensemble de tâches habituellement dispersées entre plusieurs fichiers et échanges manuels.",
    problematique:
      "Centraliser une gestion locative éclatée entre plusieurs outils, sans complexifier l'usage quotidien pour chaque profil (admin, agent, client).",
    approche: [
      "Une architecture multi-rôles avec des permissions adaptées à chaque profil",
      "Un système de génération automatique de quittances",
      "Une carte interactive pour localiser les biens",
      "Un module de prise de rendez-vous en ligne intégré au parcours locataire",
    ],
    screenshots: [imgDekkuwaay],
  },

  // ---- NOS CONCEPTS (en cours de développement, projets internes) ----
  {
    id: "5",
    slug: "plateforme-senoptima",
    category: "concept",
    image: imgSenOptimaSite,
    title: "Plateforme Sen'Optima Consulting",
    sector: "Projet interne",
    typeLabel: "Plateforme du cabinet",
    description: "Le site que vous consultez actuellement — conçu, développé et fait évoluer en interne.",
    intervention: ["Design", "Développement", "Architecture de contenu"],
    results: ["Parcours clair entre les deux pôles d'expertise", "Système de design cohérent", "Plateforme rapide et évolutive"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    context:
      "Sen'Optima Consulting a fait le choix de concevoir et développer sa propre plateforme en interne, plutôt que de la sous-traiter — une manière de rester alignés avec l'exigence que nous demandons à nos clients.",
    problematique: "Faire évoluer le site en continu, au rythme des décisions stratégiques du cabinet, sans dépendre d'un prestataire externe.",
    approche: [
      "Une architecture de composants réutilisables pour itérer rapidement",
      "Un système de design cohérent (bleu marine, blanc, or)",
      "Des parcours de contact simples, sans friction inutile",
    ],
    screenshots: [imgSenOptimaSite],
  },
  {
    id: "6",
    slug: "senoptima-academy",
    category: "concept",
    image: imgAcademyIdentity,
    title: "Sen'Optima Academy",
    sector: "Projet interne",
    typeLabel: "Programme de formation",
    description: "Identité et supports des deux programmes de formation Business Launch et Profil International.",
    intervention: ["Direction artistique", "Conception pédagogique"],
    results: ["Identité de marque dédiée", "Supports cohérents en présentiel et en ligne"],
    technologies: ["Identité de marque", "Supports imprimés et digitaux"],
    context:
      "Le lancement de Sen'Optima Academy nécessitait une identité visuelle propre, cohérente avec le cabinet mais suffisamment distincte pour exister comme un programme de formation à part entière.",
    problematique: "Rester cohérent avec l'identité du cabinet tout en donnant sa propre voix à l'Academy.",
    approche: [
      "Une déclinaison graphique dédiée aux supports de formation",
      "Des visuels utilisés aussi bien en présentiel (roll-up, affiches) qu'en ligne",
    ],
    screenshots: [imgAcademyIdentity],
  },

  // ---- CAS D'ÉTUDE (méthodologie, pas un client nommé) ----
  {
    id: "7",
    slug: "structurer-projet-etudes-canada",
    category: "cas-etude",
    isMethodologyGuide: true,
    title: "Comment structurer un projet d'études au Canada",
    sector: "Mobilité Internationale",
    typeLabel: "Méthodologie",
    description: "Notre approche pour transformer une envie d'études à l'étranger en un dossier cohérent.",
    intervention: ["Diagnostic de profil", "Orientation", "Préparation documentaire"],
    results: [],
    technologies: [],
    context:
      "C'est l'une des situations les plus fréquentes que nous rencontrons : une personne motivée pour étudier au Canada, mais sans méthode claire pour évaluer si son projet est réaliste ni pour le construire correctement.",
    problematique:
      "Les erreurs les plus fréquentes viennent d'un dossier incohérent : un établissement ou un programme mal choisi, des preuves financières mal préparées, ou une démarche lancée avant d'avoir clarifié l'objectif réel.",
    approche: [
      "Diagnostic du profil : parcours, situation financière, objectifs",
      "Choix d'un pays et d'un parcours réellement cohérents avec ce profil",
      "Préparation méthodique des documents et justificatifs, sans raccourci",
      "Renforcement des points faibles identifiés avant tout dépôt de dossier",
    ],
    screenshots: [],
  },
  {
    id: "8",
    slug: "digitaliser-une-pme",
    category: "cas-etude",
    isMethodologyGuide: true,
    title: "Comment digitaliser une PME",
    sector: "Développement des Entreprises",
    typeLabel: "Méthodologie",
    description: "Notre approche pour donner à une activité existante une présence digitale qui convertit.",
    intervention: ["Diagnostic digital", "Stratégie", "Mise en œuvre"],
    results: [],
    technologies: [],
    context:
      "Beaucoup de PME sénégalaises ont une activité réelle et des clients, mais une présence digitale dispersée : une page Facebook peu active, aucun site, aucune stratégie de contenu cohérente.",
    problematique:
      "La difficulté n'est pas le manque d'outils, mais l'absence de priorité claire : sans stratégie, chaque nouvel outil ajoute de la dispersion plutôt que de la visibilité.",
    approche: [
      "Diagnostic de l'existant : ce qui fonctionne déjà, ce qui est dispersé",
      "Définition d'une stratégie digitale priorisée plutôt qu'une liste d'outils",
      "Mise en place progressive : site, réseaux sociaux, automatisation",
      "Transfert de méthode pour que l'équipe puisse maintenir le système",
    ],
    screenshots: [],
  },
  {
    id: "9",
    slug: "formaliser-une-activite",
    category: "cas-etude",
    isMethodologyGuide: true,
    title: "Comment formaliser une activité",
    sector: "Développement des Entreprises",
    typeLabel: "Méthodologie",
    description: "Notre approche pour faire passer une activité informelle à un statut structuré et crédible.",
    intervention: ["Diagnostic administratif", "Accompagnement"],
    results: [],
    technologies: [],
    context:
      "De nombreux entrepreneurs opèrent avec une activité réelle et rentable, mais sans statut légal — ce qui limite leur crédibilité auprès des partenaires, des banques et de futurs clients.",
    problematique:
      "La formalisation est souvent perçue comme complexe ou coûteuse, ce qui pousse à la repousser indéfiniment — au prix d'opportunités manquées.",
    approche: [
      "État des lieux de l'activité et des besoins réels de formalisation",
      "Accompagnement pour le registre de commerce et le NINEA",
      "Mise en place d'un compte bancaire professionnel",
      "Organisation documentaire pour sécuriser l'activité dans la durée",
    ],
    screenshots: [],
  },
];

export const getProjectBySlug = (slug: string) => portfolioProjects.find((p) => p.slug === slug);
