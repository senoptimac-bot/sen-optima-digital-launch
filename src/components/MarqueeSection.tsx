const MarqueeSection = () => {
  const phrase = "L'INFORMEL EST UNE ÉTAPE. LA STRUCTURE EST UNE DESTINATION.";
  
  // Repeat phrase multiple times for seamless loop
  const marqueeContent = Array(6).fill(phrase);

  return (
    <section className="relative w-full overflow-hidden border-y border-border bg-secondary/50">
      <div className="py-5 overflow-hidden">
        <div className="marquee-track flex">
          {marqueeContent.map((text, index) => (
            <span
              key={index}
              className="flex-shrink-0 text-caption uppercase tracking-[0.25em] text-foreground/40 whitespace-nowrap font-medium"
            >
              {text}
              <span className="mx-10 text-accent">✦</span>
            </span>
          ))}
          {marqueeContent.map((text, index) => (
            <span
              key={`dup-${index}`}
              className="flex-shrink-0 text-caption uppercase tracking-[0.25em] text-foreground/40 whitespace-nowrap font-medium"
            >
              {text}
              <span className="mx-10 text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
