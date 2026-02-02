import { useState, useCallback, memo } from "react";
import { ArrowRight, Phone, User, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LeadData } from "@/types/solutions";

interface LeadCaptureScreenProps {
  onSubmit: (data: LeadData) => void;
}

const COUNTRY_CODES = [
  { code: "+221", country: "Sénégal" },
  { code: "+225", country: "Côte d'Ivoire" },
  { code: "+223", country: "Mali" },
  { code: "+226", country: "Burkina Faso" },
  { code: "+224", country: "Guinée" },
  { code: "+228", country: "Togo" },
  { code: "+229", country: "Bénin" },
  { code: "+227", country: "Niger" },
  { code: "+33", country: "France" },
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "Royaume-Uni" },
  { code: "+212", country: "Maroc" },
  { code: "+216", country: "Tunisie" },
];

const LeadCaptureScreen = memo(({ onSubmit }: LeadCaptureScreenProps) => {
  const [formData, setFormData] = useState<LeadData>({
    firstName: "",
    whatsapp: "",
    countryCode: "+221",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof LeadData, string>> = {};
    
    // Prénom - requis, max 50 caractères
    const trimmedName = formData.firstName.trim();
    if (!trimmedName) {
      newErrors.firstName = "Prénom requis";
    } else if (trimmedName.length > 50) {
      newErrors.firstName = "50 caractères maximum";
    }
    
    // WhatsApp - requis, format valide
    const cleanedPhone = formData.whatsapp.replace(/\s/g, "");
    if (!cleanedPhone) {
      newErrors.whatsapp = "Numéro WhatsApp requis";
    } else if (!/^\d{8,15}$/.test(cleanedPhone)) {
      newErrors.whatsapp = "Numéro invalide (8-15 chiffres)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double-submit
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Sanitize data before submission
        const sanitizedData: LeadData = {
          firstName: formData.firstName.trim().slice(0, 50),
          whatsapp: formData.whatsapp.replace(/\s/g, "").slice(0, 15),
          countryCode: formData.countryCode,
        };
        await onSubmit(sanitizedData);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [formData, validateForm, onSubmit, isSubmitting]);

  const handleFirstNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, firstName: e.target.value }));
  }, []);

  const handleWhatsAppChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and spaces
    const value = e.target.value.replace(/[^0-9\s]/g, "");
    setFormData(prev => ({ ...prev, whatsapp: value }));
  }, []);

  const handleCountryCodeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, countryCode: e.target.value }));
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        {/* Progress Bar at 100% - Quiz completed */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground font-subheading">Analyse complétée</span>
            <span className="text-sm text-accent font-subheading">100%</span>
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent rounded-full gpu-accelerated"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8">
          {/* Header - Post-quiz messaging */}
          <div className="text-left mb-6">
            <div className="w-14 h-14 rounded-xl bg-cta-success/10 flex items-center justify-center mb-4">
              <MessageCircle className="w-7 h-7 text-cta-success" />
            </div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              Analyse terminée.
            </h1>
            <p className="text-lg text-accent font-heading">
              Qui doit recevoir le rapport ?
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-subheading text-foreground mb-2">
                Prénom <span className="text-foreground/40">(pour personnaliser)</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Votre prénom"
                  value={formData.firstName}
                  onChange={handleFirstNameChange}
                  maxLength={50}
                  autoComplete="given-name"
                  className={`pl-11 h-12 bg-background/50 border-border focus:border-accent touch-target ${errors.firstName ? 'border-destructive' : ''}`}
                />
              </div>
              {errors.firstName && (
                <p className="text-destructive text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* WhatsApp with Country Code */}
            <div>
              <label className="block text-sm font-subheading text-foreground mb-2">
                Numéro WhatsApp <span className="text-destructive">*</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                {/* Country Code Selector */}
                <select
                  value={formData.countryCode}
                  onChange={handleCountryCodeChange}
                  className="h-12 px-3 bg-background/50 border border-border rounded-md text-foreground focus:border-accent focus:outline-none text-sm w-full sm:w-auto sm:min-w-[140px] touch-target"
                >
                  {COUNTRY_CODES.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code} ({country.country})
                    </option>
                  ))}
                </select>
                
                {/* Phone Number */}
                <div className="relative flex-1">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="77 123 45 67"
                    value={formData.whatsapp}
                    onChange={handleWhatsAppChange}
                    maxLength={20}
                    autoComplete="tel"
                    className={`pl-11 h-12 bg-background/50 border-border focus:border-accent touch-target ${errors.whatsapp ? 'border-destructive' : ''}`}
                  />
                </div>
              </div>
              {errors.whatsapp && (
                <p className="text-destructive text-sm mt-1">{errors.whatsapp}</p>
              )}
              
              {/* Reassurance text */}
              <p className="text-xs text-foreground/40 mt-2 flex items-center gap-1.5">
                <Shield className="w-3 h-3" />
                Nous vous enverrons votre lien de résultat unique ici. Zéro spam.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full h-14 bg-cta-success hover:bg-cta-success/90 text-cta-success-foreground font-heading text-lg gap-3 touch-target gpu-accelerated transition-gpu disabled:opacity-50"
              >
                {isSubmitting ? "Envoi en cours..." : "Découvrir mon Score & Mon Plan"}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

LeadCaptureScreen.displayName = "LeadCaptureScreen";

export default LeadCaptureScreen;