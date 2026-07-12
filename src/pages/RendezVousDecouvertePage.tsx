import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import { buildWhatsAppUrl } from "@/config/business";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

type Pole = "mobilite" | "business";

const RendezVousDecouvertePage = () => {
  const [searchParams] = useSearchParams();
  const initialPole = searchParams.get("pole") === "business" ? "business" : "mobilite";

  const [pole, setPole] = useState<Pole>(initialPole as Pole);
  const [nom, setNom] = useState("");
  const [contexte, setContexte] = useState(""); // pays visé (mobilité) ou activité (business)
  const [objectif, setObjectif] = useState("");
  const [difficultes, setDifficultes] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const seo = SEO_CONFIG.rendezVousDecouverte;

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!nom.trim()) e.nom = true;
    if (!contexte.trim()) e.contexte = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const poleLabel = pole === "mobilite" ? "Mobilité Internationale" : "Développement des Entreprises";
    const contexteLabel = pole === "mobilite" ? "Pays qui m'intéresse" : "Mon activité";
    const message = `[Rendez-vous Découverte — ${poleLabel}]

Nom : ${nom.trim()}
${contexteLabel} : ${contexte.trim()}
Objectif : ${objectif.trim() || "Non précisé"}
Difficultés rencontrées : ${difficultes.trim() || "Non précisé"}

Je souhaite réserver mon rendez-vous découverte gratuit.`;

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        noIndex={seo.noIndex}
      />
      <div className="min-h-screen bg-background">
        <section className="py-16 md:py-24 pt-32 md:pt-40">
          <div className="container max-w-2xl">
            <Link
              to="/nos-expertises"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux expertises
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="badge-accent mb-6 inline-block">Gratuit — 20 à 30 minutes</span>
              <h1 className="text-title text-foreground mb-3">
                Réserver mon <span className="italic text-accent">rendez-vous découverte</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base mb-10 max-w-xl">
                Un premier échange pour comprendre votre projet. Aucune analyse approfondie à ce
                stade — seulement pour vous orienter vers le parcours le plus adapté.
              </p>

              <div className="space-y-6">
                <div>
                  <Label className="text-foreground mb-3 block">Votre projet concerne *</Label>
                  <RadioGroup value={pole} onValueChange={(v) => setPole(v as Pole)} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { value: "mobilite", label: "Mobilité Internationale" },
                      { value: "business", label: "Développement des Entreprises" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-card hover:border-accent/50 transition-colors cursor-pointer"
                      >
                        <RadioGroupItem value={opt.value} />
                        <span className="text-sm text-foreground">{opt.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="nom" className="text-foreground">Nom & Prénom *</Label>
                  <Input
                    id="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Votre nom complet"
                    autoComplete="name"
                    className={errors.nom ? "border-destructive" : ""}
                  />
                  {errors.nom && <p className="text-xs text-destructive mt-1">Ce champ est obligatoire</p>}
                </div>

                <div>
                  <Label htmlFor="contexte" className="text-foreground">
                    {pole === "mobilite" ? "Pays qui vous intéresse *" : "Votre activité *"}
                  </Label>
                  <Input
                    id="contexte"
                    value={contexte}
                    onChange={(e) => setContexte(e.target.value)}
                    placeholder={pole === "mobilite" ? "Ex : Canada, France, Belgique..." : "Ex : Commerce, Services, Tech..."}
                    className={errors.contexte ? "border-destructive" : ""}
                  />
                  {errors.contexte && <p className="text-xs text-destructive mt-1">Ce champ est obligatoire</p>}
                </div>

                <div>
                  <Label htmlFor="objectif" className="text-foreground">Votre objectif</Label>
                  <Textarea
                    id="objectif"
                    value={objectif}
                    onChange={(e) => setObjectif(e.target.value)}
                    placeholder="Décrivez brièvement votre objectif..."
                    rows={3}
                    maxLength={500}
                  />
                </div>

                <div>
                  <Label htmlFor="difficultes" className="text-foreground">Difficultés rencontrées</Label>
                  <Textarea
                    id="difficultes"
                    value={difficultes}
                    onChange={(e) => setDifficultes(e.target.value)}
                    placeholder="Facultatif"
                    rows={3}
                    maxLength={500}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full inline-flex items-center justify-center gap-2 h-14 rounded-full bg-foreground text-primary font-semibold text-base transition-all duration-300 hover:bg-foreground/90 hover:shadow-lg active:scale-[0.98] mt-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Réserver mon rendez-vous découverte
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RendezVousDecouvertePage;
