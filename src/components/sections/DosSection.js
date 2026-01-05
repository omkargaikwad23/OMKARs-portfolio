import React from 'react';
import { MdCode, MdPsychology, MdNetworkCheck } from 'react-icons/md';
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
            icon={<MdCode />}
            title="Backend Engineering"
            desc="Building high-performance REST APIs, microservices, and scalable backend systems. Expert in optimizing database performance, implementing caching strategies (Redis), and designing robust API architectures that handle production-scale traffic."
          />
          <ServicesSectionItem
            icon={<MdPsychology />}
            title="GenAI Agents"
            desc="Designing and deploying production-grade LLM-based systems using LangGraph state machines, LangChain, and FastAPI. Specialized in building multi-agent workflows, prompt engineering, and integrating observability tools (LangFuse, ELK) for reliable GenAI applications."
          />
          <ServicesSectionItem
            icon={<MdNetworkCheck />}
            title="Distributed Systems"
            desc="Engineering large-scale data pipelines with Apache Spark processing 12+ TB/day across multi-cluster environments. Expertise in HDFS, S3, Kafka, and building fault-tolerant systems that power real-time analytics and data-driven decisions."
          />
        </StaggeredReveal>
      </div>
    </ServicesItemsStyles>
  );
}
