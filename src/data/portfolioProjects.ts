/**
 * Projets issus de la section "Mes Projets Réalisés" — images dans src/assets/projets.
 */
import imgDekkuwaay from "@/assets/projets/dekkuwaay.png";
import imgP3 from "@/assets/projets/p3.png";
import imgGhmTransport from "@/assets/projets/ghm_Transport.png";
import imgMusee from "@/assets/projets/musee.png";

export const portfolioProjects = [
  { id: "1", image: imgGhmTransport, title: "GHM Transport", sector: "Transport", description: "À Propos de GHM – GHM – Gaston Hélène Mendy. Depuis 2015, nous offrons des véhicules fiables, bien entretenus et à des tarifs compétitifs. Une approche familiale et un service client attentif pour une expérience simple, sécurisée et transparente.", url: "https://ghmtransports.com/" },
  { id: "2", image: imgMusee, title: "Site Musée des Civilisations Noires", sector: "Culture", description: "Site web élégant et interactif pour présenter l'histoire et les collections du musée des civilisations noires avec visite virtuelle.", url: "https://mcn-museedescivilisationsnoires.netlify.app/" },
  { id: "3", image: imgDekkuwaay, title: "Dekkuwwaay", sector: "Immobilier", description: "Une application web complète de gestion immobilière : bâtiments, appartements, locataires, loyers, quittances PDF, carte interactive, rendez-vous en ligne, et rôles multiples (admin, agent, client)." },
  { id: "4", image: imgP3, title: "Site de Boulangerie", sector: "Commerce", description: "Une vitrine en ligne pour une boulangerie, permettant aux clients de consulter les produits et de passer des commandes en ligne." },
];
