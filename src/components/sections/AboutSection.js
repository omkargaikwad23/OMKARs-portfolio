import React from "react";
import styled from "styled-components";
import SectionTitle from "../ui/SectionTitle";
import { MdPersonPin, MdMovie, MdSportsHandball, MdBook, MdNature, MdDownload, MdTerrain, MdBrush } from "react-icons/md";
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';
import StaggeredReveal from '../ui/StaggeredReveal';

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

  .personal__interests {
    margin: 3rem 0;
    text-align: left;

    h4 {
      font-size: 2rem;
      color: var(--text-primary);
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    .interests__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .interest__item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.5rem;
      background: var(--secondary-bg);
      border-radius: 12px;
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-sm);
      }

      .interest__icon {
        font-size: 2rem;
      }

      .interest__text {
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--text-secondary);
      }
    }
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

    .interests__grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .interest__item {
      padding: 0.8rem 1rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .interests__grid {
      grid-template-columns: 1fr;
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
              
              <div className="personal__interests">
                <h4>When I'm not coding...</h4>
                
                <div className="interests__grid">
                  <div className="interest__item">
                    <span className="interest__icon"><MdMovie /></span>
                    <span className="interest__text">Movie Enthusiast</span>
                  </div>
                  <div className="interest__item">
                    <span className="interest__icon"><MdSportsHandball /></span>
                    <span className="interest__text">Table Tennis Player</span>
                  </div>
                  <div className="interest__item">
                    <span className="interest__icon"><MdBook /></span>
                    <span className="interest__text">Continuous Learner</span>
                  </div>
                  <div className="interest__item">
                    <span className="interest__icon"><MdNature /></span>
                    <span className="interest__text">Tech Explorer</span>
                  </div>
                  <div className="interest__item">
                    <span className="interest__icon"><MdTerrain /></span>
                    <span className="interest__text">Trekking Enthusiast</span>
                  </div>
                  <div className="interest__item">
                    <span className="interest__icon"><MdBrush /></span>
                    <span className="interest__text">Sketching Artist</span>
                  </div>
                </div>
              </div>
              
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