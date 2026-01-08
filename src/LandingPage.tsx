'use client';

import React, { useState } from 'react';

// --- SHADER DATA ---
const SHADERS = [
    { id: 1, name: 'Neural Ripple', desc: 'Three.js heatmap with wave propagation.', color: '#06b6d4' },
    { id: 2, name: 'Dot Screen', desc: 'Canvas 2D halftone pattern effect.', color: '#8b5cf6' },
    { id: 3, name: 'Meteor Shower', desc: 'Dynamic particle trails animation.', color: '#f97316' },
    { id: 4, name: 'Aurora', desc: 'Organic gradient flow simulation.', color: '#22c55e' },
    { id: 5, name: 'Flickering Grid', desc: 'Randomized cell-based animation.', color: '#eab308' },
    { id: 6, name: 'Spiral Singularity', desc: 'GSAP-powered spiral particle engine.', color: '#ec4899' },
    { id: 7, name: 'Dotted Surface', desc: 'Three.js neural plane with waves.', color: '#3b82f6' },
    { id: 8, name: 'Vortex Particles', desc: 'Simplex noise-driven particle flow.', color: '#14b8a6' },
    { id: 9, name: 'Silk Animation', desc: 'Generative flowing silk texture.', color: '#a855f7' },
    { id: 10, name: 'Raining Letters', desc: 'Matrix-style falling characters.', color: '#22c55e' },
    { id: 11, name: 'Vortex Profiles', desc: 'WebGL2 radial simulation engine.', color: '#f43f5e' },
];

// --- SHADER CARD ---
function ShaderCard({ shader }: { shader: typeof SHADERS[0] }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                backgroundColor: '#111',
                border: `1px solid ${isHovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)'}`,
                transition: 'all 0.4s ease',
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: isHovered ? `0 20px 40px -15px ${shader.color}40` : '0 4px 20px rgba(0,0,0,0.3)',
            }}
        >
            {/* Gradient Background */}
            <div style={{
                height: '180px',
                background: `linear-gradient(135deg, ${shader.color}20 0%, ${shader.color}05 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Shader Number */}
                <span style={{
                    fontSize: '6rem',
                    fontWeight: 900,
                    color: shader.color,
                    opacity: isHovered ? 0.3 : 0.15,
                    transition: 'opacity 0.4s ease',
                    fontFamily: 'monospace'
                }}>
                    {String(shader.id).padStart(2, '0')}
                </span>
                {/* Glow */}
                <div style={{
                    position: 'absolute',
                    bottom: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '150%',
                    height: '100%',
                    background: `radial-gradient(circle, ${shader.color}30 0%, transparent 70%)`,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                    pointerEvents: 'none'
                }} />
            </div>

            {/* Content */}
            <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'white',
                    margin: 0,
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.02em'
                }}>
                    {shader.name}
                </h3>
                <p style={{
                    fontSize: '0.875rem',
                    color: '#71717a',
                    margin: 0,
                    marginBottom: '1.25rem',
                    lineHeight: 1.5
                }}>
                    {shader.desc}
                </p>
                <a
                    href={`/Shader ${shader.id}/card.tsx`}
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/Shader ${shader.id}/card.html`;
                    }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.625rem 1.25rem',
                        backgroundColor: isHovered ? shader.color : 'rgba(255,255,255,0.05)',
                        color: isHovered ? 'black' : 'white',
                        borderRadius: '0.75rem',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: 'none'
                    }}
                >
                    <span>Experiment</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

// --- LANDING PAGE ---
export default function LandingPage() {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#050505',
            color: 'white',
            fontFamily: '"Inter", "Outfit", system-ui, sans-serif',
            overflowX: 'hidden'
        }}>
            {/* Google Fonts */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Outfit:wght@100;300;400;700;900&display=swap');
                body { margin: 0; padding: 0; }
                * { box-sizing: border-box; }
            `}} />

            {/* HERO */}
            <header style={{
                minHeight: '70vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '4rem 2rem',
                position: 'relative',
                background: 'radial-gradient(ellipse at 50% 0%, rgba(120, 0, 255, 0.08) 0%, transparent 60%)'
            }}>
                {/* Nav */}
                <nav style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem 3rem'
                }}>
                    <span style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        letterSpacing: '-0.05em',
                        background: 'linear-gradient(to right, #fff, #888)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        VAULT.V2
                    </span>
                    <span style={{ color: '#555', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                        SHADER LIBRARY
                    </span>
                </nav>

                {/* Hero Content */}
                <h1 style={{
                    fontSize: 'clamp(3rem, 12vw, 9rem)',
                    fontWeight: 100,
                    letterSpacing: '-0.04em',
                    lineHeight: 0.9,
                    margin: 0,
                    marginBottom: '1.5rem'
                }}>
                    The Shader<br />
                    <span style={{ fontWeight: 900, fontStyle: 'italic' }}>Vault</span>
                </h1>
                <p style={{
                    fontSize: '1.125rem',
                    color: '#71717a',
                    maxWidth: '500px',
                    lineHeight: 1.6,
                    margin: 0
                }}>
                    A curated library of high-performance generative textures, WebGL interfaces, and Canvas experiments.
                </p>

                {/* Scroll Indicator */}
                <div style={{ marginTop: '4rem', opacity: 0.4 }}>
                    <svg width="20" height="40" viewBox="0 0 20 40">
                        <path d="M10 0V38M10 38L2 30M10 38L18 30" stroke="white" strokeWidth="1" fill="none" />
                    </svg>
                </div>
            </header>

            {/* GRID SECTION */}
            <main style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <span style={{
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: '#555'
                    }}>
                        Collection
                    </span>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        margin: 0,
                        marginTop: '0.5rem',
                        letterSpacing: '-0.03em'
                    }}>
                        11 Experiments
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {SHADERS.map(shader => (
                        <ShaderCard key={shader.id} shader={shader} />
                    ))}
                </div>
            </main>

            {/* FOOTER */}
            <footer style={{
                padding: '4rem 2rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                textAlign: 'center'
            }}>
                <p style={{ color: '#555', fontSize: '0.875rem', margin: 0 }}>
                    Crafted with React, Three.js & Canvas
                </p>
                <p style={{ color: '#333', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                    © 2025 VAULT EXPERIMENTAL
                </p>
            </footer>
        </div>
    );
}
