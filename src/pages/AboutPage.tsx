import { motion } from "framer-motion";
import { Quote, User, MapPin, Mail, Linkedin } from "lucide-react";

const values = [
  { value: "Clarté", description: "Des solutions simples et compréhensibles" },
  { value: "Performance", description: "Des résultats mesurables et concrets" },
  { value: "Stratégie", description: "Une vision long terme pour votre succès" },
];

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden bg-secondary dark:bg-gradient-hero">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] dark:block hidden" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-6">
              Qui sommes-nous
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              À Propos de <span className="text-gradient-gold">Sen'Optima</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Un cabinet de conseil digital engagé pour la réussite de votre entreprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 md:py-28 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 rounded-3xl glass-premium"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold"
              >
                <Quote className="w-6 h-6 text-accent-foreground" />
              </motion.div>

              <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-foreground leading-relaxed mb-8">
                Chez Sen'Optima, nous pensons que chaque entrepreneur mérite un accompagnement clair.
              </blockquote>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Nous ne promettons pas la magie. Nous offrons le{" "}
                <span className="text-accent font-semibold">travail</span>, la{" "}
                <span className="text-accent font-semibold">méthode</span> et la{" "}
                <span className="text-accent font-semibold">rigueur</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Basé à Dakar, Sen'Optima Consulting accompagne les jeunes entrepreneurs, les indépendants 
                et les PME dans leur transformation digitale. Notre mission : rendre le digital accessible, 
                compréhensible et rentable pour tous.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
            >
              {values.map((item, index) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="text-center p-6 rounded-2xl glass-card hover:glow-gold-subtle transition-all duration-300"
                >
                  <h3 className="text-lg font-heading font-bold text-gradient-gold mb-2">
                    {item.value}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-28 relative bg-secondary/30 dark:bg-secondary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
              Le Fondateur
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Derrière Sen'Optima
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 md:p-10 rounded-3xl glass-card">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Photo Placeholder */}
                <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0">
                  <User className="w-20 h-20 text-accent/50" />
                </div>

                {/* Bio */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Fondateur & Consultant Principal
                  </h3>
                  <p className="text-accent font-medium mb-4">Sen'Optima Consulting</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Passionné par l'entrepreneuriat et le digital, j'ai créé Sen'Optima avec une conviction : 
                    chaque entrepreneur sénégalais mérite d'avoir accès à un accompagnement stratégique de qualité, 
                    sans jargon ni promesses irréalistes.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>Dakar, Sénégal</span>
                    </div>
                    <a 
                      href="mailto:contact@senoptimaconsulting.com"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Mail className="w-4 h-4 text-accent" />
                      <span>Contact</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/senoptima"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-accent" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
