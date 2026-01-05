import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    /* Professional Dark Theme - Clean & Understated */
    --primary-bg: #0a0a0a;                         /* Pure dark */
    --secondary-bg: rgba(24, 24, 27, 0.95);        /* Dark card backgrounds */
    --accent-color: #3b82f6;                       /* Professional blue */
    --accent-hover: #2563eb;                       /* Deeper blue on hover */
    --text-primary: #fafafa;                       /* Clean white */
    --text-secondary: #a1a1aa;                     /* Muted gray */
    --text-light: #71717a;                         /* Subtle gray */
    --border-color: rgba(63, 63, 70, 0.5);         /* Neutral border */
    --border-hover: rgba(82, 82, 91, 0.8);         /* Slightly brighter border */
    --success-color: #22c55e;                      /* Clean green */
    --warning-color: #a1a1aa;                      /* Muted (was gold) */
    --luxury-gold: #a1a1aa;                        /* Removed gold - now gray */
    --constellation-blue: #3b82f6;                 /* Professional blue */
    --nebula-purple: rgba(139, 92, 246, 0.1);      /* Subtle purple */
    --gradient-primary: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    --gradient-accent: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    --gradient-luxury: linear-gradient(135deg, #fafafa 0%, #e4e4e7 100%);
    --gradient-starfield: #0a0a0a;
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
    --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.6);
    --shadow-luxury: 0 8px 24px rgba(0, 0, 0, 0.4);
    --glow-stellar: none;                          /* Removed glow */
    --glow-luxury: none;                           /* Removed glow */
    
    /* Glass effects - more subtle */
    --glass-bg: rgba(24, 24, 27, 0.8);
    --glass-border: rgba(63, 63, 70, 0.5);
    --glass-backdrop: blur(16px);
  }

  html{
    font-size: 10px;
    font-family: 'Inter', 'Roboto Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    background: var(--primary-bg);
    /* Remove scroll-behavior to let Lenis handle it */
    /* scroll-behavior: smooth; */
  }

  body {
    line-height: 1.6;
    color: var(--text-primary);
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background: var(--primary-bg);
    background-attachment: fixed;
    min-height: 100vh;
  }

  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
    font-family: inherit;
  }
  
  /* Modern Container System */
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .container-wide {
    max-width: 1400px;
    width: 95%;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .container-narrow {
    max-width: 800px;
    width: 90%;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Section Spacing */
  .section {
    padding: 8rem 0;
  }
  
  .section-small {
    padding: 4rem 0;
  }

  hr{
    border: 1px solid var(--border-color);
    border-radius: 1px;
  }

  /* Responsive Typography */
  @media only screen and (max-width: 768px) {
    html{
      font-size: 9px;
    }
    .container {
      width: 95%;
      padding: 0 1rem;
    }
    .section {
      padding: 4rem 0;
    }
  }

  @media only screen and (max-width: 480px) {
    html{
      font-size: 8px;
    }
    .container {
      width: 95%;
      padding: 0 1rem;
    }
  }

  /* Focus styles for accessibility */
  *:focus {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
  }

  /* Enhanced Selection Styles */
  ::selection {
    background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  ::-moz-selection {
    background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  /* Special selection styles for different content types */
  h1::selection, h2::selection, h3::selection, h4::selection, h5::selection, h6::selection {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  h1::-moz-selection, h2::-moz-selection, h3::-moz-selection, h4::-moz-selection, h5::-moz-selection, h6::-moz-selection {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  /* Code and monospace selection */
  code::selection, pre::selection, .code::selection {
    background: rgba(45, 212, 191, 0.3);
    color: var(--text-primary);
    backdrop-filter: blur(2px);
  }

  code::-moz-selection, pre::-moz-selection, .code::-moz-selection {
    background: rgba(45, 212, 191, 0.3);
    color: var(--text-primary);
  }

  /* Link selection */
  a::selection {
    background: linear-gradient(135deg, #f093fb, #f5576c);
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  a::-moz-selection {
    background: linear-gradient(135deg, #f093fb, #f5576c);
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  /* Button text selection */
  button::selection {
    background: rgba(255, 255, 255, 0.2);
    color: inherit;
  }

  button::-moz-selection {
    background: rgba(255, 255, 255, 0.2);
    color: inherit;
  }

  /* Animated selection highlight effect */
  @keyframes selectionGlow {
    0% { box-shadow: 0 0 0 rgba(37, 99, 235, 0.4); }
    50% { box-shadow: 0 0 8px rgba(37, 99, 235, 0.6); }
    100% { box-shadow: 0 0 0 rgba(37, 99, 235, 0.4); }
  }

  /* Special selection for important elements */
  .hero-title::selection, .section-title::selection {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    animation: selectionGlow 2s ease-in-out infinite;
  }

  .hero-title::-moz-selection, .section-title::-moz-selection {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  /* Subtle selection for navigation items */
  nav a::selection, .nav-link::selection {
    background: rgba(37, 99, 235, 0.15);
    color: var(--accent-color);
    backdrop-filter: blur(1px);
  }

  nav a::-moz-selection, .nav-link::-moz-selection {
    background: rgba(37, 99, 235, 0.15);
    color: var(--accent-color);
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--primary-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--border-hover);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--text-light);
  }

  /* Scroll Progress Indicator */
  .scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-color);
    transform: scaleX(var(--scroll-progress));
    transform-origin: left;
    z-index: 1000;
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }

  /* Enhanced scroll reveal animations */
  .scroll-reveal {
    will-change: transform, opacity;
  }

  .staggered-reveal {
    position: relative;
  }

  .staggered-item {
    will-change: transform, opacity;
  }

  /* Smooth scroll performance optimizations */
  * {
    scroll-behavior: auto; /* Let Lenis handle smooth scrolling */
  }

  /* Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    .scroll-reveal,
    .staggered-item {
      transition: none !important;
      animation: none !important;
    }
    
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Parallax effects */
  .parallax {
    will-change: transform;
  }

  .parallax-slow {
    transform: translateY(calc(var(--scroll-progress) * -20px));
  }

  .parallax-medium {
    transform: translateY(calc(var(--scroll-progress) * -40px));
  }

  .parallax-fast {
    transform: translateY(calc(var(--scroll-progress) * -60px));
  }

  /* Velocity-based effects */
  .velocity-blur {
    filter: blur(calc(var(--scroll-velocity) * 0.1px));
    transition: filter 0.3s ease-out;
  }

  /* Subtle hover effects */
  .card, .project-item, .experience-card {
    transition: all 0.2s ease;
  }

  .card:hover, .project-item:hover, .experience-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
`;
export default GlobalStyles;
