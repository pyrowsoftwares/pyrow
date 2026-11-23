import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, Variants } from 'framer-motion';
import {
  AnimationPatternType,
  useSectionAnimation,
  createCardVariants,
  EASE_LUXURY_OUT,
} from './ScrollAnimationSystem';

interface LuxuryScrollCardProps {
  children: React.ReactNode;
  index?: number;
  columns?: number;
  className?: string;
  onClick?: () => void;
  enableParallax?: boolean;
  enableActiveFocus?: boolean;
  once?: boolean;
  amount?: number;
  baseDelay?: number;
  pattern?: AnimationPatternType;
}

export const LuxuryScrollCard: React.FC<LuxuryScrollCardProps> = ({
  children,
  index = 0,
  columns = 3,
  className = '',
  onClick,
  enableParallax = true,
  enableActiveFocus = true,
  once = false,
  amount = 0.16,
  baseDelay = 0.08,
  pattern: explicitPattern,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Retrieve section-level intelligent animation pattern
  const sectionAnim = useSectionAnimation();
  const activePattern = explicitPattern || sectionAnim.pattern;

  // Use section-provided card variants or generate dynamically
  const activeCardVariants: Variants = React.useMemo(() => {
    if (!explicitPattern && sectionAnim.cardVariants) {
      return sectionAnim.cardVariants;
    }
    return createCardVariants(activePattern, sectionAnim.isMobile);
  }, [explicitPattern, sectionAnim.cardVariants, activePattern, sectionAnim.isMobile]);

  // Mouse cursor spotlight coordinates (Apple / Linear style glassmorphism)
  const mouseX = useMotionValue(200);
  const mouseY = useMotionValue(200);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  // Continuous viewport scroll tracking for connected journey
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // 1. Smooth float parallax movement: cards move with depth through scroll
  const rawParallax = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const smoothParallax = useSpring(rawParallax, {
    stiffness: 90,
    damping: 24,
    mass: 0.3,
  });

  // 2. 3D perspective subtle rotation around X axis
  const rawRotateX = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [3, 0, 0, -2]);
  const smoothRotateX = useSpring(rawRotateX, {
    stiffness: 110,
    damping: 25,
  });

  // 3. Focal center active state:
  // As card reaches center of viewport (0.45 - 0.55), gently scale 1.0 -> 1.03
  const rawActiveScale = useTransform(
    scrollYProgress,
    [0.1, 0.42, 0.55, 0.85],
    [1, 1.03, 1.03, 1]
  );
  const activeScale = useSpring(rawActiveScale, {
    stiffness: 120,
    damping: 25,
    mass: 0.25,
  });

  // 4. Subdued emphasis on previous cards as they scroll past (1.0 -> 0.82)
  const rawActiveOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.65, 0.95, 1],
    [0.92, 1, 1, 0.9, 0.82]
  );
  const activeOpacity = useSpring(rawActiveOpacity, {
    stiffness: 120,
    damping: 25,
  });

  // 5. Soft active focal spotlight glow when centered in viewport
  const activeGlowOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.45, 0.55, 0.8],
    [0, 0.8, 0.8, 0]
  );

  // Dynamic cursor spotlight background
  const spotlightBg = useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.16), transparent 80%)`;

  return (
    <div style={{ perspective: 1200 }} className="w-full h-full flex">
      {/* Layer 1: Unique Dynamic Section Pattern Entrance Reveal */}
      <motion.div
        variants={activeCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        custom={{ index, columns, baseDelay }}
        className="w-full h-full flex flex-col"
      >
        {/* Layer 2: Scroll-connected storytelling flow (Parallax, 3D Tilt, Active Focal Scaling & Subdued Opacity) */}
        <motion.div
          ref={cardRef}
          style={{
            y: enableParallax ? smoothParallax : 0,
            rotateX: smoothRotateX,
            scale: enableActiveFocus ? activeScale : 1,
            opacity: enableActiveFocus ? activeOpacity : 1,
            transformStyle: 'preserve-3d',
            willChange: 'transform, opacity, filter',
          }}
          className="w-full h-full flex-1 flex flex-col transform-gpu"
        >
          {/* Layer 3: Interactive Card Shell (Hover Lift, Glassmorphism, Cursor Spotlight, Soft Shadow) */}
          <motion.div
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
              y: -8,
              transition: { duration: 0.32, ease: EASE_LUXURY_OUT },
            }}
            className={`relative group rounded-3xl overflow-hidden transition-all duration-500 transform-gpu flex-1 flex flex-col shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_25px_50px_-12px_rgba(124,58,237,0.28)] ${className}`}
          >
            {/* Soft Ambient Spotlight Glow when Card is in Viewport Focus Center */}
            {enableActiveFocus && (
              <motion.div
                style={{ opacity: activeGlowOpacity }}
                className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-violet-500/10 via-purple-500/5 to-transparent z-10 transition-opacity duration-500"
              />
            )}

            {/* Dynamic Cursor Spotlight Following Mouse Pointer */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
              style={{
                background: spotlightBg,
              }}
            />

            {/* Glassmorphic border glow highlight */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none border border-transparent group-hover:border-violet-500/35 transition-colors duration-500 z-20" />

            {/* Card Content */}
            <div className="relative z-10 w-full h-full flex flex-col flex-1">
              {children}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
