const keywords = [
  "CLARTÉ",
  "STRATÉGIE",
  "PROCESS",
  "RENTABILITÉ",
  "DIGITAL",
  "ORGANISATION",
];

const MarqueeSection = () => {
  return (
    <section className="relative py-4 bg-white/5 overflow-hidden border-y border-white/5 -mt-16">
      {/* Mobile: Static text for performance */}
      <div className="md:hidden flex justify-center gap-4 px-4 overflow-hidden">
        {keywords.slice(0, 3).map((keyword, index) => (
          <span key={index} className="text-sm font-sans font-medium tracking-widest text-white/30 uppercase whitespace-nowrap">
            {keyword}
          </span>
        ))}
      </div>

      {/* Desktop: CSS-only marquee animation */}
      <div className="hidden md:flex overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee-left">
          {[...keywords, ...keywords, ...keywords].map((keyword, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-lg md:text-xl font-sans font-medium tracking-widest text-white/20 uppercase">
                {keyword}
              </span>
              <span className="text-white/20 text-sm">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;