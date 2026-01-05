import React from "react";
import styled from "styled-components";
import SectionTitle from "../ui/SectionTitle";
import ContactSection from "./ContactSection";
import { MdWork, MdRocket, MdWavingHand, MdEmail, MdPhone, MdChat } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';
import StaggeredReveal from '../ui/StaggeredReveal';

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
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 3rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--gradient-primary);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
      border-color: var(--accent-color);

      &::before {
        opacity: 1;
      }
    }

    .cta__icon {
      width: 6rem;
      height: 6rem;
      background: linear-gradient(135deg, var(--accent-color), #3B82F6);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 2rem auto;
      color: white;

      svg {
        width: 2.8rem;
        height: 2.8rem;
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

    .cta__button-wrapper {
      display: flex;
      justify-content: center;
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
          <ScrollReveal animation="fadeUp" delay={100}>
            <SectionTitle
              badge={{ icon: <MdChat />, text: "Let's Work Together" }}
              heading="Open to <highlight>Interesting Work</highlight>"
              description="Always excited about challenging projects, innovative ideas, and meaningful collaborations. Here's how we can connect based on what you're building."
              align="center"
              size="large"
            />
          </ScrollReveal>
        </div>

        <StaggeredReveal animation="scaleIn" staggerDelay={200} className="contact__cta">
          <div className="cta__card">
            <div className="cta__icon">
              <MdWork />
            </div>
            <h3 className="cta__title">Full-Time Roles</h3>
            <p className="cta__desc">
              Building something exciting? Let's discuss how I can contribute to your team's success.
            </p>
            <div className="cta__button-wrapper">
              <Button
                icon={<MdEmail />}
                btnText="Discuss Role"
                btnLink="mailto:omkargaikwad9552@gmail.com?subject=Job Opportunity - Full Time Role"
              />
            </div>
          </div>

          <div className="cta__card">
            <div className="cta__icon">
              <MdRocket />
            </div>
            <h3 className="cta__title">Project Collaboration</h3>
            <p className="cta__desc">
              Have a freelance project or consulting opportunity? Let's explore how we can build something amazing together.
            </p>
            <div className="cta__button-wrapper">
              <Button
                icon={<MdPhone />}
                btnText="Quick Call"
                btnLink="tel:+919579714193"
                variant="secondary"
              />
            </div>
          </div>

          <div className="cta__card">
            <div className="cta__icon">
              <MdWavingHand />
            </div>
            <h3 className="cta__title">Networking & Mentorship</h3>
            <p className="cta__desc">
              Want to connect professionally, discuss tech, or interested in mentorship? I love meeting fellow developers!
            </p>
            <div className="cta__button-wrapper">
              <Button
                icon={<FaLinkedin />}
                btnText="Connect on LinkedIn"
                btnLink="https://www.linkedin.com/in/omkargaikwad23/"
                variant="tertiary"
              />
            </div>
          </div>
        </StaggeredReveal>

        <ScrollReveal animation="fadeUp" delay={400}>
          <div className="availability__section">
            <div className="availability__badge">
              <div className="status-dot"></div>
              <span>Available for work</span>
            </div>
            <h3 className="availability__title">Open to Interesting Work</h3>
            <p className="availability__desc">
              Open to full-time roles, freelance projects, and consulting engagements with exciting challenges. 
              Based in Pune, India, and available for remote work worldwide.
            </p>
          </div>
        </ScrollReveal>

        <ContactSection />
      </div>
    </ContactHeroSectionStyles>
  );
}

export default ContactHeroSection; 