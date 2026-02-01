import { motion } from "framer-motion";

// UX Concept: Main qui soutient + Croissance
// Métaphore claire: Nous vous accompagnons vers le haut
const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <svg viewBox="0 0 280 260" className="w-full h-full max-w-xs">
        <defs>
          <linearGradient id="liftGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
          <linearGradient id="supportGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Fond subtil */}
        <motion.circle
          cx="140"
          cy="120"
          r="80"
          fill="hsl(var(--accent))"
          opacity="0.05"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Main stylisée qui soutient (représente l'accompagnement) */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Paume de la main simplifiée */}
          <motion.path
            d="M90 160 Q90 145 105 140 L175 140 Q190 145 190 160 L190 175 Q190 185 180 190 L100 190 Q90 185 90 175 Z"
            fill="url(#supportGrad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          
          {/* Doigts stylisés - lignes courbes */}
          {[
            { x1: 105, x2: 100, delay: 0.4 },
            { x1: 125, x2: 122, delay: 0.5 },
            { x1: 155, x2: 158, delay: 0.6 },
            { x1: 175, x2: 180, delay: 0.7 },
          ].map((finger, i) => (
            <motion.path
              key={i}
              d={`M${finger.x1} 140 Q${finger.x2} 125 ${finger.x1} 115`}
              fill="none"
              stroke="hsl(var(--foreground))"
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: finger.delay }}
            />
          ))}
        </motion.g>

        {/* Graphique de croissance qui monte depuis la main */}
        <motion.g
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Barres de croissance */}
          {[
            { x: 110, h: 25, delay: 0.9 },
            { x: 130, h: 40, delay: 1.0 },
            { x: 150, h: 60, delay: 1.1 },
          ].map((bar, i) => (
            <motion.rect
              key={i}
              x={bar.x}
              y={115 - bar.h}
              width="16"
              height={bar.h}
              rx="4"
              fill="url(#liftGrad)"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: bar.delay }}
              style={{ transformOrigin: `${bar.x + 8}px 115px` }}
            />
          ))}

          {/* Flèche vers le haut */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <motion.path
              d="M158 50 L158 35 M150 43 L158 35 L166 43"
              stroke="hsl(var(--accent))"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>
        </motion.g>

        {/* Labels clairs */}
        <motion.text
          x="140"
          y="210"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize="10"
          fontWeight="500"
          opacity="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2 }}
        >
          Notre accompagnement
        </motion.text>

        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <rect x="95" y="222" width="90" height="26" rx="13" fill="hsl(var(--accent))" opacity="0.15" />
          <text
            x="140"
            y="240"
            textAnchor="middle"
            fill="hsl(var(--accent))"
            fontSize="11"
            fontWeight="600"
          >
            Votre Croissance
          </text>
        </motion.g>
      </svg>
    </div>
  );
};

export default HeroIllustration;
