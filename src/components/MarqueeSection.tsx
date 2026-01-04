const MarqueeSection = () => {
  const keywords = [
    "CLARTÉ",
    "STRATÉGIE",
    "PERFORMANCE",
    "STRUCTURE",
    "RENTABILITÉ"
  ];

  const marqueeContent = [...keywords, ...keywords, ...keywords];

  return (
    <section className="relative w-full overflow-hidden border-y border-foreground/5">
      <div className="py-4 overflow-hidden">
        <div className="marquee-track flex">
          {marqueeContent.map((word, index) => (
            <span
              key={index}
              className="flex-shrink-0 text-caption uppercase tracking-[0.3em] text-foreground/30 whitespace-nowrap"
            >
              {word}
              <span className="mx-8 text-foreground/10">·</span>
            </span>
          ))}
          {marqueeContent.map((word, index) => (
            <span
              key={`dup-${index}`}
              className="flex-shrink-0 text-caption uppercase tracking-[0.3em] text-foreground/30 whitespace-nowrap"
            >
              {word}
              <span className="mx-8 text-foreground/10">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;