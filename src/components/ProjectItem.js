import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projects/mybrary.png';
import Ptext from './PText';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .projectItem__tech{
    display: flex;
    flex-wrap: wrap;
    position: initial;
    margin-top: 1rem;
  }
  .projectItem__tech__name{
    background-color: black;
    padding: 0.8rem;
    margin: 0.5rem 0.8rem 0rem 0rem;
    border-radius: 0.5rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  tech = [],
  url
}) {
  return (
    <ProjectItemStyles>
      <a target="_blank" href={url} className="projectItem__img" rel="noopener noreferrer">
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <div className="projectItem__tech">
          {tech.map((item, index) => (
            <div className="projectItem__tech__name">
              <Ptext >{item}</Ptext> 
            </div>
          ))}
        </div>
      </div>
    </ProjectItemStyles>
  );
}
