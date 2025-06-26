import React from "react";
import ExpCard from "../components/ExperienceCard";
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";
import { ExperienceData, VolunteersData } from "../assets/data/staticDisplayData";

const ExperienceStyles = styled.div`
  min-height: 100vh;
  padding: 12rem 0 8rem 0;
  background: var(--primary-bg);

  .experience__section {
    margin-bottom: 8rem;
  }

  .experience__grid {
    display: grid;
    gap: 3rem;
    margin-top: 4rem;
  }

  .experience__stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    margin: 4rem 0 6rem 0;
    padding: 3rem;
    background: var(--secondary-bg);
    border-radius: 16px;
    border: 1px solid var(--border-color);
  }

  .stat__item {
    text-align: center;
    
    .stat__number {
      font-size: 3.2rem;
      font-weight: 700;
      color: var(--accent-color);
      margin-bottom: 0.5rem;
      line-height: 1;
    }
    
    .stat__label {
      font-size: 1.4rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0 6rem 0;

    .experience__section {
      margin-bottom: 6rem;
    }

    .experience__stats {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      margin: 3rem 0 4rem 0;
      padding: 2rem;
    }

    .stat__item .stat__number {
      font-size: 2.8rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .experience__stats {
      grid-template-columns: 1fr;
    }
  }
`;

function Experience() {
  return (
    <ExperienceStyles>
      <div className="container">
        {/* Page Header */}
        <SectionTitle
          badge={{ icon: "💼", text: "Professional Journey" }}
          heading="Experience & <highlight>Growth</highlight>"
          description="My professional journey spans across innovative startups and established companies, focusing on building scalable systems and leading technical initiatives."
          align="center"
          size="large"
        />

        {/* Experience Stats */}
        <div className="experience__stats">
          <div className="stat__item">
            <div className="stat__number">3+</div>
            <div className="stat__label">Years Experience</div>
          </div>
          <div className="stat__item">
            <div className="stat__number">5</div>
            <div className="stat__label">Companies</div>
          </div>
          <div className="stat__item">
            <div className="stat__number">10+</div>
            <div className="stat__label">Technologies</div>
          </div>
          <div className="stat__item">
            <div className="stat__number">200+</div>
            <div className="stat__label">Students Impacted</div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="experience__section">
          <SectionTitle
            subheading="Professional Experience"
            heading="Work Experience"
            align="left"
            size="medium"
            showLine={false}
          />
          <div className="experience__grid">
            {ExperienceData.slice().reverse().map((item) => (
              <ExpCard
                key={item.id}
                role={item.role}
                duration={item.duration}
                org={item.org}
                location={item.loc}
                tasks={item.tasks}
                skills={item.skills}
                type="experience"
              />
            ))}
          </div>
        </div>

        {/* Volunteer Experience Section */}
        <div className="experience__section">
          <SectionTitle
            subheading="Community Involvement"
            heading="Volunteer Experience"
            align="left"
            size="medium"
            showLine={false}
          />
          <div className="experience__grid">
            {VolunteersData.map((mem) => (
              <ExpCard
                key={mem.id}
                role={mem.role}
                duration={mem.duration}
                org={mem.org}
                location={mem.loc}
                tasks={mem.tasks}
                skills={mem.skills}
                type="volunteer"
              />
            ))}
          </div>
        </div>
      </div>
    </ExperienceStyles>
  );
}

export default Experience;
