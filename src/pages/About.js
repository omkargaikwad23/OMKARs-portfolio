import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from "../assets/images/meIdea.jpg";
import AboutInfoItem from "../components/AboutInfoItem";
// import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
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
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Omkar Gaikwad</span>
              </p>
              <h2 className="about__heading">A Web Developer & Competitive Programmer</h2>
              <div className="about__info">
                <PText>
                  Growing up in a small village in Osmanabad, I now find myself
                  across the pond' as a graduating student at Pune Institute of
                  Computer Technology, where I aspire to learn everything, I
                  could not have gained living in a village. <br /> <br />
                  I describe myself as someone who's persistent, a hard worker, a passionate
                  programmer who loves problem-solving with simple and scalable
                  solutions. I have a good understanding of Algorithms, Data
                  Structures, and Object-Oriented Concepts. Also, I have a keen
                  interest in web development. I have built multiple projects
                  and worked as a web dev intern. Now, I'd like to put these
                  skills and experience to good use, analyzing tomorrow's
                  up-and-coming companies.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="SSC"
                items={["Shri Sant Goroba Kaka Vidyalaya, Saundana"]}
              />
              <AboutInfoItem
                title="HSC"
                items={["Rajarshi Shahu Mahavidyala, Latur"]}
              />
              <AboutInfoItem
                title="BE"
                items={["SCTR's Pune Institute of Computer Technology, Pune"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Tech Stack</h1>

              <AboutInfoItem
                title="Languages"
                items={["C++", "Python", "Java"]}
              />
              <AboutInfoItem
                title="FrontEnd"
                items={["HTML", "CSS", "JavaScript" , "REACT"]}
              />
              <AboutInfoItem title="BackEnd" items={["Node", "Express"]} />
              <AboutInfoItem title="Databases" items={["NoSQL", "MongoDB"]} />
              <AboutInfoItem title="Design" items={["Figma"]} />
              <AboutInfoItem
                title="Tools"
                items={["VS code", "GitHub", "Postman", "Eclipse"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="09/2021 – 12/2021"
                items={["Student Intern in Tech Mahindra"]}
              />
              <AboutInfoItem
                title="05/2021 - 07/2021"
                items={["Web Development Intern at Solapur Rural Police"]}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
