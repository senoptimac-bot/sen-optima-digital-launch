import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/config/business";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const FormationFormPage = () => {
  const [nom, setNom] = useState("");
  const [activite, setActivite] = useState("");
  const [niveau, setNiveau] = useState("");
  const [objectif, setObjectif] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!nom.trim()) e.nom = true;
    if (!activite.trim()) e.activite = true;
    if (!niveau) e.niveau = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const message = `[Demande : Formation]

Nom : ${nom.trim()}
Activité : ${activite.trim()}
Niveau : ${niveau}
Objectif d'apprentissage : ${objectif.trim() || "Non précisé"}

Merci de me tenir informé du lancement.`;

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SEOHead
        title="Formation & Accompagnement | Sen'Optima"
        description="Inscrivez-vous pour être informé du lancement de nos formations digitales."
        canonicalPath="/formation"
      />
      <div className="min-h-screen bg-background">
        <section className="py-16 md:py-24">
          <div className="container max-w-2xl">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux solutions
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-accent/15 text-accent inline-block mb-4">
                Bientôt disponible
              </span>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                Formation & <span className="italic text-accent">Accompagnement</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base mb-10 max-w-xl">
                Notre programme est en préparation. Laissez vos informations pour être parmi les premiers informés.
              </p>

              <div className="space-y-6">
                {/* Nom */}
                <div>
                  <Label htmlFor="nom" className="text-foreground">Nom *</Label>
                  <Input
                    id="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Votre nom"
                    autoComplete="name"
                    className={errors.nom ? "border-destructive" : ""}
                  />
                  {errors.nom && <p className="text-xs text-destructive mt-1">Ce champ est obligatoire</p>}
                </div>

                {/* Activité */}
                <div>
                  <Label htmlFor="activite" className="text-foreground">Activité *</Label>
                  <Input
                    id="activite"
                    value={activite}
                    onChange={(e) => setActivite(e.target.value)}
                    placeholder="Votre activité actuelle"
                    className={errors.activite ? "border-destructive" : ""}
                  />
                  {errors.activite && <p className="text-xs text-destructive mt-1">Ce champ est obligatoire</p>}
                </div>

                {/* Niveau */}
                <div>
                  <Label className="text-foreground mb-3 block">Niveau *</Label>
                  <RadioGroup value={niveau} onValueChange={setNiveau} className="space-y-2">
                    {["Débutant", "Intermédiaire"].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-card hover:border-accent/50 transition-colors cursor-pointer"
                      >
                        <RadioGroupItem value={opt} />
                        <span className="text-sm text-foreground">{opt}</span>
                      </label>
                    ))}
                  </RadioGroup>
                  {errors.niveau && <p className="text-xs text-destructive mt-1">Veuillez sélectionner un niveau</p>}
                </div>

                {/* Objectif */}
                <div>
                  <Label htmlFor="objectif" className="text-foreground">Ce que vous souhaitez apprendre</Label>
                  <Textarea
                    id="objectif"
                    value={objectif}
                    onChange={(e) => setObjectif(e.target.value)}
                    placeholder="Ex: Créer un site, comprendre la publicité en ligne..."
                    rows={3}
                    maxLength={500}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full inline-flex items-center justify-center gap-2 h-14 rounded-full bg-accent text-primary font-semibold text-base transition-all duration-300 hover:bg-accent/90 hover:shadow-lg active:scale-[0.98] mt-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Être informé du lancement
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FormationFormPage;
