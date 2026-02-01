import { motion } from "framer-motion";

// UX Concept: Transformation claire Avant/Après
// Métaphore: Puzzle incomplet → Puzzle complet et organisé
const VisionIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
      <svg viewBox="0 0 340 240" className="w-full h-full max-w-sm">
        <defs>
          <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>

        {/* === GAUCHE: État "AVANT" - Pièces désorganisées === */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Pièces de puzzle éparpillées */}
          <motion.rect
            x="25"
            y="65"
            width="30"
            height="30"
            rx="4"
            fill="hsl(var(--foreground))"
            opacity="0.12"
            animate={{ rotate: [0, 5, -3, 0], x: [0, 3, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ transformOrigin: "40px 80px" }}
          />
          <motion.rect
            x="60"
            y="50"
            width="25"
            height="25"
            rx="4"
            fill="hsl(var(--foreground))"
            opacity="0.18"
            animate={{ rotate: [0, -8, 4, 0], y: [0, 4, -2, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }}
            style={{ transformOrigin: "72px 62px" }}
          />
          <motion.rect
            x="35"
            y="105"
            width="28"
            height="28"
            rx="4"
            fill="hsl(var(--foreground))"
            opacity="0.15"
            animate={{ rotate: [0, 6, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 0.6 }}
            style={{ transformOrigin: "49px 119px" }}
          />
          <motion.rect
            x="70"
            y="90"
            width="22"
            height="22"
            rx="3"
            fill="hsl(var(--foreground))"
            opacity="0.1"
            animate={{ x: [0, -3, 4, 0], y: [0, 3, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.9 }}
          />

          {/* Points d'interrogation subtils */}
          <motion.text
            x="45"
            y="88"
            fill="hsl(var(--foreground))"
            fontSize="14"
            fontWeight="bold"
            opacity="0.2"
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ?
          </motion.text>
          <motion.text
            x="75"
            y="75"
            fill="hsl(var(--foreground))"
            fontSize="10"
            fontWeight="bold"
            opacity="0.15"
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            ?
          </motion.text>
        </motion.g>

        {/* Label AVANT */}
        <motion.text
          x="55"
          y="155"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize="10"
          fontWeight="500"
          opacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.4 }}
        >
          Idées dispersées
        </motion.text>

        {/* === CENTRE: Flèche de transformation === */}
        <motion.g>
          {/* Ligne de transformation */}
          <motion.path
            d="M115 95 L205 95"
            stroke="url(#arrowGrad)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
          
          {/* Tête de flèche */}
          <motion.polygon
            points="200,88 215,95 200,102"
            fill="hsl(var(--accent))"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
          />

          {/* Particules de transformation */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx={135 + i * 25}
              cy={95}
              r="3"
              fill="hsl(var(--accent))"
              animate={{
                scale: [0, 1.2, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 1.6 + i * 0.2
              }}
            />
          ))}

          {/* Label transformation */}
          <motion.g
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <rect x="130" y="60" width="60" height="22" rx="11" fill="hsl(var(--accent))" opacity="0.15" />
            <text
              x="160"
              y="75"
              textAnchor="middle"
              fill="hsl(var(--accent))"
              fontSize="9"
              fontWeight="600"
            >
              Sen'Optima
            </text>
          </motion.g>
        </motion.g>

        {/* === DROITE: État "APRÈS" - Grille organisée === */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {/* Conteneur principal */}
          <motion.rect
            x="230"
            y="55"
            width="85"
            height="85"
            rx="8"
            fill="hsl(var(--accent))"
            opacity="0.08"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            strokeOpacity="0.3"
          />

          {/* Grille 2x2 parfaitement alignée */}
          {[
            { x: 238, y: 63, label: "Marketing", delay: 1.3 },
            { x: 278, y: 63, label: "Gestion", delay: 1.45 },
            { x: 238, y: 103, label: "Process", delay: 1.6 },
            { x: 278, y: 103, label: "Vision", delay: 1.75 },
          ].map((cell, i) => (
            <motion.g key={i}>
              <motion.rect
                x={cell.x}
                y={cell.y}
                width="35"
                height="35"
                rx="4"
                fill="hsl(var(--accent))"
                opacity="0.2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: cell.delay }}
              />
              <motion.text
                x={cell.x + 17.5}
                y={cell.y + 21}
                textAnchor="middle"
                fill="hsl(var(--accent))"
                fontSize="7"
                fontWeight="500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: cell.delay + 0.2 }}
              >
                {cell.label}
              </motion.text>
            </motion.g>
          ))}

          {/* Checkmark de validation */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 200 }}
          >
            <circle cx="315" cy="55" r="12" fill="hsl(var(--accent))" />
            <motion.path
              d="M309 55 L313 59 L321 51"
              stroke="hsl(var(--background))"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 2.2 }}
            />
          </motion.g>
        </motion.g>

        {/* Label APRÈS */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <rect x="225" y="152" width="95" height="26" rx="13" fill="hsl(var(--accent))" opacity="0.15" />
          <text
            x="272"
            y="170"
            textAnchor="middle"
            fill="hsl(var(--accent))"
            fontSize="10"
            fontWeight="600"
          >
            Business Structuré
          </text>
        </motion.g>

        {/* Tagline */}
        <motion.text
          x="170"
          y="210"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize="10"
          fontWeight="500"
          opacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.3 }}
        >
          Clarté • Structure • Résultats
        </motion.text>
      </svg>
    </div>
  );
};

export default VisionIllustration;
