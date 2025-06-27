import React from "react";
import styled from "styled-components";
import SectionTitle from "../ui/SectionTitle";
import ContactSection from "./ContactSection";
import { MdWork, MdRocket, MdWavingHand, MdEmail, MdPhone, MdChat } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const ContactHeroSectionStyles = styled.section`
  padding: 10rem 0 6rem 0;
  background: var(--secondary-bg);

  .contact__hero {
    text-align: center;
    margin-bottom: 6rem;
  }

  .contact__cta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin: 4rem 0 6rem 0;
  }

  .cta__card {
    background: var(--primary-bg);
    padding: 3rem 2rem;
    border-radius: 16px;
    border: 1px solid var(--border-color);
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: var(--border-hover);
    }

    .cta__icon {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      color: var(--accent-color);
      
      svg {
        width: 3.5rem;
        height: 3.5rem;
      }
    }

    .cta__title {
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .cta__desc {
      font-size: 1.5rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .cta__button {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 1rem 2rem;
      background: var(--accent-color);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.4rem;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.3s ease;

      svg {
        width: 1.6rem;
        height: 1.6rem;
      }

      &:hover {
        background: var(--accent-hover);
        transform: translateY(-1px);
      }

      &.secondary {
        background: transparent;
        color: var(--accent-color);
        border: 1px solid var(--accent-color);

        &:hover {
          background: var(--accent-color);
          color: white;
        }
      }
    }
  }

  .availability__section {
    background: var(--primary-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 3rem;
    margin: 4rem 0;
    text-align: center;
  }

  .availability__badge {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.6rem;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 50px;
    margin-bottom: 1.5rem;

    .status-dot {
      width: 8px;
      height: 8px;
      background: var(--success-color);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    span {
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--success-color);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .availability__title {
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .availability__desc {
    font-size: 1.6rem;
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 60ch;
    margin: 0 auto;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @media only screen and (max-width: 768px) {
    padding: 8rem 0 5rem 0;

    .contact__cta {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin: 3rem 0 4rem 0;
    }

    .cta__card {
      padding: 2.5rem 2rem;
    }

    .availability__section {
      padding: 2.5rem 2rem;
      margin: 3rem 0;
    }
  }
`;

function ContactHeroSection() {
  return (
    <ContactHeroSectionStyles id="contact">
      <div className="container">
        <div className="contact__hero">
          <SectionTitle
            badge={{ icon: <MdChat />, text: "Let's Work Together" }}
            heading="Open to <highlight>Opportunities</highlight>"
            description="Currently seeking full-time roles, exciting projects, and meaningful collaborations. Here's how we can connect based on what you're looking for."
            align="center"
            size="large"
          />
        </div>

        <div className="contact__cta">
          <div className="cta__card">
            <div className="cta__icon">
              <MdWork />
            </div>
            <h3 className="cta__title">Full-Time Opportunities</h3>
            <p className="cta__desc">
              Looking for a software engineer? Let's discuss how I can contribute to your team's success.
            </p>
            <a href="mailto:omkargaikwad9552@gmail.com?subject=Job Opportunity - Full Time Role" className="cta__button">
              <MdEmail /> Discuss Role
            </a>
          </div>

          <div className="cta__card">
            <div className="cta__icon">
              <MdRocket />
            </div>
            <h3 className="cta__title">Project Collaboration</h3>
            <p className="cta__desc">
              Have a freelance project or consulting opportunity? Let's explore how we can build something amazing together.
            </p>
            <a href="tel:+919579714193" className="cta__button secondary">
              <MdPhone /> Quick Call
            </a>
          </div>

          <div className="cta__card">
            <div className="cta__icon">
              <MdWavingHand />
            </div>
            <h3 className="cta__title">Networking & Mentorship</h3>
            <p className="cta__desc">
              Want to connect professionally, discuss tech, or seeking mentorship? I love meeting fellow developers!
            </p>
            <a href="https://www.linkedin.com/in/omkargaikwad23/" target="_blank" rel="noreferrer" className="cta__button secondary">
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="availability__section">
          <div className="availability__badge">
            <div className="status-dot"></div>
            <span>Available for work</span>
          </div>
          <h3 className="availability__title">Ready for New Opportunities</h3>
          <p className="availability__desc">
            I'm currently open to full-time opportunities, freelance projects, and consulting work. 
            Based in Pune, India, and available for remote work worldwide.
          </p>
        </div>

        <ContactSection />
      </div>
    </ContactHeroSectionStyles>
  );
}

export default ContactHeroSection; 