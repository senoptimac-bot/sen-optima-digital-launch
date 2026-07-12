import AcademyProgramPage from "@/components/academy/AcademyProgramPage";
import { profilInternationalProgram } from "@/data/academyPrograms";
import { SEO_CONFIG } from "@/config/seo.config";

const ProfilInternationalPage = () => {
  return <AcademyProgramPage program={profilInternationalProgram} seo={SEO_CONFIG.academyProfilInternational} />;
};

export default ProfilInternationalPage;
