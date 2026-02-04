import { useState, memo, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, User, Building2, Mail, Phone, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DiagnosticUserData } from "@/types/diagnostic";
import { z } from "zod";

interface DiagnosticUserFormProps {
  onComplete: (userData: DiagnosticUserData) => void;
}

// Validation schema
const userDataSchema = z.object({
  firstName: z.string().trim().min(2, "Prénom requis (min. 2 caractères)").max(50),
  lastName: z.string().trim().min(2, "Nom requis (min. 2 caractères)").max(50),
  email: z.string().trim().email("Email invalide").max(100),
  phone: z.string().trim().min(9, "Numéro de téléphone invalide").max(20),
  companyName: z.string().trim().min(2, "Nom d'entreprise requis").max(100),
  sector: z.string().min(1, "Veuillez sélectionner un secteur"),
});

// Secteurs d'activité adaptés au Sénégal
const SECTORS = [
  "Commerce & Distribution",
  "Services aux entreprises",
  "Restauration & Hôtellerie",
  "BTP & Immobilier",
  "Transport & Logistique",
  "Agriculture & Agroalimentaire",
  "Technologie & Digital",
  "Santé & Bien-être",
  "Éducation & Formation",
  "Mode & Textile",
  "Import/Export",
  "Artisanat",
  "Autre",
];

/**
 * Formulaire de collecte des informations utilisateur
 * Affiché APRÈS le paiement, AVANT le quiz
 */
const DiagnosticUserForm = memo(({ onComplete }: DiagnosticUserFormProps) => {
  const [formData, setFormData] = useState<DiagnosticUserData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    sector: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback((field: keyof DiagnosticUserData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  }, [errors]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate
    const result = userDataSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Success - pass validated data to parent (cast is safe after validation)
    onComplete(result.data as DiagnosticUserData);
  }, [formData, onComplete]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-8 pb-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
            <User className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            Vos informations
          </h1>
          <p className="text-muted-foreground font-subheading">
            Pour personnaliser votre diagnostic et vous envoyer les résultats
          </p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8"
        >
          <div className="space-y-5">
            {/* Prénom & Nom */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground font-subheading">
                  Prénom *
                </Label>
                <div className="relative">
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Votre prénom"
                  className={`pl-10 ${errors.firstName ? "border-destructive" : ""}`}
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
                {errors.firstName && (
                  <p className="text-destructive text-xs">{errors.firstName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground font-subheading">
                  Nom *
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Votre nom"
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-subheading">
                Email *
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="votre@email.com"
                  className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Téléphone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-subheading">
                Téléphone *
              </Label>
              <div className="relative">
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+221 77 123 45 67"
                  className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
                />
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone}</p>
              )}
            </div>

            {/* Entreprise */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-foreground font-subheading">
                Nom de l'entreprise *
              </Label>
              <div className="relative">
                <Input
                  id="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  placeholder="Votre entreprise"
                  className={`pl-10 ${errors.companyName ? "border-red-500" : ""}`}
                />
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              {errors.companyName && (
                <p className="text-red-500 text-xs">{errors.companyName}</p>
              )}
            </div>

            {/* Secteur d'activité */}
            <div className="space-y-2">
              <Label htmlFor="sector" className="text-foreground font-subheading">
                Secteur d'activité *
              </Label>
              <Select
                value={formData.sector}
                onValueChange={(value) => handleInputChange("sector", value)}
              >
                <SelectTrigger className={errors.sector ? "border-red-500" : ""}>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <SelectValue placeholder="Sélectionnez votre secteur" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {SECTORS.map((sector) => (
                    <SelectItem key={sector} value={sector}>
                      {sector}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.sector && (
                <p className="text-red-500 text-xs">{errors.sector}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-heading text-lg py-6"
          >
            {isSubmitting ? (
              "Validation..."
            ) : (
              <>
                Commencer le diagnostic
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Vos données sont sécurisées et ne seront jamais partagées.
          </p>
        </motion.form>
      </motion.div>
    </section>
  );
});

DiagnosticUserForm.displayName = "DiagnosticUserForm";

export default DiagnosticUserForm;
