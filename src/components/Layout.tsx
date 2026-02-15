import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";


interface LayoutProps {
  children: React.ReactNode;
}

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.25,
      ease: "easeOut" as const,
    },
  },
};

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  
  const hideFooter = false;

  return (
    <>
      
      {/*
        Compact safe area under the fixed header (~80px).
      */}
      <main className="min-h-screen bg-transparent relative z-0 overflow-x-hidden pt-20">
        <Header />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.div>
        </AnimatePresence>
        {!hideFooter && <Footer />}
        {!hideFooter && <WhatsAppButton />}
      </main>
    </>
  );
};

export default Layout;
