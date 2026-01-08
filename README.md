# 🎨 Shader Vault

A curated React library of high-fidelity generative shaders featuring WebGL, Three.js, and Canvas 2D effects.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r169-000000?logo=three.js&logoColor=white)

---

## ✨ Features

- **11 Unique Shader Effects** — From particle systems to WebGL2 vortex simulations
- **Premium Landing Page** — Grid-based showcase with hover effects and experiment navigation
- **Profile Cards** — Each shader integrates with a styled profile card component
- **Inline Styles** — Zero CSS dependencies for maximum portability
- **GitHub Pages Ready** — Automated deployment via GitHub Actions

---

## 🖼️ Shader Collection

| # | Name | Technology | Description |
|---|------|------------|-------------|
| 01 | **Neural Ripple** | Three.js | Heatmap-style wave propagation shader |
| 02 | **Dot Screen** | Canvas 2D | Halftone pattern effect with dynamic sizing |
| 03 | **Meteor Shower** | Canvas 2D | Particle trails with velocity-based motion |
| 04 | **Aurora** | Canvas 2D | Organic gradient flow simulation |
| 05 | **Flickering Grid** | Canvas 2D | Randomized cell-based animation |
| 06 | **Spiral Singularity** | GSAP + Canvas | Spiral particle engine with easing |
| 07 | **Dotted Surface** | Three.js | Neural plane with sine wave particles |
| 08 | **Vortex Particles** | Canvas 2D | Simplex noise-driven particle flow |
| 09 | **Silk Animation** | Canvas 2D | Generative flowing silk texture |
| 10 | **Raining Letters** | DOM + CSS | Matrix-style falling character engine |
| 11 | **Vortex Profiles** | WebGL2 | Radial procedural simulation with presets |

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 with TypeScript |
| **Build Tool** | Vite 6 (ES modules, HMR) |
| **3D Graphics** | Three.js r169 |
| **Animations** | GSAP, Framer Motion |
| **Styling** | Inline CSS (zero dependencies) |
| **Deployment** | GitHub Pages via Actions |

---

## 📁 Project Structure

```
shader-vault/
├── src/
│   ├── LandingPage.tsx       # Main landing page
│   ├── App.tsx               # App entry point
│   ├── main.tsx              # React DOM render
│   └── entry-card*.tsx       # Individual shader entries
├── shaders/
│   ├── Shader 1/
│   │   ├── shader.tsx        # Fullscreen shader component
│   │   ├── card.tsx          # Profile card with shader BG
│   │   └── card.html         # HTML entry for experiments
│   ├── Shader 2/
│   │   └── ...
│   └── ... (through Shader 11)
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
├── index.html                # Main entry point
├── vite.config.ts            # Vite configuration
└── package.json
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Ashborn-047/shader-vault.git
cd shader-vault

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment

This project uses **GitHub Actions** for automatic deployment to GitHub Pages.

1. Push to `main` branch
2. Workflow builds the Vite project
3. Deploys to `https://ashborn-047.github.io/shader-vault/`

To enable manually:
- Go to **Settings → Pages → Source → GitHub Actions**

---

## 📜 License

MIT — Feel free to use, modify, and distribute.

---

<p align="center">
  <strong>Crafted with React, Three.js & Canvas</strong><br>
  <sub>© 2025 Shader Vault</sub>
</p>
