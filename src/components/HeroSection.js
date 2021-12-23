import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/images/omkarLapi.jpeg";

const AboutSectionStyles = styled.div`

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left{
    flex: 3;
  }
  .aboutSection__right {
    flex: 2;
    padding: 13rem;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .aboutImg {
    border: 2px solid var(--gray-1);
    height: auto;
    object-fit: contain;
  }
  @media only screen and (max-width: 950px) {
    padding-top: 10rem;
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      padding: 0rem;
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    padding-top: 10rem;

    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left"  data-aos="zoom-out" data-aos-delay="200" data-aos-once>
          <SectionTitle
            subheading="Hello there, I'm"
            heading="Omkar Gaikwad"
          />
          <PText>
            I am computer engineering student having keen interest in data structures, algorithmic problem solving and web development.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Projects" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right" data-aos="zoom-out" data-aos-delay="200" data-aos-once>
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
