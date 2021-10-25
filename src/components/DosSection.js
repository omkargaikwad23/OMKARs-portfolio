import React from 'react';
import { MdCode } from 'react-icons/md';
import {BsBookHalf} from 'react-icons/bs';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './WhatIdoItem';
import {VscGraphLine} from "react-icons/vsc"

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
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
        <SectionTitle subheading="What do I do?" className="section__title" heading="My Roles" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I am a full stack web developer. I develop fully functional and beautiful websites."
          />
          <ServicesSectionItem
            icon={<VscGraphLine />}
            title="cp"
            desc="I love problem solving. I do competitive programming on various coding platforms."
          />
          <ServicesSectionItem
            icon={<BsBookHalf />}
            title="study"
            desc="I am a computer engineering student. I study DSA, DBMS, CN, OS, etc subjects."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
