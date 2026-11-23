import React, { createContext, useContext, useMemo } from 'react';
import { Variants } from 'framer-motion';

export type AnimationPatternType =
  | 'slide-up-reveal'
  | 'slide-down-reveal'
  | 'slide-from-left'
  | 'slide-from-right'
  | 'scale-in'
  | 'zoom-reveal'
  | 'fade-blur-removal'
  | 'perspective-3d-entrance'
  | 'rotational-reveal'
  | 'floating-card-entrance'
  | 'staggered-grid-animation'
  | 'wave-animation'
  | 'parallax-movement'
  | 'stack-to-unstack'
  | 'depth-layer-animation'
  | 'spotlight-focus'
  | 'masonry-cascade'
  | 'timeline-progress'
  | 'glassmorphism-elevation'
  | 'cinematic-scroll';

export interface AnimationPatternMeta {
  id: AnimationPatternType;
  name: string;
  category: 'vertical' | 'horizontal' | 'scale' | 'perspective' | 'dynamic' | 'material';
  description: string;
}

export const ANIMATION_PATTERNS: Record<AnimationPatternType, AnimationPatternMeta> = {
  'slide-up-reveal': {
    id: 'slide-up-reveal',
    name: 'Slide Up Reveal',
    category: 'vertical',
    description: 'Crisp upward rise with progressive de-blur inspired by Linear.',
  },
  'slide-down-reveal': {
    id: 'slide-down-reveal',
    name: 'Slide Down Reveal',
    category: 'vertical',
    description: 'Gentle top-down descent into final lock position.',
  },
  'slide-from-left': {
    id: 'slide-from-left',
    name: 'Slide From Left',
    category: 'horizontal',
    description: 'Fluid horizontal sweep from the left edge with column cascade.',
  },
  'slide-from-right': {
    id: 'slide-from-right',
    name: 'Slide From Right',
    category: 'horizontal',
    description: 'Sleek horizontal sweep from the right edge with directional stagger.',
  },
  'scale-in': {
    id: 'scale-in',
    name: 'Scale In',
    category: 'scale',
    description: 'Smooth expansion from 88% scale with subtle spatial elevation.',
  },
  'zoom-reveal': {
    id: 'zoom-reveal',
    name: 'Zoom Reveal',
    category: 'scale',
    description: 'Camera lens zoom with rapid optical focus de-blur.',
  },
  'fade-blur-removal': {
    id: 'fade-blur-removal',
    name: 'Fade + Blur Removal',
    category: 'material',
    description: 'Ethereal mist dissolving into ultra-sharp typography and borders.',
  },
  'perspective-3d-entrance': {
    id: 'perspective-3d-entrance',
    name: '3D Perspective Entrance',
    category: 'perspective',
    description: 'True 3D spatial tilt folding flat into the page plane.',
  },
  'rotational-reveal': {
    id: 'rotational-reveal',
    name: 'Rotational Reveal',
    category: 'perspective',
    description: 'Subtle tactile card deal with alternating rotational settling.',
  },
  'floating-card-entrance': {
    id: 'floating-card-entrance',
    name: 'Floating Card Entrance',
    category: 'vertical',
    description: 'Anti-gravity buoyancy rise with fluid secondary dampening.',
  },
  'staggered-grid-animation': {
    id: 'staggered-grid-animation',
    name: 'Staggered Grid Animation',
    category: 'dynamic',
    description: 'Diagonal spatial cascade sweeping across matrix rows and columns.',
  },
  'wave-animation': {
    id: 'wave-animation',
    name: 'Wave Animation',
    category: 'dynamic',
    description: 'Harmonic sinusoidal ripple rolling through elements organically.',
  },
  'parallax-movement': {
    id: 'parallax-movement',
    name: 'Parallax Movement',
    category: 'vertical',
    description: 'Differential vertical entrance velocities creating instant depth layers.',
  },
  'stack-to-unstack': {
    id: 'stack-to-unstack',
    name: 'Stack-to-Unstack Transition',
    category: 'perspective',
    description: 'Cards expand outward from a stacked cluster into grid positions.',
  },
  'depth-layer-animation': {
    id: 'depth-layer-animation',
    name: 'Depth Layer Animation',
    category: 'scale',
    description: 'Elements emerge forward from deep z-space into focal foreground.',
  },
  'spotlight-focus': {
    id: 'spotlight-focus',
    name: 'Spotlight Focus Animation',
    category: 'material',
    description: 'Focused luminance bloom expanding as cards lock into view.',
  },
  'masonry-cascade': {
    id: 'masonry-cascade',
    name: 'Masonry Cascade Effect',
    category: 'dynamic',
    description: 'Alternating architectural drop timing across columns.',
  },
  'timeline-progress': {
    id: 'timeline-progress',
    name: 'Timeline Progress Reveal',
    category: 'horizontal',
    description: 'Sequential narrative progression revealing items in chronological cadence.',
  },
  'glassmorphism-elevation': {
    id: 'glassmorphism-elevation',
    name: 'Glassmorphism Elevation Effect',
    category: 'material',
    description: 'Translucent frosted glass lifting off surface with specular highlights.',
  },
  'cinematic-scroll': {
    id: 'cinematic-scroll',
    name: 'Cinematic Scroll Motion',
    category: 'vertical',
    description: 'Majestic Apple product showcase pace with deep easing curve.',
  },
};

const ALL_PATTERN_IDS = Object.keys(ANIMATION_PATTERNS) as AnimationPatternType[];

// Luxury SaaS Easing Curves
export const EASE_LUXURY_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_CINEMATIC_OUT = [0.16, 1, 0.3, 1] as const;

/**
 * Generates variants specifically tailored to the active pattern, card index, and column count.
 * All transitions use GPU-accelerated properties (transform, opacity, filter).
 */
export function createCardVariants(
  pattern: AnimationPatternType,
  isMobile: boolean = false
): Variants {
  return {
    hidden: (custom: { index: number; columns: number; baseDelay?: number }) => {
      const idx = custom?.index ?? 0;
      const cols = custom?.columns ?? 3;
      const row = Math.floor(idx / cols);
      const col = idx % cols;

      switch (pattern) {
        case 'slide-up-reveal':
          return {
            opacity: 0,
            y: isMobile ? 45 : 75,
            scale: 0.98,
            filter: 'blur(6px)',
          };

        case 'slide-down-reveal':
          return {
            opacity: 0,
            y: isMobile ? -35 : -60,
            scale: 0.98,
            filter: 'blur(6px)',
          };

        case 'slide-from-left':
          return {
            opacity: 0,
            x: isMobile ? -25 : -65,
            y: 12,
            filter: 'blur(5px)',
          };

        case 'slide-from-right':
          return {
            opacity: 0,
            x: isMobile ? 25 : 65,
            y: 12,
            filter: 'blur(5px)',
          };

        case 'scale-in':
          return {
            opacity: 0,
            scale: 0.88,
            y: 20,
            filter: 'blur(8px)',
          };

        case 'zoom-reveal':
          return {
            opacity: 0,
            scale: 0.91,
            filter: 'blur(14px)',
          };

        case 'fade-blur-removal':
          return {
            opacity: 0,
            filter: 'blur(18px)',
            y: 10,
          };

        case 'perspective-3d-entrance':
          return {
            opacity: 0,
            y: isMobile ? 35 : 60,
            rotateX: isMobile ? 8 : 18,
            rotateY: isMobile ? 0 : col % 2 === 0 ? -6 : 6,
            filter: 'blur(5px)',
          };

        case 'rotational-reveal':
          return {
            opacity: 0,
            y: 40,
            rotate: isMobile ? (col % 2 === 0 ? -1.5 : 1.5) : col % 2 === 0 ? -3.5 : 3.5,
            scale: 0.96,
            filter: 'blur(4px)',
          };

        case 'floating-card-entrance':
          return {
            opacity: 0,
            y: isMobile ? 50 : 90,
            scale: 0.96,
            filter: 'blur(6px)',
          };

        case 'staggered-grid-animation':
          return {
            opacity: 0,
            y: 45,
            x: isMobile ? 10 : 22,
            scale: 0.95,
            filter: 'blur(5px)',
          };

        case 'wave-animation':
          return {
            opacity: 0,
            y: 60,
            scale: 0.96,
            filter: 'blur(5px)',
          };

        case 'parallax-movement':
          return {
            opacity: 0,
            y: (col % 2 === 0 ? 80 : 40) * (isMobile ? 0.6 : 1),
            scale: 0.97,
            filter: 'blur(5px)',
          };

        case 'stack-to-unstack':
          return {
            opacity: 0,
            y: 40 + (idx % 4) * 12,
            scale: 0.93 + (idx % 4) * 0.015,
            filter: 'blur(6px)',
          };

        case 'depth-layer-animation':
          return {
            opacity: 0,
            scale: 0.86,
            y: 45,
            filter: 'blur(10px)',
          };

        case 'spotlight-focus':
          return {
            opacity: 0,
            scale: 0.95,
            y: 35,
            filter: 'blur(8px)',
          };

        case 'masonry-cascade':
          return {
            opacity: 0,
            y: 45 + (col % 3) * 24,
            filter: 'blur(5px)',
            scale: 0.97,
          };

        case 'timeline-progress':
          return {
            opacity: 0,
            x: isMobile ? -18 : -38,
            y: 25,
            filter: 'blur(5px)',
          };

        case 'glassmorphism-elevation':
          return {
            opacity: 0,
            y: 50,
            scale: 0.96,
            filter: 'blur(8px)',
          };

        case 'cinematic-scroll':
        default:
          return {
            opacity: 0,
            y: isMobile ? 45 : 85,
            scale: 0.94,
            filter: 'blur(10px)',
          };
      }
    },

    visible: (custom: { index: number; columns: number; baseDelay?: number }) => {
      const idx = custom?.index ?? 0;
      const cols = custom?.columns ?? 3;
      const base = custom?.baseDelay ?? 0.08;
      const row = Math.floor(idx / cols);
      const col = idx % cols;

      // Calculate staggered delay based on pattern personality
      let stagger = base + col * 0.09;
      let duration = 0.8;
      let ease: any = EASE_LUXURY_OUT;

      switch (pattern) {
        case 'staggered-grid-animation':
          stagger = base + (row * 0.12 + col * 0.08);
          duration = 0.75;
          break;

        case 'wave-animation':
          // Sinusoidal harmonic wave
          stagger = base + Math.sin(((idx % 6) / 5) * Math.PI) * 0.28;
          duration = 0.85;
          break;

        case 'masonry-cascade':
          stagger = base + (col % 3) * 0.12 + row * 0.06;
          duration = 0.8;
          break;

        case 'timeline-progress':
          stagger = base + idx * 0.09;
          duration = 0.75;
          break;

        case 'slide-from-left':
          stagger = base + col * 0.08;
          duration = 0.75;
          break;

        case 'slide-from-right':
          stagger = base + (cols - 1 - col) * 0.08;
          duration = 0.75;
          break;

        case 'scale-in':
        case 'depth-layer-animation':
          stagger = base + col * 0.08;
          duration = 0.82;
          ease = EASE_CINEMATIC_OUT;
          break;

        case 'cinematic-scroll':
          stagger = base + col * 0.11;
          duration = 0.92;
          ease = EASE_CINEMATIC_OUT;
          break;

        case 'fade-blur-removal':
          stagger = base + col * 0.07;
          duration = 0.88;
          break;

        default:
          stagger = base + col * 0.09;
          duration = 0.8;
          break;
      }

      return {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        filter: 'blur(0px)',
        transition: {
          duration,
          delay: stagger,
          ease,
        },
      };
    },
  };
}

/**
 * Global dynamic sequence cache ensuring:
 * 1. Adjacent sections NEVER share the same pattern.
 * 2. Recent 4 patterns are not repeated.
 * 3. Directional and category diversity is preserved for a natural storytelling flow.
 */
class IntelligentPatternSequencer {
  private assignedMap = new Map<string, AnimationPatternType>();
  private sequenceHistory: AnimationPatternType[] = [];
  private seed: number;

  constructor() {
    // Generate a per-session random seed
    if (typeof window !== 'undefined') {
      const storedSeed = sessionStorage.getItem('pyrow_scroll_anim_seed');
      if (storedSeed) {
        this.seed = parseInt(storedSeed, 10);
      } else {
        this.seed = Math.floor(Math.random() * 100000);
        sessionStorage.setItem('pyrow_scroll_anim_seed', this.seed.toString());
      }
    } else {
      this.seed = 42;
    }
  }

  // Simple deterministic pseudorandom generator based on seed and step
  private pseudoRandom(step: number): number {
    const x = Math.sin(this.seed + step * 9301 + 49297) * 233280;
    return x - Math.floor(x);
  }

  public getPatternForSection(sectionId: string, forcedIndex?: number): AnimationPatternType {
    if (this.assignedMap.has(sectionId)) {
      return this.assignedMap.get(sectionId)!;
    }

    const step = forcedIndex !== undefined ? forcedIndex : this.assignedMap.size;
    const lastPattern = this.sequenceHistory[this.sequenceHistory.length - 1];
    const recentHistory = this.sequenceHistory.slice(-4);

    // Filter out recently used patterns to guarantee zero consecutive repeats
    let candidatePool = ALL_PATTERN_IDS.filter((p) => !recentHistory.includes(p));

    // If pool is exhausted (all 20 cycled), relax to only excluding the last 2
    if (candidatePool.length === 0) {
      candidatePool = ALL_PATTERN_IDS.filter(
        (p) => p !== lastPattern && p !== this.sequenceHistory[this.sequenceHistory.length - 2]
      );
    }

    // Storytelling harmony: if last pattern was horizontal, avoid picking another horizontal immediately
    if (lastPattern) {
      const lastCategory = ANIMATION_PATTERNS[lastPattern]?.category;
      if (lastCategory === 'horizontal') {
        const nonHorizontal = candidatePool.filter(
          (p) => ANIMATION_PATTERNS[p].category !== 'horizontal'
        );
        if (nonHorizontal.length > 0) candidatePool = nonHorizontal;
      }
    }

    const randVal = this.pseudoRandom(step);
    const chosenIndex = Math.floor(randVal * candidatePool.length);
    const chosenPattern = candidatePool[chosenIndex] || 'slide-up-reveal';

    this.assignedMap.set(sectionId, chosenPattern);
    this.sequenceHistory.push(chosenPattern);

    return chosenPattern;
  }
}

export const globalPatternSequencer = new IntelligentPatternSequencer();

export interface SectionAnimationContextValue {
  pattern: AnimationPatternType;
  patternMeta: AnimationPatternMeta;
  cardVariants: Variants;
  sectionIndex: number;
  isMobile: boolean;
}

const defaultPatternMeta = ANIMATION_PATTERNS['slide-up-reveal'];
const defaultVariants = createCardVariants('slide-up-reveal', false);

export const SectionAnimationContext = createContext<SectionAnimationContextValue>({
  pattern: 'slide-up-reveal',
  patternMeta: defaultPatternMeta,
  cardVariants: defaultVariants,
  sectionIndex: 0,
  isMobile: false,
});

export const useSectionAnimation = () => useContext(SectionAnimationContext);
