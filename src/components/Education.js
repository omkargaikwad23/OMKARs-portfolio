import React from "react";
import styled from "styled-components";
import SectionTitle from "./ui/SectionTitle";
import EduCard from "./cards/ExperienceCard";
import { EducationData } from "../assets/data/staticDisplayData";

const EducationStyles = styled.div`
  padding: 8rem 0;
  background: var(--primary-bg);

  .education__grid {
    display: grid;
    gap: 3rem;
    margin-top: 4rem;
  }

  .education__highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 4rem 0;
    padding: 3rem;
    background: var(--secondary-bg);
    border-radius: 16px;
    border: 1px solid var(--border-color);
  }

  .highlight__item {
    text-align: center;
    padding: 2rem;
    border-radius: 12px;
    background: rgba(37, 99, 235, 0.04);
    border: 1px solid rgba(37, 99, 235, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      background: rgba(37, 99, 235, 0.08);
      border-color: rgba(37, 99, 235, 0.2);
    }

    .highlight__icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .highlight__title {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .highlight__desc {
      font-size: 1.4rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 6rem 0;

    .education__highlights {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin: 3rem 0;
      padding: 2rem;
    }

    .highlight__item {
      padding: 1.5rem;
    }
  }
`;

export default function Education() {
  return (
    <EducationStyles>
      <div className="container">
        <SectionTitle
          badge={{ icon: "🎓", text: "Academic Journey" }}
          heading="Education & <highlight>Learning</highlight>"
          description="My academic foundation in Computer Engineering, combined with consistent excellence in mathematics and sciences, has shaped my analytical thinking and problem-solving approach."
          align="center"
          size="large"
        />

        {/* Education Highlights */}
        <div className="education__highlights">
          <div className="highlight__item">
            <div className="highlight__icon">🏆</div>
            <div className="highlight__title">99.31%</div>
            <div className="highlight__desc">MHT-CET Percentile - Ranked 1st in batch of 130 students</div>
          </div>
          <div className="highlight__item">
            <div className="highlight__icon">📊</div>
            <div className="highlight__title">96.40%</div>
            <div className="highlight__desc">SSC Board Exam - 1st position in school & exam center</div>
          </div>
          <div className="highlight__item">
            <div className="highlight__icon">📝</div>
            <div className="highlight__title">IEEE Publication</div>
            <div className="highlight__desc">Research paper on sentiment analysis published in IEEE conference</div>
          </div>
          <div className="highlight__item">
            <div className="highlight__icon">🎯</div>
            <div className="highlight__title">Distinction</div>
            <div className="highlight__desc">Computer Engineering with specialization in ML & Algorithms</div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="education__section">
          <SectionTitle
            subheading="Academic Background"
            heading="Educational Timeline"
            align="left"
            size="medium"
            showLine={false}
          />
          <div className="education__grid">
            {EducationData.map((degree) => (
              <EduCard
                key={degree.id}
                role={degree.role}
                duration={degree.duration}
                org={degree.org}
                location={degree.loc}
                tasks={degree.tasks}
                skills={degree.skills}
                type="education"
              />
            ))}
          </div>
        </div>
      </div>
    </EducationStyles>
  );
}
