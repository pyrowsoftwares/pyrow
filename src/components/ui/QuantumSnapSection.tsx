import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface QuantumSnapSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const QuantumSnapSection: React.FC<QuantumSnapSectionProps> = ({
  children,
  id,
  className = '',
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Track the section's scroll trajectory across the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Smooth, gentle spring physics for clean, natural feel
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    restDelta: 0.001,
  });

  // 1. Subtle, elegant scale: 0.98 -> 1.0
  const scale = useTransform(springProgress, [0, 0.16, 0.84, 1], [0.98, 1, 1, 0.98]);

  // 2. Gentle vertical lift: 40px -> 0px
  const y = useTransform(springProgress, [0, 0.16, 0.84, 1], [40, 0, 0, -25]);

  // 3. Clean, natural opacity fade: 0.4 -> 1.0
  const opacity = useTransform(springProgress, [0, 0.12, 0.88, 1], [0.4, 1, 1, 0.4]);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`relative w-full overflow-visible my-3 sm:my-6 ${className}`}
    >
      <motion.div
        style={{
          scale,
          y,
          opacity,
        }}
        className="relative w-full transform-gpu will-change-transform overflow-visible"
      >
        {children}
      </motion.div>
    </div>
  );
};
