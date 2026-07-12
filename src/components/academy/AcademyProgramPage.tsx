import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Wallet, Check, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import SiteImage from "@/components/SiteImage";
import BackButton from "@/components/BackButton";
import { AcademyProgram } from "@/data/academyPrograms";

interface AcademyProgramPageProps {
  program: AcademyProgram;
  seo: { title: string; description: string; canonicalPath: string; keywords?: string };
}

const AcademyProgramPage = ({ program, seo }: AcademyProgramPageProps) => {
  const bookingHref = `/formation?track=${program.track}`;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        keywords={seo.keywords}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-0 overflow-hidden">
          <div className="container relative z-10">
            <BackButton />
            <div className="grid lg:grid-cols-2 gap-12 items-center pb-16 md:pb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="badge-accent mb-6 inline-block">
                  Sen'Optima Academy · Programme {program.programNumber}
                </span>
                <h1 className="text-headline text-foreground mb-4">{program.title}</h1>
                <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">{program.tagline}</p>

                <div className="flex flex-wrap gap-6 mb-10">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Calendar className="w-4 h-4 text-accent" />1 semaine intensive
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Users className="w-4 h-4 text-accent" />
                    10 à 20 participants
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Wallet className="w-4 h-4 text-accent" />
                    49 000 FCFA
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  variant="hero"
                >
                  <Link to={bookingHref}>
                    Je réserve ma place
                    <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <SiteImage
                  src={program.image}
                  alt={program.imageAlt}
                  className="w-full aspect-[4/3] object-cover object-top rounded-[2rem] border-2 border-accent/40"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pour qui / positioning */}
        <section className="py-16 md:py-20">
          <div className="container max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-accent mb-6 inline-block">Pour qui ?</span>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">{program.audienceIntro}</p>
              <div className="border-l-4 border-accent pl-5 space-y-1">
                <p className="text-body text-foreground leading-relaxed">{program.positioningNote[0]}</p>
                <p className="text-body font-semibold text-foreground leading-relaxed">{program.positioningNote[1]}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="badge-accent mb-6 inline-block">Ce que vous allez apprendre</span>
              <h2 className="text-headline text-foreground">
                Sept modules, <span className="italic text-accent">une méthode.</span>
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-3">
              {program.modules.map((module, index) => (
                <AccordionItem
                  key={module.title}
                  value={`module-${index}`}
                  className="card-cream border-none px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-caption text-accent font-bold shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-body font-semibold text-foreground">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 mb-3 pl-9">
                      {module.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {module.note && (
                      <p className="text-sm text-foreground/80 italic pl-9">{module.note}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 md:py-20">
          <div className="container max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-accent mb-6 inline-block">À l'issue de la formation</span>
              <h2 className="text-headline text-foreground mb-8">
                Ce que vous serez capable <span className="italic text-accent">de faire.</span>
              </h2>
              <ul className="space-y-4">
                {program.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body text-foreground">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Includes */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-accent mb-6 inline-block">Ce que vous obtenez</span>
              <ul className="grid sm:grid-cols-2 gap-3">
                {program.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body text-foreground">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Audience cards */}
        <section className="py-16 md:py-20">
          <div className="container max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-accent mb-6 inline-block">À qui s'adresse ce programme ?</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {program.audienceCards.map((label) => (
                  <div key={label} className="p-5 card-cream text-center">
                    <GraduationCap className="w-5 h-5 text-accent mx-auto mb-2" />
                    <p className="text-sm text-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Not for you / For you */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container max-w-3xl">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-title text-foreground mb-5">Ce programme n'est pas fait pour vous si...</h3>
                <ul className="space-y-3">
                  {program.notForYou.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body text-muted-foreground">
                      <X className="w-5 h-5 text-destructive/70 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h3 className="text-title text-foreground mb-5">Ce programme est fait pour vous si...</h3>
                <ul className="space-y-3">
                  {program.forYou.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body text-foreground">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Week schedule */}
        <section className="py-16 md:py-20">
          <div className="container max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-accent mb-6 inline-block">Comment se déroule la semaine ?</span>
              <div className="space-y-3">
                {program.week.map((item) => (
                  <div key={item.day} className="flex items-center gap-4 p-4 rounded-xl card-cream">
                    <span className="text-caption text-accent font-bold w-16 shrink-0">{item.day}</span>
                    <span className="text-body text-foreground">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-accent mb-6 inline-block">Questions fréquentes</span>
              <Accordion type="single" collapsible className="space-y-3">
                {program.faq.map((item, index) => (
                  <AccordionItem key={item.question} value={`faq-${index}`} className="card-cream border-none px-6">
                    <AccordionTrigger className="hover:no-underline py-5 text-left">
                      <span className="text-body font-semibold text-foreground">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-2xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-headline text-foreground mb-3">Je réserve ma place</h2>
              <p className="text-2xl font-heading font-bold text-accent mb-2">49 000 FCFA</p>
              <p className="text-sm text-muted-foreground mb-8">Places limitées à 20 participants.</p>
              <Button
                asChild
                size="lg"
                variant="hero"
              >
                <Link to={bookingHref}>
                  Réserver
                  <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AcademyProgramPage;
