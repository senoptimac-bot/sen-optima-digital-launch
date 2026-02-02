import LegalLayout from "@/components/LegalLayout";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";

const MentionsLegalesPage = () => {
  const seo = SEO_CONFIG.mentionsLegales;
  
  return (
    <>
      <SEOHead 
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      
      <LegalLayout>
        <h1 className="text-3xl font-bold mb-8 pb-4 pt-20">Mentions Légales</h1>
        <div className="h-0.5 w-16 bg-accent mb-12 rounded"></div>
        <section className="prose max-w-2xl">
          <h2>Éditeur du site</h2>
          <p>Raison sociale : Sen'Optima Consulting<br/>
          Adresse : Grand Mbao Cité Baobab, Dakar, Sénégal<br/>
          Email : contact@senoptimaconsulting.com<br/>
          Directeur de la publication : Mandiaye Sylla</p>
          <h2>Hébergement</h2>
          <p>Hostinger International Ltd.<br/>
          61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
          <h2>Propriété intellectuelle</h2>
          <p>Tous les contenus présents sur ce site (textes, images, logos, etc.) sont la propriété exclusive de Sen'Optima Consulting, sauf mention contraire. Toute reproduction, représentation, modification ou adaptation, totale ou partielle, est interdite sans l'accord écrit préalable de Sen'Optima Consulting.</p>
          <h2>Responsabilité</h2>
          <p>Sen'Optima Consulting ne saurait être tenue responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site.</p>
        </section>
      </LegalLayout>
    </>
  );
};

export default MentionsLegalesPage;
