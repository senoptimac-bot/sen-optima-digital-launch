import { motion } from "framer-motion";

const ParcoursIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
      <svg viewBox="0 0 400 280" className="w-full h-full max-w-md">
        <defs>
          <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Journey Path */}
        <motion.path
          d="M50 200 Q100 200 120 160 Q140 120 180 120 Q220 120 250 140 Q280 160 320 140 Q360 120 380 80"
          stroke="url(#pathGrad)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Dotted path animation overlay */}
        <motion.path
          d="M50 200 Q100 200 120 160 Q140 120 180 120 Q220 120 250 140 Q280 160 320 140 Q360 120 380 80"
          stroke="hsl(var(--accent))"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="10 20"
          animate={{ strokeDashoffset: [0, -60] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Start Node - Corporate */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <circle cx="50" cy="200" r="25" fill="url(#nodeGlow)" />
          <motion.circle
            cx="50"
            cy="200"
            r="18"
            fill="hsl(var(--foreground))"
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            opacity={0.3}
          />
          {/* Briefcase icon */}
          <motion.rect x="40" y="195" width="20" height="14" rx="2" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" opacity={0.7} />
          <motion.path d="M45 195 V192 Q45 190 47 190 H53 Q55 190 55 192 V195" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" opacity={0.7} />
        </motion.g>

        {/* Middle Nodes - Journey points */}
        {[
          { cx: 120, cy: 160, delay: 0.6 },
          { cx: 180, cy: 120, delay: 0.9 },
          { cx: 250, cy: 140, delay: 1.2 },
          { cx: 320, cy: 140, delay: 1.5 },
        ].map((node, i) => (
          <motion.g
            key={`node-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: node.delay }}
          >
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="8"
              fill="hsl(var(--accent))"
              opacity={0.3}
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
            <circle cx={node.cx} cy={node.cy} r="5" fill="hsl(var(--accent))" />
          </motion.g>
        ))}

        {/* End Node - Success/Entrepreneur */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <motion.circle
            cx="380"
            cy="80"
            r="30"
            fill="url(#nodeGlow)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <circle cx="380" cy="80" r="22" fill="hsl(var(--accent))" opacity={0.2} />
          <circle cx="380" cy="80" r="16" fill="hsl(var(--accent))" />
          {/* Star icon */}
          <motion.path
            d="M380 68 L382 76 L390 76 L384 81 L386 89 L380 85 L374 89 L376 81 L370 76 L378 76 Z"
            fill="hsl(var(--background))"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "380px 78px" }}
          />
        </motion.g>

        {/* Moving dot along path */}
        <motion.circle
          r="6"
          fill="hsl(var(--accent))"
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            offsetPath: "path('M50 200 Q100 200 120 160 Q140 120 180 120 Q220 120 250 140 Q280 160 320 140 Q360 120 380 80')",
          }}
        >
          <animate attributeName="opacity" values="1;0.5;1" dur="4s" repeatCount="indefinite" />
        </motion.circle>

        {/* Labels */}
        <motion.text
          x="50"
          y="240"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          opacity={0.5}
          fontSize="11"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2 }}
        >
          Corporate
        </motion.text>
        <motion.text
          x="380"
          y="125"
          textAnchor="middle"
          fill="hsl(var(--accent))"
          fontSize="11"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          Votre Réussite
        </motion.text>
      </svg>
    </div>
  );
};

export default ParcoursIllustration;
