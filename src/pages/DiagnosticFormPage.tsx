import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/config/business";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const DiagnosticFormPage = () => {
  const [nom, setNom] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [secteur, setSecteur] = useState("");
  const [niveau, setNiveau] = useState("");
  const [blocage, setBlocage] = useState("");
  const [objectif, setObjectif] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!nom.trim()) e.nom = true;
    if (!entreprise.trim()) e.entreprise = true;
    if (!secteur.trim()) e.secteur = true;
    if (!niveau) e.niveau = true;
    if (!blocage) e.blocage = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const message = `[Demande : Diagnostic]

Nom : ${nom.trim()}
Entreprise : ${entreprise.trim()}
Secteur : ${secteur.trim()}
Niveau : ${niveau}
Blocage : ${blocage}
Objectif : ${objectif.trim() || "Non précisé"}

Je souhaite connaître les prochaines étapes pour le diagnostic.`;

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SEOHead
        title="Réserver un Diagnostic Stratégique | Sen'Optima"
        description="Complétez ce formulaire pour réserver votre diagnostic stratégique avec Sen'Optima Consulting."
        canonicalPath="/diagnostic"
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
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                Réserver un Diagnostic <span className="italic text-accent">Stratégique</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base mb-10 max-w-xl">
                Merci de compléter ces informations afin que nous puissions comprendre votre situation avant échange.
              </p>

              <div className="space-y-6">
                {/* Nom & Prénom */}
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

                {/* Entreprise */}
                <div>
                  <Label htmlFor="entreprise" className="text-foreground">Nom de l'entreprise *</Label>
                  <Input
                    id="entreprise"
                    value={entreprise}
                    onChange={(e) => setEntreprise(e.target.value)}
                    placeholder="Votre entreprise"
                    autoComplete="organization"
                    className={errors.entreprise ? "border-destructive" : ""}
                  />
                  {errors.entreprise && <p className="text-xs text-destructive mt-1">Ce champ est obligatoire</p>}
                </div>

                {/* Secteur */}
                <div>
                  <Label htmlFor="secteur" className="text-foreground">Secteur d'activité *</Label>
                  <Input
                    id="secteur"
                    value={secteur}
                    onChange={(e) => setSecteur(e.target.value)}
                    placeholder="Ex: Commerce, Services, Tech..."
                    className={errors.secteur ? "border-destructive" : ""}
                  />
                  {errors.secteur && <p className="text-xs text-destructive mt-1">Ce champ est obligatoire</p>}
                </div>

                {/* Niveau actuel */}
                <div>
                  <Label className="text-foreground mb-3 block">Niveau actuel *</Label>
                  <RadioGroup value={niveau} onValueChange={setNiveau} className="space-y-2">
                    {["Je démarre", "Activité existante", "PME structurée"].map((opt) => (
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

                {/* Blocage */}
                <div>
                  <Label className="text-foreground">Principal blocage *</Label>
                  <Select value={blocage} onValueChange={setBlocage}>
                    <SelectTrigger className={errors.blocage ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionnez votre blocage principal" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {["Manque de clients", "Manque de structure", "Site inefficace", "Communication confuse", "Autre"].map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.blocage && <p className="text-xs text-destructive mt-1">Veuillez sélectionner un blocage</p>}
                </div>

                {/* Objectif */}
                <div>
                  <Label htmlFor="objectif" className="text-foreground">Objectif sur 3-6 mois</Label>
                  <Textarea
                    id="objectif"
                    value={objectif}
                    onChange={(e) => setObjectif(e.target.value)}
                    placeholder="Décrivez brièvement votre objectif..."
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
                  Envoyer ma demande de Diagnostic
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DiagnosticFormPage;
