import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/221781926969?text=Bonjour Sen'Optima, je souhaite en savoir plus sur vos services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse-gold"
      aria-label="Nous contacter sur WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
