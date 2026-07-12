import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/config/business";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const DiagnosticMobiliteFormPage = () => {
  const [nom, setNom] = useState("");
  const [pays, setPays] = useState("");
  const [typeProjet, setTypeProjet] = useState("");
  const [parcours, setParcours] = useState("");
  const [difficultes, setDifficultes] = useState("");
  const [tarifConfirme, setTarifConfirme] = useState(false);
  const [intention, setIntention] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const seo = SEO_CONFIG.diagnosticMobilite;

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!nom.trim()) e.nom = true;
    if (!pays.trim()) e.pays = true;
    if (!typeProjet) e.typeProjet = true;
    if (!parcours.trim()) e.parcours = true;
    if (!tarifConfirme) e.tarif = true;
    if (!intention) e.intention = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const isPret = intention === "pret";

    const header = isPret
      ? "[Demande : Diagnostic de Projet International – Prêt à payer]"
      : "[Demande : Diagnostic de Projet International – Question avant paiement]";

    const closing = isPret
      ? "Je confirme avoir pris connaissance du tarif de 25 000 FCFA et je suis prêt(e) à procéder au paiement du diagnostic.\nMerci de m'envoyer le lien Wave et les prochaines étapes."
      : "J'ai pris connaissance du tarif de 25 000 FCFA et je souhaite échanger brièvement avant de procéder au paiement.";

    const message = `${header}

Nom : ${nom.trim()}
Pays visé : ${pays.trim()}
Type de projet : ${typeProjet}
Parcours académique/professionnel : ${parcours.trim()}
Difficultés rencontrées : ${difficultes.trim() || "Non précisé"}

${closing}`;

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
              to="/nos-expertises/mobilite-internationale"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à Mobilité Internationale
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="callout-accent mb-8">
                <p className="text-sm text-accent font-medium mb-1">Diagnostic de Projet International</p>
                <p className="text-2xl md:text-3xl font-heading font-bold text-accent mb-2">25 000 FCFA</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Complétez ce formulaire pour que nous puissions analyser votre situation avant
                  notre session.
                </p>
              </div>

              <h1 className="text-title text-foreground mb-3">
                Réserver mon <span className="italic text-accent">Diagnostic de Projet International</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base mb-10 max-w-xl">
                Merci de compléter ces informations afin que nous puissions comprendre votre
                situation avant échange.
              </p>

              <div className="space-y-6">
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
                  <Label htmlFor="pays" className="text-foreground">Pays visé *</Label>
                  <Input
                    id="pays"
                    value={pays}
                    onChange={(e) => setPays(e.target.value)}
                    placeholder="Ex : Canada, France, Belgique..."
                    className={errors.pays ? "border-destructive" : ""}
                  />
                  {errors.pays && <p className="text-xs text-destructive mt-1">Ce champ est obligatoire</p>}
                </div>

                <div>
                  <Label className="text-foreground">Type de projet *</Label>
                  <Select value={typeProjet} onValueChange={setTypeProjet}>
                    <SelectTrigger className={errors.typeProjet ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionnez votre type de projet" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {["Projet d'études", "Projet professionnel", "Projet de visite", "Autre"].map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.typeProjet && <p className="text-xs text-destructive mt-1">Veuillez sélectionner un type de projet</p>}
                </div>

                <div>
                  <Label htmlFor="parcours" className="text-foreground">Parcours académique / professionnel *</Label>
                  <Textarea
                    id="parcours"
                    value={parcours}
                    onChange={(e) => setParcours(e.target.value)}
                    placeholder="Décrivez brièvement votre parcours..."
                    rows={3}
                    maxLength={500}
                    className={errors.parcours ? "border-destructive" : ""}
                  />
                  {errors.parcours && <p className="text-xs text-destructive mt-1">Ce champ est obligatoire</p>}
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

                <div className="pt-4 border-t border-border/30">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <Checkbox
                      checked={tarifConfirme}
                      onCheckedChange={(v) => setTarifConfirme(v === true)}
                      className={errors.tarif ? "border-destructive" : ""}
                    />
                    <span className="text-sm text-foreground leading-relaxed">
                      Je confirme avoir pris connaissance du tarif de <strong className="text-accent">25 000 FCFA</strong>.
                    </span>
                  </label>
                  {errors.tarif && <p className="text-xs text-destructive mt-1">Veuillez confirmer le tarif</p>}
                </div>

                <div>
                  <Label className="text-foreground mb-3 block">Votre intention *</Label>
                  <RadioGroup value={intention} onValueChange={setIntention} className="space-y-2">
                    <label className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-card hover:border-accent/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="pret" />
                      <span className="text-sm text-foreground">Je suis prêt(e) à procéder au paiement après validation</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-card hover:border-accent/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="question" />
                      <span className="text-sm text-foreground">Je souhaite d'abord poser une question</span>
                    </label>
                  </RadioGroup>
                  {errors.intention && <p className="text-xs text-destructive mt-1">Veuillez indiquer votre intention</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full inline-flex items-center justify-center gap-2 h-14 rounded-full bg-foreground text-primary font-semibold text-base transition-all duration-300 hover:bg-foreground/90 hover:shadow-lg active:scale-[0.98] mt-4"
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

export default DiagnosticMobiliteFormPage;
