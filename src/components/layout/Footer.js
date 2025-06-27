import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-top: 1px solid var(--border-color);
  padding: 4rem 0 2rem 0;
  margin-top: 4rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    padding: 0 2rem;
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
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .footer__tagline {
    font-size: 1.5rem;
    line-height: 1.6;
    color: var(--text-secondary);
    max-width: 40ch;
    margin: 0;
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
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.6rem;
    font-weight: 500;

    &:hover {
      background: var(--accent-color);
      border-color: var(--accent-color);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  .footer__section {
    h3 {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0 0 1.5rem 0;
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
      transition: color 0.3s ease;

      &:hover {
        color: var(--accent-color);
      }
    }
  }

  .footer__divider {
    height: 1px;
    background: var(--border-color);
    margin: 3rem 0 2rem 0;
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
  }

  .back-to-top {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.2rem;
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    color: var(--text-secondary);
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: var(--accent-color);
      color: var(--accent-color);
      background: rgba(37, 99, 235, 0.05);
    }

    .arrow {
      font-size: 1.4rem;
      font-weight: bold;
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Clear URL hash when going to top
    window.history.replaceState(null, null, window.location.pathname);
  };

  const scrollToSection = (sectionId, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      // Update URL hash without triggering page jump
      window.history.replaceState(null, null, `#${sectionId}`);
    }
  };

  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <h2 className="footer__logo">Omkar Gaikwad</h2>
            <p className="footer__tagline">
              Full Stack Developer passionate about creating innovative solutions 
              and building meaningful digital experiences.
            </p>
            
            <div className="footer__social">
              <a 
                href="https://www.linkedin.com/in/omkargaikwad23/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                LI
              </a>
              <a 
                href="https://github.com/omkargaikwad23" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="GitHub Profile"
              >
                GH
              </a>
              <a 
                href="mailto:omkargaikwad9552@gmail.com" 
                className="social-link"
                aria-label="Email Contact"
              >
                @
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home" onClick={(e) => scrollToSection('home', e)}>Home</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection('about', e)}>About</a></li>
              <li><a href="#experience" onClick={(e) => scrollToSection('experience', e)}>Experience</a></li>
              <li><a href="#projects" onClick={(e) => scrollToSection('projects', e)}>Projects</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection('contact', e)}>Contact</a></li>
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
                <a href="tel:+919579714193">
                  +91 95797 14193
                </a>
              </li>
              <li>
                <span style={{color: 'var(--text-secondary)', fontSize: '1.4rem'}}>
                  Pune, India
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
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span className="arrow">↑</span>
            Back to top
          </button>
        </div>
      </div>
    </FooterStyle>
  );
}
