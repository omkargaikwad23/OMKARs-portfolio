import React from "react";
import styled from "styled-components";
import SectionTitle from "../ui/SectionTitle";
import { MdPersonPin, MdDownload } from "react-icons/md";
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';

const AboutSectionStyles = styled.section`
  padding: 10rem 0;
  background: var(--secondary-bg);

  .journey__content {
    max-width: 800px;
    margin: 6rem auto 0;
    text-align: center;
  }

  .journey__story {
    background: var(--primary-bg);
    padding: 4rem;
    border-radius: 20px;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
  }

  .story__title {
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2rem;
  }

  .story__text {
    font-size: 1.7rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    text-align: left;
  }

  .cv__section {
    margin-top: 3rem;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    padding: 8rem 0;

    .journey__story {
      padding: 3rem 2rem;
    }

    .story__title {
      font-size: 2.4rem;
    }

    .story__text {
      font-size: 1.6rem;
    }
  }
`;

function AboutSection() {
  return (
    <AboutSectionStyles id="about">
      <div className="container">
        <ScrollReveal animation="fadeUp" delay={100}>
          <SectionTitle
            badge={{ icon: <MdPersonPin />, text: "About Me" }}
            heading="My <highlight>Journey</highlight>"
            description="From solving DSA problems to building production-grade AI systems — a journey of continuous technical growth and impactful engineering."
            align="center"
            size="large"
          />
        </ScrollReveal>
        
        <div className="journey__content">
          <ScrollReveal animation="scaleIn" delay={300}>
            <div className="journey__story">
              <h3 className="story__title">The Journey So Far</h3>
              
              <p className="story__text">
                My journey began with a strong foundation in algorithms and data structures — achieving a 
                <strong> 1800+ LeetCode rating (Top 5%)</strong> and solving 1100+ problems. After graduating 
                from Pune Institute of Computer Technology in 2023, I've spent the past 2.5 years at PubMatic 
                building production systems that process <strong>12+ TB of data daily</strong> and serve millions 
                of ad requests.
              </p>
              
              <p className="story__text">
                What excites me most is solving complex technical challenges at scale. I've led development of 
                an <strong>AI-powered Deal Debugger</strong> that reduced support tickets by 50%, architected 
                <strong> Redis caching layers</strong> that cut database load by 90%, and engineered 
                <strong> Spark pipelines</strong> that enabled $20K/day revenue increases. Each project taught me 
                that great engineering isn't just about writing code — it's about understanding systems, optimizing 
                performance, and delivering measurable business impact.
              </p>
              
              <div className="cv__section">
                <Button
                  btnText="Download Resume"
                  btnLink="https://drive.google.com/file/d/177GtuT6KOqd25sWr5WZBu32YFm9mat9x/view?usp=sharing"
                  icon={<MdDownload />}
                  size="large"
                  variant="success"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </AboutSectionStyles>
  );
}

export default AboutSection; 