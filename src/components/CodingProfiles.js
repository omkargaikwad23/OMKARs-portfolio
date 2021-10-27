import React from "react";
import { CodingHandles } from "../Data";
import DosItem from "./DosItem";
import styled from "styled-components";

const CodingProfileStyles = styled.div`
  .profilesContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
    margin-top: 3rem;
  }
  .profile {
    border: 2px solid var(--gray-1);
    background-color: var(--deep-dark);
    height: 220px;
    width: 320px;
    padding: 3rem;
    margin: 1rem;
    justify-content: center;
  }
  @media only screen and (max-width: 768px) {
    .profilesContainer {
      max-width: 350px;
      margin-top: 2rem;
    }
    .section__title {
      font-size: medium;
    }
  }
`;

export default function CodingProfiles() {
  return (
    <CodingProfileStyles>
      <div className="profilesContainer">
        {CodingHandles.map((profile) => (
          <a href={profile.url}>
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
