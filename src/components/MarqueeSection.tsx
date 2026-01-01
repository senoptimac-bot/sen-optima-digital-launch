import { motion } from "framer-motion";

const keywords = [
  "CLARTÉ",
  "STRATÉGIE",
  "PROCESS",
  "RENTABILITÉ",
  "DIGITAL",
  "ORGANISATION",
];

const MarqueeSection = () => {
  // Duplicate keywords for seamless loop
  const duplicatedKeywords = [...keywords, ...keywords, ...keywords];

  return (
    <section className="relative py-4 bg-white/5 overflow-hidden border-y border-white/5 -mt-16">
      <div className="flex">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedKeywords.map((keyword, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-lg md:text-xl font-sans font-medium tracking-widest text-white/20 uppercase">
                {keyword}
              </span>
              <span className="text-white/20 text-sm">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
