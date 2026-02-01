import { useMemo } from "react";
import type { Variants } from "framer-motion";

type EasingTuple = [number, number, number, number];

/**
 * Hook to generate stagger animation variants for reveal-on-scroll effects.
 * Returns Framer Motion variant objects for parent container and child items.
 * 
 * @param staggerDelay - Delay between each child animation (default: 100ms)
 * @param duration - Animation duration for each child (default: 500ms)
 */
export const useStaggerReveal = (staggerDelay = 0.1, duration = 0.5) => {
  const variants = useMemo(() => ({
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.1,
        },
      },
    } as Variants,
    item: {
      hidden: { 
        opacity: 0, 
        y: 24,
        scale: 0.98,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration,
          ease: [0.25, 0.46, 0.45, 0.94] as EasingTuple,
        },
      },
    } as Variants,
  }), [staggerDelay, duration]);

  return variants;
};

/**
 * Pre-configured stagger variants for common use cases
 */
export const staggerVariants = {
  // Fast stagger for cards (100ms between each)
  cards: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.15,
        },
      },
    } as Variants,
    item: {
      hidden: { opacity: 0, y: 30, scale: 0.97 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94] as EasingTuple,
        },
      },
    } as Variants,
  },
  // Slower stagger for sections (150ms between each)
  sections: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    } as Variants,
    item: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1] as EasingTuple,
        },
      },
    } as Variants,
  },
  // Very fast stagger for list items (50ms)
  list: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    } as Variants,
    item: {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      },
    } as Variants,
  },
};

export default useStaggerReveal;
