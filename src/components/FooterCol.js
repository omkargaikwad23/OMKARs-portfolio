import React from 'react';
import styled from 'styled-components';

const ColStyle = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
    cursor: pointer;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent-color);
    }
  }
`;

export default function FooterCol({
  heading = 'Col Heading',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    },
  ],
}) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleLinkClick = (item) => {
    if (item.type === 'Link' && item.path.startsWith('/')) {
      const sectionId = item.path.substring(1);
      scrollToSection(sectionId);
    }
  };

  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <a onClick={() => handleLinkClick(item)}>{item.title}</a>
            ) : (
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}
