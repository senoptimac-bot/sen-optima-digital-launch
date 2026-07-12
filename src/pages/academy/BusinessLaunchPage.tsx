import AcademyProgramPage from "@/components/academy/AcademyProgramPage";
import { businessLaunchProgram } from "@/data/academyPrograms";
import { SEO_CONFIG } from "@/config/seo.config";

const BusinessLaunchPage = () => {
  return <AcademyProgramPage program={businessLaunchProgram} seo={SEO_CONFIG.academyBusinessLaunch} />;
};

export default BusinessLaunchPage;
