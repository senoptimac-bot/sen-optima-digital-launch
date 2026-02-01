import { motion } from "framer-motion";

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
        {/* Background glow */}
        <defs>
          <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="projectGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Glow circle */}
        <motion.circle
          cx="200"
          cy="150"
          r="120"
          fill="url(#heroGlow)"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Corporate Building - Left */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main building */}
          <motion.rect
            x="60"
            y="80"
            width="80"
            height="140"
            rx="4"
            fill="url(#buildingGrad)"
            animate={{ y: [80, 75, 80] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Windows */}
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2].map((col) => (
              <motion.rect
                key={`window-${row}-${col}`}
                x={72 + col * 22}
                y={95 + row * 26}
                width="12"
                height="16"
                rx="2"
                fill="hsl(var(--accent))"
                opacity={0.6}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (row + col) * 0.2,
                }}
              />
            ))
          )}
        </motion.g>

        {/* Connection Arrow/Flow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Flowing line */}
          <motion.path
            d="M150 150 Q200 120 250 150"
            stroke="hsl(var(--accent))"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8 4"
            animate={{ strokeDashoffset: [0, -24] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          {/* Arrow head */}
          <motion.polygon
            points="245,145 255,150 245,155"
            fill="hsl(var(--accent))"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Your Project - Right (Smaller, growing) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Project building */}
          <motion.rect
            x="270"
            y="130"
            width="60"
            height="90"
            rx="4"
            fill="url(#projectGrad)"
            animate={{ y: [130, 125, 130] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          {/* Windows */}
          {[0, 1, 2].map((row) =>
            [0, 1].map((col) => (
              <motion.rect
                key={`proj-window-${row}-${col}`}
                x={280 + col * 22}
                y={142 + row * 26}
                width="10"
                height="14"
                rx="2"
                fill="hsl(var(--background))"
                opacity={0.8}
              />
            ))
          )}
          {/* Growth arrow */}
          <motion.path
            d="M300 115 L300 100 M295 105 L300 100 L305 105"
            stroke="hsl(var(--accent))"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={{ y: [0, -5, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={180 + i * 15}
            cy={140}
            r="3"
            fill="hsl(var(--accent))"
            opacity={0.6}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default HeroIllustration;
