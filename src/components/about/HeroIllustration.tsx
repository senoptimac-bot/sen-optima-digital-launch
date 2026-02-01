import { motion } from "framer-motion";

// Concept: Structure & Méthode - Formes géométriques qui s'assemblent
const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <svg viewBox="0 0 300 280" className="w-full h-full max-w-sm">
        <defs>
          <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="subtleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Cercle de fond subtil */}
        <motion.circle
          cx="150"
          cy="130"
          r="90"
          fill="url(#subtleGrad)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Blocs qui s'assemblent - représentent la structure */}
        {/* Bloc 1 - en haut à gauche */}
        <motion.rect
          x="85"
          y="70"
          width="50"
          height="50"
          rx="8"
          fill="hsl(var(--accent))"
          opacity="0.2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        {/* Bloc 2 - en haut à droite */}
        <motion.rect
          x="145"
          y="70"
          width="50"
          height="50"
          rx="8"
          fill="hsl(var(--accent))"
          opacity="0.35"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.35 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        
        {/* Bloc 3 - en bas gauche */}
        <motion.rect
          x="85"
          y="130"
          width="50"
          height="50"
          rx="8"
          fill="hsl(var(--accent))"
          opacity="0.5"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        
        {/* Bloc 4 - Principal - en bas droite */}
        <motion.rect
          x="145"
          y="130"
          width="50"
          height="50"
          rx="8"
          fill="url(#accentGrad)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />

        {/* Icône check dans le bloc principal */}
        <motion.path
          d="M160 155 L168 163 L180 148"
          stroke="hsl(var(--background))"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />

        {/* Lignes de connexion entre les blocs */}
        <motion.line
          x1="135"
          y1="95"
          x2="145"
          y2="95"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeDasharray="4 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
        />
        <motion.line
          x1="110"
          y1="120"
          x2="110"
          y2="130"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeDasharray="4 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.1 }}
        />
        <motion.line
          x1="135"
          y1="155"
          x2="145"
          y2="155"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeDasharray="4 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2 }}
        />

        {/* Labels des blocs */}
        <motion.text
          x="110"
          y="100"
          textAnchor="middle"
          fill="hsl(var(--accent))"
          fontSize="8"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.3 }}
        >
          Rigueur
        </motion.text>
        <motion.text
          x="170"
          y="100"
          textAnchor="middle"
          fill="hsl(var(--accent))"
          fontSize="8"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.4 }}
        >
          Méthode
        </motion.text>
        <motion.text
          x="110"
          y="160"
          textAnchor="middle"
          fill="hsl(var(--accent))"
          fontSize="8"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5 }}
        >
          Structure
        </motion.text>

        {/* Label principal */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <rect x="100" y="205" width="100" height="28" rx="14" fill="hsl(var(--accent))" opacity="0.15" />
          <text
            x="150"
            y="224"
            textAnchor="middle"
            fill="hsl(var(--accent))"
            fontSize="11"
            fontWeight="600"
          >
            Votre Succès
          </text>
        </motion.g>

        {/* Tagline */}
        <motion.text
          x="150"
          y="258"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize="10"
          fontWeight="500"
          opacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.8 }}
        >
          Les fondations qui manquaient
        </motion.text>
      </svg>
    </div>
  );
};

export default HeroIllustration;
