import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import SiteImage from "@/components/SiteImage";
import { SEO_CONFIG } from "@/config/seo.config";
import BackButton from "@/components/BackButton";
import { businessLaunchProgram, profilInternationalProgram, AcademyProgram } from "@/data/academyPrograms";

const programs: AcademyProgram[] = [businessLaunchProgram, profilInternationalProgram];

const SenOptimaAcademyPage = () => {
  const seo = SEO_CONFIG.senOptimaAcademy;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        keywords={seo.keywords}
      />

      <div className="min-h-screen bg-background">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container max-w-2xl">
            <BackButton />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="badge-accent mb-6 inline-block">Sen'Optima Academy</span>
              <h1 className="text-headline text-foreground mb-6">
                Apprenez ce qui compte <span className="italic text-accent">vraiment.</span>
              </h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                Des programmes intensifs conçus pour transformer un projet en plan d'action concret.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-20 md:pb-32">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/senoptima-academy/${program.slug}`} className="group block card-cream overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                      <SiteImage
                        src={program.image}
                        alt={program.imageAlt}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <span className="text-xs uppercase tracking-wider font-semibold text-accent mb-2 block">
                        Programme {program.programNumber}
                      </span>
                      <h2 className="text-title text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                        {program.title}
                      </h2>
                      <p className="text-body text-muted-foreground leading-relaxed mb-6">{program.tagline}</p>

                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-1.5 text-xs text-foreground">
                          <Calendar className="w-3.5 h-3.5 text-accent" />1 semaine intensive
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-foreground">
                          <Users className="w-3.5 h-3.5 text-accent" />
                          10 à 20 participants
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-foreground">
                          <Wallet className="w-3.5 h-3.5 text-accent" />
                          49 000 FCFA
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                        Découvrir le programme
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SenOptimaAcademyPage;
