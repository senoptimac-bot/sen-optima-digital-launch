import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, User, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LeadData } from "@/types/solutions";

interface LeadCaptureScreenProps {
  onSubmit: (data: LeadData) => void;
}

const COUNTRY_CODES = [
  { code: "+221", country: "🇸🇳 Sénégal", flag: "🇸🇳" },
  { code: "+225", country: "🇨🇮 Côte d'Ivoire", flag: "🇨🇮" },
  { code: "+223", country: "🇲🇱 Mali", flag: "🇲🇱" },
  { code: "+226", country: "🇧🇫 Burkina Faso", flag: "🇧🇫" },
  { code: "+224", country: "🇬🇳 Guinée", flag: "🇬🇳" },
  { code: "+228", country: "🇹🇬 Togo", flag: "🇹🇬" },
  { code: "+229", country: "🇧🇯 Bénin", flag: "🇧🇯" },
  { code: "+227", country: "🇳🇪 Niger", flag: "🇳🇪" },
  { code: "+33", country: "🇫🇷 France", flag: "🇫🇷" },
  { code: "+1", country: "🇺🇸 USA/Canada", flag: "🇺🇸" },
  { code: "+44", country: "🇬🇧 Royaume-Uni", flag: "🇬🇧" },
  { code: "+212", country: "🇲🇦 Maroc", flag: "🇲🇦" },
  { code: "+216", country: "🇹🇳 Tunisie", flag: "🇹🇳" },
];

const LeadCaptureScreen = ({ onSubmit }: LeadCaptureScreenProps) => {
  const [formData, setFormData] = useState<LeadData>({
    firstName: "",
    email: "",
    whatsapp: "",
    countryCode: "+221",
  });
  const [errors, setErrors] = useState<Partial<LeadData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<LeadData> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Prénom requis";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Numéro requis";
    } else if (!/^\d{8,15}$/.test(formData.whatsapp.replace(/\s/g, ""))) {
      newErrors.whatsapp = "Numéro invalide";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const selectedCountry = COUNTRY_CODES.find(c => c.code === formData.countryCode);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Progress Bar at 0% */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground font-subheading">Progression</span>
            <span className="text-sm text-accent font-subheading">0%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-0 bg-accent rounded-full" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3"
            >
              Découvrez votre <span className="text-accent">Score de Maturité</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground font-subheading"
            >
              L'IA Sen'Optima analyse votre business en 2 minutes
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-subheading text-foreground mb-2">
                Prénom
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Votre prénom"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={`pl-11 h-12 bg-background/50 border-foreground/10 focus:border-accent ${errors.firstName ? 'border-destructive' : ''}`}
                />
              </div>
              {errors.firstName && (
                <p className="text-destructive text-sm mt-1">{errors.firstName}</p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-subheading text-foreground mb-2">
                Email professionnel
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="email@entreprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`pl-11 h-12 bg-background/50 border-foreground/10 focus:border-accent ${errors.email ? 'border-destructive' : ''}`}
                />
              </div>
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>

            {/* WhatsApp with Country Code */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label className="block text-sm font-subheading text-foreground mb-2">
                Numéro WhatsApp
              </label>
              <div className="flex gap-2">
                {/* Country Code Selector */}
                <div className="relative">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="appearance-none h-12 pl-3 pr-8 bg-background/50 border border-foreground/10 rounded-md text-foreground focus:border-accent focus:outline-none cursor-pointer"
                  >
                    {COUNTRY_CODES.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Phone Number */}
                <div className="relative flex-1">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="77 123 45 67"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value.replace(/[^0-9\s]/g, "") })}
                    className={`pl-11 h-12 bg-background/50 border-foreground/10 focus:border-accent ${errors.whatsapp ? 'border-destructive' : ''}`}
                  />
                </div>
              </div>
              {errors.whatsapp && (
                <p className="text-destructive text-sm mt-1">{errors.whatsapp}</p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-heading text-lg gap-3"
              >
                Lancer l'audit stratégique
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </form>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground"
          >
            <span>🔒 Données confidentielles</span>
            <span>•</span>
            <span>⏱️ 2 min</span>
            <span>•</span>
            <span>🎯 Résultat instantané</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCaptureScreen;
