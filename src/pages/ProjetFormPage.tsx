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

const ProjetFormPage = () => {
  const [nom, setNom] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [taille, setTaille] = useState("");
  const [projet, setProjet] = useState("");
  const [objectif, setObjectif] = useState("");
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!nom.trim()) e.nom = true;
    if (!entreprise.trim()) e.entreprise = true;
    if (!taille) e.taille = true;
    if (!projet) e.projet = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const message = `[Demande : Structuration]

Nom : ${nom.trim()}
Entreprise : ${entreprise.trim()}
Taille équipe : ${taille}
Projet souhaité : ${projet}
Objectif : ${objectif.trim() || "Non précisé"}
Budget estimé : ${budget || "À définir"}

Je souhaite échanger sur ce projet.`;

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SEOHead
        title="Discuter d'un projet digital | Sen'Optima"
        description="Décrivez votre projet de structuration digitale et échangeons sur WhatsApp."
        canonicalPath="/projet"
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
                Discuter d'un projet de <span className="italic text-accent">structuration digitale</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base mb-10 max-w-xl">
                Décrivez votre projet pour que nous puissions préparer un échange pertinent.
              </p>

              <div className="space-y-6">
                {/* Nom */}
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
                  <Label htmlFor="entreprise" className="text-foreground">Entreprise *</Label>
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

                {/* Taille équipe */}
                <div>
                  <Label className="text-foreground mb-3 block">Taille de l'équipe *</Label>
                  <RadioGroup value={taille} onValueChange={setTaille} className="grid grid-cols-2 gap-2">
                    {["Solo", "2-5", "6-20", "+20"].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-card hover:border-accent/50 transition-colors cursor-pointer"
                      >
                        <RadioGroupItem value={opt} />
                        <span className="text-sm text-foreground">{opt}</span>
                      </label>
                    ))}
                  </RadioGroup>
                  {errors.taille && <p className="text-xs text-destructive mt-1">Veuillez sélectionner une option</p>}
                </div>

                {/* Projet souhaité */}
                <div>
                  <Label className="text-foreground">Ce que vous souhaitez mettre en place *</Label>
                  <Select value={projet} onValueChange={setProjet}>
                    <SelectTrigger className={errors.projet ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionnez un type de projet" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {["Site web stratégique", "Tunnel de conversion", "Publicité", "CRM / Automatisation", "Système complet"].map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.projet && <p className="text-xs text-destructive mt-1">Veuillez sélectionner un projet</p>}
                </div>

                {/* Objectif */}
                <div>
                  <Label htmlFor="objectif" className="text-foreground">Objectif principal</Label>
                  <Textarea
                    id="objectif"
                    value={objectif}
                    onChange={(e) => setObjectif(e.target.value)}
                    placeholder="Décrivez brièvement votre objectif..."
                    rows={3}
                    maxLength={500}
                  />
                </div>

                {/* Budget */}
                <div>
                  <Label className="text-foreground">Budget approximatif prévu</Label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une fourchette" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {["Moins de 500 000", "500 000 – 1 500 000", "+1 500 000", "À définir"].map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full inline-flex items-center justify-center gap-2 h-14 rounded-full btn-premium font-semibold text-base active:scale-[0.98] mt-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Envoyer ma demande
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjetFormPage;
