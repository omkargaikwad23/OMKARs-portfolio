import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: ${props => props.align || 'center'};
  margin-bottom: ${props => props.spacing || '4rem'};

  .section-title__badge {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.6rem 1.2rem;
    background: rgba(37, 99, 235, 0.08);
    border: 1px solid rgba(37, 99, 235, 0.2);
    border-radius: 20px;
    width: fit-content;
    margin: 0 ${props => props.align === 'left' ? '0' : props.align === 'right' ? '0 0 auto' : 'auto'};
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--accent-color);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(37, 99, 235, 0.12);
      transform: translateY(-1px);
    }

    .badge-icon {
      font-size: 1.2rem;
    }
  }

  .section-title__subheading {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--text-light);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    line-height: 1.4;
  }

  .section-title__heading {
    font-family: 'Montserrat Bold', sans-serif;
    font-size: clamp(3.2rem, 5vw, 5.6rem);
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    line-height: 1.1;
    letter-spacing: -0.02em;
    
    .highlight {
      background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
        border-radius: 2px;
        opacity: 0.3;
      }
    }
  }

  .section-title__description {
    font-size: 1.8rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 1rem 0 0 0;
    max-width: ${props => props.maxWidth || '60ch'};
    margin-left: ${props => props.align === 'left' ? '0' : props.align === 'right' ? 'auto' : 'auto'};
    margin-right: ${props => props.align === 'left' ? 'auto' : props.align === 'right' ? '0' : 'auto'};
  }

  .section-title__decorative-line {
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
    border-radius: 2px;
    margin: 2rem ${props => props.align === 'left' ? '0' : props.align === 'right' ? '0 0 auto' : 'auto'};
    transition: width 0.3s ease;
  }

  &:hover .section-title__decorative-line {
    width: 80px;
  }

  /* Size Variants */
  &.large {
    .section-title__heading {
      font-size: clamp(4rem, 6vw, 7.2rem);
    }
    
    .section-title__subheading {
      font-size: 1.8rem;
    }
    
    .section-title__description {
      font-size: 2rem;
    }
  }

  &.small {
    margin-bottom: 2rem;
    
    .section-title__heading {
      font-size: clamp(2.4rem, 4vw, 3.6rem);
    }
    
    .section-title__subheading {
      font-size: 1.4rem;
    }
    
    .section-title__description {
      font-size: 1.6rem;
    }
  }

  /* Style Variants */
  &.minimal {
    .section-title__badge,
    .section-title__decorative-line {
      display: none;
    }
  }

  &.accent {
    .section-title__heading {
      color: var(--accent-color);
    }
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 3rem;
    
    .section-title__heading {
      font-size: clamp(2.8rem, 7vw, 4.8rem);
    }
    
    .section-title__subheading {
      font-size: 1.4rem;
    }
    
    .section-title__description {
      font-size: 1.6rem;
      max-width: none;
      margin-left: auto;
      margin-right: auto;
    }
    
    .section-title__badge {
      margin: 0 auto;
    }
    
    .section-title__decorative-line {
      margin: 2rem auto;
    }
    
    &.large {
      .section-title__heading {
        font-size: clamp(3.2rem, 8vw, 5.6rem);
      }
    }
    
    &.small {
      .section-title__heading {
        font-size: clamp(2.4rem, 6vw, 3.2rem);
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .section-title__subheading {
      font-size: 1.3rem;
      letter-spacing: 0.1em;
    }
    
    .section-title__description {
      font-size: 1.5rem;
      line-height: 1.7;
    }
  }
`;

export default function SectionTitle({
  badge = null,
  subheading = null,
  heading = 'Section Title',
  description = null,
  align = 'center',
  size = 'medium',
  variant = 'default',
  spacing = '4rem',
  maxWidth = '60ch',
  showLine = true,
  className = '',
  children
}) {
  const classNames = `
    section-title
    ${size === 'large' ? 'large' : ''}
    ${size === 'small' ? 'small' : ''}
    ${variant === 'minimal' ? 'minimal' : ''}
    ${variant === 'accent' ? 'accent' : ''}
    ${className}
  `.trim();

  return (
    <SectionTitleStyle 
      className={classNames}
      align={align}
      spacing={spacing}
      maxWidth={maxWidth}
    >
      {badge && (
        <div className="section-title__badge">
          {badge.icon && <span className="badge-icon">{badge.icon}</span>}
          <span>{badge.text}</span>
        </div>
      )}
      
      {subheading && (
        <p className="section-title__subheading">{subheading}</p>
      )}
      
      <h2 className="section-title__heading">
        {typeof heading === 'string' ? (
          heading.includes('<highlight>') ? (
            heading.split('<highlight>').map((part, index) => {
              if (index === 0) return part;
              const [highlighted, rest] = part.split('</highlight>');
              return (
                <React.Fragment key={index}>
                  <span className="highlight">{highlighted}</span>
                  {rest}
                </React.Fragment>
              );
            })
          ) : heading
        ) : heading}
      </h2>
      
      {description && (
        <p className="section-title__description">{description}</p>
      )}
      
      {showLine && variant !== 'minimal' && (
        <div className="section-title__decorative-line"></div>
      )}

      {children}
    </SectionTitleStyle>
  );
}
