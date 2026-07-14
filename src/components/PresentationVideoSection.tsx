import FounderVideoPlayer from "@/components/FounderVideoPlayer";

const PresentationVideoSection = () => {
  return (
    <section className="py-section-lg relative bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="badge-accent mb-6 inline-block">Présentation</span>
          <h2 className="text-headline text-foreground mb-6">
            Découvrez <span className="italic text-accent">Sen'Optima Consulting.</span>
          </h2>
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            Une minute pour comprendre qui nous sommes et comment nous accompagnons nos clients.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FounderVideoPlayer title="Présentation de Sen'Optima Consulting" />
        </div>
      </div>
    </section>
  );
};

export default PresentationVideoSection;
