import React from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";
import AboutImg from "../../assets/images/ogstanding.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdArrowDownward } from "react-icons/md";

const HeroSectionStyles = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 10rem 0 6rem 0;
  background: #0a0a0f;
  position: relative;
  overflow: hidden;

  /* Subtle gradient mesh background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse 80% 50% at 20% -20%, rgba(79, 195, 247, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse 60% 40% at 80% 100%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  /* Subtle grid pattern */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    opacity: 0.5;
  }

  .container {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 6rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    padding: 0 2rem;
  }

  .hero__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }

  .hero__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    
    .status-indicator {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.6rem 1.2rem;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.25);
      border-radius: 100px;
      
      .dot {
        width: 6px;
        height: 6px;
        background: #10b981;
        border-radius: 50%;
        animation: subtlePulse 2.5s ease-in-out infinite;
      }
      
      span {
        font-size: 1.2rem;
        font-weight: 500;
        color: #10b981;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
    }
  }

  .hero__title {
    font-size: clamp(4.2rem, 5.5vw, 6.4rem);
    font-weight: 700;
    line-height: 1.08;
    color: #f8fafc;
    margin: 0;
    letter-spacing: -0.03em;
    
    .name {
      display: block;
      background: linear-gradient(135deg, #4fc3f7 0%, #818cf8 50%, #c084fc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .hero__role {
    font-size: clamp(1.8rem, 2.2vw, 2.4rem);
    font-weight: 500;
    color: #94a3b8;
    margin: 0.5rem 0 0 0;
    letter-spacing: -0.01em;
    
    .highlight {
      color: #e2e8f0;
      font-weight: 600;
    }
  }

  .hero__description {
    font-size: 1.7rem;
    line-height: 1.7;
    color: #94a3b8;
    margin: 1rem 0 0 0;
    max-width: 52ch;
    
    strong {
      color: #e2e8f0;
      font-weight: 500;
    }
  }

  .hero__metrics {
    display: flex;
    gap: 3rem;
    margin: 2rem 0;
    padding: 2rem 0;
    border-top: 1px solid rgba(148, 163, 184, 0.1);
    border-bottom: 1px solid rgba(148, 163, 184, 0.1);

    .metric {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      
      .metric__value {
        font-size: 2.8rem;
        font-weight: 700;
        color: #f8fafc;
        line-height: 1;
        letter-spacing: -0.02em;
        
        .unit {
          font-size: 1.6rem;
          color: #64748b;
          font-weight: 500;
        }
      }
      
      .metric__label {
        font-size: 1.3rem;
        color: #64748b;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
    }
  }

  .hero__actions {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-top: 0.5rem;
  }

  .hero__social {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-left: 1.5rem;
    padding-left: 1.5rem;
    border-left: 1px solid rgba(148, 163, 184, 0.2);
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(148, 163, 184, 0.15);
      border-radius: 10px;
      color: #94a3b8;
      transition: all 0.2s ease;
      
      svg {
        width: 1.8rem;
        height: 1.8rem;
      }
      
      &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(148, 163, 184, 0.3);
        color: #f8fafc;
        transform: translateY(-2px);
      }
    }
  }

  .hero__image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    max-width: 380px;
    
    &::before {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      background: linear-gradient(135deg, #4fc3f7 0%, #818cf8 50%, #c084fc 100%);
      border-radius: 24px;
      opacity: 0.6;
      z-index: -1;
      filter: blur(0px);
      transition: all 0.4s ease;
    }
    
    &:hover::before {
      opacity: 0.8;
      filter: blur(8px);
      transform: scale(1.02);
    }
    
    .image-container {
      position: relative;
      width: 100%;
      aspect-ratio: 3/4;
      border-radius: 20px;
      overflow: hidden;
      background: #1e293b;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
      }
      
      &:hover img {
        transform: scale(1.03);
      }
    }
    
    /* Floating badge */
    .experience-badge {
      position: absolute;
      bottom: -1.5rem;
      right: -1.5rem;
      padding: 1.2rem 1.8rem;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 14px;
      display: flex;
      align-items: center;
      gap: 1rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      
      .badge-icon {
        width: 3.6rem;
        height: 3.6rem;
        background: linear-gradient(135deg, #4fc3f7, #818cf8);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
      }
      
      .badge-content {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        
        .badge-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: #f8fafc;
          line-height: 1;
        }
        
        .badge-label {
          font-size: 1.1rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      }
    }
  }

  .scroll-indicator {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    color: #475569;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    animation: floatDown 2s ease-in-out infinite;
    cursor: pointer;
    transition: color 0.2s ease;
    
    &:hover {
      color: #94a3b8;
    }
    
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @keyframes subtlePulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  @keyframes floatDown {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(8px); }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      grid-template-columns: 1fr;
      gap: 4rem;
      text-align: center;
    }

    .hero__content {
      order: 2;
      align-items: center;
    }

    .hero__image {
      order: 1;
    }

    .hero__description {
      max-width: 60ch;
    }

    .hero__metrics {
      justify-content: center;
    }

    .hero__actions {
      justify-content: center;
      flex-wrap: wrap;
    }

    .hero__social {
      margin-left: 0;
      padding-left: 0;
      border-left: none;
      margin-top: 1rem;
      width: 100%;
      justify-content: center;
    }

    .image-wrapper {
      max-width: 320px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 8rem 0 5rem 0;
    min-height: auto;

    .container {
      gap: 3rem;
      width: 95%;
      padding: 0 1rem;
    }

    .hero__title {
      font-size: clamp(3.4rem, 10vw, 4.8rem);
    }

    .hero__role {
      font-size: 1.8rem;
    }

    .hero__description {
      font-size: 1.5rem;
    }

    .hero__metrics {
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .hero__metrics .metric .metric__value {
      font-size: 2.4rem;
    }

    .image-wrapper {
      max-width: 280px;
      
      .experience-badge {
        right: -0.5rem;
        bottom: -1rem;
        padding: 1rem 1.4rem;
        
        .badge-icon {
          width: 3rem;
          height: 3rem;
        }
        
        .badge-value {
          font-size: 1.6rem;
        }
      }
    }

    .scroll-indicator {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) {
    .hero__actions {
      flex-direction: column;
      width: 100%;
    }

    .hero__metrics {
      gap: 1.5rem;
    }

    .hero__metrics .metric {
      min-width: 80px;
    }
  }
`;

export default function HeroSection() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSectionStyles>
      <div className="container">
        <ScrollReveal animation="fadeUp" delay={100} className="hero__content">
          <div className="hero__eyebrow">
            <div className="status-indicator">
              <div className="dot"></div>
              <span>Open to interesting work</span>
            </div>
          </div>
          
          <h1 className="hero__title">
            Hi, I'm
            <span className="name">Omkar Gaikwad</span>
          </h1>
          
          <p className="hero__role">
            <span className="highlight">Software Engineer</span> specializing in GenAI & Distributed Systems
          </p>
          
          <p className="hero__description">
            Building <strong>production-grade AI systems</strong> and <strong>scalable data pipelines</strong> at PubMatic. 
            Passionate about solving complex engineering challenges with modern technologies.
          </p>

          <div className="hero__metrics">
            <div className="metric">
              <div className="metric__value">2.5<span className="unit">+</span></div>
              <div className="metric__label">Years Experience</div>
            </div>
            <div className="metric">
              <div className="metric__value">12<span className="unit">TB</span></div>
              <div className="metric__label">Data Processed/Day</div>
            </div>
            <div className="metric">
              <div className="metric__value">1100<span className="unit">+</span></div>
              <div className="metric__label">DSA Problems</div>
            </div>
          </div>

          <div className="hero__actions">
            <Button btnText="View My Work" btnLink="#projects" size="large" />
            <Button btnText="Get In Touch" btnLink="#contact" outline size="large" />
            
            <div className="hero__social">
              <a 
                href="https://www.linkedin.com/in/omkargaikwad23/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/omkargaikwad23" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:omkargaikwad9552@gmail.com" 
                className="social-link"
                aria-label="Email"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={300} className="hero__image">
          <div className="image-wrapper">
            <div className="image-container">
              <img src={AboutImg} alt="Omkar Gaikwad - Software Engineer" />
            </div>
            <div className="experience-badge">
              <div className="badge-icon">🏆</div>
              <div className="badge-content">
                <span className="badge-value">Top 5%</span>
                <span className="badge-label">LeetCode</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="scroll-indicator" onClick={handleScrollToAbout}>
        <span>Scroll</span>
        <MdArrowDownward />
      </div>
    </HeroSectionStyles>
  );
}
