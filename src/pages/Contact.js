import React from 'react';
import styled from 'styled-components';
import ContactSection from '../components/ContactSection';
import SectionTitle from '../components/SectionTitle';

const ContactPageStyles = styled.div`
  min-height: 100vh;
  padding: 12rem 0 8rem 0;
  background: var(--primary-bg);

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
    background: var(--secondary-bg);
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
    padding: 10rem 0 6rem 0;

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

function Contact() {
  return (
    <ContactPageStyles>
      <div className="container">
        {/* Hero Section */}
        <div className="contact__hero">
          <SectionTitle
            badge={{ icon: "💬", text: "Get In Touch" }}
            heading="Let's <highlight>Connect</highlight>"
            description="Whether you're looking to hire, collaborate on a project, or just want to say hello, I'd love to hear from you. Let's discuss how we can work together!"
            align="center"
            size="large"
          />
        </div>

        {/* Call to Action Cards */}
        <div className="contact__cta">
          <div className="cta__card">
            <div className="cta__icon">💼</div>
            <h3 className="cta__title">Hiring Opportunities</h3>
            <p className="cta__desc">
              Looking for a software engineer? Let's discuss how I can contribute to your team's success.
            </p>
            <a href="mailto:omkargaikwad9552@gmail.com?subject=Job Opportunity" className="cta__button">
              Send Email 📧
            </a>
          </div>

          <div className="cta__card">
            <div className="cta__icon">🚀</div>
            <h3 className="cta__title">Project Collaboration</h3>
            <p className="cta__desc">
              Have an interesting project? Let's explore how we can build something amazing together.
            </p>
            <a href="tel:+919579714193" className="cta__button secondary">
              Call Me 📞
            </a>
          </div>

          <div className="cta__card">
            <div className="cta__icon">🌟</div>
            <h3 className="cta__title">General Inquiry</h3>
            <p className="cta__desc">
              Questions about my work, want to connect, or just say hello? Use the form below!
            </p>
            <a href="#contact-form" className="cta__button secondary">
              Message Me 💬
            </a>
          </div>
        </div>

        {/* Availability Status */}
        <div className="availability__section">
          <div className="availability__badge">
            <div className="status-dot"></div>
            <span>Available for new opportunities</span>
          </div>
          <h3 className="availability__title">Ready to Make an Impact</h3>
          <p className="availability__desc">
            I'm currently open to full-time opportunities, freelance projects, and interesting collaborations. 
            Based in Pune, India, and available for remote work worldwide.
          </p>
        </div>

        {/* Contact Form Section */}
        <div id="contact-form">
          <ContactSection />
        </div>
      </div>
    </ContactPageStyles>
  );
}

export default Contact;
