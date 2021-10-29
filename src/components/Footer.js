import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";
// import { BsInstagram, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    margin-top: 5rem;
  }
  .para {
    margin-left: 0;
  }
  /* .socialLogos {
    display: flex;
    font-size: 20px;
    flex-direction: row;
  } */
  /* .copyright__msg{
    width: fit-content;
  } */
  /* .socialLogo {
    margin: 0 4px;
    width: 20px;
    height: 20px;
  } */
  a:hover{
    color: white;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Omkar Gaikwad</h1>
          <PText>
            A persistent, hard worker and a quick learner who loves problem-
            solving by simple and scalable solutions.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              
              {
                type: 'Link',
                title: 'Experience',
                path: '/experience',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+919579714193",
                path: "tel:+919579714193",
              },
              {
                title: "omkargaikwad9552@gmail.com",
                path: "mailto:omkargaikwad9552@gmail.com",
              },
              {
                title: "Pune, India",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/omkargaikwad23/",
              },
              {
                title: "Facebook",
                path: "https://www.facebook.com/omkar.gaikwad.23/",
              },
              {
                title: "Instagram",
                path: "https://www.instagram.com/omkar.gaikwad._/",
              },
              {
                title: "GitHub",
                path: "https://github.com/omkargaikwad23"
              }
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText className="copyright__msg">
            © 2021 - Omkar Gaikwad
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
