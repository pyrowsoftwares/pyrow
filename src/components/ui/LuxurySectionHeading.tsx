import React from 'react';
import { motion, Variants } from 'framer-motion';

interface LuxurySectionHeadingProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  rightAction?: React.ReactNode;
  tag?: 'h2' | 'h3' | 'h1';
}

const easeCurve = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(6px)',
    transition: { duration: 0.35, ease: easeCurve },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: easeCurve },
  },
};

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(8px)',
    transition: { duration: 0.35, ease: easeCurve },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: easeCurve },
  },
};

const subtitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: 'blur(6px)',
    transition: { duration: 0.35, ease: easeCurve },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easeCurve, delay: 0.08 },
  },
};

const actionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.96,
    transition: { duration: 0.35, ease: easeCurve },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: easeCurve, delay: 0.15 },
  },
};

export const LuxurySectionHeading: React.FC<LuxurySectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  badgeClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  rightAction,
  tag = 'h2',
}) => {
  const isCenter = align === 'center' && !rightAction;
  const isLeft = align === 'left' || !!rightAction;

  const TitleTag = motion[tag] as any;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={`w-full mb-12 sm:mb-16 ${className}`}
    >
      <div
        className={`${
          rightAction
            ? 'flex flex-col sm:flex-row sm:items-end justify-between gap-6'
            : isCenter
            ? 'max-w-3xl mx-auto text-center'
            : 'max-w-4xl text-left'
        }`}
      >
        <div className={isCenter ? 'flex flex-col items-center' : 'flex flex-col items-start'}>
          {/* Badge */}
          {badge && (
            <motion.div variants={badgeVariants} className="mb-3">
              {typeof badge === 'string' ? (
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/10 text-violet-600 dark:text-violet-400 text-xs font-mono font-semibold uppercase tracking-widest border border-violet-500/20 ${badgeClassName}`}
                >
                  {badge}
                </span>
              ) : (
                badge
              )}
            </motion.div>
          )}

          {/* Heading */}
          <TitleTag
            variants={titleVariants}
            className={`text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight ${titleClassName}`}
          >
            {title}
          </TitleTag>

          {/* Subtitle */}
          {subtitle && (
            <motion.div
              variants={subtitleVariants}
              className={`mt-3 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed ${subtitleClassName}`}
            >
              {subtitle}
            </motion.div>
          )}
        </div>

        {/* Optional Right Action Button */}
        {rightAction && (
          <motion.div variants={actionVariants} className="self-start sm:self-auto shrink-0">
            {rightAction}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
