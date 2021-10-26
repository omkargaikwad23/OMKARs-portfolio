import React from 'react'
import styled from "styled-components";
import ExpCard from './ExperienceCard';

const EducationStyles = styled.div`
  margin: 3rem 0rem;
`;

export default function Education() {
  return (
    <>
      <EducationStyles>
        <div className="">
        <ExpCard
            role="BE in Computer Engineering"
            duration="09/2021 - 12/2021"
            org="SCTR's Pune Institute of Computer Technology"
            tasks={[
              "Pursuing computer engineering degree",
            ]}
          />
        <ExpCard
            role="HSC Junior College"
            duration="06/2017 - 06/2019"
            org="Rajarshi Shahu Junior Science College, Latur"
            tasks={[
              "Stood first in the batch of 130 students in MHT-CET exam with 99.31 percentile",
              "Secured 77.23% in HSC board exam"
            ]}
          />
        <ExpCard
            role="SSC School"
            duration="06/2006 - 06/2017"
            org="Shri Sant Goroba Kaka Vidyalaya"
            tasks={[
              "Stood first in school and exam center(among 5 schools) with 96.40%"
            ]}
          />
        </div>
      </EducationStyles>
    </>
  )
}
