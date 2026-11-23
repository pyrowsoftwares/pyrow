import React, { useId, useMemo, useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  AnimationPatternType,
  ANIMATION_PATTERNS,
  globalPatternSequencer,
  createCardVariants,
  SectionAnimationContext,
  EASE_LUXURY_OUT,
  EASE_CINEMATIC_OUT,
} from './ScrollAnimationSystem';

interface QuantumSnapSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  pattern?: AnimationPatternType;
  sectionIndex?: number;
}

// Section-level container reveal variants to harmonize with the chosen pattern
function createSectionVariants(pattern: AnimationPatternType, isMobile: boolean): Variants {
  switch (pattern) {
    case 'slide-up-reveal':
      return {
        hidden: { opacity: 0, y: isMobile ? 30 : 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: EASE_LUXURY_OUT },
        },
      };

    case 'slide-down-reveal':
      return {
        hidden: { opacity: 0, y: isMobile ? -25 : -40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: EASE_LUXURY_OUT },
        },
      };

    case 'slide-from-left':
      return {
        hidden: { opacity: 0, x: isMobile ? -20 : -45 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, ease: EASE_LUXURY_OUT },
        },
      };

    case 'slide-from-right':
      return {
        hidden: { opacity: 0, x: isMobile ? 20 : 45 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, ease: EASE_LUXURY_OUT },
        },
      };

    case 'scale-in':
    case 'zoom-reveal':
      return {
        hidden: { opacity: 0, scale: 0.94 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: EASE_CINEMATIC_OUT },
        },
      };

    case 'fade-blur-removal':
      return {
        hidden: { opacity: 0, filter: 'blur(12px)' },
        visible: {
          opacity: 1,
          filter: 'blur(0px)',
          transition: { duration: 0.85, ease: EASE_LUXURY_OUT },
        },
      };

    case 'perspective-3d-entrance':
      return {
        hidden: { opacity: 0, y: 35, rotateX: isMobile ? 5 : 10 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: { duration: 0.8, ease: EASE_LUXURY_OUT },
        },
      };

    case 'cinematic-scroll':
      return {
        hidden: { opacity: 0, y: 55, filter: 'blur(8px)', scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          scale: 1,
          transition: { duration: 0.9, ease: EASE_CINEMATIC_OUT },
        },
      };

    default:
      return {
        hidden: { opacity: 0, y: 35 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: EASE_LUXURY_OUT },
        },
      };
  }
}

export const QuantumSnapSection: React.FC<QuantumSnapSectionProps> = ({
  children,
  id,
  className = '',
  pattern: explicitPattern,
  sectionIndex,
}) => {
  const autoId = useId();
  const sectionKey = id || `pyrow-section-${autoId}`;

  // Mobile detection for responsive transform clamping
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intelligently retrieve the section pattern ensuring adjacent sections never repeat
  const activePattern = useMemo(() => {
    if (explicitPattern) return explicitPattern;
    return globalPatternSequencer.getPatternForSection(sectionKey, sectionIndex);
  }, [explicitPattern, sectionKey, sectionIndex]);

  const patternMeta = ANIMATION_PATTERNS[activePattern] || ANIMATION_PATTERNS['slide-up-reveal'];

  // Memoize card variants for this section
  const cardVariants = useMemo(() => {
    return createCardVariants(activePattern, isMobile);
  }, [activePattern, isMobile]);

  // Section container entrance variants
  const sectionVariants = useMemo(() => {
    return createSectionVariants(activePattern, isMobile);
  }, [activePattern, isMobile]);

  const contextValue = useMemo(() => {
    return {
      pattern: activePattern,
      patternMeta,
      cardVariants,
      sectionIndex: sectionIndex ?? 0,
      isMobile,
    };
  }, [activePattern, patternMeta, cardVariants, sectionIndex, isMobile]);

  return (
    <SectionAnimationContext.Provider value={contextValue}>
      <motion.section
        id={id}
        data-animation-pattern={activePattern}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.08 }}
        style={{ perspective: 1200 }}
        className={`relative w-full overflow-visible my-4 sm:my-8 ${className}`}
      >
        <div className="relative w-full overflow-visible">
          {children}
        </div>
      </motion.section>
    </SectionAnimationContext.Provider>
  );
};
