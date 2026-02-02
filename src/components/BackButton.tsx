import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-6"
      aria-label="Retour"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300">
        <ArrowLeft className="w-4 h-4" />
      </div>
      <span className="text-sm font-medium">Retour</span>
    </motion.button>
  );
};

export default BackButton;
