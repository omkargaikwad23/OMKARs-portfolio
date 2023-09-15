import React from "react";
import ExpCard from "../components/ExperienceCard";
import styled from "styled-components";
import { ExperienceData, VolunteersData } from "../assets/data/staticDisplayData";

const ExperienceStyles = styled.div`
  padding: 6rem 0rem;
  .card__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    margin-top: 6rem;
  }
  @media only screen and (max-width: 768px) {
    .card__heading {
      font-size: 3rem;
    }
  }
`;

function Experience() {
  return (
    <>
      <ExperienceStyles>
        <div className="container">
          <h1 className="card__heading">Work Experience</h1>
          {ExperienceData.reverse().map((item) => (
            <ExpCard
              role={item.role}
              duration={item.duration}
              org={item.org}
              tasks={item.tasks}
            />
          ))}
          <h1 className="card__heading">Volunteer Experience</h1>
          {VolunteersData.map((mem) => (
            <ExpCard
              role={mem.role}
              duration={mem.duration}
              org={mem.org}
              tasks={mem.tasks}
            />
          ))}
        </div>
      </ExperienceStyles>
    </>
  );
}

export default Experience;
