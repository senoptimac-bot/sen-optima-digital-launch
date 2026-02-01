import { motion } from "framer-motion";

const VisionIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
      <svg viewBox="0 0 400 280" className="w-full h-full max-w-md">
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

        {/* Center - Transformation Arrow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Arrow line with gradient */}
          <motion.path
            d="M140 140 C180 140 190 140 230 140"
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
            points="225,132 240,140 225,148"
            fill="hsl(var(--accent))"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />

          {/* Sparkle effects on arrow */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`spark-${i}`}
              cx={160 + i * 30}
              cy={140}
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

          {/* Transformation text */}
          <motion.text
            x="190"
            y="165"
            textAnchor="middle"
            fill="hsl(var(--accent))"
            opacity={0.7}
            fontSize="10"
            fontWeight="500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2 }}
          >
            Sen'Optima
          </motion.text>
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
              x="270"
              y="90"
              width="100"
              height="100"
              rx="8"
              fill="hsl(var(--accent))"
              opacity={0.1}
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ transformOrigin: "320px 140px" }}
            />
            
            {/* Grid items - organized blocks */}
            {[
              { x: 280, y: 100, w: 38, h: 35 },
              { x: 322, y: 100, w: 38, h: 35 },
              { x: 280, y: 145, w: 80, h: 35 },
            ].map((block, i) => (
              <motion.rect
                key={`block-${i}`}
                x={block.x}
                y={block.y}
                width={block.w}
                height={block.h}
                rx="4"
                fill="hsl(var(--accent))"
                opacity={0.3}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.3, y: 0 }}
                transition={{ delay: 1.3 + i * 0.2 }}
              />
            ))}

            {/* Check marks */}
            {[
              { x: 295, y: 118 },
              { x: 337, y: 118 },
              { x: 316, y: 163 },
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
              d="M280 210 L300 195 L320 200 L350 175"
              stroke="hsl(var(--accent))"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="350"
              cy="175"
              r="5"
              fill="hsl(var(--accent))"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.g>
        </motion.g>

        {/* Labels */}
        <motion.text
          x="75"
          y="230"
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          opacity={0.4}
          fontSize="11"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.5 }}
        >
          Idées floues
        </motion.text>
        <motion.text
          x="320"
          y="230"
          textAnchor="middle"
          fill="hsl(var(--accent))"
          fontSize="11"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7 }}
        >
          Business solide
        </motion.text>
      </svg>
    </div>
  );
};

export default VisionIllustration;
