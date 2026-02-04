import DiagnosticHero from "./DiagnosticHero";
import ForWhoSection from "./ForWhoSection";
import HowItWorksSection from "./HowItWorksSection";
import WhatYouGetSection from "./WhatYouGetSection";
import FinalCTA from "./FinalCTA";

interface DiagnosticLandingProps {
  onStart: () => void;
}

const DiagnosticLanding = ({ onStart }: DiagnosticLandingProps) => {
  return (
    <div>
      <DiagnosticHero onStart={onStart} />
      <ForWhoSection />
      <HowItWorksSection />
      <WhatYouGetSection />
      <FinalCTA onStart={onStart} />
    </div>
  );
};

export default DiagnosticLanding;
