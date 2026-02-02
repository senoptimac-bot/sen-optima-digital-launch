import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import AmbientBackground from "./AmbientBackground";

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

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // Hide footer on Solutions page (immersive funnel experience)
  const hideFooter = pathname === "/solutions";

  return (
    <>
      <AmbientBackground />
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
