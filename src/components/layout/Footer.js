import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdArrowUpward } from "react-icons/md";
import { scrollToSection, scrollToTop } from '../../utils/smoothScroll';

const FooterStyle = styled.footer`
  background: var(--gradient-starfield);
  border-top: 1px solid var(--border-color);
  padding: 4rem 0 2rem 0;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(79, 195, 247, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
  }

  .footer__content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 3rem;
  }

  .footer__brand {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .footer__logo {
    font-family: 'Montserrat Bold', sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    letter-spacing: -0.02em;
    position: relative;
    
    &::after {
      content: '⭐';
      position: absolute;
      right: -3rem;
      top: 0;
      font-size: 1.6rem;
      color: var(--luxury-gold);
      animation: starPulse 3s ease-in-out infinite;
    }
  }

  .footer__tagline {
    font-size: 1.5rem;
    line-height: 1.6;
    color: var(--text-secondary);
    max-width: 40ch;
    margin: 0;
    text-shadow: 0 0 10px rgba(225, 245, 254, 0.2);
  }

  @keyframes starPulse {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }

  .footer__social {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.6rem;
    font-weight: 500;
    position: relative;
    overflow: hidden;

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-primary);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }

    &:hover {
      color: white;
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      border-color: var(--accent-color);
      
      &::before {
        opacity: 1;
      }
    }

    &.linkedin:hover {
      box-shadow: 0 8px 25px rgba(0, 119, 181, 0.4);
      
      &::before {
        background: linear-gradient(135deg, #0077b5, #005582);
      }
    }

    &.github:hover {
      box-shadow: 0 8px 25px rgba(51, 51, 51, 0.4);
      
      &::before {
        background: linear-gradient(135deg, #333, #1a1a1a);
      }
    }

    &.email:hover {
      box-shadow: 0 8px 25px rgba(234, 67, 53, 0.4);
      
      &::before {
        background: linear-gradient(135deg, #ea4335, #d23021);
      }
    }
  }

  .footer__section {
    h3 {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0 0 1.5rem 0;
      text-shadow: var(--glow-stellar);
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 0.8rem;
    }

    a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 1.4rem;
      transition: all 0.3s ease;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        background: var(--gradient-primary);
        transition: width 0.3s ease;
      }

      &:hover {
        color: var(--accent-color);
        text-shadow: 0 0 8px rgba(79, 195, 247, 0.4);
        
        &::after {
          width: 100%;
        }
      }
    }
  }

  .footer__divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-color), transparent);
    margin: 3rem 0 2rem 0;
    position: relative;
    
    &::after {
      content: '✨';
      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--gradient-starfield);
      padding: 0 1rem;
      color: var(--luxury-gold);
      font-size: 1rem;
    }
  }

  .footer__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .copyright {
    color: var(--text-light);
    font-size: 1.3rem;
    text-shadow: 0 0 8px rgba(179, 229, 252, 0.3);
  }

  .back-to-top {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.2rem;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    color: var(--text-secondary);
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-primary);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }

    &:hover {
      border-color: var(--accent-color);
      color: white;
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      
      &::before {
        opacity: 1;
      }
    }

    .arrow {
      width: 1.6rem;
      height: 1.6rem;
      transition: transform 0.3s ease;
    }
    
    &:hover .arrow {
      transform: translateY(-2px);
    }
  }

  @media only screen and (max-width: 968px) {
    .footer__content {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .footer__brand {
      grid-column: 1 / -1;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 3rem 0 2rem 0;
    margin-top: 3rem;

    .container {
      width: 95%;
      padding: 0 1rem;
    }

    .footer__content {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .footer__bottom {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.5rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .footer__social {
      justify-content: center;
    }

    .social-link {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 1.4rem;
    }
  }
`;

export default function Footer() {
  const handleScrollToTop = (event) => {
    scrollToTop();
    // Remove focus from the clicked element to clear focus outline
    if (event && event.target) event.target.blur();
  };

  const handleScrollToSection = (sectionId, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    scrollToSection(sectionId);
    // Remove focus from the clicked element to clear focus outline
    event.target.blur();
  };

  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <h2 className="footer__logo">Omkar Gaikwad</h2>
            <p className="footer__tagline">
              Turning ideas into reality through code and creativity.
            </p>
            
            <div className="footer__social">
              <a 
                href="https://www.linkedin.com/in/omkargaikwad23/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link linkedin"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/omkargaikwad23" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link github"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:omkargaikwad9552@gmail.com" 
                className="social-link email"
                aria-label="Email Contact"
              >
                <MdEmail />
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home" onClick={(e) => handleScrollToSection('home', e)}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleScrollToSection('about', e)}>About</a></li>
              <li><a href="#experience" onClick={(e) => handleScrollToSection('experience', e)}>Experience</a></li>
              <li><a href="#projects" onClick={(e) => handleScrollToSection('projects', e)}>Projects</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollToSection('contact', e)}>Contact</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3>Get In Touch</h3>
            <ul>
              <li>
                <a href="mailto:omkargaikwad9552@gmail.com">
                  omkargaikwad9552@gmail.com
                </a>
              </li>
              <li>
                <span style={{color: 'var(--text-secondary)', fontSize: '1.4rem'}}>
                  Pune, India • Available for Remote Work
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <div className="copyright">
            © 2022 - present Omkar Gaikwad. All rights reserved.
          </div>

          <button 
            className="back-to-top" 
            onClick={(e) => handleScrollToTop(e)}
            aria-label="Back to top"
          >
            <MdArrowUpward className="arrow" />
            Back to top
          </button>
        </div>
      </div>
    </FooterStyle>
  );
}
