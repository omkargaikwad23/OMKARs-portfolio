import React from "react";
import { CodingHandles } from "../Data";
import DosItem from "./DosItem";
import styled from "styled-components";

const CodingProfileStyles = styled.div`
  margin-top: 5rem;
  .profilesContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 3rem;
  }
  .profile {
    margin: 3rem;
    justify-content: center;
  }
  @media only screen and (max-width: 768px) {
    .profile {
      padding: 2rem -4rem;
    }
  }
`;

export default function CodingProfiles() {
  return (
    <CodingProfileStyles>
      <div className="profilesContainer">
        {CodingHandles.map((profile) => (
          <a target="_blank" rel="noopener noreferrer" href={profile.url}>
            <div className="profile">
              <DosItem
                icon={<profile.icon />}
                title={profile.site}
                desc={profile.desc}
              />
            </div>
          </a>
        ))}
      </div>
    </CodingProfileStyles>
  );
}
