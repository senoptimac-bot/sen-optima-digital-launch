import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ReadingProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar after scrolling past 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      // Position at very top of page - Gold prestige line
      className="fixed top-0 left-0 right-0 z-[70] h-[2px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(43 75% 52%) 0%, hsl(43 75% 62%) 100%)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    />
  );
};

export default ReadingProgress;
