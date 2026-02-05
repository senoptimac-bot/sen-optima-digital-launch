import { useState, memo, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, User, Building2, Mail, Phone, Briefcase,
  ShoppingCart, Briefcase as ServiceIcon, UtensilsCrossed, Hammer,
  Truck, Leaf, Code, Heart, BookOpen, Shirt, Globe, MoreHorizontal,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  { id: "commerce", label: "Commerce", icon: ShoppingCart },
  { id: "services", label: "Services", icon: ServiceIcon },
  { id: "restauration", label: "Restauration", icon: UtensilsCrossed },
  { id: "btp", label: "BTP & Immobilier", icon: Hammer },
  { id: "transport", label: "Transport", icon: Truck },
  { id: "agriculture", label: "Agriculture", icon: Leaf },
  { id: "tech", label: "Tech & Digital", icon: Code },
  { id: "sante", label: "Santé", icon: Heart },
  { id: "education", label: "Éducation", icon: BookOpen },
  { id: "mode", label: "Mode & Textile", icon: Shirt },
  { id: "import-export", label: "Import/Export", icon: Globe },
  { id: "autre", label: "Autre", icon: MoreHorizontal },
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

  const handleSectorSelect = useCallback((sectorLabel: string) => {
    handleInputChange("sector", sectorLabel);
  }, [handleInputChange]);

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
    <section className="min-h-screen flex flex-col items-center justify-start pt-6 pb-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        {/* Header simplifié */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1">
            Parlons de vous
          </h1>
          <p className="text-muted-foreground text-sm">
            30 secondes pour personnaliser votre diagnostic
          </p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-5 md:p-6"
        >
          <div className="space-y-4">
            {/* Prénom & Nom - sur une ligne */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Prénom"
                  className={`pl-10 h-12 ${errors.firstName ? "border-destructive" : ""}`}
                  autoComplete="given-name"
                />
                {errors.firstName && (
                  <p className="text-destructive text-xs mt-1">{errors.firstName}</p>
                )}
              </div>

              <div className="relative">
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Nom"
                  className={`h-12 ${errors.lastName ? "border-destructive" : ""}`}
                  autoComplete="family-name"
                />
                {errors.lastName && (
                  <p className="text-destructive text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="votre@email.com"
                className={`pl-10 h-12 ${errors.email ? "border-destructive" : ""}`}
                autoComplete="email"
              />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Téléphone */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+221 77 123 45 67"
                className={`pl-10 h-12 ${errors.phone ? "border-destructive" : ""}`}
                autoComplete="tel"
              />
              {errors.phone && (
                <p className="text-destructive text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Entreprise */}
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
              <Input
                id="companyName"
                type="text"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                placeholder="Nom de votre entreprise"
                className={`pl-10 h-12 ${errors.companyName ? "border-destructive" : ""}`}
                autoComplete="organization"
              />
              {errors.companyName && (
                <p className="text-destructive text-xs mt-1">{errors.companyName}</p>
              )}
            </div>

            {/* Secteur d'activité - Sélection rapide par boutons */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                <Briefcase className="w-4 h-4 text-accent" />
                <span>Votre secteur</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {SECTORS.map((sector) => {
                  const IconComponent = sector.icon;
                  return (
                    <motion.button
                      key={sector.id}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSectorSelect(sector.label)}
                      className={`
                        p-2.5 rounded-xl text-xs font-medium transition-all
                        flex flex-col items-center gap-1
                        ${formData.sector === sector.label 
                          ? "bg-accent text-accent-foreground ring-2 ring-accent ring-offset-1" 
                          : "bg-muted/50 text-foreground hover:bg-muted border border-border"
                        }
                      `}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="leading-tight">{sector.label}</span>
                    </motion.button>
                  );
                })}
              </div>
              {errors.sector && (
                <p className="text-destructive text-xs">{errors.sector}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-heading text-lg py-6"
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

          <p className="text-xs text-muted-foreground text-center mt-3">
            🔒 Vos données sont sécurisées
          </p>
        </motion.form>
      </motion.div>
    </section>
  );
});

DiagnosticUserForm.displayName = "DiagnosticUserForm";

export default DiagnosticUserForm;
