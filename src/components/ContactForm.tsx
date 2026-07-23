import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAppSounds } from "@/hooks/useAppSounds";
import { useToast } from "@/hooks/use-toast";

const projectOptions = [
  { value: "etudier", label: "Étudier à l'étranger" },
  { value: "travailler", label: "Travailler à l'étranger" },
  { value: "entreprendre", label: "Entreprendre / développer un business" },
  { value: "formation", label: "Formation Sen'Optima Academy" },
  { value: "autre", label: "Autre" },
];

const isMobiliteProject = (project: string) => project === "etudier" || project === "travailler";
const isBusinessProject = (project: string) => project === "entreprendre";

const situationOptions = ["Étudiant", "Salarié", "Entrepreneur", "Sans emploi", "Autre"];
const budgetOptions = [
  "Moins de 100 000 FCFA",
  "100 000 – 500 000 FCFA",
  "500 000 – 1 000 000 FCFA",
  "Plus de 1 000 000 FCFA",
  "Je ne sais pas encore",
];

const ContactForm = memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    detail: "",
    situation: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { playSuccess, playClick } = useAppSounds();
  const { toast } = useToast();

  const projectLabel = projectOptions.find((opt) => opt.value === formData.project)?.label ?? "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.project) {
      toast({
        title: "Choisissez un type de projet",
        description: "Sélectionnez une option avant d'envoyer votre demande.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    playClick();

    const detailLabel = isMobiliteProject(formData.project)
      ? "Pays qui m'intéresse"
      : isBusinessProject(formData.project)
        ? "Mon activité"
        : null;

    const structuredMessage = [
      detailLabel && formData.detail ? `${detailLabel} : ${formData.detail}` : null,
      formData.situation ? `Situation actuelle : ${formData.situation}` : null,
      formData.budget ? `Budget approximatif : ${formData.budget}` : null,
      `Description du projet : ${formData.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    const { sendContactEmail } = await import("@/lib/emailService");

    const result = await sendContactEmail({
      name: formData.name,
      email: formData.email,
      subject: projectLabel || "Demande de devis",
      message: structuredMessage,
    });

    if (result.success) {
      playSuccess();
      setIsSuccess(true);
      toast({
        title: "Message envoyé avec succès !",
        description: "Nous vous répondons sous 24h par email.",
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      whileHover={{ y: -4 }}
      className="relative p-8 card-cream flex flex-col overflow-hidden transition-shadow duration-250 hover:shadow-xl"
    >
      {/* Badge Devis gratuit */}
      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20">
          <span className="text-xs text-accent font-medium">Devis gratuit</span>
        </div>
      </div>

      <div className="icon-circle mb-6">
        <Sparkles className="w-7 h-7 text-accent" />
      </div>

      <span className="text-xs text-accent uppercase tracking-widest mb-2 block">Réponse sous 24 heures</span>

      <h3 className="text-xl font-heading font-bold text-foreground mb-3">Demander un devis</h3>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        Quelques questions pour bien comprendre votre projet, puis nous vous recontactons.
      </p>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex-grow flex flex-col items-center justify-center text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15, delay: 0.1 }}
              className="icon-circle w-20 h-20 mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </motion.div>
            <h4 className="text-xl font-heading font-bold text-foreground mb-2">Bien reçu !</h4>
            <p className="text-muted-foreground mb-6">Nous vous répondons sous 24h par email.</p>
            <Button
              variant="outline"
              onClick={() => {
                setIsSuccess(false);
                setFormData({ name: "", email: "", project: "", detail: "", situation: "", budget: "", message: "" });
              }}
              className="rounded-full"
            >
              Envoyer une autre demande
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4 flex-grow flex flex-col"
          >
            <div>
              <Label className="text-sm text-foreground/70 mb-2 block">Quel est votre projet ? *</Label>
              <RadioGroup
                value={formData.project}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, project: value, detail: "" }))}
                className="grid grid-cols-1 gap-2"
              >
                {projectOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-250 ${
                      formData.project === option.value
                        ? "border-accent bg-accent/10"
                        : "border-border bg-secondary/50 hover:border-accent/40"
                    }`}
                  >
                    <RadioGroupItem value={option.value} />
                    <span className="text-sm text-foreground">{option.label}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {isMobiliteProject(formData.project) && (
              <Input
                type="text"
                placeholder="Quel pays vous intéresse ? (ex : Canada, France, Belgique...)"
                value={formData.detail}
                onChange={(e) => setFormData((prev) => ({ ...prev, detail: e.target.value }))}
              />
            )}

            {isBusinessProject(formData.project) && (
              <Input
                type="text"
                placeholder="Votre activité (ex : Commerce, Services, Tech...)"
                value={formData.detail}
                onChange={(e) => setFormData((prev) => ({ ...prev, detail: e.target.value }))}
              />
            )}

            <Select
              value={formData.situation}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, situation: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Votre situation actuelle" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                {situationOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={formData.budget}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Budget approximatif" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                {budgetOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Textarea
              placeholder="Décrivez votre projet en quelques mots..."
              required
              minLength={10}
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className="resize-none"
            />

            <Input
              type="text"
              placeholder="Nom complet"
              required
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            />

            <Input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            />

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full mt-auto"
              disabled={isSubmitting}
              onClick={() => {
                if (!isSubmitting) playClick();
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <Send className="w-5 h-5" />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
