import React from "react";
import Ptext from "./PText";
import styled from "styled-components";

const CardStyles = styled.div`
  margin: 3rem 0px;
  .card__container {
    margin: 4rem 0rem;
    background-color: var(--deep-dark);
    border: 2px solid var(--gray-1);
    padding: 2rem 2rem;
    border-radius: 2rem;
  }
  .card__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
  }
  .card__role {
    font-family: "Montserrat SemiBold";
    font-size: 2.5rem;
    color: var(--gray-2);
  }
  .card__duration {
    display: flex;
    font-size: 1.6rem;
  }
  .card__org {
    font-size: 3rem;
    font-family: "Montserrat Bold";
    margin-top: 1rem;
  }
  .card__tasks {
    padding-left: 3rem;
    li {
      list-style: square;
      font-size: 1.8rem;
      color: var(--gray-1);
      margin-top: 0.6rem;
    }
  }
  .task__heading{
    color: var(--gray-2);
  }
  .para {
    margin-left: 0px;
    max-width: none;
  }
  @media only screen and (max-width: 768px) {
    .card__container {
      padding: 2rem 1rem;
      margin: 0rem -1.5rem;
    }
    .card__header {
      display: contents;
    }
    .card__role {
      font-size: 2.2rem;
      width: 100%;
    }
    .card__org {
      font-size: 2.4rem;
    }
    .card__duration {
      text-align: start;
    }
  }
`;

export default function ExperienceCard({
  role = "Intern",
  duration = "00/0000 - 00/0000",
  org = "My Organization",
  tasks = ["Working"],
}) {
  return (
    <CardStyles>
      <div className="container">
        <div className="card__container">
          <div className="card__header">
            <span className="card__role">{role}</span>
            <span className="card__duration">{duration}</span>
          </div>
          <div className="card__org">{org}</div>
          <br />
          <hr />
          <br />
          <Ptext>
            <i className="task__heading">achievements/tasks</i>
          </Ptext>
          <div className="card__tasks">
            <ul>
              {tasks.map((item, index) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CardStyles>
  );
}
