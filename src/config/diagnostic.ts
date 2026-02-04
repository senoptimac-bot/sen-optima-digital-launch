/**
 * Configuration du Diagnostic de Structuration Business Premium
 */

import { DiagnosticQuestion, PricingConfig } from "@/types/diagnostic";

// Tarification
export const PRICING: PricingConfig = {
  normalPrice: 20000,
  launchPrice: 10000,
  currency: "FCFA",
};

// Les 30 questions divisées en 5 blocs de 6 questions
// Adaptées au contexte sénégalais et africain
export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  // ═══════════════════════════════════════════════════════
  // BLOC 1 - SITUATION ACTUELLE (6 questions)
  // ═══════════════════════════════════════════════════════
  {
    id: "q1",
    blockId: 1,
    blockName: "Situation actuelle",
    question: "Votre activité est-elle déjà lancée et opérationnelle ?",
    options: [
      { value: "yes", label: "Oui, elle tourne depuis plus de 6 mois", score: 3 },
      { value: "partial", label: "Oui, mais je démarre à peine", score: 2 },
      { value: "no", label: "Pas encore, c'est en projet", score: 1 },
    ],
  },
  {
    id: "q2",
    blockId: 1,
    blockName: "Situation actuelle",
    question: "L'argent rentre-t-il régulièrement chaque mois ?",
    options: [
      { value: "yes", label: "Oui, j'ai un cash-flow régulier", score: 3 },
      { value: "partial", label: "Ça dépend des mois", score: 2 },
      { value: "no", label: "C'est très irrégulier", score: 1 },
    ],
  },
  {
    id: "q3",
    blockId: 1,
    blockName: "Situation actuelle",
    question: "Travaillez-vous seul ou avec du personnel ?",
    options: [
      { value: "yes", label: "J'ai une équipe (même petite)", score: 3 },
      { value: "partial", label: "J'ai des freelances ou stagiaires", score: 2 },
      { value: "no", label: "Je fais tout seul", score: 1 },
    ],
  },
  {
    id: "q4",
    blockId: 1,
    blockName: "Situation actuelle",
    question: "Votre activité principale est-elle clairement définie ?",
    options: [
      { value: "yes", label: "Oui, un métier bien défini", score: 3 },
      { value: "partial", label: "Je fais plusieurs choses", score: 2 },
      { value: "no", label: "C'est flou, je touche à tout", score: 1 },
    ],
  },
  {
    id: "q5",
    blockId: 1,
    blockName: "Situation actuelle",
    question: "Votre business peut-il tourner sans vous pendant 2 semaines ?",
    options: [
      { value: "yes", label: "Oui, tout est organisé", score: 3 },
      { value: "partial", label: "Partiellement, mais c'est compliqué", score: 2 },
      { value: "no", label: "Non, tout s'arrête si je m'absente", score: 1 },
    ],
  },
  {
    id: "q6",
    blockId: 1,
    blockName: "Situation actuelle",
    question: "Avez-vous documenté votre façon de travailler ?",
    options: [
      { value: "yes", label: "Oui, j'ai des procédures écrites", score: 3 },
      { value: "partial", label: "Quelques notes, mais pas formalisées", score: 2 },
      { value: "no", label: "Tout est dans ma tête", score: 1 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // BLOC 2 - OFFRE & CLIENTS (6 questions)
  // ═══════════════════════════════════════════════════════
  {
    id: "q7",
    blockId: 2,
    blockName: "Offre & Clients",
    question: "Avez-vous une offre phare que vous savez bien vendre ?",
    options: [
      { value: "yes", label: "Oui, c'est mon produit/service principal", score: 3 },
      { value: "partial", label: "J'ai plusieurs offres, pas de priorité", score: 2 },
      { value: "no", label: "Je propose ce qu'on me demande", score: 1 },
    ],
  },
  {
    id: "q8",
    blockId: 2,
    blockName: "Offre & Clients",
    question: "Savez-vous exactement qui est votre client idéal ?",
    options: [
      { value: "yes", label: "Oui, profil précis en tête", score: 3 },
      { value: "partial", label: "J'ai une idée vague", score: 2 },
      { value: "no", label: "Je vends à tout le monde", score: 1 },
    ],
  },
  {
    id: "q9",
    blockId: 2,
    blockName: "Offre & Clients",
    question: "Votre offre résout-elle un problème concret et urgent ?",
    options: [
      { value: "yes", label: "Oui, mes clients en ont vraiment besoin", score: 3 },
      { value: "partial", label: "Ça aide, mais ce n'est pas vital", score: 2 },
      { value: "no", label: "Je ne suis pas sûr du problème résolu", score: 1 },
    ],
  },
  {
    id: "q10",
    blockId: 2,
    blockName: "Offre & Clients",
    question: "Vos prix sont-ils fixes ou vous négociez souvent ?",
    options: [
      { value: "yes", label: "Prix fixes, pas de négociation", score: 3 },
      { value: "partial", label: "Je négocie parfois", score: 2 },
      { value: "no", label: "Je baisse souvent mes prix", score: 1 },
    ],
  },
  {
    id: "q11",
    blockId: 2,
    blockName: "Offre & Clients",
    question: "Pouvez-vous expliquer en 30 secondes pourquoi on devrait vous choisir ?",
    options: [
      { value: "yes", label: "Oui, j'ai un argumentaire clair", score: 3 },
      { value: "partial", label: "Je me débrouille, mais ce n'est pas fluide", score: 2 },
      { value: "no", label: "Non, j'improvise à chaque fois", score: 1 },
    ],
  },
  {
    id: "q12",
    blockId: 2,
    blockName: "Offre & Clients",
    question: "Avez-vous déjà refusé un client qui ne vous convenait pas ?",
    options: [
      { value: "yes", label: "Oui, je sélectionne mes clients", score: 3 },
      { value: "partial", label: "Une fois ou deux, mais c'est rare", score: 2 },
      { value: "no", label: "Non, j'accepte tout le monde", score: 1 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // BLOC 3 - VENTE & MARKETING (6 questions)
  // ═══════════════════════════════════════════════════════
  {
    id: "q13",
    blockId: 3,
    blockName: "Vente & Marketing",
    question: "Comment trouvez-vous vos clients aujourd'hui ?",
    options: [
      { value: "yes", label: "J'ai un système en place (prospection, contenu, etc.)", score: 3 },
      { value: "partial", label: "Bouche-à-oreille et quelques canaux", score: 2 },
      { value: "no", label: "C'est le hasard, je n'ai pas de stratégie", score: 1 },
    ],
  },
  {
    id: "q14",
    blockId: 3,
    blockName: "Vente & Marketing",
    question: "Dépendez-vous principalement du bouche-à-oreille ?",
    options: [
      { value: "yes", label: "Non, j'ai diversifié mes sources", score: 3 },
      { value: "partial", label: "En grande partie, oui", score: 2 },
      { value: "no", label: "Oui, c'est ma seule source", score: 1 },
    ],
  },
  {
    id: "q15",
    blockId: 3,
    blockName: "Vente & Marketing",
    question: "Avez-vous un processus clair pour transformer un prospect en client ?",
    options: [
      { value: "yes", label: "Oui, des étapes définies", score: 3 },
      { value: "partial", label: "Quelques repères, mais pas formalisé", score: 2 },
      { value: "no", label: "Non, j'improvise", score: 1 },
    ],
  },
  {
    id: "q16",
    blockId: 3,
    blockName: "Vente & Marketing",
    question: "Faites-vous un suivi régulier de vos prospects (WhatsApp, appel, email) ?",
    options: [
      { value: "yes", label: "Oui, systématiquement", score: 3 },
      { value: "partial", label: "Parfois, quand j'y pense", score: 2 },
      { value: "no", label: "Non, je laisse venir", score: 1 },
    ],
  },
  {
    id: "q17",
    blockId: 3,
    blockName: "Vente & Marketing",
    question: "Connaissez-vous le chiffre d'affaires moyen par client ?",
    options: [
      { value: "yes", label: "Oui, j'ai un chiffre précis", score: 3 },
      { value: "partial", label: "Une estimation approximative", score: 2 },
      { value: "no", label: "Aucune idée", score: 1 },
    ],
  },
  {
    id: "q18",
    blockId: 3,
    blockName: "Vente & Marketing",
    question: "Avez-vous déjà investi en publicité (Facebook, Google, affiches) ?",
    options: [
      { value: "yes", label: "Oui, avec suivi des résultats", score: 3 },
      { value: "partial", label: "Quelques tests sans vraiment mesurer", score: 2 },
      { value: "no", label: "Jamais", score: 1 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // BLOC 4 - ORGANISATION & OUTILS (6 questions)
  // ═══════════════════════════════════════════════════════
  {
    id: "q19",
    blockId: 4,
    blockName: "Organisation & Outils",
    question: "Avez-vous des processus écrits pour votre activité ?",
    options: [
      { value: "yes", label: "Oui, tout est documenté", score: 3 },
      { value: "partial", label: "Quelques notes par-ci par-là", score: 2 },
      { value: "no", label: "Non, tout est dans ma tête", score: 1 },
    ],
  },
  {
    id: "q20",
    blockId: 4,
    blockName: "Organisation & Outils",
    question: "Utilisez-vous un outil pour gérer vos projets et tâches ?",
    options: [
      { value: "yes", label: "Oui, un outil dédié (Notion, Trello, etc.)", score: 3 },
      { value: "partial", label: "Excel ou notes sur téléphone", score: 2 },
      { value: "no", label: "Non, je gère de tête", score: 1 },
    ],
  },
  {
    id: "q21",
    blockId: 4,
    blockName: "Organisation & Outils",
    question: "Vos devis, factures et contrats sont-ils standardisés ?",
    options: [
      { value: "yes", label: "Oui, j'ai des modèles", score: 3 },
      { value: "partial", label: "Partiellement", score: 2 },
      { value: "no", label: "Non, je refais à chaque fois", score: 1 },
    ],
  },
  {
    id: "q22",
    blockId: 4,
    blockName: "Organisation & Outils",
    question: "Vous est-il déjà arrivé de rater un délai client ?",
    options: [
      { value: "yes", label: "Jamais ou très rarement", score: 3 },
      { value: "partial", label: "Ça m'est arrivé quelques fois", score: 2 },
      { value: "no", label: "Oui, régulièrement", score: 1 },
    ],
  },
  {
    id: "q23",
    blockId: 4,
    blockName: "Organisation & Outils",
    question: "Toutes vos données clients sont-elles au même endroit ?",
    options: [
      { value: "yes", label: "Oui, centralisées dans un outil", score: 3 },
      { value: "partial", label: "Réparties entre plusieurs fichiers", score: 2 },
      { value: "no", label: "Non, éparpillées partout", score: 1 },
    ],
  },
  {
    id: "q24",
    blockId: 4,
    blockName: "Organisation & Outils",
    question: "Suivez-vous clairement qui vous doit de l'argent ?",
    options: [
      { value: "yes", label: "Oui, suivi rigoureux des paiements", score: 3 },
      { value: "partial", label: "Plus ou moins", score: 2 },
      { value: "no", label: "Non, c'est souvent le flou", score: 1 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // BLOC 5 - VISION & DISCIPLINE (6 questions)
  // ═══════════════════════════════════════════════════════
  {
    id: "q25",
    blockId: 5,
    blockName: "Vision & Discipline",
    question: "Avez-vous une vision claire à 12 mois ?",
    options: [
      { value: "yes", label: "Oui, objectifs précis", score: 3 },
      { value: "partial", label: "Vaguement", score: 2 },
      { value: "no", label: "Non, je navigue à vue", score: 1 },
    ],
  },
  {
    id: "q26",
    blockId: 5,
    blockName: "Vision & Discipline",
    question: "Suivez-vous des indicateurs chiffrés ?",
    options: [
      { value: "yes", label: "Oui, tableau de bord", score: 3 },
      { value: "partial", label: "Quelques chiffres", score: 2 },
      { value: "no", label: "Non", score: 1 },
    ],
  },
  {
    id: "q27",
    blockId: 5,
    blockName: "Vision & Discipline",
    question: "Planifiez-vous vos actions ?",
    options: [
      { value: "yes", label: "Oui, planning structuré", score: 3 },
      { value: "partial", label: "Parfois", score: 2 },
      { value: "no", label: "Non, au jour le jour", score: 1 },
    ],
  },
  {
    id: "q28",
    blockId: 5,
    blockName: "Vision & Discipline",
    question: "Analysez-vous vos résultats ?",
    options: [
      { value: "yes", label: "Oui, régulièrement", score: 3 },
      { value: "partial", label: "De temps en temps", score: 2 },
      { value: "no", label: "Jamais", score: 1 },
    ],
  },
  {
    id: "q29",
    blockId: 5,
    blockName: "Vision & Discipline",
    question: "Êtes-vous prêt à changer vos méthodes ?",
    options: [
      { value: "yes", label: "Oui, totalement", score: 3 },
      { value: "partial", label: "Avec réserve", score: 2 },
      { value: "no", label: "Je préfère mes habitudes", score: 1 },
    ],
  },
  {
    id: "q30",
    blockId: 5,
    blockName: "Vision & Discipline",
    question: "Êtes-vous prêt à structurer maintenant ?",
    options: [
      { value: "yes", label: "Oui, c'est urgent", score: 3 },
      { value: "partial", label: "Peut-être bientôt", score: 2 },
      { value: "no", label: "Pas encore", score: 1 },
    ],
  },
];

// Messages de motivation entre les blocs (après chaque bloc complété)
export const BLOCK_MESSAGES = [
  "Très bien, vous avancez.",
  "Vous êtes à mi-parcours.",
  "Encore quelques minutes.",
  "La majorité des entrepreneurs terminent cette étape.",
  "Presque terminé.",
];

// Micro-messages rassurants ponctuels (affichés pendant le quiz)
export const REASSURANCE_MESSAGES: Record<number, string> = {
  3: "Vous avancez bien.",
  8: "Merci pour vos réponses.",
  12: "On y est presque.",
  18: "Vous êtes sérieux, ça se voit.",
  24: "Dernière ligne droite.",
  28: "Plus que 2 questions.",
};

// Total des questions
export const TOTAL_QUESTIONS = DIAGNOSTIC_QUESTIONS.length;
export const QUESTIONS_PER_BLOCK = 6;
export const TOTAL_BLOCKS = 5;
