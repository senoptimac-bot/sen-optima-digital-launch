import { motion } from "framer-motion";

const VisionIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
        <defs>
          <linearGradient id="transformGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Left Side - Chaos/Blur (Idées floues) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Blurry scattered shapes */}
          {[
            { x: 50, y: 100, size: 25, delay: 0 },
            { x: 80, y: 140, size: 20, delay: 0.2 },
            { x: 40, y: 170, size: 22, delay: 0.4 },
            { x: 90, y: 190, size: 18, delay: 0.1 },
            { x: 60, y: 130, size: 15, delay: 0.3 },
            { x: 100, y: 160, size: 20, delay: 0.5 },
          ].map((shape, i) => (
            <motion.g key={`chaos-${i}`}>
              {/* Blurred background */}
              <motion.rect
                x={shape.x - shape.size / 2}
                y={shape.y - shape.size / 2}
                width={shape.size}
                height={shape.size}
                rx="4"
                fill="hsl(var(--foreground))"
                opacity={0.15}
                filter="url(#blur)"
                animate={{
                  x: [0, Math.random() * 10 - 5, 0],
                  y: [0, Math.random() * 10 - 5, 0],
                  rotate: [0, Math.random() * 20 - 10, 0],
                }}
                transition={{
                  duration: 3 + Math.random(),
                  repeat: Infinity,
                  delay: shape.delay,
                }}
                style={{ transformOrigin: `${shape.x}px ${shape.y}px` }}
              />
              {/* Faded outline */}
              <motion.rect
                x={shape.x - shape.size / 2}
                y={shape.y - shape.size / 2}
                width={shape.size}
                height={shape.size}
                rx="4"
                fill="none"
                stroke="hsl(var(--foreground))"
                strokeWidth="1"
                opacity={0.2}
                strokeDasharray="4 4"
                animate={{
                  x: [0, Math.random() * 8 - 4, 0],
                  y: [0, Math.random() * 8 - 4, 0],
                }}
                transition={{
                  duration: 2.5 + Math.random(),
                  repeat: Infinity,
                  delay: shape.delay,
                }}
              />
            </motion.g>
          ))}
          
          {/* Question marks floating */}
          {["?", "?", "?"].map((_, i) => (
            <motion.text
              key={`q-${i}`}
              x={55 + i * 25}
              y={115 + i * 30}
              fill="hsl(var(--foreground))"
              opacity={0.3}
              fontSize="16"
              fontWeight="bold"
              animate={{
                y: [0, -8, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              ?
            </motion.text>
          ))}
        </motion.g>

        {/* Label: Idées floues */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <rect x="25" y="220" width="90" height="24" rx="12" fill="hsl(var(--foreground))" opacity="0.1" />
          <text
            x="70"
            y="236"
            textAnchor="middle"
            fill="hsl(var(--foreground))"
            fontSize="10"
            fontWeight="600"
            opacity="0.5"
          >
            Idées floues
          </text>
        </motion.g>

        {/* Center - Transformation Arrow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Arrow line with gradient */}
          <motion.path
            d="M130 145 C170 145 180 145 220 145"
            stroke="url(#transformGrad)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          {/* Arrow head */}
          <motion.polygon
            points="215,137 230,145 215,153"
            fill="hsl(var(--accent))"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />

          {/* Sparkle effects on arrow */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`spark-${i}`}
              cx={145 + i * 30}
              cy={145}
              r="3"
              fill="hsl(var(--accent))"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 1 + i * 0.3,
              }}
            />
          ))}

          {/* Sen'Optima label */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <rect x="145" y="105" width="70" height="24" rx="12" fill="hsl(var(--accent))" opacity="0.2" />
            <text
              x="180"
              y="121"
              textAnchor="middle"
              fill="hsl(var(--accent))"
              fontSize="10"
              fontWeight="700"
            >
              Sen'Optima
            </text>
          </motion.g>
        </motion.g>

        {/* Right Side - Structure/Clarity (Business solides) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Organized grid structure */}
          <motion.g>
            {/* Main container */}
            <motion.rect
              x="255"
              y="95"
              width="110"
              height="110"
              rx="8"
              fill="hsl(var(--accent))"
              opacity={0.1}
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ transformOrigin: "310px 150px" }}
            />
            
            {/* Grid items - organized blocks with labels */}
            {[
              { x: 265, y: 105, w: 42, h: 40, label: "Marketing" },
              { x: 313, y: 105, w: 42, h: 40, label: "Gestion" },
              { x: 265, y: 155, w: 90, h: 40, label: "Processus" },
            ].map((block, i) => (
              <motion.g key={`block-${i}`}>
                <motion.rect
                  x={block.x}
                  y={block.y}
                  width={block.w}
                  height={block.h}
                  rx="4"
                  fill="hsl(var(--accent))"
                  opacity={0.25}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.25, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.2 }}
                />
                <motion.text
                  x={block.x + block.w / 2}
                  y={block.y + block.h / 2 + 4}
                  textAnchor="middle"
                  fill="hsl(var(--accent))"
                  fontSize="8"
                  fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 1.5 + i * 0.2 }}
                >
                  {block.label}
                </motion.text>
              </motion.g>
            ))}

            {/* Check marks */}
            {[
              { x: 280, y: 118 },
              { x: 328, y: 118 },
              { x: 305, y: 168 },
            ].map((pos, i) => (
              <motion.path
                key={`check-${i}`}
                d={`M${pos.x - 6} ${pos.y} L${pos.x - 2} ${pos.y + 4} L${pos.x + 6} ${pos.y - 4}`}
                stroke="hsl(var(--accent))"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 1.8 + i * 0.2 }}
              />
            ))}
          </motion.g>

          {/* Growth chart icon */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <motion.path
              d="M270 220 L295 205 L320 210 L355 185"
              stroke="hsl(var(--accent))"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="355"
              cy="185"
              r="5"
              fill="hsl(var(--accent))"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Arrow up */}
            <motion.path
              d="M355 180 L355 170 M350 175 L355 170 L360 175"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.g>
        </motion.g>

        {/* Label: Business Solide */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <rect x="265" y="245" width="100" height="26" rx="13" fill="hsl(var(--accent))" opacity="0.2" />
          <text
            x="315"
            y="263"
            textAnchor="middle"
            fill="hsl(var(--accent))"
            fontSize="11"
            fontWeight="700"
          >
            Business Solide
          </text>
        </motion.g>

        {/* Bottom tagline */}
        <motion.text
          x="200"
          y="290"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize="11"
          fontWeight="500"
          opacity="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2.5 }}
        >
          De la vision à la structure opérationnelle
        </motion.text>
      </svg>
    </div>
  );
};

export default VisionIllustration;
