import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const needOptions = [
  { value: "site-web", label: "Site Web" },
  { value: "strategie", label: "Stratégie Digitale" },
  { value: "marketing", label: "Marketing Digital" },
  { value: "formation", label: "Formation" },
  { value: "autre", label: "Autre" },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    need: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const selectedNeed = needOptions.find((opt) => opt.value === formData.need);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden bg-secondary dark:bg-gradient-hero">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] dark:block hidden" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-6">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Parlons de votre <span className="text-gradient-gold">projet</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Une question ? Un projet ? Nous sommes à votre écoute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Nos coordonnées
                </h2>
                <p className="text-muted-foreground">
                  Basé à Dakar, nous accompagnons des entrepreneurs partout au Sénégal et en Afrique de l'Ouest.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl glass-card">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      Grand Mbao Cité Baobab,<br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>

                <a 
                  href="mailto:contact@senoptimaconsulting.com"
                  className="flex items-start gap-4 p-6 rounded-2xl glass-card hover:glow-gold-subtle transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@senoptimaconsulting.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+221781926969"
                  className="flex items-start gap-4 p-6 rounded-2xl glass-card hover:glow-gold-subtle transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">Téléphone / WhatsApp</h3>
                    <p className="text-muted-foreground">+221 78 192 69 69</p>
                  </div>
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl bg-secondary dark:bg-secondary/30 flex items-center justify-center overflow-hidden">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-accent/50" />
                  <p>Carte interactive à venir</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-3xl glass-premium"
            >
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, delay: 0.1 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Un consultant Sen'Optima vous recontactera sous 24h.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: "", email: "", whatsapp: "", need: "", message: "" });
                    }}
                  >
                    Envoyer un autre message
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Remplissez ce formulaire et nous vous répondrons rapidement.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Prénom & Nom"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 dark:bg-white/5 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 dark:bg-white/5 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    <input
                      type="tel"
                      placeholder="Numéro WhatsApp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 dark:bg-white/5 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />

                    {/* Custom Select */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setSelectOpen(!selectOpen)}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 dark:bg-white/5 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-left text-foreground"
                      >
                        {selectedNeed ? selectedNeed.label : <span className="text-muted-foreground">Type de besoin</span>}
                      </button>
                      <ChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-transform ${selectOpen ? 'rotate-180' : ''}`} />
                      
                      {selectOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 right-0 mt-2 py-2 rounded-xl bg-card border border-border shadow-lg z-50"
                        >
                          {needOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, need: option.value });
                                setSelectOpen(false);
                              }}
                              className="w-full px-4 py-2.5 text-left hover:bg-accent/10 transition-colors text-foreground"
                            >
                              {option.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    <textarea
                      placeholder="Votre message..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 dark:bg-white/5 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                    />

                    <Button
                      type="submit"
                      variant="cta"
                      className="w-full h-12 text-base gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
