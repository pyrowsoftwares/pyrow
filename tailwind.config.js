/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        obsidian: {
          DEFAULT: '#0B0F19', // Modern Midnight Slate Base (No pure black)
          950: '#0F172A',     // Deepest surface tone (Tailwind Slate-900)
          900: '#141D30',     // Primary card surface: Rich, modern midnight slate
          850: '#1A253D',     // Elevated card / Sub-card surface
          800: '#22304F',     // Active card / hovered surface
          700: '#2E3F66',     // Elevated borders / pill surfaces
          600: '#3D5280',     // Accent borders
        },
        light: {
          bg: '#FAFBFC',
          surface: '#FFFFFF',
          card: '#FFFFFF',
          muted: '#F1F5F9',
          border: '#E2E8F0',
          text: '#0F172A',
          subtext: '#475569',
        },
        ember: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C084FC',
          400: '#A855F7',
          500: '#7C3AED', // Primary Ultra Violet (matching new Pyrow logo)
          600: '#6D28D9', // Deep Electric Violet
          700: '#5B21B6',
          800: '#4C1D95',
          900: '#2E0854',
        },
        amber: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#581C87',
          950: '#3B0764',
        },
        orange: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
        flare: {
          DEFAULT: '#A855F7',
          amber: '#C084FC',
          gold: '#E9D5FF',
        },
        cyber: {
          violet: '#7C3AED',
          magenta: '#D946EF',
          cyan: '#38BDF8',
          blue: '#6366F1',
          royal: '#4F46E5',
          electric: '#818CF8',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Inter Display"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'ember-gradient': 'linear-gradient(135deg, #7C3AED 0%, #9333EA 50%, #C084FC 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)',
        'fire-violet': 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #C084FC 100%)',
        'pyrow-gradient': 'linear-gradient(135deg, #7C3AED 0%, #9333EA 50%, #C084FC 100%)',
        'light-radial': 'radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.08) 0%, rgba(248, 250, 252, 0) 70%)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.18) 0%, rgba(11, 8, 22, 0) 70%)',
      },
      boxShadow: {
        'glow-ember': '0 0 35px -8px rgba(124, 58, 237, 0.45)',
        'glow-ember-lg': '0 0 50px -5px rgba(124, 58, 237, 0.55)',
        'glow-violet': '0 0 35px -8px rgba(124, 58, 237, 0.45)',
        'glow-violet-lg': '0 0 50px -5px rgba(124, 58, 237, 0.55)',
        'glow-cyan': '0 0 35px -8px rgba(168, 85, 247, 0.45)',
        'light-card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'light-card-hover': '0 12px 30px -4px rgba(124, 58, 237, 0.16), 0 4px 12px -2px rgba(15, 23, 42, 0.06)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
