import React from "react";
import Button from "./Button";
import Ptext from "./PText";
import Jobs from "../assets/images/jobs.jpg";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import styled from "styled-components";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    max-height: 1000px;
    width: 100%;
    /* margin-top: 60px; */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: "Montserrat SemiBold";
      color: var(--gray-1);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 450px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    /* object-fit: contain; */
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
      /* filter: brightness(126%) hue-rotate(151deg) saturate(1000%) contrast(320%);   */
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .sideArrows{
      margin-top: 1000px;
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <br />
            <span className="hero__name">Omkar Gaikwad</span>
          </h1>
          <div className="hero__img">
            <img src={Jobs} alt="landing steve jobs" />
          </div>
          <div className="hero__info">
            <Ptext>
              I am computer engineering student having keen interest in
              competitive programming and web development.
            </Ptext>
            <Button
              btnLink="/about"
              btnText="About me"
              outline={false}
            ></Button>
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img
                src={SocialMediaArrow}
                className="sideArrows"
                alt="down arrow"
              ></img>
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/omkargaikwad23/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/omkar.gaikwad.23/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/omkar.gaikwad._/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/omkargaikwad23"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GH
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>SCROLL</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
