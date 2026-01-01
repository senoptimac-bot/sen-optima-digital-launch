import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // URL de la vidéo à personnaliser
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Conteneur principal */}
          <div 
            className="relative rounded-2xl overflow-hidden border border-[#D4A73B]/20 shadow-2xl cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            {/* Image de couverture avec overlay */}
            <div className="aspect-video relative bg-gradient-to-br from-[#0A1A3A] to-[#061225]">
              {/* Grille décorative */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(212, 167, 59, 0.3) 1px, transparent 1px), 
                                    linear-gradient(90deg, rgba(212, 167, 59, 0.3) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
              
              {/* Overlay sombre */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
              
              {/* Texte sur la vidéo */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                  Pourquoi Sen'Optima ? <span className="text-white/60 font-normal">(2 min)</span>
                </h3>
                <p className="text-white/70 text-sm md:text-base">
                  Découvrez notre vision et notre équipe.
                </p>
              </div>
              
              {/* Bouton Play centré avec effet de pulsation */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Cercles de pulsation */}
                <div className="absolute">
                  <span className="absolute inset-0 rounded-full bg-[#D4A73B]/30 animate-ping" style={{ animationDuration: '2s' }} />
                  <span className="absolute inset-0 rounded-full bg-[#D4A73B]/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                </div>
                
                {/* Bouton Play */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#D4A73B] flex items-center justify-center shadow-lg shadow-[#D4A73B]/30 group-hover:shadow-xl group-hover:shadow-[#D4A73B]/40 transition-shadow duration-300"
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-[#0A1A3A] ml-1" fill="#0A1A3A" />
                </motion.div>
              </div>
              
              {/* Décoration coins */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#D4A73B]/10 to-transparent" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#D4A73B]/5 to-transparent" />
            </div>
          </div>
          
          {/* Texte sous la vidéo */}
          <p className="text-center text-muted-foreground text-sm mt-4">
            Cliquez pour lancer la vidéo
          </p>
        </motion.div>
      </div>

      {/* Modale Lightbox */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black border-none overflow-hidden">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Fermer</span>
          </DialogClose>
          
          <div className="aspect-video w-full">
            <iframe
              src={videoUrl}
              title="Présentation Sen'Optima"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoSection;
