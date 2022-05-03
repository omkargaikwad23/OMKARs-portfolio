import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import AboutImg from "../assets/images/omkarLapi.jpeg";
import AboutInfoItem from "../components/AboutInfoItem";
import Education from "../components/Education";
import CodingProfiles from "../components/CodingProfiles";
import { SkillsData } from "../Data";

const AboutPageStyles = styled.div`
  padding: 10rem 0 1rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .sub_container {
    padding-left: 5rem;
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .about__cv_button {
    font-size: 2.2rem;
    background-color: var(--gray-1);
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    a {
      color: black;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .sub_container {
      padding: 0px;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div
              className="left"
              data-aos="zoom-out"
              data-aos-delay="400"
              data-aos-once
            >
              <p className="about__subheading">
                Hi, I am <span>Omkar Gaikwad</span>
              </p>
              <h2 className="about__heading">
                A Web Developer <br />& Competitive Programmer
              </h2>
              <div className="about__info">
                <PText>
                  Growing up in a small village in Osmanabad, I now find myself
                  across the pond' as a graduating student at Pune Institute of
                  Computer Technology, where I aspire to learn everything, which I
                  could not have gained living in a village. <br /> <br />I
                  describe myself as someone who is a persistent, hard working,
                  passionate programmer who loves problem-solving with simple
                  and scalable solutions. I have a good understanding of
                  Algorithms, Data Structures, and Object-Oriented Concepts.
                  Also, I have a keen interest in web development. I have built
                  multiple projects and worked as a web dev intern. 
                  Also, I like watching movies and playing table tennis.
                </PText>
              </div>
              <div
                target="_blank"
                className="about__cv_button"
                btnText="Download CV"
              >
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/177GtuT6KOqd25sWr5WZBu32YFm9mat9x/view?usp=sharing"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div
              className="right"
              data-aos="zoom-out"
              data-aos-delay="400"
              data-aos-once
            >
              <img src={AboutImg} alt="Omkar Gaikwad" />
            </div>
          </div>

          <div className="about__info__items">
            <div className="about__info__item">
              <h1
                className="about__info__heading"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-once
              >
                Education
              </h1>
              <Education />
            </div>
            <h1
              className="about__info__heading"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-once
            >
              Tech Stack
            </h1>
            <div className="sub_container">
              <div className="about__info__item">
                {
                  SkillsData.map((skill) => (
                    <AboutInfoItem
                      title={skill.title}
                      items={skill.items}
                    />
                  ))
                }
              </div>
            </div>
            <div className="about__info__item">
              <h1
                className="about__info__heading"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-once
              >
                Coding Profiles
              </h1>
              <CodingProfiles />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
