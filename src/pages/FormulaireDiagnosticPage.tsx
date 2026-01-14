import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  Building2, 
  Phone, 
  Mail, 
  Globe, 
  Target, 
  Calendar, 
  Clock,
  CheckCircle2,
  Briefcase,
  Users,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Send,
  Loader2,
  Instagram,
  Facebook,
  Linkedin,
  Video
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs.config";

interface FormData {
  // Part 1: Le Profil Décideur
  fullName: string;
  companyName: string;
  role: string;
  whatsapp: string;
  email: string;
  
  // Part 2: Le Contexte Business
  sector: string;
  clientType: string;
  monthlyRevenue: string;
  
  // Part 3: L'Écosystème Digital
  hasWebsite: string;
  websiteUrl: string;
  socialNetworks: string[];
  communitySize: string;
  
  // Part 4: Le Diagnostic & Objectifs
  mainObstacle: string;
  threeMonthGoal: string;
  investmentBudget: string;
  
  // Part 5: Logistique & Rendez-vous
  preferredFormat: string;
  availableDays: string[];
  preferredTime: string;
}

const initialFormData: FormData = {
  fullName: "",
  companyName: "",
  role: "",
  whatsapp: "",
  email: "",
  sector: "",
  clientType: "",
  monthlyRevenue: "",
  hasWebsite: "",
  websiteUrl: "",
  socialNetworks: [],
  communitySize: "",
  mainObstacle: "",
  threeMonthGoal: "",
  investmentBudget: "",
  preferredFormat: "",
  availableDays: [],
  preferredTime: "",
};

const socialOptions = [
  { id: "tiktok", label: "TikTok", icon: Video },
  { id: "linkedin", label: "LinkedIn", icon: Linkedin },
  { id: "instagram", label: "Instagram", icon: Instagram },
  { id: "facebook", label: "Facebook", icon: Facebook },
];

const dayOptions = [
  { id: "lundi", label: "Lundi" },
  { id: "mardi", label: "Mardi" },
  { id: "mercredi", label: "Mercredi" },
  { id: "jeudi", label: "Jeudi" },
  { id: "vendredi", label: "Vendredi" },
];

const FormulaireDiagnosticPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: "socialNetworks" | "availableDays", value: string) => {
    setFormData(prev => {
      const currentArray = prev[field];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: newArray };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.companyName || !formData.whatsapp || !formData.email) {
      toast({
        title: "Champs requis manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        // Profil
        full_name: formData.fullName,
        company_name: formData.companyName,
        role: formData.role,
        whatsapp: formData.whatsapp,
        email: formData.email,
        // Business
        sector: formData.sector,
        client_type: formData.clientType,
        monthly_revenue: formData.monthlyRevenue,
        // Digital
        has_website: formData.hasWebsite,
        website_url: formData.websiteUrl || "Non renseigné",
        social_networks: formData.socialNetworks.join(", ") || "Aucun",
        community_size: formData.communitySize,
        // Objectifs
        main_obstacle: formData.mainObstacle,
        three_month_goal: formData.threeMonthGoal,
        investment_budget: formData.investmentBudget,
        // Logistique
        preferred_format: formData.preferredFormat,
        available_days: formData.availableDays.join(", ") || "Non précisé",
        preferred_time: formData.preferredTime,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATES.BOOKING_AND_AUDIT,
        templateParams
      );

      setShowSuccessModal(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1a3a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 floating-grid opacity-30" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A73B]/10 border border-[#D4A73B]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#D4A73B]" />
            <span className="text-[#D4A73B] text-sm font-medium">Dossier de Candidature Premium</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Candidature pour un{" "}
            <span className="text-[#D4A73B]">Audit Stratégique</span>
          </h1>
          
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Pour garantir la qualité de nos conseils, nous analysons votre situation en détail avant tout échange.
            <span className="text-[#D4A73B] font-medium"> Prenez 5 minutes</span> pour remplir ce dossier.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.form 
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* PART 1: Le Profil Décideur */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-form-section"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#D4A73B]/20 flex items-center justify-center">
                <User className="w-5 h-5 text-[#D4A73B]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Le Profil Décideur</h2>
                <p className="text-white/50 text-sm">Qui êtes-vous ?</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-white/80">
                  Nom & Prénom <span className="text-[#D4A73B]">*</span>
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Votre nom complet"
                  className="glass-input"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-white/80">
                  Nom de l'Entreprise / Projet <span className="text-[#D4A73B]">*</span>
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  placeholder="Nom de votre entreprise"
                  className="glass-input"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white/80">Votre Rôle</Label>
                <Select value={formData.role} onValueChange={(v) => handleInputChange("role", v)}>
                  <SelectTrigger className="glass-input">
                    <SelectValue placeholder="Sélectionnez votre rôle" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a1a3a] border-white/10">
                    <SelectItem value="fondateur">Fondateur / CEO</SelectItem>
                    <SelectItem value="directeur-marketing">Directeur Marketing</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-white/80">
                  WhatsApp Direct <span className="text-[#D4A73B]">*</span>
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    placeholder="+221 77 XXX XX XX"
                    className="glass-input pl-10"
                    required
                  />
                </div>
                <p className="text-white/40 text-xs">Pour vous envoyer l'analyse</p>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email" className="text-white/80">
                  Email Professionnel <span className="text-[#D4A73B]">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="votre@email.com"
                    className="glass-input pl-10"
                    required
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* PART 2: Le Contexte Business */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-form-section"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#22D3EE]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Le Contexte Business</h2>
                <p className="text-white/50 text-sm">Votre marché</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white/80">Secteur d'Activité</Label>
                <Select value={formData.sector} onValueChange={(v) => handleInputChange("sector", v)}>
                  <SelectTrigger className="glass-input">
                    <SelectValue placeholder="Votre secteur" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a1a3a] border-white/10">
                    <SelectItem value="immobilier">Immobilier</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="formation">Formation</SelectItem>
                    <SelectItem value="restauration">Restauration</SelectItem>
                    <SelectItem value="sante">Santé & Bien-être</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-white/80">Chiffre d'Affaires Mensuel</Label>
                <Select value={formData.monthlyRevenue} onValueChange={(v) => handleInputChange("monthlyRevenue", v)}>
                  <SelectTrigger className="glass-input">
                    <SelectValue placeholder="Votre CA mensuel" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a1a3a] border-white/10">
                    <SelectItem value="moins-100k">&lt; 100.000 FCFA</SelectItem>
                    <SelectItem value="100k-500k">100.000 - 500.000 FCFA</SelectItem>
                    <SelectItem value="500k-2m">500.000 - 2M FCFA</SelectItem>
                    <SelectItem value="plus-2m">&gt; 2.000.000 FCFA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3 md:col-span-2">
                <Label className="text-white/80">Type de Clientèle</Label>
                <RadioGroup
                  value={formData.clientType}
                  onValueChange={(v) => handleInputChange("clientType", v)}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b2b" id="b2b" className="border-white/30 text-[#D4A73B]" />
                    <Label htmlFor="b2b" className="text-white/80 cursor-pointer">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        B2B - Entreprises
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b2c" id="b2c" className="border-white/30 text-[#D4A73B]" />
                    <Label htmlFor="b2c" className="text-white/80 cursor-pointer">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        B2C - Particuliers
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mixte" id="mixte" className="border-white/30 text-[#D4A73B]" />
                    <Label htmlFor="mixte" className="text-white/80 cursor-pointer">
                      Mixte (B2B + B2C)
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </motion.section>

          {/* PART 3: L'Écosystème Digital */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-form-section"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">L'Écosystème Digital</h2>
                <p className="text-white/50 text-sm">Vos actifs numériques</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="text-white/80">Avez-vous un site web ?</Label>
                <RadioGroup
                  value={formData.hasWebsite}
                  onValueChange={(v) => handleInputChange("hasWebsite", v)}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="oui" id="website-yes" className="border-white/30 text-[#D4A73B]" />
                    <Label htmlFor="website-yes" className="text-white/80 cursor-pointer">Oui</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="non" id="website-no" className="border-white/30 text-[#D4A73B]" />
                    <Label htmlFor="website-no" className="text-white/80 cursor-pointer">Non</Label>
                  </div>
                </RadioGroup>
              </div>

              <AnimatePresence>
                {formData.hasWebsite === "oui" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="websiteUrl" className="text-white/80">URL de votre site</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <Input
                        id="websiteUrl"
                        type="url"
                        value={formData.websiteUrl}
                        onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
                        placeholder="https://votresite.com"
                        className="glass-input pl-10"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-3">
                <Label className="text-white/80">Réseaux Sociaux Actifs</Label>
                <div className="flex flex-wrap gap-3">
                  {socialOptions.map((social) => {
                    const isSelected = formData.socialNetworks.includes(social.id);
                    const Icon = social.icon;
                    return (
                      <button
                        key={social.id}
                        type="button"
                        onClick={() => handleArrayToggle("socialNetworks", social.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                          isSelected
                            ? "bg-[#D4A73B]/20 border-[#D4A73B] text-[#D4A73B]"
                            : "bg-white/5 border-white/10 text-white/60 hover:border-white/30"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {social.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white/80">Taille de la Communauté Totale</Label>
                <Select value={formData.communitySize} onValueChange={(v) => handleInputChange("communitySize", v)}>
                  <SelectTrigger className="glass-input">
                    <SelectValue placeholder="Nombre d'abonnés total" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a1a3a] border-white/10">
                    <SelectItem value="moins-1k">&lt; 1.000 abonnés</SelectItem>
                    <SelectItem value="1k-10k">1.000 - 10.000 abonnés</SelectItem>
                    <SelectItem value="10k-50k">10.000 - 50.000 abonnés</SelectItem>
                    <SelectItem value="plus-50k">&gt; 50.000 abonnés</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.section>

          {/* PART 4: Le Diagnostic & Objectifs */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-form-section"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#EF4444]/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-[#EF4444]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Le Diagnostic & Objectifs</h2>
                <p className="text-white/50 text-sm">Vos défis et ambitions</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="mainObstacle" className="text-white/80">
                  Quel est votre OBSTACLE n°1 aujourd'hui ?
                </Label>
                <Textarea
                  id="mainObstacle"
                  value={formData.mainObstacle}
                  onChange={(e) => handleInputChange("mainObstacle", e.target.value)}
                  placeholder="Soyez précis : manque de leads, problème technique, visibilité insuffisante, organisation interne..."
                  className="glass-input min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="threeMonthGoal" className="text-white/80">
                  Quel est votre OBJECTIF à 3 mois ?
                </Label>
                <Textarea
                  id="threeMonthGoal"
                  value={formData.threeMonthGoal}
                  onChange={(e) => handleInputChange("threeMonthGoal", e.target.value)}
                  placeholder="Ex: Doubler mes ventes, lancer mon site e-commerce, obtenir 50 nouveaux clients/mois..."
                  className="glass-input min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white/80">Budget d'Investissement</Label>
                <Select value={formData.investmentBudget} onValueChange={(v) => handleInputChange("investmentBudget", v)}>
                  <SelectTrigger className="glass-input">
                    <SelectValue placeholder="Votre budget pour cet accompagnement" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a1a3a] border-white/10">
                    <SelectItem value="audit-simple">Moins de 100.000 FCFA (Audit Simple)</SelectItem>
                    <SelectItem value="accompagnement">200.000 - 500.000 FCFA (Accompagnement)</SelectItem>
                    <SelectItem value="partenaire">Plus de 1.000.000 FCFA (Partenaire Stratégique)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.section>

          {/* PART 5: Logistique & Rendez-vous */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-form-section"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#10B981]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Logistique & Rendez-vous</h2>
                <p className="text-white/50 text-sm">Planifions votre session</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="text-white/80">Format Préféré</Label>
                <RadioGroup
                  value={formData.preferredFormat}
                  onValueChange={(v) => handleInputChange("preferredFormat", v)}
                  className="space-y-3"
                >
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4A73B]/30 transition-colors">
                    <RadioGroupItem value="visio" id="format-visio" className="border-white/30 text-[#D4A73B] mt-0.5" />
                    <Label htmlFor="format-visio" className="cursor-pointer flex-1">
                      <span className="text-white font-medium">Visioconférence (Google Meet / Zoom)</span>
                      <span className="block text-white/50 text-sm">Recommandé pour la rapidité</span>
                    </Label>
                    <span className="px-2 py-1 text-xs bg-[#D4A73B]/20 text-[#D4A73B] rounded">Recommandé</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4A73B]/30 transition-colors">
                    <RadioGroupItem value="presentiel" id="format-presentiel" className="border-white/30 text-[#D4A73B] mt-0.5" />
                    <Label htmlFor="format-presentiel" className="cursor-pointer flex-1">
                      <span className="text-white font-medium">Présentiel (Bureaux Dakar)</span>
                      <span className="block text-white/50 text-sm">Réservé aux projets d'envergure</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-white/80">Vos Meilleures Disponibilités</Label>
                <div className="flex flex-wrap gap-2">
                  {dayOptions.map((day) => {
                    const isSelected = formData.availableDays.includes(day.id);
                    return (
                      <button
                        key={day.id}
                        type="button"
                        onClick={() => handleArrayToggle("availableDays", day.id)}
                        className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                          isSelected
                            ? "bg-[#D4A73B]/20 border-[#D4A73B] text-[#D4A73B]"
                            : "bg-white/5 border-white/10 text-white/60 hover:border-white/30"
                        }`}
                      >
                        {day.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white/80">Créneau Horaire Idéal</Label>
                <Select value={formData.preferredTime} onValueChange={(v) => handleInputChange("preferredTime", v)}>
                  <SelectTrigger className="glass-input">
                    <SelectValue placeholder="Choisissez un créneau" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a1a3a] border-white/10">
                    <SelectItem value="matin">
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Matin (09h - 12h)
                      </span>
                    </SelectItem>
                    <SelectItem value="apres-midi">
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Après-midi (14h - 17h)
                      </span>
                    </SelectItem>
                    <SelectItem value="soir">
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Soirée (18h - 20h)
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.section>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 text-lg font-bold bg-gradient-to-r from-[#D4A73B] to-[#B8912E] hover:from-[#E5B84C] hover:to-[#D4A73B] text-[#0a1a3a] rounded-xl shadow-lg shadow-[#D4A73B]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A73B]/30 btn-shiny"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  ENVOYER MON DOSSIER D'AUDIT
                </span>
              )}
            </Button>
          </motion.div>
        </motion.form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md p-8 rounded-2xl bg-[#0a1a3a] border border-[#D4A73B]/30 shadow-2xl"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#D4A73B]/20 flex items-center justify-center"
                >
                  <CheckCircle2 className="w-10 h-10 text-[#D4A73B]" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Dossier Reçu !
                </h3>
                
                <p className="text-white/70 mb-6">
                  Un expert <span className="text-[#D4A73B] font-semibold">Sen'Optima</span> (Mandiaye ou un Associé) 
                  vous contactera sous <span className="text-white font-semibold">24h</span> pour confirmer le créneau choisi.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => navigate("/")}
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                  >
                    Retour à l'accueil
                  </Button>
                  <Button
                    onClick={() => navigate("/diagnostics")}
                    className="flex-1 bg-[#D4A73B] hover:bg-[#B8912E] text-[#0a1a3a]"
                  >
                    Voir nos offres
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormulaireDiagnosticPage;
