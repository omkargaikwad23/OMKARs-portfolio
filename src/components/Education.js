import React from "react";
import styled from "styled-components";
import EduCard from "./ExperienceCard";
import {EducationData} from "../assets/data/staticDisplayData";

const EducationStyles = styled.div`
  margin: 3rem 0rem;
`;

export default function Education() {
  return (
    <>
      <EducationStyles>
        {
          EducationData.map((degree) => (
            <EduCard
              role={degree.role}
              duration={degree.duration}
              org={degree.org}
              tasks={degree.tasks}
            />
          ))
        }
      </EducationStyles>
    </>
  );
}
