import React from 'react';
import { MdStorage, MdPsychology, MdSupervisorAccount } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from '../ui/SectionTitle';
import ServicesSectionItem from '../cards/DosItem';
import ScrollReveal from '../ui/ScrollReveal';
import StaggeredReveal from '../ui/StaggeredReveal';

const ServicesItemsStyles = styled.div`
  padding: 8rem 0rem 14rem 0rem;
  .services__allItems {
    display: flex;
    flex-wrap: wrap;
    gap: 10rem;
    justify-content: space-evenly;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
    .section__title{
      font-size: medium;
    }
  }
`;

export default function DosSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <ScrollReveal animation="fadeUp" delay={100}>
          <SectionTitle subheading="Professional Expertise" className="section__title" heading="What I do?" />
        </ScrollReveal>
        
        <StaggeredReveal animation="scaleIn" staggerDelay={200} className="services__allItems">
          <ServicesSectionItem
            icon={<MdStorage />}
            title="Backend Engineering"
            desc="I design and build scalable distributed systems, high-performance APIs, and robust backend architecture for large-scale applications."
          />
          <ServicesSectionItem
            icon={<MdPsychology />}
            title="GenAI & Big Data"
            desc="I develop intelligent AI systems and optimize big data pipelines, focusing on performance, reliability, and scalability at enterprise level."
          />
          <ServicesSectionItem
            icon={<MdSupervisorAccount />}
            title="Technical Leadership"
            desc="I lead cross-functional initiatives, mentor engineering teams, and drive innovation in analytics and data processing solutions."
          />
        </StaggeredReveal>
      </div>
    </ServicesItemsStyles>
  );
}
