import { motion } from "framer-motion";

// Concept: Parcours fluide - Une courbe élégante avec étapes
const ParcoursIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
      <svg viewBox="0 0 320 260" className="w-full h-full max-w-sm">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Courbe principale fluide */}
        <motion.path
          d="M40 180 C80 180 100 140 140 130 C180 120 200 150 240 120 C260 105 270 80 290 70"
          stroke="url(#pathGradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Point de départ */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <circle cx="40" cy="180" r="12" fill="hsl(var(--foreground))" opacity="0.15" />
          <circle cx="40" cy="180" r="6" fill="hsl(var(--foreground))" opacity="0.4" />
        </motion.g>

        {/* Étape 1 */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <circle cx="140" cy="130" r="10" fill="hsl(var(--accent))" opacity="0.3" />
          <circle cx="140" cy="130" r="5" fill="hsl(var(--accent))" />
          <text x="140" y="155" textAnchor="middle" fill="hsl(var(--accent))" fontSize="9" fontWeight="500" opacity="0.8">
            Projets
          </text>
        </motion.g>

        {/* Étape 2 */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        >
          <circle cx="220" cy="135" r="10" fill="hsl(var(--accent))" opacity="0.3" />
          <circle cx="220" cy="135" r="5" fill="hsl(var(--accent))" />
          <text x="220" y="160" textAnchor="middle" fill="hsl(var(--accent))" fontSize="9" fontWeight="500" opacity="0.8">
            Résultats
          </text>
        </motion.g>

        {/* Point d'arrivée - Étoile */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6, type: "spring" }}
          filter="url(#glow)"
        >
          <motion.circle
            cx="290"
            cy="70"
            r="18"
            fill="hsl(var(--accent))"
            opacity="0.2"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <circle cx="290" cy="70" r="10" fill="hsl(var(--accent))" />
          <path
            d="M290 62 L291.5 67 L297 67 L292.5 70.5 L294 76 L290 73 L286 76 L287.5 70.5 L283 67 L288.5 67 Z"
            fill="hsl(var(--background))"
          />
        </motion.g>

        {/* Point mobile qui suit le chemin */}
        <motion.circle
          r="5"
          fill="hsl(var(--accent))"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            offsetDistance: ["0%", "100%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1
          }}
          style={{
            offsetPath: "path('M40 180 C80 180 100 140 140 130 C180 120 200 150 240 120 C260 105 270 80 290 70')",
          }}
        />

        {/* Labels */}
        <motion.text
          x="40"
          y="205"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize="9"
          fontWeight="500"
          opacity="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5 }}
        >
          Expérience
        </motion.text>

        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <rect x="245" y="35" width="90" height="24" rx="12" fill="hsl(var(--accent))" opacity="0.2" />
          <text
            x="290"
            y="51"
            textAnchor="middle"
            fill="hsl(var(--accent))"
            fontSize="10"
            fontWeight="600"
          >
            Votre Réussite
          </text>
        </motion.g>

        {/* Tagline */}
        <motion.text
          x="160"
          y="240"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize="10"
          fontWeight="500"
          opacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.2 }}
        >
          Notre savoir-faire, votre avantage
        </motion.text>
      </svg>
    </div>
  );
};

export default ParcoursIllustration;
