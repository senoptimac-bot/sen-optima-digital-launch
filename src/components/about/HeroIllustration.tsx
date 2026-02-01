import { motion } from "framer-motion";

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[320px] flex items-center justify-center">
      <svg viewBox="0 0 400 320" className="w-full h-full max-w-md">
        <defs>
          <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="rocketGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>

        {/* Central glow */}
        <motion.circle
          cx="200"
          cy="160"
          r="100"
          fill="url(#heroGlow)"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* LEFT SIDE: Toolbox with expertise */}
        <motion.g
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Toolbox base */}
          <motion.rect
            x="30"
            y="120"
            width="100"
            height="70"
            rx="8"
            fill="hsl(var(--foreground))"
            opacity="0.15"
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            strokeOpacity="0.3"
          />
          {/* Toolbox handle */}
          <motion.path
            d="M60 120 V110 Q60 105 65 105 H95 Q100 105 100 110 V120"
            fill="none"
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            strokeOpacity="0.4"
          />

          {/* Tools inside - 3 icons */}
          {/* Icon 1: Chart/Strategy */}
          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            <rect x="42" y="135" width="22" height="18" rx="3" fill="hsl(var(--accent))" opacity="0.3" />
            <path d="M47 148 L52 143 L57 146 L62 138" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" strokeLinecap="round" />
          </motion.g>

          {/* Icon 2: Gear/Process */}
          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            <rect x="69" y="135" width="22" height="18" rx="3" fill="hsl(var(--accent))" opacity="0.3" />
            <motion.circle
              cx="80"
              cy="144"
              r="6"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "80px 144px" }}
            />
            <circle cx="80" cy="144" r="2" fill="hsl(var(--accent))" />
          </motion.g>

          {/* Icon 3: Target/Goals */}
          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            <rect x="96" y="135" width="22" height="18" rx="3" fill="hsl(var(--accent))" opacity="0.3" />
            <circle cx="107" cy="144" r="5" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" />
            <circle cx="107" cy="144" r="2" fill="hsl(var(--accent))" />
          </motion.g>

          {/* Label: Nos Outils */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <text
              x="80"
              y="170"
              textAnchor="middle"
              fill="hsl(var(--foreground))"
              fontSize="9"
              fontWeight="500"
              opacity="0.5"
            >
              Stratégie • Process • Objectifs
            </text>
          </motion.g>
        </motion.g>

        {/* Label: Notre Expertise */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <rect x="30" y="200" width="100" height="26" rx="13" fill="hsl(var(--foreground))" opacity="0.1" />
          <text
            x="80"
            y="218"
            textAnchor="middle"
            fill="hsl(var(--foreground))"
            fontSize="11"
            fontWeight="600"
            opacity="0.7"
          >
            Notre Expertise
          </text>
        </motion.g>

        {/* CENTER: Flowing arrow with particles */}
        <motion.g>
          {/* Main arrow path */}
          <motion.path
            d="M140 155 Q180 155 200 140 Q220 125 260 140"
            stroke="hsl(var(--accent))"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="8 6"
            animate={{ strokeDashoffset: [0, -28] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Flying particles */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`particle-${i}`}
              r="4"
              fill="hsl(var(--accent))"
              animate={{
                offsetDistance: ["0%", "100%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut",
              }}
              style={{
                offsetPath: "path('M140 155 Q180 155 200 140 Q220 125 260 140')",
              }}
            />
          ))}

          {/* Transfer label */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <rect x="165" y="95" width="70" height="22" rx="11" fill="hsl(var(--accent))" opacity="0.15" />
            <text
              x="200"
              y="110"
              textAnchor="middle"
              fill="hsl(var(--accent))"
              fontSize="10"
              fontWeight="600"
            >
              Transfert
            </text>
          </motion.g>
        </motion.g>

        {/* RIGHT SIDE: Rocket / Project taking off */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Rocket body */}
          <motion.g
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Main rocket shape */}
            <path
              d="M310 180 L310 130 Q310 110 325 100 Q340 110 340 130 L340 180 Z"
              fill="url(#rocketGrad)"
            />
            {/* Rocket window */}
            <circle cx="325" cy="135" r="10" fill="hsl(var(--background))" opacity="0.9" />
            <circle cx="325" cy="135" r="6" fill="hsl(var(--accent))" opacity="0.3" />
            
            {/* Rocket fins */}
            <path d="M310 165 L295 185 L310 180 Z" fill="hsl(var(--accent))" opacity="0.7" />
            <path d="M340 165 L355 185 L340 180 Z" fill="hsl(var(--accent))" opacity="0.7" />

            {/* Flame */}
            <motion.g
              animate={{ scaleY: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 0.3, repeat: Infinity }}
              style={{ transformOrigin: "325px 180px" }}
            >
              <path
                d="M315 180 L325 210 L335 180 Z"
                fill="hsl(var(--accent))"
                opacity="0.6"
              />
              <path
                d="M318 180 L325 200 L332 180 Z"
                fill="hsl(var(--accent))"
                opacity="0.9"
              />
            </motion.g>
          </motion.g>

          {/* Speed lines */}
          {[0, 1, 2].map((i) => (
            <motion.line
              key={`speed-${i}`}
              x1={290 - i * 8}
              y1={200 + i * 10}
              x2={300 - i * 8}
              y2={200 + i * 10}
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ opacity: [0.2, 0.6, 0.2], x: [-5, 5, -5] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </motion.g>

        {/* Label: Votre Projet */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <rect x="275" y="235" width="100" height="26" rx="13" fill="hsl(var(--accent))" opacity="0.2" />
          <text
            x="325"
            y="253"
            textAnchor="middle"
            fill="hsl(var(--accent))"
            fontSize="11"
            fontWeight="700"
          >
            Votre Projet
          </text>
        </motion.g>

        {/* Bottom tagline */}
        <motion.text
          x="200"
          y="295"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize="11"
          fontWeight="500"
          opacity="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.3 }}
        >
          On vous donne les outils pour décoller
        </motion.text>
      </svg>
    </div>
  );
};

export default HeroIllustration;
