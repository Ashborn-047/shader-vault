# Shader Vault

A curated React library of high-fidelity generative shaders featuring WebGL, Three.js, and Canvas 2D effects. Includes profile cards with animated backgrounds, a premium landing page, and individual experiment routes.

## Features

- **11 Unique Shaders**: Neural Ripple, Dot Screen, Meteor Shower, Aurora, Flickering Grid, Spiral Singularity, Dotted Surface, Vortex Particles, Silk Animation, Raining Letters, and Vortex Profiles.
- **Premium Landing Page**: A beautiful grid-based showcase with hover effects and experiment navigation.
- **Profile Cards**: Each shader integrates with a styled profile card component.
- **Inline Styles**: Zero CSS dependencies for maximum portability.

## Tech Stack

- **React 18** + TypeScript
- **Vite** for blazing fast development
- **Three.js** for WebGL shaders
- **Canvas 2D** for generative textures
- **GSAP** for advanced animations

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── src/
│   ├── LandingPage.tsx      # Main landing page
│   ├── App.tsx              # App entry point
│   └── entry-card*.tsx      # Individual shader entries
├── Shader 1-11/
│   ├── shader.tsx           # Fullscreen shader component
│   ├── card.tsx             # Profile card with shader background
│   └── card.html            # HTML entry for experiments
└── index.html               # Main entry point
```

## License

MIT
