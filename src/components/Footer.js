import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";
// import { BsInstagram, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const FooterStyle = styled.footer`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-top: 1px solid var(--border-color);
  padding: 6rem 0 3rem 0;
  margin-top: 8rem;

  .footer-main {
    padding-bottom: 4rem;
  }

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    padding: 0 2rem;
  }

  .footer__col1 {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .footer__brand {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer__logo {
    font-family: 'Montserrat Bold', sans-serif;
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .footer__tagline {
    font-size: 1.6rem;
    line-height: 1.6;
    color: var(--text-secondary);
    max-width: 35ch;
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
    border-radius: 10px;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.8rem;

    &:hover {
      background: var(--accent-color);
      border-color: var(--accent-color);
      color: white;
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
  }

  .footer__newsletter {
    margin-top: 2rem;
    padding: 2rem;
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
  }

  .newsletter__title {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.8rem 0;
  }

  .newsletter__subtitle {
    font-size: 1.4rem;
    color: var(--text-secondary);
    margin: 0 0 1.5rem 0;
  }

  .newsletter__form {
    display: flex;
    gap: 0.8rem;

    input {
      flex: 1;
      padding: 1rem 1.2rem;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      font-size: 1.4rem;
      background: var(--primary-bg);
      color: var(--text-primary);
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: var(--accent-color);
      }

      &::placeholder {
        color: var(--text-light);
      }
    }

    button {
      padding: 1rem 1.5rem;
      background: var(--accent-color);
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: var(--accent-hover);
        transform: translateY(-1px);
      }
    }
  }

  .footer__divider {
    height: 1px;
    background: var(--border-color);
    margin: 4rem 0 3rem 0;
  }

  .footer__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .copyright {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--text-light);
    font-size: 1.4rem;
  }

  .footer__legal {
    display: flex;
    gap: 2rem;
    
    a {
      color: var(--text-light);
      text-decoration: none;
      font-size: 1.4rem;
      transition: color 0.3s ease;

      &:hover {
        color: var(--accent-color);
      }
    }
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
    text-decoration: none;
    font-size: 1.3rem;
    transition: all 0.3s ease;

    &:hover {
      border-color: var(--accent-color);
      color: var(--accent-color);
      background: rgba(37, 99, 235, 0.05);
    }

    .arrow {
      transition: transform 0.3s ease;
    }

    &:hover .arrow {
      transform: translateY(-2px);
    }
  }

  @media only screen and (max-width: 968px) {
    .container {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .footer__col1 {
      grid-column: 1 / -1;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 2rem 0;
    margin-top: 6rem;

    .container {
      grid-template-columns: 1fr;
      gap: 3rem;
      width: 95%;
      padding: 0 1rem;
    }

    .footer__newsletter {
      .newsletter__form {
        flex-direction: column;

        button {
          align-self: flex-start;
        }
      }
    }

    .footer__bottom {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.5rem;
    }

    .footer__legal {
      justify-content: center;
    }
  }

  @media only screen and (max-width: 480px) {
    .footer__social {
      justify-content: center;
    }

    .footer__legal {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterStyle>
      <div className="footer-main">
        <div className="container">
          <div className="footer__col1">
            <div className="footer__brand">
              <h2 className="footer__logo">Omkar Gaikwad</h2>
              <p className="footer__tagline">
                Crafting digital solutions with precision, creativity, and cutting-edge technology. 
                Let's build something amazing together.
              </p>
            </div>

            <div className="footer__social">
              <a 
                href="https://www.linkedin.com/in/omkargaikwad23/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                💼
              </a>
              <a 
                href="https://github.com/omkargaikwad23" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="GitHub Profile"
              >
                🔗
              </a>
              <a 
                href="mailto:omkargaikwad9552@gmail.com" 
                className="social-link"
                aria-label="Email Contact"
              >
                ✉️
              </a>
              <a 
                href="tel:+919579714193" 
                className="social-link"
                aria-label="Phone Contact"
              >
                📞
              </a>
            </div>

            <div className="footer__newsletter">
              <h3 className="newsletter__title">Stay Connected</h3>
              <p className="newsletter__subtitle">
                Get updates on my latest projects and tech insights
              </p>
              <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  aria-label="Email for newsletter"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="footer__col2">
            <FooterCol
              heading="Navigation"
              links={[
                { title: 'Home', path: '/', type: 'Link' },
                { title: 'About', path: '/about', type: 'Link' },
                { title: 'Experience', path: '/experience', type: 'Link' },
                { title: 'Projects', path: '/projects', type: 'Link' },
                { title: 'Contact', path: '/contact', type: 'Link' },
              ]}
            />
          </div>

          <div className="footer__col3">
            <FooterCol
              heading="Contact"
              links={[
                { title: 'Email Me', path: 'mailto:omkargaikwad9552@gmail.com' },
                { title: 'Call Me', path: 'tel:+919579714193' },
                { title: 'Pune, India', path: '#' },
              ]}
            />
          </div>

          <div className="footer__col4">
            <FooterCol
              heading="Connect"
              links={[
                { title: 'LinkedIn', path: 'https://www.linkedin.com/in/omkargaikwad23/' },
                { title: 'GitHub', path: 'https://github.com/omkargaikwad23' },
                { title: 'Resume', path: '#' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="footer__divider"></div>

      <div className="container">
        <div className="footer__bottom">
          <div className="copyright">
            <span>© 2025 Omkar Gaikwad. All rights reserved.</span>
          </div>

          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
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
