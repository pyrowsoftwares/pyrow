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
        obsidian: {
          DEFAULT: '#05070B',
          950: '#030508',
          900: '#070B12',
          850: '#0A0E17',
          800: '#0C111C',
          700: '#131A2B',
          600: '#1D263B',
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
          50: '#FFF5F0',
          100: '#FFE6D9',
          200: '#FFC8B3',
          300: '#FFA080',
          400: '#FF7040',
          500: '#FF4D00', // Primary Vibrant Electric Orange / Indian Saffron Fire
          600: '#E63E00',
          700: '#BD3000',
          800: '#942600',
          900: '#751E00',
        },
        flare: {
          DEFAULT: '#FFB703',
          amber: '#FB8500',
          gold: '#FFD166',
        },
        cyber: {
          violet: '#7928CA',
          magenta: '#FF0080',
          cyan: '#00E5FF',
          blue: '#0070F3',
          royal: '#0066FF',
          electric: '#38BDF8',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Inter Display"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'ember-gradient': 'linear-gradient(135deg, #FF4D00 0%, #FF8A00 50%, #FFB703 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #0070F3 0%, #00E5FF 50%, #7928CA 100%)',
        'fire-violet': 'linear-gradient(135deg, #FF4D00 0%, #FF0080 50%, #7928CA 100%)',
        'light-radial': 'radial-gradient(circle at 50% 0%, rgba(255, 77, 0, 0.08) 0%, rgba(248, 250, 252, 0) 70%)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, rgba(255, 77, 0, 0.15) 0%, rgba(5, 7, 11, 0) 70%)',
      },
      boxShadow: {
        'glow-ember': '0 0 35px -8px rgba(255, 77, 0, 0.35)',
        'glow-ember-lg': '0 0 50px -5px rgba(255, 77, 0, 0.45)',
        'glow-cyan': '0 0 35px -8px rgba(0, 112, 243, 0.35)',
        'light-card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'light-card-hover': '0 12px 30px -4px rgba(255, 77, 0, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.06)',
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
