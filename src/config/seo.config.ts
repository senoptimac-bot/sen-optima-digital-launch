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
    title: "Sen'Optima Consulting | Stratégie Digitale & Audit Web à Dakar",
    description: "Cabinet de consulting digital à Dakar. Diagnostic stratégique, audit web, structuration business et marketing digital pour PME et entrepreneurs au Sénégal.",
    keywords: "consulting digital Dakar, stratégie digitale Sénégal, audit site web Dakar, consultant digital Sénégal, marketing digital PME, structuration entreprise",
    canonicalPath: "/",
  },
  solutions: {
    title: "Diagnostic Stratégique & Solutions Business à Dakar",
    description: "Diagnostic stratégique premium à 25 000 FCFA : audit positionnement, analyse rentabilité, plan d'action 90 jours. Structurez votre business au Sénégal.",
    keywords: "diagnostic entreprise Dakar, audit business Sénégal, structuration PME, plan d'action business, consultant stratégie Dakar",
    canonicalPath: "/solutions",
  },
  about: {
    title: "À Propos — Cabinet Consulting Digital Dakar",
    description: "Cabinet sénégalais de conseil digital. Notre mission : apporter aux entrepreneurs africains l'expertise et la rigueur des grandes entreprises.",
    keywords: "cabinet conseil Dakar, équipe consulting Sénégal, consultant digital Afrique, vision stratégie digitale",
    canonicalPath: "/a-propos",
  },
  projects: {
    title: "Nos Réalisations | Portfolio Sen'Optima Dakar",
    description: "Découvrez les projets accompagnés par Sen'Optima : structuration, sites web, e-commerce, identité visuelle et marketing digital à Dakar et au Sénégal.",
    keywords: "projets réalisés Dakar, portfolio consulting Sénégal, études de cas, réussites clients, réalisations digitales",
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
} as const;