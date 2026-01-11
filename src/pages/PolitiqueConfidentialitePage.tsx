
import React from "react";
import LegalLayout from "@/components/LegalLayout";

const PolitiqueConfidentialitePage = () => (
  <LegalLayout>
    <h1 className="text-3xl font-bold mb-8 pb-4 pt-20">Politique de Confidentialité</h1>
    <div className="h-0.5 w-16 bg-accent mb-12 rounded"></div>
    <section className="prose max-w-2xl">
      <h2>Données collectées</h2>
      <p>Nous collectons uniquement les données strictement nécessaires au traitement de vos demandes (formulaires de contact, audit, etc.).</p>
      <h2>Utilisation des données</h2>
      <p>Vos données ne sont utilisées que dans le cadre de la relation commerciale avec Sen'Optima Consulting. Elles ne sont jamais revendues à des tiers.</p>
      <h2>Cookies</h2>
      <p>Le site peut utiliser des cookies à des fins de mesure d’audience et d’amélioration de l’expérience utilisateur. Vous pouvez les refuser via les paramètres de votre navigateur.</p>
      <h2>Vos droits</h2>
      <p>Conformément à la loi, vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à contact@senoptimaconsulting.com.</p>
    </section>
  </LegalLayout>
);

export default PolitiqueConfidentialitePage;
