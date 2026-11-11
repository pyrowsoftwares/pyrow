import React, { useEffect, useState, useRef } from 'react';

interface MetricCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  label?: string;
  sublabel?: string;
}

export const MetricCounter: React.FC<MetricCounterProps> = ({
  end,
  prefix = '',
  suffix = '',
  duration = 2000,
  decimals = 0,
  label,
  sublabel,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOutProgress * end;

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={countRef} className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <div className="flex items-baseline font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
        <span className="text-ember-600 dark:text-ember-400">{prefix}</span>
        <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 dark:from-white dark:via-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
          {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
        </span>
        <span className="text-flare-amber ml-0.5">{suffix}</span>
      </div>
      {label && <div className="mt-1 text-sm font-bold tracking-wide text-slate-700 dark:text-zinc-300">{label}</div>}
      {sublabel && <div className="text-xs text-slate-500 dark:text-zinc-500 font-mono mt-0.5">{sublabel}</div>}
    </div>
  );
};
