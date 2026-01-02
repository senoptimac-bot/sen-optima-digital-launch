const MarqueeSection = () => {
  const keywords = [
    "CLARTÉ",
    "STRATÉGIE",
    "PERFORMANCE",
    "STRUCTURE",
    "RENTABILITÉ"
  ];

  // Triple duplication for seamless infinite loop
  const marqueeContent = [...keywords, ...keywords, ...keywords];

  return (
    <section className="relative w-full overflow-hidden bg-[#050E22] border-y border-white/5 -mt-16 z-10">
      <div className="py-3 md:py-4 overflow-hidden">
        {/* CSS-only infinite marquee - works on all devices */}
        <div className="marquee-track flex">
          {marqueeContent.map((word, index) => (
            <span
              key={index}
              className="marquee-item flex-shrink-0 text-xs md:text-sm uppercase tracking-[0.25em] md:tracking-[0.3em] font-medium text-white whitespace-nowrap"
            >
              {word}
              <span className="mx-4 md:mx-8 text-white/40">•</span>
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {marqueeContent.map((word, index) => (
            <span
              key={`dup-${index}`}
              className="marquee-item flex-shrink-0 text-xs md:text-sm uppercase tracking-[0.25em] md:tracking-[0.3em] font-medium text-white whitespace-nowrap"
            >
              {word}
              <span className="mx-4 md:mx-8 text-white/40">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;