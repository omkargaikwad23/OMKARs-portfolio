import React from 'react';
import { MdCode } from 'react-icons/md';
import {FaGraduationCap} from 'react-icons/fa';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './DosItem';
import {VscGraphLine} from "react-icons/vsc";

const ServicesItemsStyles = styled.div`
  padding: 8rem 0rem 14rem 0rem;
  .services__allItems {
    display: flex;
    flex-wrap: wrap;
    gap: 10rem;
    justify-content: space-evenly;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
    .section__title{
      font-size: medium;
    }
  }
`;

export default function DosSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Self proclamation" className="section__title" heading="What I do?" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I am a full stack web developer who loves developing websites."
          />
          <ServicesSectionItem
            icon={<VscGraphLine />}
            title="CP"
            desc="I am a competitive programmer. I like solving problems."
          />
          <ServicesSectionItem
            icon={<FaGraduationCap />}
            title="Engineering"
            desc="I am a 4th year computer engineering student studying at PICT college."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
