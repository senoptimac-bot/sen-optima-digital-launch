import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  noIndex?: boolean;
  ogImage?: string;
  type?: "website" | "article";
  keywords?: string;
}

const BASE_URL = "https://senoptimaconsulting.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

/**
 * SEOHead - Composant centralisé pour les métadonnées SEO
 * 
 * Assure:
 * - Un seul title par page (< 60 caractères recommandé)
 * - Une meta description unique (< 160 caractères)
 * - Un canonical URL pour éviter le duplicate content
 * - Open Graph et Twitter Cards cohérentes
 */
const SEOHead = ({
  title,
  description,
  canonicalPath,
  noIndex = false,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  keywords,
}: SEOHeadProps) => {
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const fullTitle = title.includes("Sen'Optima") 
    ? title 
    : `${title} | Sen'Optima Consulting`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Sen'Optima Consulting" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
