import React from 'react';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
  background: var(--secondary-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: var(--border-hover);
  }

  .projectItem__img {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    background: var(--border-color);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    /* Placeholder for internal projects */
    .projectItem__placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
      gap: 1rem;
      
      .placeholder-icon {
        font-size: 4rem;
        opacity: 0.8;
      }
      
      .placeholder-text {
        font-size: 1.4rem;
        color: var(--text-secondary);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
    }

    /* Overlay for better text readability */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(139, 92, 246, 0.1));
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    &:hover::before {
      opacity: 1;
    }

    /* External link indicator */
    .external-link-icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 3.2rem;
      height: 3.2rem;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transform: translate(10px, -10px);
      transition: all 0.3s ease;
      z-index: 2;
      color: var(--accent-color);
      font-size: 1.6rem;
    }

    &:hover .external-link-icon {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  .projectItem__content {
    padding: 2.4rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .projectItem__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .projectItem__title {
    font-size: 2.2rem;
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1.3;
    margin: 0;
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-color);
    }
  }

  .projectItem__desc {
    font-size: 1.6rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin: 0;
    flex: 1;
  }

  .projectItem__tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-color);
  }

  .projectItem__tech__tag {
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 1.2rem;
    background: rgba(37, 99, 235, 0.08);
    color: var(--accent-color);
    border: 1px solid rgba(37, 99, 235, 0.2);
    border-radius: 20px;
    font-size: 1.3rem;
    font-weight: 500;
    transition: all 0.3s ease;
    letter-spacing: 0.02em;

    &:hover {
      background: rgba(37, 99, 235, 0.12);
      border-color: rgba(37, 99, 235, 0.3);
      transform: translateY(-1px);
    }
  }

  .projectItem__footer {
    padding: 0 2.4rem 2.4rem 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .projectItem__status {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.3rem;
    color: var(--text-light);

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--success-color);
      
      &.internal {
        background: #f59e0b;
      }
    }
  }

  .projectItem__internal-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.2rem;
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.3);
    border-radius: 8px;
    font-size: 1.3rem;
    font-weight: 500;
    color: #f59e0b;
  }

  .projectItem__cta {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.6rem;
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      border-color: var(--accent-color);
      color: var(--accent-color);
      background: rgba(37, 99, 235, 0.05);
      transform: translateY(-1px);
    }

    .cta-icon {
      font-size: 1.2rem;
      transition: transform 0.3s ease;
    }

    &:hover .cta-icon {
      transform: translateX(2px);
    }
  }

  /* Featured Project Variant */
  &.featured {
    border: 2px solid var(--accent-color);
    
    .projectItem__img {
      height: 280px;
    }

    &::before {
      content: 'Featured';
      position: absolute;
      top: 1rem;
      left: 1rem;
      padding: 0.4rem 0.8rem;
      background: var(--accent-color);
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      z-index: 3;
    }
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 200px;
    }

    .projectItem__content {
      padding: 2rem;
      gap: 1rem;
    }

    .projectItem__title {
      font-size: 2rem;
    }

    .projectItem__desc {
      font-size: 1.5rem;
    }

    .projectItem__tech {
      gap: 0.6rem;
    }

    .projectItem__tech__tag {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
    }

    .projectItem__footer {
      padding: 0 2rem 2rem 2rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .projectItem__content {
      padding: 1.5rem;
    }

    .projectItem__footer {
      padding: 0 1.5rem 1.5rem 1.5rem;
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
    }

    .projectItem__cta {
      justify-content: center;
    }
  }
`;

export default function ProjectItem({
  img = null,
  title = 'Project Name',
  desc = 'A modern web application built with cutting-edge technologies to solve real-world problems.',
  tech = ['React', 'Node.js', 'MongoDB'],
  url = null,
  featured = false,
  status = 'Live',
  className = '',
  isInternal = false
}) {
  const isExternalLink = url && (url.startsWith('http') || url.startsWith('https'));
  const hasImage = img !== null;

  return (
    <ProjectItemStyles className={`project-item ${featured ? 'featured' : ''} ${className}`}>
      <div className="projectItem__img">
        {hasImage ? (
          <img src={img} alt={title} />
        ) : (
          <div className="projectItem__placeholder">
            <span className="placeholder-icon">{isInternal ? '🔒' : '📁'}</span>
            <span className="placeholder-text">{isInternal ? 'Internal Project' : 'No Preview'}</span>
          </div>
        )}
        {isExternalLink && (
          <div className="external-link-icon">
            🔗
          </div>
        )}
      </div>

      <div className="projectItem__content">
        <div className="projectItem__header">
          <h3 className="projectItem__title">{title}</h3>
        </div>
        
        <p className="projectItem__desc">{desc}</p>

        <div className="projectItem__tech">
          {tech.map((techItem, index) => (
            <span key={index} className="projectItem__tech__tag">
              {techItem}
            </span>
          ))}
        </div>
      </div>

      <div className="projectItem__footer">
        <div className="projectItem__status">
          <div className={`status-dot ${isInternal ? 'internal' : ''}`}></div>
          <span>{status}</span>
        </div>
        
        {url ? (
          <a 
            href={url}
            className="projectItem__cta"
            target={isExternalLink ? "_blank" : undefined}
            rel={isExternalLink ? "noopener noreferrer" : undefined}
          >
            <span>View Project</span>
            <span className="cta-icon">→</span>
          </a>
        ) : isInternal ? (
          <span className="projectItem__internal-badge">
            🔒 Internal
          </span>
        ) : null}
      </div>
    </ProjectItemStyles>
  );
}
