import React, { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import { ExperienceData, VolunteersData } from "../../assets/data/staticDisplayData";
import { MdWork, MdLocationOn, MdSchedule, MdExpandMore, MdExpandLess, MdVolunteerActivism } from "react-icons/md";

const ExperienceSectionStyles = styled.section`
  padding: 10rem 0;
  background: var(--secondary-bg);

  .experience__stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    margin: 4rem 0 6rem 0;
    padding: 3rem;
    background: var(--primary-bg);
    border-radius: 16px;
    border: 1px solid var(--border-color);
  }

  .stat__item {
    text-align: center;
    
    .stat__number {
      font-size: 3.2rem;
      font-weight: 700;
      color: var(--accent-color);
      margin-bottom: 0.5rem;
      line-height: 1;
    }
    
    .stat__label {
      font-size: 1.4rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 500;
    }
  }

  .experience__tabs {
    position: relative;
    display: flex;
    background: var(--primary-bg);
    border-radius: 20px;
    padding: 0.8rem;
    gap: 0;
    margin: 4rem 0 6rem 0;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: var(--shadow-lg);
    border: 2px solid var(--border-color);
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0.8rem;
      left: 0.8rem;
      width: calc(50% - 0.8rem);
      height: calc(100% - 1.6rem);
      background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
      border-radius: 14px;
      transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      box-shadow: 
        0 4px 20px rgba(37, 99, 235, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.1) inset;
      z-index: 1;
    }
    
    &.volunteer-active::before {
      transform: translateX(100%);
    }
  }

  .tab-button-wrapper {
    flex: 1;
    position: relative;
    z-index: 2;
    
    .tab-button {
      width: 100%;
      padding: 1.6rem 2.4rem;
      font-size: 1.6rem;
      font-weight: 700;
      border-radius: 14px;
      background: transparent;
      color: var(--text-secondary);
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      position: relative;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      
      .tab-icon {
        font-size: 1.8rem;
        transition: all 0.3s ease;
      }
      
      .tab-text {
        transition: all 0.3s ease;
      }
      
      &:hover:not(.active) {
        color: var(--accent-color);
        transform: translateY(-1px);
        
        .tab-icon {
          transform: scale(1.1);
        }
      }
      
      &.active {
        color: white;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        
        .tab-icon {
          transform: scale(1.05);
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
        }
        
        .tab-text {
          font-weight: 800;
        }
      }
      
      &:focus {
        outline: none;
      }
      
      &:active {
        transform: translateY(0);
      }
    }
  }

  .tab-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 50%;
    background: linear-gradient(90deg, var(--accent-color), #8b5cf6);
    border-radius: 2px 2px 0 0;
    transition: transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
    z-index: 3;
    
    &.volunteer-active {
      transform: translateX(100%);
    }
  }

  .timeline__container {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    padding: 2rem 0;
  }

  .timeline__line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, var(--accent-color), rgba(37, 99, 235, 0.3));
    border-radius: 2px;
  }

  .timeline__item {
    display: flex;
    margin-bottom: 4rem;
    position: relative;

    &:nth-child(odd) {
      flex-direction: row;
      
      .timeline__content {
        margin-right: 3rem;
        text-align: left;
      }
      
      .timeline__dot {
        order: 2;
      }
      
      .timeline__spacer {
        order: 3;
        flex: 1;
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
      
      .timeline__content {
        margin-left: 3rem;
        text-align: left;
      }
      
      .timeline__dot {
        order: 2;
      }
      
      .timeline__spacer {
        order: 3;
        flex: 1;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .timeline__content {
    flex: 1;
    max-width: 450px;
  }

  .timeline__card {
    background: var(--primary-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
      opacity: 0.8;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
      border-color: var(--border-hover);
    }

    &.expanded {
      box-shadow: var(--shadow-lg);
      border-color: var(--accent-color);
    }
  }

  .timeline__dot {
    width: 16px;
    height: 16px;
    background: var(--accent-color);
    border-radius: 50%;
    margin: 1rem 0;
    position: relative;
    z-index: 2;
    box-shadow: 0 0 0 4px var(--secondary-bg), 0 0 0 8px rgba(37, 99, 235, 0.2);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 0 0 4px var(--secondary-bg), 0 0 0 12px rgba(37, 99, 235, 0.3);
    }
  }

  .timeline__spacer {
    flex: 1;
  }

  .card__header {
    margin-bottom: 1.5rem;
  }

  .card__role {
    font-family: "Montserrat SemiBold", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.5rem 0;
    line-height: 1.3;
  }

  .card__org {
    font-size: 1.7rem;
    font-weight: 500;
    color: var(--accent-color);
    margin: 0 0 1rem 0;
  }

  .card__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .meta__item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.3rem;
    color: var(--text-light);
    
    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  .card__summary {
    font-size: 1.5rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .card__expand {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.3rem;
    color: var(--accent-color);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0.6rem 1rem;
    border: 1px solid rgba(37, 99, 235, 0.2);
    border-radius: 8px;
    background: rgba(37, 99, 235, 0.04);
    width: fit-content;

    &:hover {
      color: var(--accent-hover);
      background: rgba(37, 99, 235, 0.08);
      border-color: rgba(37, 99, 235, 0.3);
      transform: translateY(-1px);
    }

    svg {
      width: 1.4rem;
      height: 1.4rem;
      flex-shrink: 0;
    }
  }

  .card__details {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;

    &.expanded {
      opacity: 1;
      max-height: 1000px;
    }
  }

  .tasks__list {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;

    li {
      position: relative;
      font-size: 1.5rem;
      line-height: 1.6;
      color: var(--text-secondary);
      margin-bottom: 1rem;
      padding-left: 2rem;

      &::before {
        content: '•';
        position: absolute;
        left: 0.5rem;
        top: 0;
        color: var(--accent-color);
        font-weight: bold;
        font-size: 1.8rem;
        line-height: 1.4;
      }
    }
  }

  .skills__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .skill__tag {
    padding: 0.4rem 0.8rem;
    background: rgba(37, 99, 235, 0.06);
    color: var(--accent-color);
    border: 1px solid rgba(37, 99, 235, 0.15);
    border-radius: 12px;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(37, 99, 235, 0.1);
      transform: translateY(-1px);
    }
  }

  @media only screen and (max-width: 768px) {
    .experience__stats {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      margin: 3rem 0 4rem 0;
      padding: 2rem;
    }

    .timeline__line {
      left: 2rem;
    }

    .timeline__item {
      flex-direction: row !important;
      
      .timeline__content {
        margin-left: 3rem !important;
        margin-right: 0 !important;
        text-align: left !important;
      }
      
      .timeline__dot {
        order: 1 !important;
        margin-left: 1.2rem;
      }
      
      .timeline__spacer {
        display: none;
      }
    }

    .timeline__card {
      padding: 2rem;
    }

    .card__role {
      font-size: 1.8rem;
    }

    .card__org {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .experience__stats {
      grid-template-columns: 1fr;
    }

    .experience__tabs {
      flex-direction: column;
      gap: 0.8rem;
      max-width: 100%;
      padding: 1rem;
      
      &::before {
        width: calc(100% - 2rem);
        height: calc(50% - 1rem);
        top: 1rem;
        left: 1rem;
        transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      
      &.volunteer-active::before {
        transform: translateY(100%);
      }
    }
    
    .tab-button-wrapper .tab-button {
      padding: 1.4rem 2rem;
      font-size: 1.5rem;
    }

    .timeline__card {
      padding: 1.5rem;
    }
  }
`;

function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('professional');
  const [expandedCards, setExpandedCards] = useState(new Set());

  const toggleCardExpansion = (id) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const renderTimelineItem = (item, type, index) => {
    const isExpanded = expandedCards.has(`${type}-${item.id}`);
    const summary = item.tasks[0]; // Use first task as summary
    const isEven = index % 2 === 1; // Adjust for 0-based index
    const animationType = isEven ? 'slideInRight' : 'slideInLeft';
    const delay = index * 100 + 100; // Much faster: 100ms, 200ms, 300ms, etc.
    
          return (
        <ScrollReveal 
          key={item.id} 
          animation={animationType} 
          delay={delay}
          threshold={0.1}
          className="timeline__item"
        >
        <div className="timeline__content">
          <div 
            className={`timeline__card ${isExpanded ? 'expanded' : ''}`}
            onClick={() => toggleCardExpansion(`${type}-${item.id}`)}
          >
            <div className="card__header">
              <h3 className="card__role">{item.role}</h3>
              <h4 className="card__org">{item.org}</h4>
              <div className="card__meta">
                <div className="meta__item">
                  <MdSchedule />
                  <span>{item.duration}</span>
                </div>
                <div className="meta__item">
                  <MdLocationOn />
                  <span>{item.loc}</span>
                </div>
              </div>
            </div>
            
            <p className="card__summary">{summary}</p>
            
            <div className="card__expand">
              <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
              {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
            </div>
            
            <div className={`card__details ${isExpanded ? 'expanded' : ''}`}>
              {item.tasks.length > 1 && (
                <ul className="tasks__list">
                  {item.tasks.slice(1).map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              )}
              
              {item.skills && item.skills.length > 0 && (
                <div className="skills__list">
                  {item.skills.map((skill, index) => (
                    <span key={index} className="skill__tag">{skill}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="timeline__dot"></div>
        <div className="timeline__spacer"></div>
      </ScrollReveal>
    );
  };

  const currentData = activeTab === 'professional' ? ExperienceData.slice().reverse() : VolunteersData;

  return (
    <ExperienceSectionStyles id="experience">
      <div className="container">
        <ScrollReveal animation="fadeIn" delay={0}>
          <SectionTitle
            badge={{ icon: <MdWork />, text: "Professional Journey" }}
            heading="Experience & <highlight>Growth</highlight>"
            description="My career journey showcasing professional growth, technical achievements, and community contributions through an interactive timeline."
            align="center"
            size="large"
          />
        </ScrollReveal>

        <ScrollReveal animation="scaleIn" delay={100}>
          <div className="experience__stats">
            <div className="stat__item">
              <div className="stat__number">2.5+</div>
              <div className="stat__label">Years Experience</div>
            </div>
            <div className="stat__item">
              <div className="stat__number">12TB</div>
              <div className="stat__label">Data Processed/Day</div>
            </div>
            <div className="stat__item">
              <div className="stat__number">50%</div>
              <div className="stat__label">Tickets Reduced</div>
            </div>
            <div className="stat__item">
              <div className="stat__number">$20K</div>
              <div className="stat__label">Daily DSP Impact</div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={200}>
          <div className={`experience__tabs ${activeTab === 'volunteer' ? 'volunteer-active' : ''}`}>
            <div className="tab-button-wrapper">
              <button 
                className={`tab-button ${activeTab === 'professional' ? 'active' : ''}`}
                onClick={() => setActiveTab('professional')}
              >
                <span className="tab-icon"><MdWork /></span>
                <span className="tab-text">Professional</span>
              </button>
            </div>
            <div className="tab-button-wrapper">
              <button 
                className={`tab-button ${activeTab === 'volunteer' ? 'active' : ''}`}
                onClick={() => setActiveTab('volunteer')}
              >
                <span className="tab-icon"><MdVolunteerActivism /></span>
                <span className="tab-text">Volunteer</span>
              </button>
            </div>
            <div className={`tab-indicator ${activeTab === 'volunteer' ? 'volunteer-active' : ''}`}></div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeIn" delay={0}>
          <div className="timeline__container">
            <div className="timeline__line"></div>
            {currentData.map((item, index) => renderTimelineItem(item, activeTab, index))}
          </div>
        </ScrollReveal>
      </div>
    </ExperienceSectionStyles>
  );
}

export default ExperienceSection; 