import LegalLayout from "@/components/LegalLayout";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";

const CGVPage = () => {
  const seo = SEO_CONFIG.cgv;
  
  return (
    <>
      <SEOHead 
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      
      <LegalLayout>
        <h1 className="text-headline mb-8 pb-4 pt-20">Conditions Générales de Vente (CGV)</h1>
        <div className="h-0.5 w-16 bg-accent mb-12 rounded"></div>
        <section className="prose max-w-2xl">
          <h2>Objet</h2>
          <p>Les présentes conditions régissent les ventes de prestations de services conclues entre Sen'Optima Consulting et ses clients.</p>
          <h2>Commande</h2>
          <p>Toute commande implique l'acceptation pleine et entière des présentes CGV.</p>
          <h2>Paiement</h2>
          <p>Le paiement s'effectue selon les modalités convenues lors de la commande. Tout retard de paiement pourra entraîner des pénalités.</p>
          <h2>Responsabilité</h2>
          <p>Sen'Optima Consulting s'engage à fournir ses prestations avec diligence et professionnalisme. Sa responsabilité ne saurait être engagée en cas de force majeure ou de faits indépendants de sa volonté.</p>
        </section>
      </LegalLayout>
    </>
  );
};

export default CGVPage;
