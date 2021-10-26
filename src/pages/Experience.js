import React from "react";
import ExpCard from "../components/ExperienceCard";
import styled from "styled-components";

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
          <ExpCard
            role="Student Intern"
            duration="09/2021 - 12/2021"
            org="Tech Mahindra"
            tasks={[
              "Working on design and development of a full-stack web application",
              "Collaborating to suggest a suitable product architecture for the website",
            ]}
          />
          <ExpCard
            role="Web Dev Intern"
            duration="05/2021 - 07/2021"
            org="Solapur Rural Police Transfer"
            tasks={[
              "Worked on the project for a real-time problem for general transfer of Solapur Police Staff",
              "Developed and implemented web applications using SCRUM Agile methods",
              "Conducted testing & validation to ensure the software is working properly",
            ]}
          />
          <h1 className="card__heading">Volunteer Experience</h1>
          <ExpCard
            role="Student Volunteer"
            duration="09/2020 - Present"
            org="PICT ACM Student Chapter"
            tasks={[
              "Conducted introductory sessions on Web development domain for first-year students",
            ]}
          />
          <ExpCard
            role="Student Volunteer"
            duration="10/2021 - Present"
            org="PICT Entrepreneurship Development Cell "
            tasks={[
              "Involved in the marketing for The Original Pitch - The flagship event conducted by entrepreneurship cell",
            ]}
          />
        </div>
      </ExperienceStyles>
    </>
  );
}

export default Experience;
