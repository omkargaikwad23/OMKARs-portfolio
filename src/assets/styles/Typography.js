import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../fonts/Montserrat-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
    font-display: swap;
  }
  
  html{
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    color: var(--text-primary);
  }
  
  *{
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    color: var(--text-primary);
  }
  
  /* Modern Typography Scale */
  h1 {
    font-family: 'Montserrat Bold', sans-serif;
    font-size: clamp(3.2rem, 5vw, 6.4rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-family: 'Montserrat SemiBold', sans-serif;
    font-size: clamp(2.4rem, 4vw, 4.8rem);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: var(--text-primary);
    margin-bottom: 1.2rem;
  }
  
  h3 {
    font-family: 'Montserrat SemiBold', sans-serif;
    font-size: clamp(2rem, 3vw, 3.2rem);
    font-weight: 600;
    line-height: 1.3;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  h4 {
    font-family: 'Montserrat SemiBold', sans-serif;
    font-size: clamp(1.8rem, 2.5vw, 2.4rem);
    font-weight: 600;
    line-height: 1.4;
    color: var(--text-primary);
    margin-bottom: 0.8rem;
  }
  
  h5 {
    font-family: 'Montserrat SemiBold', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.4;
    color: var(--text-primary);
    margin-bottom: 0.6rem;
  }
  
  h6 {
    font-family: 'Montserrat SemiBold', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.5;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  
  p {
    font-size: 1.8rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-weight: 400;
  }
  
  .text-large {
    font-size: 2.2rem;
    line-height: 1.6;
    color: var(--text-primary);
  }
  
  .text-small {
    font-size: 1.4rem;
    line-height: 1.6;
    color: var(--text-light);
  }
  
  .text-mono {
    font-family: 'RobotoMono Regular', 'Fira Code', 'Consolas', monospace;
    font-size: 1.6rem;
    line-height: 1.6;
  }
  
  .text-gradient {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .text-accent {
    color: var(--accent-color);
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-left {
    text-align: left;
  }
  
  .text-right {
    text-align: right;
  }
  
  /* Responsive Typography */
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.6rem;
      line-height: 1.8;
    }
    
    .text-large {
      font-size: 2rem;
    }
    
    .text-small {
      font-size: 1.3rem;
    }
  }
  
  @media only screen and (max-width: 480px) {
    p {
      font-size: 1.5rem;
    }
    
    .text-large {
      font-size: 1.8rem;
    }
  }
`;

export default Typography;
