import { forwardRef } from "react";

import { motion } from "framer-motion";
const WhatsAppButton = forwardRef<HTMLAnchorElement>((_, ref) => {
  return <motion.a ref={ref} href="https://wa.me/221781926969?text=Bonjour Sen'Optima, je souhaite en savoir plus sur vos services." target="_blank" rel="noopener noreferrer" initial={{
    opacity: 0,
    scale: 0,
    y: 50
  }} animate={{
    opacity: 1,
    scale: 1,
    y: 0
  }} transition={{
    delay: 1,
    duration: 0.5,
    type: "spring"
  }} whileHover={{
    scale: 1.1
  }} whileTap={{
    scale: 0.95
  }} className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 pulse-whatsapp min-h-[48px] min-w-[48px]" aria-label="Nous contacter sur WhatsApp">
      
      <span className="hidden sm:inline text-primary-foreground">WhatsApp</span>
    </motion.a>;
});
WhatsAppButton.displayName = "WhatsAppButton";
export default WhatsAppButton;