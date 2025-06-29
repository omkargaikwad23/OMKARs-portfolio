import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    /* Starry Luxury Theme - Dark & Elegant */
    --primary-bg: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
    --secondary-bg: rgba(30, 41, 59, 0.8);         /* Dark translucent for cards */
    --accent-color: #4fc3f7;                       /* Stellar blue accent */
    --accent-hover: #29b6f6;                       /* Brighter stellar blue */
    --text-primary: #f8fafc;                       /* Bright white for primary text */
    --text-secondary: #e1f5fe;                     /* Light blue-white for secondary */
    --text-light: #b3e5fc;                         /* Soft blue-white for subtle text */
    --border-color: rgba(79, 195, 247, 0.2);       /* Stellar blue border */
    --border-hover: rgba(79, 195, 247, 0.4);       /* Brighter border on hover */
    --success-color: #4fc3f7;                      /* Stellar blue for success */
    --warning-color: #ffd700;                      /* Gold for luxury accents */
    --luxury-gold: #ffd700;                        /* Pure gold for premium elements */
    --constellation-blue: #4fc3f7;                 /* Constellation blue */
    --nebula-purple: rgba(139, 69, 19, 0.3);       /* Nebula effect */
    --gradient-primary: linear-gradient(135deg, #4fc3f7 0%, #29b6f6 50%, #1976d2 100%);
    --gradient-accent: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
    --gradient-luxury: linear-gradient(135deg, #ffd700 0%, #ffecb3 50%, #fff3e0 100%);
    --gradient-starfield: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 30%, #16213e 60%, #0f172a 100%);
    --shadow-sm: 0 2px 8px rgba(79, 195, 247, 0.1);
    --shadow-md: 0 8px 25px rgba(79, 195, 247, 0.15);
    --shadow-lg: 0 15px 35px rgba(79, 195, 247, 0.2);
    --shadow-xl: 0 25px 50px rgba(79, 195, 247, 0.25);
    --shadow-luxury: 0 15px 35px rgba(255, 215, 0, 0.3);
    --glow-stellar: 0 0 20px rgba(79, 195, 247, 0.6);
    --glow-luxury: 0 0 25px rgba(255, 215, 0, 0.5);
    
    /* Glass effects for modern look */
    --glass-bg: rgba(248, 250, 252, 0.05);
    --glass-border: rgba(248, 250, 252, 0.1);
    --glass-backdrop: blur(20px);
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
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), #8b5cf6);
    transform: scaleX(var(--scroll-progress));
    transform-origin: left;
    z-index: 1000;
    opacity: 0.8;
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

  /* Enhanced hover effects with scroll momentum */
  .card, .project-item, .experience-card {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .card:hover, .project-item:hover, .experience-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;
export default GlobalStyles;
