import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, Variants } from 'framer-motion';

interface LuxuryScrollCardProps {
  children: React.ReactNode;
  index?: number;
  columns?: number;
  className?: string;
  onClick?: () => void;
  enableParallax?: boolean;
  once?: boolean;
  amount?: number;
  baseDelay?: number;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    filter: 'blur(8px)',
    rotateX: 3,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    rotateX: 0,
    transition: {
      duration: 0.75,
      delay: customDelay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const LuxuryScrollCard: React.FC<LuxuryScrollCardProps> = ({
  children,
  index = 0,
  columns = 3,
  className = '',
  onClick,
  enableParallax = true,
  once = false,
  amount = 0.2,
  baseDelay = 0.2,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse spotlight coordinates
  const mouseX = useMotionValue(200);
  const mouseY = useMotionValue(200);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  // Parallax tracking relative to viewport scroll
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Soft subtle parallax: cards gently lag behind scroll speed
  const rawParallax = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const smoothParallax = useSpring(rawParallax, {
    stiffness: 110,
    damping: 24,
    mass: 0.3,
  });

  // Dynamic spotlight background following cursor with Apple/Linear glassmorphic glow
  const spotlightBg = useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.16), transparent 80%)`;

  // 100ms staggered entrance delay based on column placement, synchronized after heading reveal
  const staggerDelay = baseDelay + (index % columns) * 0.1;

  return (
    <div style={{ perspective: 1200 }} className="w-full h-full flex">
      {/* Outer entrance reveal container: resets when scrolling away, replays on re-entry */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        custom={staggerDelay}
        className="w-full h-full flex flex-col"
      >
        {/* Inner interactive container: parallax, active spotlight, hover lift & glassmorphism */}
        <motion.div
          ref={cardRef}
          onClick={onClick}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{
            y: -8,
            scale: 1.03,
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          }}
          style={{
            y: enableParallax ? smoothParallax : 0,
            transformStyle: 'preserve-3d',
            willChange: 'transform, opacity, filter',
          }}
          className={`relative group rounded-3xl overflow-hidden transition-all duration-500 transform-gpu flex-1 flex flex-col ${className}`}
        >
          {/* Subtle cursor spotlight overlay */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
            style={{
              background: spotlightBg,
            }}
          />

          {/* Glassmorphic border glow highlight */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none border border-transparent group-hover:border-violet-500/35 transition-colors duration-500 z-20" />

          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
