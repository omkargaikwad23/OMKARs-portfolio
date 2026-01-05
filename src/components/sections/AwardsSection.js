import React from 'react';
import styled from 'styled-components';
import { MdEmojiEvents, MdArticle, MdCode, MdSchool, MdStars } from 'react-icons/md';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';
import StaggeredReveal from '../ui/StaggeredReveal';

const AwardsSectionStyles = styled.section`
  padding: 10rem 0;
  background: var(--primary-bg);
  position: relative;
  overflow: hidden;

  /* Subtle background pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse 60% 40% at 80% 0%, rgba(79, 195, 247, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse 40% 30% at 20% 100%, rgba(139, 92, 246, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }

  .awards__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    margin-top: 5rem;
    position: relative;
    z-index: 1;
  }

  .award__card {
    display: block;
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 3rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: inherit;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--accent-color), #8b5cf6);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
      border-color: var(--border-hover);

      &::before {
        opacity: 1;
      }

      .award__icon {
        transform: scale(1.1);
        background: rgba(37, 99, 235, 0.15);
      }
    }
  }

  .award__header {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 1.5rem;
  }

  .award__icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: rgba(37, 99, 235, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s ease;

    svg {
      font-size: 2.4rem;
      color: var(--accent-color);
    }

    &.gold {
      background: rgba(245, 158, 11, 0.15);
      svg {
        color: #f59e0b;
      }
    }

    &.purple {
      background: rgba(139, 92, 246, 0.15);
      svg {
        color: #8b5cf6;
      }
    }

    &.green {
      background: rgba(16, 185, 129, 0.15);
      svg {
        color: #10b981;
      }
    }

    &.blue {
      background: rgba(37, 99, 235, 0.15);
      svg {
        color: #2563eb;
      }
    }
  }

  .award__content {
    flex: 1;
  }

  .award__title {
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  .award__org {
    font-size: 1.4rem;
    color: var(--accent-color);
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  .award__year {
    font-size: 1.3rem;
    color: var(--text-light);
  }

  .award__desc {
    font-size: 1.5rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-top: 1rem;
  }

  .award__badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 20px;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--accent-color);
    margin-top: 1.5rem;
  }

  .award__card--link {
    cursor: pointer;
    
    &:hover .award__link-indicator {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .award__link-indicator {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;
    font-size: 1.3rem;
    color: var(--accent-color);
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }

  .award__footer {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  @media only screen and (max-width: 900px) {
    .awards__grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 8rem 0;

    .award__card {
      padding: 2.5rem;
    }

    .award__header {
      gap: 1.5rem;
    }

    .award__icon {
      width: 48px;
      height: 48px;

      svg {
        font-size: 2rem;
      }
    }

    .award__title {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .award__card {
      padding: 2rem;
    }

    .award__header {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

const awards = [
  {
    id: 1,
    icon: <MdEmojiEvents />,
    iconClass: 'blue',
    title: '1st Place - PubMatic Hackathon 2025',
    org: 'PubMatic',
    year: '2025',
    desc: 'Won first place for building the AI-powered Deal Debugger using LangGraph state machines, which now reduces customer support tickets by 50% in production.',
    badge: '1st Place'
  },
  {
    id: 2,
    icon: <MdStars />,
    iconClass: 'blue',
    title: 'Bias Towards Action Award',
    org: 'PubMatic',
    year: '2024',
    desc: 'Recognized for exceptional initiative, ownership, and proactive problem-solving. Demonstrated consistent bias towards action in driving impactful engineering solutions.',
    badge: 'Excellence'
  },
  {
    id: 3,
    icon: <MdArticle />,
    iconClass: 'purple',
    title: 'IEEE Conference Publication',
    org: 'IEEE ESCI 2023',
    year: '2023',
    desc: 'Co-authored research paper on Marathi-English code-mixed sentiment analysis, demonstrating superior SVM performance on under-resourced Indian language data.',
    link: 'https://ieeexplore.ieee.org/document/10100304',
    badge: 'Published'
  },
  {
    id: 4,
    icon: <MdCode />,
    iconClass: 'green',
    title: 'LeetCode Top 5%',
    org: 'LeetCode',
    year: 'Ongoing',
    desc: 'Achieved 1800+ rating by solving 1100+ problems across arrays, graphs, dynamic programming, trees, and greedy patterns. Consistently ranked in top 5% globally.',
    badge: 'Top 5%'
  },
  {
    id: 5,
    icon: <MdSchool />,
    iconClass: 'blue',
    title: '99.31% MHT-CET Percentile',
    org: 'Maharashtra State Entrance Exam',
    year: '2019',
    desc: 'Ranked 1st in batch of 130 students. Secured admission to Pune Institute of Computer Technology (PICT), one of the top engineering colleges in Maharashtra.',
    badge: 'Top 1%'
  }
];

export default function AwardsSection() {
  return (
    <AwardsSectionStyles>
      <div className="container">
        <ScrollReveal animation="fadeUp" delay={100}>
          <SectionTitle
            badge={{ icon: <MdEmojiEvents />, text: "Recognition" }}
            heading="Awards & <highlight>Achievements</highlight>"
            description="Milestones and recognition earned through competitive programming, research, and building impactful solutions."
            align="center"
            size="large"
          />
        </ScrollReveal>

        <StaggeredReveal 
          className="awards__grid"
          animation="fadeUp"
          staggerDelay={150}
        >
          {awards.map((award) => {
            const CardWrapper = award.link ? 'a' : 'div';
            const cardProps = award.link ? {
              href: award.link,
              target: '_blank',
              rel: 'noopener noreferrer'
            } : {};
            
            return (
              <CardWrapper 
                key={award.id} 
                className={`award__card ${award.link ? 'award__card--link' : ''}`}
                {...cardProps}
              >
                <div className="award__header">
                  <div className={`award__icon ${award.iconClass}`}>
                    {award.icon}
                  </div>
                  <div className="award__content">
                    <h3 className="award__title">{award.title}</h3>
                    <div className="award__org">{award.org}</div>
                    <div className="award__year">{award.year}</div>
                  </div>
                </div>
                <p className="award__desc">{award.desc}</p>
                <div className="award__footer">
                  <div className="award__badge">{award.badge}</div>
                  {award.link && (
                    <span className="award__link-indicator">
                      View Paper →
                    </span>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </StaggeredReveal>
      </div>
    </AwardsSectionStyles>
  );
}

