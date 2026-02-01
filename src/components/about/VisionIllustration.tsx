import { motion } from "framer-motion";

// Concept: Transformation - Du flou à la clarté avec des cercles concentriques
const VisionIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
      <svg viewBox="0 0 320 260" className="w-full h-full max-w-sm">
        <defs>
          <linearGradient id="transformLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>

        {/* GAUCHE: Cercles flous/désordonnés */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Cercles qui bougent de manière chaotique */}
          <motion.circle
            cx="65"
            cy="100"
            r="20"
            fill="none"
            stroke="hsl(var(--foreground))"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.2"
            animate={{ 
              cx: [65, 70, 62, 65],
              cy: [100, 95, 105, 100]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.circle
            cx="50"
            cy="130"
            r="15"
            fill="none"
            stroke="hsl(var(--foreground))"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.25"
            animate={{ 
              cx: [50, 55, 48, 50],
              cy: [130, 135, 128, 130]
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle
            cx="80"
            cy="145"
            r="18"
            fill="none"
            stroke="hsl(var(--foreground))"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.15"
            animate={{ 
              cx: [80, 75, 85, 80],
              cy: [145, 150, 142, 145]
            }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 0.3 }}
          />
          
          {/* Points éparpillés */}
          {[
            { x: 55, y: 115, delay: 0 },
            { x: 75, y: 125, delay: 0.3 },
            { x: 60, y: 155, delay: 0.6 },
            { x: 45, y: 105, delay: 0.9 },
          ].map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r="3"
              fill="hsl(var(--foreground))"
              opacity="0.3"
              animate={{ 
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: dot.delay }}
            />
          ))}
        </motion.g>

        {/* Label gauche */}
        <motion.text
          x="65"
          y="190"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize="10"
          fontWeight="500"
          opacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.5 }}
        >
          Idée floue
        </motion.text>

        {/* CENTRE: Flèche de transformation */}
        <motion.g>
          <motion.path
            d="M110 130 L190 130"
            stroke="url(#transformLine)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.polygon
            points="185,124 198,130 185,136"
            fill="hsl(var(--accent))"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.5 }}
          />
          
          {/* Étincelles sur la flèche */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx={130 + i * 20}
              cy={130}
              r="2"
              fill="hsl(var(--accent))"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: 1.8 + i * 0.25
              }}
            />
          ))}
        </motion.g>

        {/* Label transformation */}
        <motion.text
          x="155"
          y="110"
          textAnchor="middle"
          fill="hsl(var(--accent))"
          fontSize="9"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.6 }}
        >
          Sen'Optima
        </motion.text>

        {/* DROITE: Cercles concentriques ordonnés */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {/* Cercles concentriques */}
          <motion.circle
            cx="255"
            cy="130"
            r="45"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            opacity="0.15"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.circle
            cx="255"
            cy="130"
            r="32"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            opacity="0.25"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
          <motion.circle
            cx="255"
            cy="130"
            r="20"
            fill="hsl(var(--accent))"
            opacity="0.2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          <motion.circle
            cx="255"
            cy="130"
            r="10"
            fill="hsl(var(--accent))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.8, type: "spring" }}
          />

          {/* Pulse animation */}
          <motion.circle
            cx="255"
            cy="130"
            r="10"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            animate={{
              r: [10, 50, 10],
              opacity: [0.6, 0, 0.6]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 2
            }}
          />

          {/* 3 points alignés autour du centre */}
          {[0, 1, 2].map((i) => {
            const angle = (i * 120 - 90) * (Math.PI / 180);
            const x = 255 + Math.cos(angle) * 32;
            const y = 130 + Math.sin(angle) * 32;
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill="hsl(var(--accent))"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 + i * 0.15 }}
              />
            );
          })}
        </motion.g>

        {/* Label droite */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
        >
          <rect x="205" y="190" width="100" height="26" rx="13" fill="hsl(var(--accent))" opacity="0.15" />
          <text
            x="255"
            y="208"
            textAnchor="middle"
            fill="hsl(var(--accent))"
            fontSize="10"
            fontWeight="600"
          >
            Business Solide
          </text>
        </motion.g>

        {/* Tagline */}
        <motion.text
          x="160"
          y="245"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize="10"
          fontWeight="500"
          opacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.5 }}
        >
          De la vision à la réalité
        </motion.text>
      </svg>
    </div>
  );
};

export default VisionIllustration;
