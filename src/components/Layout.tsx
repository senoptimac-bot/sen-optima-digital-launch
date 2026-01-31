import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import AmbientBackground from "./AmbientBackground";
import ReadingProgress from "./ReadingProgress";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show reading progress on main content pages
  const showProgress = ["/", "/a-propos", "/services"].includes(pathname);
  
  // Hide footer on Solutions page (immersive funnel experience)
  const hideFooter = pathname === "/solutions";

  return (
    <>
      <AmbientBackground />
      {showProgress && <ReadingProgress />}
      {/*
        Compact safe area under the fixed header (~80px).
      */}
      <main className="min-h-screen bg-transparent relative z-0 overflow-x-hidden pt-20">
        <Header />
        {children}
        {!hideFooter && <Footer />}
        {!hideFooter && <WhatsAppButton />}
      </main>
    </>
  );
};

export default Layout;
