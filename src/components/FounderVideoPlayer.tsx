import { Play } from "lucide-react";

interface FounderVideoPlayerProps {
  /** Video file URL. Leave undefined to show the "not provided yet" placeholder. */
  src?: string;
  /** Poster image shown before playback starts. */
  poster?: string;
  title?: string;
}

/**
 * Lecteur vidéo léger pour la vidéo de présentation de Sen'Optima Consulting (45-60s).
 * - Pas d'autoplay (encore moins avec le son) : lecture uniquement sur clic.
 * - preload="none" : aucun octet vidéo n'est chargé tant que l'utilisateur
 *   n'a pas cliqué play, donc pas d'impact sur le LCP/mobile.
 * - Tant que `src` n'est pas fourni, affiche un emplacement clairement marqué
 *   plutôt qu'une fausse vidéo ou un visage stock.
 */
const FounderVideoPlayer = ({ src, poster, title = "Présentation de Sen'Optima Consulting" }: FounderVideoPlayerProps) => {
  if (!src) {
    return (
      <div className="aspect-video rounded-[2rem] border-2 border-dashed border-accent/40 bg-muted/40 flex flex-col items-center justify-center gap-3 text-center px-6">
        <div className="w-14 h-14 rounded-full border-2 border-accent/40 flex items-center justify-center">
          <Play className="w-6 h-6 text-muted-foreground/50" />
        </div>
        <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground/70">
          [VIDÉO DE PRÉSENTATION — À FOURNIR]
        </span>
      </div>
    );
  }

  return (
    <video
      controls
      preload="none"
      poster={poster}
      className="w-full aspect-video rounded-[2rem] border-2 border-accent/30 bg-black"
      aria-label={title}
    >
      <source src={src} />
    </video>
  );
};

export default FounderVideoPlayer;
