/**
 * Configuration SEO centralisée pour toutes les pages
 * 
 * Règles respectées:
 * - Title < 60 caractères (avec suffixe)
 * - Description < 160 caractères
 * - Mots-clés stratégiques par page
 */

export const SEO_CONFIG = {
  home: {
    title: "Sen'Optima Consulting | Stratégie & Solutions Digitales",
    description: "Cabinet de consulting digital à Dakar. Structurez votre entreprise avec nos solutions en stratégie, marketing digital et automatisation.",
    keywords: "consulting digital, stratégie entreprise, marketing digital, Dakar, Sénégal, PME, transformation digitale",
    canonicalPath: "/",
  },
  services: {
    title: "Nos Services de Consulting Digital",
    description: "Modélisation business, écosystème web, automatisation et branding stratégique. Découvrez nos 4 piliers d'accompagnement pour entrepreneurs.",
    keywords: "services consulting, site web, automatisation, branding, marketing digital, Sénégal",
    canonicalPath: "/services",
  },
  solutions: {
    title: "Diagnostic Gratuit de Maturité Business",
    description: "Évaluez gratuitement la maturité de votre entreprise en 3 minutes. Recevez un plan d'action personnalisé pour structurer votre croissance.",
    keywords: "diagnostic entreprise, audit gratuit, maturité business, PME Sénégal",
    canonicalPath: "/solutions",
  },
  about: {
    title: "À Propos de Sen'Optima Consulting",
    description: "Cabinet sénégalais de conseil digital. Notre mission : apporter aux entrepreneurs l'expertise et la rigueur des grandes entreprises.",
    keywords: "à propos, équipe consulting, cabinet conseil, Dakar, Sénégal, vision 2050",
    canonicalPath: "/a-propos",
  },
  projects: {
    title: "Nos Projets Réalisés | Portfolio Sen'Optima",
    description: "Découvrez les projets accompagnés par Sen'Optima : structuration, sites web, e-commerce, identité visuelle et automatisation à Dakar et au Sénégal.",
    keywords: "projets réalisés, portfolio, études de cas, consulting Sénégal, réussites clients, Dakar",
    canonicalPath: "/nos-projets",
  },
  contact: {
    title: "Contactez-Nous",
    description: "Besoin d'un devis ou d'une information ? Contactez Sen'Optima par WhatsApp, email ou en présentiel à Dakar. Réponse sous 24h garantie.",
    keywords: "contact, devis gratuit, WhatsApp, Dakar, Sénégal, consulting",
    canonicalPath: "/contact",
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
