import { Quote } from "lucide-react";

const About = () => {
  return (
    <section id="apropos" className="py-20 md:py-28 bg-off-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Notre philosophie
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3">
              À Propos de Sen'Optima
            </h2>
          </div>

          {/* Manifesto Card */}
          <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border/50 shadow-soft">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <Quote className="w-6 h-6 text-accent-foreground" />
            </div>

            <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-foreground leading-relaxed mb-8">
              Chez Sen'Optima, nous pensons que chaque entrepreneur mérite un accompagnement clair.
            </blockquote>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Nous ne promettons pas la magie. Nous offrons le <span className="text-accent font-semibold">travail</span>, 
              la <span className="text-accent font-semibold">méthode</span> et 
              la <span className="text-accent font-semibold">rigueur</span>.
            </p>

            {/* Decorative line */}
            <div className="mt-10 pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-heading font-bold text-foreground">Sen'Optima Consulting</p>
                  <p className="text-sm text-muted-foreground">Cabinet de conseil digital basé à Dakar, Sénégal</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm text-muted-foreground">Disponible pour nouveaux projets</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { value: "Clarté", description: "Des solutions simples et compréhensibles" },
              { value: "Performance", description: "Des résultats mesurables et concrets" },
              { value: "Stratégie", description: "Une vision long terme pour votre succès" },
            ].map((item) => (
              <div 
                key={item.value} 
                className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-colors duration-300"
              >
                <h3 className="text-lg font-heading font-bold text-accent mb-2">{item.value}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
