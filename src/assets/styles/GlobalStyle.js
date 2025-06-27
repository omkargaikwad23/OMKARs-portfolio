import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    /* Modern Professional Color Palette */
    --primary-bg: #FAFAFA;           /* Clean white background */
    --secondary-bg: #FFFFFF;         /* Pure white for cards */
    --accent-color: #2563EB;         /* Modern blue accent */
    --accent-hover: #1D4ED8;         /* Darker blue for hover states */
    --text-primary: #111827;         /* Dark gray for primary text */
    --text-secondary: #6B7280;       /* Medium gray for secondary text */
    --text-light: #9CA3AF;           /* Light gray for subtle text */
    --border-color: #E5E7EB;         /* Light border color */
    --border-hover: #D1D5DB;         /* Darker border on hover */
    --success-color: #10B981;        /* Green for success states */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-accent: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* Dark mode support */
    --dark-bg: #0F172A;
    --dark-secondary: #1E293B;
    --dark-text: #F8FAFC;
    --dark-text-secondary: #CBD5E1;
  }

  html{
    font-size: 10px;
    font-family: 'Inter', 'Roboto Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    background-color: var(--primary-bg);
    scroll-behavior: smooth;
  }

  body {
    line-height: 1.6;
    color: var(--text-primary);
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
`;
export default GlobalStyles;
