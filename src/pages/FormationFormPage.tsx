import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/config/business";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

type Track = "mobilite" | "business";

const TRACK_INFO: Record<Track, { pole: string; title: string }> = {
  mobilite: { pole: "Mobilité Internationale", title: "Profil International" },
  business: { pole: "Développement des Entreprises", title: "Business Launch" },
};

const FormationFormPage = () => {
  const [searchParams] = useSearchParams();
  const paramTrack = searchParams.get("track");
  const initialTrack: Track = paramTrack === "business" ? "business" : paramTrack === "mobilite" ? "mobilite" : "mobilite";

  const [track, setTrack] = useState<Track>(initialTrack);
  const [nom, setNom] = useState("");
  const [contexte, setContexte] = useState("");
  const [niveau, setNiveau] = useState("");
  const [objectif, setObjectif] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const seo = SEO_CONFIG.formation;
  const info = TRACK_INFO[track];

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!nom.trim()) e.nom = true;
    if (!contexte.trim()) e.contexte = true;
    if (!niveau) e.niveau = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const contexteLabel = track === "mobilite" ? "Pays qui m'intéresse" : "Mon activité";
    const message = `[Réservation Sen'Optima Academy — ${info.pole}]

Formation : ${info.title}
Nom : ${nom.trim()}
${contexteLabel} : ${contexte.trim()}
Niveau : ${niveau}
Ce que je souhaite apprendre : ${objectif.trim() || "Non précisé"}

Je confirme avoir pris connaissance du tarif de 49 000 FCFA (1 semaine intensive, présentiel).
Merci de m'indiquer la prochaine session disponible.`;

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 md:py-24 pt-32 md:pt-40">
          <div className="container max-w-2xl">
            <Link
              to="/senoptima-academy"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à Sen'Optima Academy
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="callout-accent mb-8">
                <p className="text-sm text-accent font-medium mb-1">Sen'Optima Academy — {info.title}</p>
                <p className="text-2xl md:text-3xl font-heading font-bold text-accent mb-2">49 000 FCFA</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Une semaine intensive, en présentiel, 10 à 20 participants maximum.
                </p>
              </div>

              <h1 className="text-title text-foreground mb-3">
                Je réserve ma place <span className="italic text-accent">à l'Academy</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base mb-10 max-w-xl">
                Merci de compléter ces informations afin que nous puissions préparer votre session.
              </p>

              <div className="space-y-6">
                <div>
                  <Label className="text-foreground mb-3 block">Formation *</Label>
                  <RadioGroup value={track} onValueChange={(v) => setTrack(v as Track)} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(Object.keys(TRACK_INFO) as Track[]).map((key) => (
                      <label
                        key={key}
                        className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-card hover:border-accent/50 transition-colors cursor-pointer"
                      >
                        <RadioGroupItem value={key} />
                        <span className="text-sm text-foreground">{TRACK_INFO[key].pole}</span>
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
                    {track === "mobilite" ? "Pays qui vous intéresse *" : "Votre activité *"}
                  </Label>
                  <Input
                    id="contexte"
                    value={contexte}
                    onChange={(e) => setContexte(e.target.value)}
                    placeholder={track === "mobilite" ? "Ex : Canada, France, Belgique..." : "Ex : Commerce, Services, Tech..."}
                    className={errors.contexte ? "border-destructive" : ""}
                  />
                  {errors.contexte && <p className="text-xs text-destructive mt-1">Ce champ est obligatoire</p>}
                </div>

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

                <div>
                  <Label htmlFor="objectif" className="text-foreground">Ce que vous souhaitez apprendre</Label>
                  <Textarea
                    id="objectif"
                    value={objectif}
                    onChange={(e) => setObjectif(e.target.value)}
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
                  Je réserve ma place
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
