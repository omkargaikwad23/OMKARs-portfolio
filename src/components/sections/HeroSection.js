import React, { useEffect, useRef } from "react";
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
    position: relative;
    overflow: hidden;
    
    .animated-text {
      position: relative;
      display: inline-block;
      
      .letter {
        display: inline-block;
        opacity: 0;
        transform: translateY(100px) rotateX(90deg) scale(0.8);
        animation: letterReveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        transform-origin: center bottom;
        position: relative;
        
        &::before {
          content: attr(data-letter);
          position: absolute;
          top: 0;
          left: 0;
          color: transparent;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd);
          background-size: 600% 600%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: holographicShift 3s ease-in-out infinite;
          z-index: 2;
        }
        
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
          opacity: 0;
          animation: letterGlow 2s ease-in-out infinite;
          animation-delay: calc(var(--letter-index) * 0.1s);
        }
      }
      
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200%;
        height: 200%;
        background: conic-gradient(from 0deg, transparent, rgba(74, 144, 226, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent);
        transform: translate(-50%, -50%) rotate(0deg);
        animation: auroraRotate 8s linear infinite;
        pointer-events: none;
        z-index: -1;
      }
    }
    
    .gradient-text {
      background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;
      
      &::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #ffeaa7);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: prismaticFlow 4s ease-in-out infinite;
        z-index: 2;
      }
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        transform: translateX(-100%);
        animation: shimmer 2.5s infinite;
      }
    }
    
    .particle-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      
      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, #4ecdc4, #45b7d1);
        border-radius: 50%;
        opacity: 0;
        animation: particleFloat 3s ease-in-out infinite;
      }
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

  @keyframes letterReveal {
    0% {
      opacity: 0;
      transform: translateY(100px) rotateX(90deg) scale(0.8);
      filter: blur(5px);
    }
    50% {
      opacity: 0.7;
      transform: translateY(-10px) rotateX(0deg) scale(1.1);
      filter: blur(2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0) rotateX(0deg) scale(1);
      filter: blur(0px);
    }
  }

  @keyframes holographicShift {
    0%, 100% {
      background-position: 0% 50%;
      filter: hue-rotate(0deg) brightness(1.2);
    }
    25% {
      background-position: 100% 50%;
      filter: hue-rotate(90deg) brightness(1.5);
    }
    50% {
      background-position: 100% 100%;
      filter: hue-rotate(180deg) brightness(1.1);
    }
    75% {
      background-position: 0% 100%;
      filter: hue-rotate(270deg) brightness(1.4);
    }
  }

  @keyframes letterGlow {
    0%, 100% {
      opacity: 0;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.2);
    }
  }

  @keyframes auroraRotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
      opacity: 0.3;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
      opacity: 0.3;
    }
  }

  @keyframes prismaticFlow {
    0%, 100% {
      background-position: 0% 50%;
      opacity: 0.8;
    }
    25% {
      background-position: 100% 50%;
      opacity: 1;
    }
    50% {
      background-position: 100% 100%;
      opacity: 0.9;
    }
    75% {
      background-position: 0% 100%;
      opacity: 1;
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  @keyframes particleFloat {
    0% {
      opacity: 0;
      transform: translateY(0) translateX(0) rotate(0deg);
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(-100px) translateX(var(--particle-x)) rotate(360deg);
    }
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
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    // Split text into letters for animation
    const text = "Hi, I'm ";
    const nameText = "Omkar";
    
    const createAnimatedText = (textContent, className = '') => {
      return textContent.split('').map((char, index) => {
        const span = document.createElement('span');
        span.className = `letter ${className}`;
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.setAttribute('data-letter', char === ' ' ? '\u00A0' : char);
        span.style.setProperty('--letter-index', index);
        span.style.animationDelay = `${index * 0.1}s`;
        return span;
      });
    };

    // Clear existing content
    title.innerHTML = '';

    // Create animated text container
    const animatedContainer = document.createElement('div');
    animatedContainer.className = 'animated-text';

    // Add letters for "Hi, I'm "
    const textLetters = createAnimatedText(text);
    textLetters.forEach(letter => animatedContainer.appendChild(letter));

    // Create gradient text for "Omkar"
    const gradientSpan = document.createElement('span');
    gradientSpan.className = 'gradient-text';
    gradientSpan.setAttribute('data-text', nameText);
    gradientSpan.textContent = nameText;

    animatedContainer.appendChild(gradientSpan);

    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';

    // Generate particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.setProperty('--particle-x', `${(Math.random() - 0.5) * 200}px`);
      particle.style.animationDelay = `${Math.random() * 3}s`;
      particleContainer.appendChild(particle);
    }

    title.appendChild(animatedContainer);
    title.appendChild(particleContainer);

  }, []);

  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__content" data-aos="fade-up" data-aos-delay="200">
          <div className="hero__badge">
            <div className="badge-dot"></div>
            <span>Available for work</span>
          </div>
          
          <h1 className="hero__title parallax-slow" ref={titleRef}>
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
              <div className="stat-number">1000+</div>
              <div className="stat-label">DSA Problems Solved</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Built</div>
            </div>
          </div>

          <div className="hero__actions">
            <Button btnText="View Projects" btnLink="/projects" size="large" floating />
            <Button btnText="Get In Touch" btnLink="/contact" outline size="large" />
          </div>
        </div>

        <div className="hero__image parallax-medium" data-aos="fade-left" data-aos-delay="400">
          <div className="image-wrapper">
            <img src={AboutImg} alt="Omkar Gaikwad - Software Engineer" />
          </div>
          <div className="floating-elements parallax-fast">
            <div className="floating-icon">⚡</div>
            <div className="floating-icon">🚀</div>
            <div className="floating-icon">💡</div>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}
