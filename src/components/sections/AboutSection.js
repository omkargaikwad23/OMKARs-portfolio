import React from "react";
import styled from "styled-components";
import SectionTitle from "../ui/SectionTitle";
import { MdPersonPin, MdMovie, MdSportsHandball, MdBook, MdNature, MdDownload } from "react-icons/md";

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
  }

  .cv__button {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 2.4rem;
    background: var(--accent-color);
    color: white;
    text-decoration: none;
    border-radius: 12px;
    font-size: 1.6rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);

    &:hover {
      background: var(--accent-hover);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .cv__icon {
      width: 1.8rem;
      height: 1.8rem;
    }
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
        <SectionTitle
          badge={{ icon: <MdPersonPin />, text: "About Me" }}
          heading="My <highlight>Journey</highlight>"
          description="From a small village in Dharashiv district to the tech industry - here's my story of continuous growth and passion for technology."
          align="center"
          size="large"
        />
        
        <div className="journey__content">
          <div className="journey__story">
            <h3 className="story__title">The Journey So Far</h3>
            <p className="story__text">
              My path from the quiet streets of a small village to the bustling tech landscape 
              has been one of continuous growth and discovery. After graduating from Pune Institute 
              of Computer Technology, I've embarked on my professional career as a Software Engineer 
              specializing in AI and Big Data, where I'm passionate about leveraging cutting-edge 
              technologies to solve real-world problems.
            </p>
            
            <p className="story__text">
              I'm a persistent and passionate engineer who thrives on transforming complex data 
              into meaningful insights and building intelligent solutions. With a strong foundation 
              in algorithms, data structures, and machine learning concepts, I've expanded my expertise 
              across web development, data engineering, and artificial intelligence.
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
              </div>
            </div>
            
            <div className="cv__section">
              <a
                className="cv__button"
                target="_blank"
                href="https://drive.google.com/file/d/177GtuT6KOqd25sWr5WZBu32YFm9mat9x/view?usp=sharing"
                rel="noreferrer"
              >
                <MdDownload className="cv__icon" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}

export default AboutSection; 