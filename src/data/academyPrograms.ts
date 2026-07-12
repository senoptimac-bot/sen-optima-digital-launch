import businessLaunchImage from "@/assets/academy-business-launch.jpg";
import profilInternationalImage from "@/assets/academy-profil-international.jpg";

export interface AcademyModule {
  title: string;
  points: string[];
  note?: string;
}

export interface AcademyFaqItem {
  question: string;
  answer: string;
}

export interface AcademyProgram {
  slug: "business-launch" | "profil-international";
  track: "business" | "mobilite";
  programNumber: "01" | "02";
  title: string;
  tagline: string;
  audienceIntro: string;
  positioningNote: [string, string];
  image: string;
  imageAlt: string;
  modules: AcademyModule[];
  outcomes: string[];
  includes: string[];
  audienceCards: string[];
  notForYou: string[];
  forYou: string[];
  week: { day: string; title: string }[];
  faq: AcademyFaqItem[];
}

export const businessLaunchProgram: AcademyProgram = {
  slug: "business-launch",
  track: "business",
  programNumber: "01",
  title: "Business Launch",
  tagline: "Créer un business en ligne rentable.",
  audienceIntro:
    "Jeunes de 18 à 35 ans souhaitant créer une activité en ligne ou développer un projet existant, avec un intérêt particulier pour l'e-commerce.",
  positioningNote: [
    "L'objectif n'est pas simplement d'apprendre le commerce en ligne.",
    "L'objectif est de repartir avec une méthode de travail claire.",
  ],
  image: businessLaunchImage,
  imageAlt: "Formateur Sen'Optima Consulting animant une session Business Launch devant un groupe de participants",
  modules: [
    {
      title: "Choisir un business réellement rentable",
      points: [
        "Comprendre le marché sénégalais",
        "Identifier les besoins réels",
        "Trouver un produit rentable",
        "Éviter les erreurs des débutants",
      ],
    },
    {
      title: "Construire son modèle économique",
      points: ["Définir son offre", "Calculer ses marges", "Déterminer ses prix", "Organiser son activité"],
    },
    {
      title: "Créer son système de vente",
      points: ["Facebook", "TikTok", "WhatsApp Business", "Site internet", "Tunnel de vente"],
      note: "Objectif : créer un système capable de générer des commandes.",
    },
    {
      title: "Marketing Digital",
      points: ["Création de contenus", "Publicités Facebook", "TikTok organique", "Storytelling", "Image de marque"],
    },
    {
      title: "Intelligence Artificielle",
      points: ["Écrire", "Vendre", "Créer des visuels", "Répondre aux clients", "Gagner du temps", "Automatiser certaines tâches"],
      note: "Utiliser l'IA pour aller plus vite, sans perdre en qualité.",
    },
    {
      title: "Livraison et service client",
      points: ["Organisation des commandes", "Gestion des paiements", "Livraison", "Fidélisation"],
    },
    {
      title: "Formaliser son activité",
      points: ["Registre de commerce", "NINEA", "Compte bancaire professionnel", "Gestion documentaire", "Crédibilité"],
      note: "Le point que la plupart des jeunes ignorent.",
    },
  ],
  outcomes: [
    "Identifier une opportunité rentable.",
    "Construire une offre claire.",
    "Lancer une boutique ou un système de vente.",
    "Utiliser les réseaux sociaux pour vendre.",
    "Exploiter l'IA pour gagner du temps.",
    "Structurer son activité de manière professionnelle.",
  ],
  includes: [
    "Support numérique",
    "Groupe WhatsApp privé",
    "Exercices pratiques",
    "Études de cas",
    "Attestation de participation",
    "Questions / réponses après la formation",
  ],
  audienceCards: ["Étudiant", "Salarié", "Entrepreneur", "Porteur de projet"],
  notForYou: [
    "Vous cherchez un revenu sans effort.",
    "Vous ne souhaitez pas passer à l'action.",
    "Vous recherchez une solution miracle.",
  ],
  forYou: [
    "Vous voulez lancer votre premier business.",
    "Vous voulez vendre sur Internet.",
    "Vous souhaitez structurer votre activité.",
    "Vous voulez apprendre une méthode.",
  ],
  week: [
    { day: "Jour 1", title: "Fondamentaux" },
    { day: "Jour 2", title: "Business Model" },
    { day: "Jour 3", title: "Marketing" },
    { day: "Jour 4", title: "Intelligence Artificielle" },
    { day: "Jour 5", title: "Ateliers pratiques" },
    { day: "Jour 6", title: "Corrections" },
    { day: "Jour 7", title: "Plan d'action" },
  ],
  faq: [
    {
      question: "Combien de participants par session ?",
      answer: "10 à 20 participants maximum, pour garantir des échanges de qualité.",
    },
    {
      question: "Quels sont les prérequis ?",
      answer:
        "Aucun prérequis technique. Le programme s'adresse aux débutants comme aux personnes ayant déjà commencé une activité.",
    },
    {
      question: "Faut-il déjà avoir un business ?",
      answer: "Non. Vous pouvez venir avec une idée, un projet en cours, ou simplement l'envie de vous lancer.",
    },
    {
      question: "Comment réserver ma place ?",
      answer:
        "En cliquant sur « Je réserve ma place » : vous serez redirigé vers WhatsApp pour confirmer votre inscription et connaître la prochaine session disponible.",
    },
  ],
};

export const profilInternationalProgram: AcademyProgram = {
  slug: "profil-international",
  track: "mobilite",
  programNumber: "02",
  title: "Profil International",
  tagline: "Construire un projet crédible avant toute démarche.",
  audienceIntro:
    "Étudiants, professionnels, entrepreneurs souhaitant préparer un projet sérieux d'études, de travail ou d'installation à l'étranger.",
  positioningNote: [
    "Cette formation n'enseigne pas comment obtenir un visa.",
    "Elle enseigne comment construire un profil crédible.",
  ],
  image: profilInternationalImage,
  imageAlt: "Consultant Sen'Optima Consulting échangeant avec un participant, programme Profil International",
  modules: [
    {
      title: "Comprendre la mobilité internationale",
      points: ["Les différents projets possibles", "Études", "Travail", "Immigration", "Les réalités"],
    },
    {
      title: "Construire un projet cohérent",
      points: ["Choisir son objectif", "Choisir son pays", "Choisir son parcours"],
    },
    {
      title: "Construire un profil crédible",
      points: ["Selon votre situation : étudiant", "Salarié", "Entrepreneur"],
      note: "Les éléments qui renforcent réellement un dossier.",
    },
    {
      title: "Documents et preuves",
      points: ["Revenus", "Activité", "Comptes bancaires", "Historique", "Justificatifs"],
      note: "Sans fraude. Sans faux documents. Sans raccourcis.",
    },
    {
      title: "Les erreurs qui provoquent les refus",
      points: ["Dossiers incohérents", "Mauvais choix", "Documents faibles", "Mauvaises stratégies"],
    },
    {
      title: "Reconnaître les arnaques",
      points: ["Faux agents", "Faux consultants", "Fausses promesses", "Faux visas", "Faux employeurs"],
      note: "Une partie essentielle du programme.",
    },
    {
      title: "Élaborer son plan de préparation",
      points: ["Sa feuille de route", "Les étapes à suivre", "Les documents à renforcer", "Les prochaines actions"],
    },
  ],
  outcomes: [
    "Évaluer la faisabilité de son projet.",
    "Choisir le bon parcours selon son profil.",
    "Comprendre les exigences documentaires.",
    "Éviter les erreurs qui conduisent aux refus.",
    "Identifier les arnaques et les fausses promesses.",
    "Construire une feuille de route réaliste avant toute démarche.",
  ],
  includes: [
    "Support numérique",
    "Groupe WhatsApp privé",
    "Exercices pratiques",
    "Études de cas",
    "Attestation de participation",
    "Questions / réponses après la formation",
  ],
  audienceCards: ["Étudiant", "Salarié", "Entrepreneur", "Porteur de projet"],
  notForYou: [
    "Vous cherchez une garantie de visa ou d'admission.",
    "Vous cherchez un raccourci ou un « arrangement ».",
    "Vous n'êtes pas prêt à travailler sérieusement sur votre dossier.",
  ],
  forYou: [
    "Vous voulez préparer un projet d'études, de travail ou d'installation à l'étranger.",
    "Vous voulez construire un dossier réellement crédible.",
    "Vous voulez éviter les erreurs et les arnaques les plus courantes.",
    "Vous voulez une méthode claire avant toute démarche.",
  ],
  week: [
    { day: "Jour 1", title: "Comprendre la mobilité internationale" },
    { day: "Jour 2", title: "Construire un projet cohérent" },
    { day: "Jour 3", title: "Construire un profil crédible" },
    { day: "Jour 4", title: "Documents et preuves" },
    { day: "Jour 5", title: "Erreurs et arnaques à éviter" },
    { day: "Jour 6", title: "Ateliers pratiques et étude de dossiers" },
    { day: "Jour 7", title: "Plan de préparation personnalisé" },
  ],
  faq: [
    {
      question: "Combien de participants par session ?",
      answer: "10 à 20 participants maximum, pour garantir des échanges de qualité.",
    },
    {
      question: "Quels sont les prérequis ?",
      answer: "Aucun prérequis. Le programme s'adresse à toute personne envisageant un projet international, même à un stade précoce.",
    },
    {
      question: "Faut-il déjà avoir choisi son pays ou son projet ?",
      answer: "Non. Une partie du programme vous aide justement à clarifier votre objectif et votre parcours.",
    },
    {
      question: "Comment réserver ma place ?",
      answer:
        "En cliquant sur « Je réserve ma place » : vous serez redirigé vers WhatsApp pour confirmer votre inscription et connaître la prochaine session disponible.",
    },
  ],
};
