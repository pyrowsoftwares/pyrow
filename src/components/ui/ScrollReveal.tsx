import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.05,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Immediate fallback: ensure content is always visible even if IntersectionObserver fails or stalls
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimer);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      {
        threshold: 0.01,
        rootMargin: '120px 0px -40px 0px',
      }
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      clearTimeout(fallbackTimer);
      if (current) observer.unobserve(current);
    };
  }, []);

  const getDirectionClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'opacity-0 translate-y-6';
        case 'down':
          return 'opacity-0 -translate-y-6';
        case 'left':
          return 'opacity-0 translate-x-6';
        case 'right':
          return 'opacity-0 -translate-x-6';
        case 'none':
          return 'opacity-0 scale-98';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: '600ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all transform will-change-transform will-change-opacity ${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  );
};
