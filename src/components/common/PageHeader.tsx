import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description: string;
  primaryCtaText?: string;
  onPrimaryCtaClick?: () => void;
  breadcrumbs?: BreadcrumbItem[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlightText,
  description,
  primaryCtaText = 'Get a Quote',
  onPrimaryCtaClick,
  breadcrumbs,
}) => {
  const { navigate } = useRouter();

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
      {/* MotionSites Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-gradient-to-b from-violet-600/18 via-indigo-600/8 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Breadcrumbs (MotionSites Glass Pill) */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="w-full flex justify-center mb-6">
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-xl shadow-sm text-xs font-mono text-slate-500 dark:text-zinc-400"
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1 hover:text-violet-600 dark:hover:text-white transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-slate-400 dark:text-zinc-600" />
                {crumb.href ? (
                  <button
                    onClick={() => navigate(crumb.href!)}
                    className="hover:text-violet-600 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className="font-semibold text-slate-800 dark:text-zinc-200">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        </div>
      )}

      {/* Badge */}
      {badge && (
        <div className="w-full flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-white/[0.04] border border-violet-200 dark:border-white/[0.08] text-xs font-mono font-medium text-violet-700 dark:text-violet-300 shadow-[0_0_20px_-3px_rgba(124,58,237,0.25)] backdrop-blur-xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 animate-pulse" />
            <span>{badge}</span>
          </motion.div>
        </div>
      )}

      {/* Title */}
      <div className="w-full flex justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-tight sm:leading-[1.12] text-center"
        >
          <span>
            {title}{' '}
            {highlightText && (
              <span className="font-serif italic font-normal tracking-wide underline decoration-violet-500/30 underline-offset-8 bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 dark:from-violet-300 dark:via-purple-200 dark:to-indigo-300 bg-clip-text text-transparent">
                {highlightText}
              </span>
            )}
          </span>
        </motion.h1>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
      >
        {description}
      </motion.p>

      {/* Actions */}
      {onPrimaryCtaClick && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <button
            onClick={onPrimaryCtaClick}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold text-sm shadow-lg shadow-violet-600/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </section>
  );
};
