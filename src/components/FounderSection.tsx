import FounderVideoPlayer from "@/components/FounderVideoPlayer";
import SiteImage from "@/components/SiteImage";
import founderPortrait from "@/assets/fondateur-portrait.jpg";

const FounderSection = () => {
  return (
    <section className="py-section-lg relative bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <span className="badge-accent mb-6 inline-block">Le Fondateur</span>
          <h2 className="text-headline text-foreground mb-6">
            La méthode a <span className="italic text-accent">un visage.</span>
          </h2>
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            Derrière Sen'Optima Consulting, une personne applique cette méthode au
            quotidien avec ses clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <SiteImage
            src={founderPortrait}
            alt="Le fondateur de Sen'Optima Consulting à son bureau"
            className="aspect-[3/4] w-full object-cover object-top rounded-[2rem] border-2 border-accent/30"
          />

          <FounderVideoPlayer />
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
