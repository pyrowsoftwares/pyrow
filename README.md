# Pyrow Software Agency

A modern, high-performance web application for Pyrow — showcase agency platform featuring kinetic UI interactions, interactive estimators, and software solution showcases.

---

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Tooling**: Node.js & Rollup WebAssembly compatibility patch

---

## 📁 Project Structure

```text
pyrow/
├── public/                  # Static assets & public files
├── scripts/
│   └── patch-rollup.js     # WebAssembly fallback patch for Rollup
├── src/
│   ├── components/         # Page sections & main UI blocks
│   │   ├── Modals/         # Interactive modals (Demo Request, Scope Calculator, Strategy Call)
│   │   ├── ui/             # Reusable UI primitives (CommandPalette, ParticleForge, MagneticButton, etc.)
│   │   ├── AboutPyrow.tsx  # Company story, team, and philosophy
│   │   ├── CaseStudies.tsx # Featured client case studies & metrics
│   │   ├── ComparisonMatrix.tsx # Feature comparison matrix
│   │   ├── FaqSection.tsx  # Frequently asked questions
│   │   ├── Footer.tsx      # Global footer & quick links
│   │   ├── Hero.tsx        # Dynamic hero with particle showcase & quick CTAs
│   │   ├── HowItWorks.tsx  # Step-by-step engagement workflow
│   │   ├── IndustrySolutions.tsx # Vertical-specific solutions (FinTech, HealthTech, etc.)
│   │   ├── Navigation.tsx  # Sticky header with theme toggle & quick nav
│   │   ├── ProjectEstimator.tsx # Interactive scope and budget estimator
│   │   ├── RoiCalculator.tsx    # Interactive return on investment calculator
│   │   ├── Services.tsx    # Service offerings & tech specializations
│   │   └── TechRadar.tsx   # Interactive tech stack explorer
│   ├── data/               # Industry, service, and company data definitions
│   ├── utils/              # Helper utilities (tailwind class merging)
│   ├── App.tsx             # Root application component & layout state
│   ├── index.css           # Global stylesheet & design tokens
│   └── main.tsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Project manifest & dependencies
├── tailwind.config.js      # Tailwind configuration & design system theme
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build & dev server configuration
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or compatible package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pyrowsoftwares/pyrow.git
   cd pyrow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server:
```bash
npm run dev
```

The application will be accessible at:
- **Local**: [http://localhost:3000](http://localhost:3000)
- **Network**: `http://<your-ip>:3000`

---

## 📦 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Starts local development server on port 3000 with HMR. |
| `build` | `npm run build` | Compiles TypeScript and builds production bundles into `dist/`. |
| `preview` | `npm run preview` | Locally previews the production build. |
| `postinstall` | `node scripts/patch-rollup.js` | Automatically patches Rollup native bindings with `@rollup/wasm-node`. |

---

## ✨ Features & Highlights

- **Dynamic Theme System**: Seamless toggle between light mode and dark obsidian mode with persistent user preference.
- **Interactive Calculators**:
  - **ROI Calculator**: Real-time projection of returns and time-to-value for bespoke software.
  - **Project Estimator**: Custom project scoping and timeline breakdown.
- **Tech Radar**: Interactive radar showing adopted, trial, and assess-phase technologies.
- **Command Palette**: Quick navigation and search accessible via `Ctrl + K` or `Cmd + K`.
- **Audio & Visual FX**: Interactive particle canvas and tactile sound effects.

---

## 📄 License

Private & proprietary — Pyrow Software Agency.
