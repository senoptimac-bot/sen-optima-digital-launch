import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, User, Building, Phone, Target, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useAppSounds } from "@/hooks/useAppSounds";

interface FormData {
  clientName: string;
  companyName: string;
  whatsapp: string;
  sector: string;
  ageBusiness: string;
  teamSize: string;
  digitalPresence: string;
  currentRevenue: string;
  acquisitionChannel: string;
  toolsUsed: string[];
  database: string;
  mainProblem: string;
  pastAttempts: string;
  revenueGoal: string;
  marketingBudget: string;
  branding: string;
  competitors: string;
  availabilityDay: string;
  availabilityTime: string;
  meetingType: string;
}

const initialFormData: FormData = {
  clientName: "",
  companyName: "",
  whatsapp: "",
  sector: "",
  ageBusiness: "",
  teamSize: "",
  digitalPresence: "",
  currentRevenue: "",
  acquisitionChannel: "",
  toolsUsed: [],
  database: "",
  mainProblem: "",
  pastAttempts: "",
  revenueGoal: "",
  marketingBudget: "",
  branding: "",
  competitors: "",
  availabilityDay: "",
  availabilityTime: "",
  meetingType: "",
};

const toolOptions = [
  { id: "crm", label: "CRM (Hubspot, Salesforce...)" },
  { id: "email", label: "Email Marketing (Mailchimp, Brevo...)" },
  { id: "social", label: "Réseaux Sociaux" },
  { id: "ads", label: "Publicité payante (Meta, Google Ads)" },
  { id: "analytics", label: "Outils Analytics" },
  { id: "automation", label: "Automatisation (Zapier, Make...)" },
];

const AuditForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { playSuccess, playClick } = useAppSounds();
  
  // Optimisation: variants memoïsés pour éviter re-création à chaque render
  const sectionVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }), []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToolToggle = (toolId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      toolsUsed: checked
        ? [...prev.toolsUsed, toolId]
        : prev.toolsUsed.filter((t) => t !== toolId),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setIsSubmitting(true);

    // Import dynamique du service email
    const { sendAuditEmail } = await import("@/lib/emailService");
    
    const result = await sendAuditEmail(formData);

    if (result.success) {
      playSuccess();
      setIsSubmitted(true);
      toast({
        title: "Dossier envoyé avec succès !",
        description: "Nous analysons vos réponses et revenons vers vous sous 24h.",
      });
    } else {
      toast({
        title: "Erreur d'envoi",
        description: result.error,
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center"
        >
          <CheckCircle className="w-10 h-10 text-accent-foreground" />
        </motion.div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Dossier reçu !
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Nous analysons vos réponses et revenons vers vous sous{" "}
          <span className="text-accent font-semibold">24h</span> pour confirmer votre créneau via WhatsApp.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 pb-32 overflow-y-auto overflow-x-hidden -webkit-overflow-scrolling-touch">
      {/* Section 1: Informations de Contact */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-sm bg-accent/20 flex items-center justify-center">
            <User className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl font-heading font-bold text-accent">
            1. Faisons connaissance
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="clientName" className="text-foreground">À qui avons-nous l'honneur ? *</Label>
            <Input
              id="clientName"
              value={formData.clientName}
              onChange={(e) => handleInputChange("clientName", e.target.value)}
              placeholder="Votre nom complet"
              required
              className="rounded-sm border border-accent/30 focus:border-accent bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-foreground">Quelle est la dénomination de votre structure ? *</Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              placeholder="Nom de votre entreprise"
              required
              className="rounded-sm border border-accent/30 focus:border-accent bg-background/50"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="whatsapp" className="text-foreground">Sur quel numéro WhatsApp pouvons-nous vous joindre ? *</Label>
            <Input
              id="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => handleInputChange("whatsapp", e.target.value)}
              placeholder="+221 77 123 45 67"
              required
              className="rounded-sm border border-accent/30 focus:border-accent bg-background/50"
            />
          </div>
        </div>
      </motion.section>

      {/* Section 2: Votre Entreprise */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-sm bg-accent/20 flex items-center justify-center">
            <Building className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl font-heading font-bold text-accent">
            2. Parlons de votre activité
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-foreground">Dans quel secteur évoluez-vous ? *</Label>
            <Select value={formData.sector} onValueChange={(v) => handleInputChange("sector", v)}>
              <SelectTrigger className="rounded-sm border border-accent/30 focus:border-accent bg-background/50">
                <SelectValue placeholder="Sélectionnez..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="commerce">Commerce / E-commerce</SelectItem>
                <SelectItem value="services">Services / Consulting</SelectItem>
                <SelectItem value="tech">Tech / SaaS</SelectItem>
                <SelectItem value="immobilier">Immobilier</SelectItem>
                <SelectItem value="sante">Santé / Bien-être</SelectItem>
                <SelectItem value="education">Éducation / Formation</SelectItem>
                <SelectItem value="restauration">Restauration / Hôtellerie</SelectItem>
                <SelectItem value="industrie">Industrie / BTP</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">Depuis combien de temps exercez-vous ? *</Label>
            <Select value={formData.ageBusiness} onValueChange={(v) => handleInputChange("ageBusiness", v)}>
              <SelectTrigger className="rounded-sm border border-accent/30 focus:border-accent bg-background/50">
                <SelectValue placeholder="Sélectionnez..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moins1">Moins d'1 an</SelectItem>
                <SelectItem value="1-3">1 à 3 ans</SelectItem>
                <SelectItem value="3-5">3 à 5 ans</SelectItem>
                <SelectItem value="5-10">5 à 10 ans</SelectItem>
                <SelectItem value="plus10">Plus de 10 ans</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">Combien de personnes composent votre équipe ? *</Label>
            <Select value={formData.teamSize} onValueChange={(v) => handleInputChange("teamSize", v)}>
              <SelectTrigger className="rounded-sm border border-accent/30 focus:border-accent bg-background/50">
                <SelectValue placeholder="Sélectionnez..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solo">Solo (1 personne)</SelectItem>
                <SelectItem value="2-5">2 à 5 personnes</SelectItem>
                <SelectItem value="6-20">6 à 20 personnes</SelectItem>
                <SelectItem value="21-50">21 à 50 personnes</SelectItem>
                <SelectItem value="plus50">Plus de 50 personnes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">Quel est votre chiffre d'affaires mensuel actuel ? *</Label>
            <Select value={formData.currentRevenue} onValueChange={(v) => handleInputChange("currentRevenue", v)}>
              <SelectTrigger className="rounded-sm border border-accent/30 focus:border-accent bg-background/50">
                <SelectValue placeholder="Sélectionnez..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moins500k">Moins de 500K FCFA</SelectItem>
                <SelectItem value="500k-2m">500K - 2M FCFA</SelectItem>
                <SelectItem value="2m-5m">2M - 5M FCFA</SelectItem>
                <SelectItem value="5m-10m">5M - 10M FCFA</SelectItem>
                <SelectItem value="10m-50m">10M - 50M FCFA</SelectItem>
                <SelectItem value="plus50m">Plus de 50M FCFA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="digitalPresence" className="text-foreground">Où peut-on vous trouver en ligne actuellement ?</Label>
            <Input
              id="digitalPresence"
              value={formData.digitalPresence}
              onChange={(e) => handleInputChange("digitalPresence", e.target.value)}
              placeholder="Site web, Instagram, Facebook..."
              className="rounded-sm border border-accent/30 focus:border-accent bg-background/50"
            />
          </div>
        </div>
      </motion.section>

      {/* Section 3: Marketing & Outils */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-sm bg-accent/20 flex items-center justify-center">
            <Target className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl font-heading font-bold text-accent">
            3. Votre stratégie actuelle
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-foreground">Comment vos clients vous trouvent-ils aujourd'hui ? *</Label>
            <Select value={formData.acquisitionChannel} onValueChange={(v) => handleInputChange("acquisitionChannel", v)}>
              <SelectTrigger className="rounded-sm border border-accent/30 focus:border-accent bg-background/50">
                <SelectValue placeholder="Sélectionnez..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bouche">Bouche-à-oreille</SelectItem>
                <SelectItem value="reseaux">Réseaux sociaux</SelectItem>
                <SelectItem value="google">Google / SEO</SelectItem>
                <SelectItem value="ads">Publicité payante</SelectItem>
                <SelectItem value="partenariats">Partenariats</SelectItem>
                <SelectItem value="salons">Salons / Événements</SelectItem>
                <SelectItem value="aucun">Pas de stratégie claire</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">Disposez-vous d'une base de données clients ?</Label>
            <RadioGroup
              value={formData.database}
              onValueChange={(v) => handleInputChange("database", v)}
              className="flex gap-6 pt-2"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="oui" id="db-oui" />
                <Label htmlFor="db-oui" className="text-foreground cursor-pointer">Oui</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="non" id="db-non" />
                <Label htmlFor="db-non" className="text-foreground cursor-pointer">Non</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3 md:col-span-2">
            <Label className="text-foreground">Quels outils utilisez-vous actuellement ?</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {toolOptions.map((tool) => (
                <div key={tool.id} className="flex items-center gap-2">
                  <Checkbox
                    id={tool.id}
                    checked={formData.toolsUsed.includes(tool.id)}
                    onCheckedChange={(checked) => handleToolToggle(tool.id, checked as boolean)}
                  />
                  <Label htmlFor={tool.id} className="text-sm text-muted-foreground cursor-pointer">
                    {tool.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 4: Défis & Objectifs */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-sm bg-accent/20 flex items-center justify-center">
            <Phone className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl font-heading font-bold text-accent">
            4. Le cœur du sujet
          </h3>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="mainProblem" className="text-foreground">
              Quel est le défi majeur qui vous empêche de dormir ce soir ? *
            </Label>
            <Textarea
              id="mainProblem"
              value={formData.mainProblem}
              onChange={(e) => handleInputChange("mainProblem", e.target.value)}
              placeholder="Décrivez en quelques lignes le problème que vous souhaitez résoudre en priorité..."
              required
              rows={4}
              className="rounded-sm border border-accent/30 focus:border-accent bg-background/50 resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pastAttempts" className="text-foreground">
              Quelles solutions avez-vous déjà tentées ?
            </Label>
            <Textarea
              id="pastAttempts"
              value={formData.pastAttempts}
              onChange={(e) => handleInputChange("pastAttempts", e.target.value)}
              placeholder="Agences, formations, outils, stratégies..."
              rows={3}
              className="rounded-sm border border-accent/30 focus:border-accent bg-background/50 resize-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="revenueGoal" className="text-foreground">Quel chiffre d'affaires visez-vous ?</Label>
              <Input
                id="revenueGoal"
                value={formData.revenueGoal}
                onChange={(e) => handleInputChange("revenueGoal", e.target.value)}
                placeholder="Ex: 10M FCFA / mois"
                className="rounded-sm border border-accent/30 focus:border-accent bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="marketingBudget" className="text-foreground">Quel budget pouvez-vous consacrer au marketing ?</Label>
              <Input
                id="marketingBudget"
                value={formData.marketingBudget}
                onChange={(e) => handleInputChange("marketingBudget", e.target.value)}
                placeholder="Ex: 500K FCFA / mois"
                className="rounded-sm border border-accent/30 focus:border-accent bg-background/50"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-foreground">Avez-vous une identité visuelle définie ?</Label>
              <RadioGroup
                value={formData.branding}
                onValueChange={(v) => handleInputChange("branding", v)}
                className="flex gap-6 pt-2"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="oui" id="brand-oui" />
                  <Label htmlFor="brand-oui" className="text-foreground cursor-pointer">Oui</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="non" id="brand-non" />
                  <Label htmlFor="brand-non" className="text-foreground cursor-pointer">Non</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="competitors" className="text-foreground">Qui sont vos principaux concurrents ?</Label>
              <Input
                id="competitors"
                value={formData.competitors}
                onChange={(e) => handleInputChange("competitors", e.target.value)}
                placeholder="Noms ou sites web..."
                className="rounded-sm border border-accent/30 focus:border-accent bg-background/50"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 5: Planification */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-sm bg-accent/20 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl font-heading font-bold text-accent">
            5. Organisons notre échange
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label className="text-foreground">Quel jour vous convient le mieux ? *</Label>
            <Select value={formData.availabilityDay} onValueChange={(v) => handleInputChange("availabilityDay", v)}>
              <SelectTrigger className="rounded-sm border border-accent/30 focus:border-accent bg-background/50">
                <SelectValue placeholder="Sélectionnez..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lundi">Lundi</SelectItem>
                <SelectItem value="mardi">Mardi</SelectItem>
                <SelectItem value="mercredi">Mercredi</SelectItem>
                <SelectItem value="jeudi">Jeudi</SelectItem>
                <SelectItem value="vendredi">Vendredi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">À quelle heure êtes-vous disponible ? *</Label>
            <Select value={formData.availabilityTime} onValueChange={(v) => handleInputChange("availabilityTime", v)}>
              <SelectTrigger className="rounded-sm border border-accent/30 focus:border-accent bg-background/50">
                <SelectValue placeholder="Sélectionnez..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="matin">Matin (9h-12h)</SelectItem>
                <SelectItem value="apresmidi">Après-midi (14h-18h)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">Comment souhaitez-vous échanger ? *</Label>
            <Select value={formData.meetingType} onValueChange={(v) => handleInputChange("meetingType", v)}>
              <SelectTrigger className="rounded-sm border border-accent/30 focus:border-accent bg-background/50">
                <SelectValue placeholder="Sélectionnez..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="visio">Visioconférence</SelectItem>
                <SelectItem value="presentiel">Présentiel (Dakar)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.section>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="pt-6"
      >
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full h-14 text-lg font-heading font-bold rounded-sm bg-accent hover:bg-accent/90 text-white transition-all duration-300"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Envoyer mon dossier
            </>
          )}
        </Button>
        <p className="text-center text-xs text-muted-foreground mt-6 leading-relaxed">
          Vos données sont traitées personnellement par nos directeurs de stratégie.<br />
          Pas d'algorithme, juste de l'expertise humaine.
        </p>
      </motion.div>
    </form>
  );
};

export default AuditForm;
