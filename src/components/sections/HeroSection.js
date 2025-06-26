import React from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import AboutImg from "../../assets/images/ogstanding.jpg";

const HeroSectionStyles = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 12rem 0 8rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    opacity: 0.5;
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
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
    gap: 2rem;
  }

  .hero__badge {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.6rem;
    background: rgba(37, 99, 235, 0.1);
    border: 1px solid rgba(37, 99, 235, 0.2);
    border-radius: 50px;
    width: fit-content;
    margin-bottom: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(37, 99, 235, 0.15);
      transform: translateY(-2px);
    }

    .badge-dot {
      width: 8px;
      height: 8px;
      background: var(--success-color);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    span {
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--accent-color);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .hero__title {
    font-size: clamp(4rem, 6vw, 7.2rem);
    font-weight: 700;
    line-height: 1.1;
    color: var(--text-primary);
    margin: 0;
    
    .gradient-text {
      background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .hero__subtitle {
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 1rem 0 1.5rem 0;
    line-height: 1.4;
  }

  .hero__description {
    font-size: 1.8rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    max-width: 50ch;
  }

  .hero__stats {
    display: flex;
    gap: 3rem;
    margin: 2rem 0 3rem 0;
    flex-wrap: wrap;

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      
      .stat-number {
        font-size: 2.8rem;
        font-weight: 700;
        color: var(--accent-color);
        line-height: 1;
        margin-bottom: 0.5rem;
      }
      
      .stat-label {
        font-size: 1.4rem;
        color: var(--text-light);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 500;
      }
    }
  }

  .hero__actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
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
    max-width: 400px;
    aspect-ratio: 2/3;
    border-radius: 20px;
    overflow: hidden;
    background: var(--secondary-bg);
    box-shadow: var(--shadow-xl);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-xl), 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(139, 92, 246, 0.1));
      z-index: 1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover::before {
      opacity: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .floating-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;

    .floating-icon {
      position: absolute;
      width: 60px;
      height: 60px;
      background: var(--secondary-bg);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-md);
      animation: float 6s ease-in-out infinite;

      &:nth-child(1) {
        top: 20%;
        right: 10%;
        animation-delay: 0s;
      }

      &:nth-child(2) {
        top: 60%;
        right: 5%;
        animation-delay: 2s;
      }

      &:nth-child(3) {
        bottom: 20%;
        right: 15%;
        animation-delay: 4s;
      }
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @media only screen and (max-width: 968px) {
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

    .hero__stats {
      justify-content: center;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0 6rem 0;
    min-height: auto;

    .container {
      gap: 3rem;
      width: 95%;
      padding: 0 1rem;
    }

    .hero__title {
      font-size: clamp(3.2rem, 8vw, 5.6rem);
    }

    .hero__subtitle {
      font-size: 2rem;
    }

    .hero__description {
      font-size: 1.6rem;
      text-align: center;
    }

    .hero__stats {
      gap: 2rem;
      margin: 2rem 0;
    }

    .hero__actions {
      justify-content: center;
      width: 100%;
    }

    .image-wrapper {
      max-width: 300px;
    }

    .floating-elements {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) {
    .hero__actions {
      flex-direction: column;
      width: 100%;
    }

    .hero__stats {
      gap: 1.5rem;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__content" data-aos="fade-up" data-aos-delay="200">
          <div className="hero__badge">
            <div className="badge-dot"></div>
            <span>Available for work</span>
          </div>
          
          <h1 className="hero__title">
            Hi, I'm <span className="gradient-text">Omkar</span>
          </h1>
          
          <h2 className="hero__subtitle">
            Software Engineer & Problem Solver
          </h2>
          
          <p className="hero__description">
            I build scalable software solutions using modern technologies, with expertise in 
            big data processing, GenAI systems, and full-stack development. Passionate about 
            solving complex engineering challenges.
          </p>

          <div className="hero__stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">750+</div>
              <div className="stat-label">Problems Solved</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Built</div>
            </div>
          </div>

          <div className="hero__actions">
            <Button btnText="View Projects" btnLink="/projects" />
            <Button btnText="Get In Touch" btnLink="/contact" outline />
          </div>
        </div>

        <div className="hero__image" data-aos="fade-left" data-aos-delay="400">
          <div className="image-wrapper">
            <img src={AboutImg} alt="Omkar Gaikwad - Software Engineer" />
          </div>
          <div className="floating-elements">
            <div className="floating-icon">⚡</div>
            <div className="floating-icon">🚀</div>
            <div className="floating-icon">💡</div>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}
