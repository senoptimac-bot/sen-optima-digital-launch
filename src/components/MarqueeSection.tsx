import { motion } from "framer-motion";

const keywords = [
  "STRATÉGIE DIGITALE",
  "STRUCTURATION",
  "CROISSANCE",
  "SEN'OPTIMA",
  "PERFORMANCE",
  "SÉNÉGAL 2026",
];

const MarqueeSection = () => {
  // Duplicate keywords for seamless loop
  const duplicatedKeywords = [...keywords, ...keywords, ...keywords];

  return (
    <section className="relative py-6 bg-white/5 overflow-hidden border-y border-white/10">
      <div className="flex">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedKeywords.map((keyword, index) => (
            <div key={index} className="flex items-center gap-8">
              <span
                className="text-lg md:text-xl font-heading font-bold tracking-wider"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.6)",
                  textShadow: "0 0 20px rgba(212, 167, 59, 0.2)",
                }}
              >
                {keyword}
              </span>
              <span className="text-accent text-xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
