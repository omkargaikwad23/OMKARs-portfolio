import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <AboutItemStyles>
      {/* <div data-aos="fade-up" data-aos-delay="100"> */}
        <h1 className="title">{title}</h1>
        <div className="items">
          {items.map((item, index) => (
            <div className="item" data-aos="fade-right" data-aos-delay="200" data-aos-once key={index}>
              <PText>{item}</PText>
            </div>
          ))}
        </div>
      {/* </div> */}
    </AboutItemStyles>
  );
}
