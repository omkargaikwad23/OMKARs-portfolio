import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 8rem 0;
  
  .contactSection__wrapper {
    display: flex;
    gap: 6rem;
    margin-top: 6rem;
    justify-content: space-between;
    position: relative;
  }
  
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 1px;
    height: 60%;
    background: linear-gradient(to bottom, transparent, var(--border-color), transparent);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .left {
    flex: 1;
    max-width: 500px;
  }
  
  .right {
    flex: 1;
    max-width: 500px;
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 4rem 3rem;
    box-shadow: var(--shadow-sm);
  }

  .contact-intro {
    margin-bottom: 4rem;
    
    h3 {
      font-size: 2.2rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1.5rem;
    }
    
    p {
      font-size: 1.6rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  @media only screen and (max-width: 768px) {
    padding: 6rem 0;
    
    .contactSection__wrapper {
      flex-direction: column;
      gap: 4rem;
      margin-top: 4rem;
    }
    
    .contactSection__wrapper::after {
      display: none;
    }
    
    .left,
    .right {
      max-width: 100%;
    }
    
    .right {
      padding: 3rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle 
          heading="Send me a <highlight>message</highlight>" 
          description="I'll get back to you within 24 hours. Looking forward to hearing from you!"
          align="center"
        />
        <div className="contactSection__wrapper">
          <div className="left" data-aos="fade-right" data-aos-delay="300">
            <div className="contact-intro">
              <h3>Let's discuss your project</h3>
              <p>
                I'm always excited to hear about new opportunities and interesting projects. 
                Whether you're a startup looking to build your MVP or an established company 
                needing to scale your engineering team, let's connect!
              </p>
            </div>
            
            <div className="contact-info">
              <ContactInfoItem 
                icon={<MdEmail />} 
                text="omkargaikwad9552@gmail.com"
                label="Email"
              />
              <ContactInfoItem 
                icon={<MdLocalPhone />} 
                text="+91 9579714193"
                label="Phone"
              />
              <ContactInfoItem 
                icon={<MdLocationOn />} 
                text="Pune, Maharashtra, India"
                label="Location"
              />
            </div>
          </div>
          
          <div className="right" data-aos="fade-left" data-aos-delay="300">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
