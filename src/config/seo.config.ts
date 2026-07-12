/**
 * Configuration SEO centralisée pour toutes les pages
 * 
 * Règles respectées:
 * - Title < 60 caractères (avec suffixe)
 * - Description < 160 caractères
 * - Mots-clés stratégiques par page avec localisation Dakar/Sénégal
 */

export const SEO_CONFIG = {
  home: {
    title: "Sen'Optima Consulting | Cabinet de Conseil à Dakar",
    description: "Cabinet de conseil à Dakar en mobilité internationale et développement des entreprises. Analyse, préparation et accompagnement pour des projets solides.",
    keywords: "cabinet de conseil Dakar, mobilité internationale Sénégal, développement entreprise Dakar, consultant stratégie Sénégal, diagnostic stratégique Dakar",
    canonicalPath: "/",
  },
  solutions: {
    title: "Diagnostic Stratégique & Solutions Business à Dakar",
    description: "Diagnostic stratégique premium à 30 000 FCFA : audit positionnement, analyse rentabilité, plan d'action 90 jours. Structurez votre business au Sénégal.",
    keywords: "diagnostic entreprise Dakar, audit business Sénégal, structuration PME, plan d'action business, consultant stratégie Dakar",
    canonicalPath: "/solutions",
  },
  expertises: {
    title: "Nos Expertises — Mobilité Internationale & Entreprises",
    description: "Sen'Optima Consulting, cabinet de conseil : deux expertises, une seule méthode. Mobilité internationale et développement des entreprises.",
    keywords: "cabinet de conseil Dakar, mobilité internationale Sénégal, développement entreprise Dakar, conseil stratégique Afrique",
    canonicalPath: "/nos-expertises",
  },
  mobiliteInternationale: {
    title: "Mobilité Internationale — Conseil & Accompagnement",
    description: "Accompagnement dans la construction de projets internationaux : études, projet professionnel, visite, orientation, diagnostic de projet.",
    keywords: "conseil mobilité internationale Dakar, accompagnement projet international, orientation études étranger Sénégal",
    canonicalPath: "/nos-expertises/mobilite-internationale",
  },
  developpementEntreprises: {
    title: "Développement des Entreprises — Conseil & Stratégie",
    description: "Accompagnement des entrepreneurs et PME : stratégie digitale, marketing, identité de marque et développement numérique à Dakar.",
    keywords: "conseil développement entreprise Dakar, stratégie digitale Sénégal, accompagnement PME Dakar",
    canonicalPath: "/nos-expertises/developpement-entreprises",
  },
  blog: {
    title: "Blog",
    description: "Analyses et repères sur la mobilité internationale et le développement des entreprises par Sen'Optima Consulting.",
    canonicalPath: "/blog",
    noIndex: true,
  },
  about: {
    title: "À Propos — Cabinet de Conseil à Dakar",
    description: "Sen'Optima Consulting : cabinet de conseil en mobilité internationale et développement des entreprises. Analyse, méthode et accompagnement personnalisé.",
    keywords: "cabinet conseil Dakar, équipe consulting Sénégal, mobilité internationale Afrique, développement entreprise Sénégal",
    canonicalPath: "/a-propos",
  },
  projects: {
    title: "Études de cas | Sen'Optima Consulting",
    description: "Chaque projet raconte une méthode : nos projets réellement terminés, nos concepts internes et nos cas d'étude méthodologiques.",
    keywords: "études de cas consulting Sénégal, méthode de travail Dakar, portfolio Sen'Optima, structurer projet étude Canada, digitaliser PME",
    canonicalPath: "/nos-projets",
  },
  contact: {
    title: "Contactez Sen'Optima Consulting à Dakar",
    description: "Besoin d'un diagnostic ou d'un devis ? Contactez Sen'Optima par WhatsApp, email ou en présentiel à Dakar. Réponse sous 24h garantie.",
    keywords: "contact consulting Dakar, devis gratuit, WhatsApp consulting Sénégal, rendez-vous stratégie digitale",
    canonicalPath: "/contact",
  },
  services: {
    title: "Nos Services de Consulting Digital",
    description: "Modélisation business, écosystème web, automatisation et branding stratégique. Découvrez nos 4 piliers d'accompagnement pour entrepreneurs.",
    keywords: "services consulting, site web, automatisation, branding, marketing digital, Sénégal",
    canonicalPath: "/services",
  },
  success: {
    title: "Rendez-vous Confirmé",
    description: "Votre rendez-vous stratégique avec Sen'Optima est confirmé. Complétez vos informations pour préparer notre échange.",
    canonicalPath: "/merci",
    noIndex: true,
  },
  mentionsLegales: {
    title: "Mentions Légales",
    description: "Mentions légales de Sen'Optima Consulting : éditeur, hébergeur, propriété intellectuelle et responsabilité.",
    canonicalPath: "/mentions-legales",
  },
  politiqueConfidentialite: {
    title: "Politique de Confidentialité",
    description: "Politique de confidentialité de Sen'Optima : collecte, utilisation et protection de vos données personnelles.",
    canonicalPath: "/politique-confidentialite",
  },
  cgv: {
    title: "Conditions Générales de Vente",
    description: "Conditions générales de vente des prestations de conseil et services digitaux de Sen'Optima Consulting.",
    canonicalPath: "/cgv",
  },
  senOptimaAcademy: {
    title: "Sen'Optima Academy — Formations en Présentiel",
    description: "Deux programmes intensifs d'une semaine à Dakar : Business Launch et Profil International. 49 000 FCFA.",
    keywords: "formation mobilité internationale Dakar, formation entrepreneurs Sénégal, Sen'Optima Academy",
    canonicalPath: "/senoptima-academy",
  },
  academyBusinessLaunch: {
    title: "Business Launch — Sen'Optima Academy",
    description: "Créer un business en ligne rentable : une semaine intensive pour apprendre à choisir un produit, construire son offre, vendre et se formaliser. 49 000 FCFA.",
    keywords: "formation e-commerce Dakar, business en ligne Sénégal, Sen'Optima Academy",
    canonicalPath: "/senoptima-academy/business-launch",
  },
  academyProfilInternational: {
    title: "Profil International — Sen'Optima Academy",
    description: "Construire un projet de mobilité crédible avant toute démarche : une semaine intensive pour préparer un dossier solide. 49 000 FCFA.",
    keywords: "formation mobilité internationale Dakar, préparer projet étudier étranger, Sen'Optima Academy",
    canonicalPath: "/senoptima-academy/profil-international",
  },
  formation: {
    title: "Réserver ma Place — Sen'Optima Academy",
    description: "Réservez votre place à la formation Sen'Optima Academy : Mobilité Internationale ou Développement des Entreprises.",
    canonicalPath: "/formation",
    noIndex: true,
  },
  diagnosticMobilite: {
    title: "Diagnostic de Projet International — 25 000 FCFA",
    description: "Réservez votre Diagnostic de Projet International : analyse de votre profil, votre parcours et votre projet de mobilité.",
    canonicalPath: "/diagnostic-mobilite",
    noIndex: true,
  },
  rendezVousDecouverte: {
    title: "Rendez-vous Découverte Gratuit",
    description: "Réservez un premier échange gratuit de 20 à 30 minutes avec Sen'Optima Consulting.",
    canonicalPath: "/rendez-vous-decouverte",
    noIndex: true,
  },
  offresRendezVous: {
    title: "Le Rendez-vous Découverte — Comment ça marche",
    description: "Un premier échange gratuit de 20 à 30 minutes pour comprendre votre projet et vous orienter, sans engagement.",
    canonicalPath: "/offres/rendez-vous-decouverte",
    noIndex: true,
  },
  offresDiagnostic: {
    title: "Le Diagnostic Stratégique — Comment ça marche",
    description: "Une analyse professionnelle de votre projet ou de votre activité, avec rapport personnalisé et recommandations concrètes.",
    canonicalPath: "/offres/diagnostic",
    noIndex: true,
  },
  offresAccompagnement: {
    title: "Notre Accompagnement — Comment ça marche",
    description: "Un accompagnement personnalisé établi sur devis après votre diagnostic, adapté à la complexité réelle de votre projet.",
    canonicalPath: "/offres/accompagnement",
    noIndex: true,
  },
} as const;