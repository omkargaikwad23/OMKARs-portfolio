import React from "react";
import styled from "styled-components";

const CardStyles = styled.div`
  margin: 0 0 3rem 0;

  .card__container {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 3rem;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
      opacity: 0.8;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      border-color: var(--border-hover);
    }
  }

  .card__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    gap: 2rem;
  }

  .card__left {
    flex: 1;
  }

  .card__role {
    font-family: "Montserrat SemiBold", sans-serif;
    font-size: 2.2rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.5rem 0;
    line-height: 1.3;
  }

  .card__org {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--accent-color);
    margin: 0;
    line-height: 1.4;
  }

  .card__location {
    font-size: 1.4rem;
    color: var(--text-light);
    margin: 0.5rem 0 0 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '📍';
      font-size: 1.2rem;
    }
  }

  .card__duration {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    background: rgba(37, 99, 235, 0.08);
    border: 1px solid rgba(37, 99, 235, 0.2);
    border-radius: 20px;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--accent-color);
    white-space: nowrap;
    height: fit-content;

    &::before {
      content: '⏱️';
      font-size: 1.2rem;
    }
  }

  .card__divider {
    height: 1px;
    background: var(--border-color);
    margin: 2rem 0;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 60px;
      height: 100%;
      background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
    }
  }

  .card__content {
    margin-top: 2rem;
  }

  .tasks__heading {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 1.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    &::before {
      content: '🎯';
      font-size: 1.4rem;
    }
  }

  .card__tasks {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      position: relative;
      font-size: 1.6rem;
      line-height: 1.6;
      color: var(--text-secondary);
      margin-bottom: 1rem;
      padding-left: 2rem;

      &::before {
        content: '▸';
        position: absolute;
        left: 0;
        top: 0;
        color: var(--accent-color);
        font-weight: bold;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .card__skills {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
  }

  .skills__heading {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 1rem 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .skills__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .skill__tag {
    padding: 0.5rem 1rem;
    background: rgba(37, 99, 235, 0.06);
    color: var(--accent-color);
    border: 1px solid rgba(37, 99, 235, 0.15);
    border-radius: 12px;
    font-size: 1.3rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(37, 99, 235, 0.1);
      transform: translateY(-1px);
    }
  }

  @media only screen and (max-width: 768px) {
    .card__container {
      padding: 2.5rem 2rem;
    }

    .card__header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }

    .card__duration {
      align-self: flex-start;
    }

    .card__role {
      font-size: 2rem;
    }

    .card__org {
      font-size: 1.7rem;
    }

    .card__tasks li {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .card__container {
      padding: 2rem 1.5rem;
    }

    .card__role {
      font-size: 1.8rem;
    }

    .card__org {
      font-size: 1.6rem;
    }

    .card__tasks li {
      font-size: 1.4rem;
      padding-left: 1.5rem;
    }

    .skills__list {
      gap: 0.6rem;
    }

    .skill__tag {
      font-size: 1.2rem;
      padding: 0.4rem 0.8rem;
    }
  }
`;

export default function ExperienceCard({
  role = "Software Engineer",
  duration = "January 2023 - Present",
  org = "Company Name",
  location = "City, Country",
  tasks = ["Developed scalable applications", "Led cross-functional teams"],
  skills = [],
  type = "experience" // "experience" or "education"
}) {
  return (
    <CardStyles>
      <div className="card__container">
        <div className="card__header">
          <div className="card__left">
            <h3 className="card__role">{role}</h3>
            <h4 className="card__org">{org}</h4>
            {location && <p className="card__location">{location}</p>}
          </div>
          <div className="card__duration">{duration}</div>
        </div>

        <div className="card__divider"></div>

        <div className="card__content">
          <h5 className="tasks__heading">
            {type === "education" ? "Achievements" : "Key Contributions"}
          </h5>
          <div className="card__tasks">
            <ul>
              {tasks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {skills && skills.length > 0 && (
            <div className="card__skills">
              <h6 className="skills__heading">Technologies & Skills</h6>
              <div className="skills__list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill__tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </CardStyles>
  );
}
