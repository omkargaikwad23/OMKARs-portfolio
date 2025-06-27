import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { MdEmail, MdCalendarToday } from 'react-icons/md';

const ContactSectionStyle = styled.div`
  padding: 8rem 0;
  background: var(--secondary-bg);
  
  .contact__content {
    max-width: 700px;
    margin: 6rem auto 0;
    text-align: center;
  }

  .contact__hero {
    background: var(--primary-bg);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 5rem 4rem;
    box-shadow: var(--shadow-lg);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(139, 92, 246, 0.05));
      pointer-events: none;
    }
  }

  .contact__title {
    font-size: 3.2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
  }

  .contact__description {
    font-size: 1.8rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 4rem;
    max-width: 50ch;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1;
  }

  .contact__actions {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }



  .contact__note {
    margin-top: 3rem;
    padding: 2rem;
    background: rgba(37, 99, 235, 0.08);
    border-radius: 12px;
    border: 1px solid rgba(37, 99, 235, 0.2);
    position: relative;
    z-index: 1;

    p {
      font-size: 1.4rem;
      color: var(--text-secondary);
      margin: 0;
      font-style: italic;
    }
  }
  
  @media only screen and (max-width: 768px) {
    padding: 6rem 0;
    
    .contact__content {
      margin-top: 4rem;
    }

    .contact__hero {
      padding: 4rem 3rem;
    }

    .contact__title {
      font-size: 2.8rem;
    }

    .contact__description {
      font-size: 1.6rem;
      margin-bottom: 3rem;
    }


  }

  @media only screen and (max-width: 480px) {
    .contact__hero {
      padding: 3rem 2rem;
    }

    .contact__actions {
      width: 100%;
      gap: 1rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle 
          heading="Have a <highlight>Question</highlight>?" 
          description="Got a specific project in mind, need technical advice, or just want to chat about tech? I'm here to help!"
          align="center"
        />
        
        <div className="contact__content">
          <div className="contact__hero" data-aos="fade-up" data-aos-delay="200">
            <h3 className="contact__title">Let's Discuss Your Ideas</h3>
            <p className="contact__description">
              Whether you have a specific project requirement, need technical consultation, 
              or want to explore innovative solutions, I'm excited to hear about your vision 
              and see how I can help bring it to life.
            </p>
            
            <div className="contact__actions">
              <Button
                btnText="Start a Discussion"
                btnLink="mailto:omkargaikwad9552@gmail.com?subject=Project Discussion - Let's Talk"
                icon={<MdEmail />}
                size="large"
                floating
              />
              
              <Button
                btnText="Schedule a Meeting"
                btnLink="https://calendly.com/omkargaikwad23"
                icon={<MdCalendarToday />}
                variant="secondary"
                size="large"
              />
            </div>

            <div className="contact__note">
              <p>
                💡 I typically respond within 24 hours and offer a free 30-minute consultation 
                to discuss your project requirements and explore potential solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
