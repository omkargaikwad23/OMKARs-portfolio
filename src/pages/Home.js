import React, { useState } from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import DosSection from "../components/DosSection";
import SectionTitle from "../components/SectionTitle";
import ExpCard from "../components/ExperienceCard";
import ProjectItem from "../components/ProjectItem";
import ContactSection from "../components/ContactSection";
import { ExperienceData, VolunteersData } from "../assets/data/staticDisplayData";
import ProjectsInfo from "../assets/data/projects";

const HomeStyles = styled.div`
  min-height: 100vh;
  background: var(--primary-bg);

  /* About Section Styles */
  .about-section {
    padding: 10rem 0;
    background: var(--secondary-bg);

    .journey__content {
      max-width: 800px;
      margin: 6rem auto 0;
      text-align: center;
    }

    .journey__story {
      background: var(--primary-bg);
      padding: 4rem;
      border-radius: 20px;
      box-shadow: var(--shadow-md);
      border: 1px solid var(--border-color);
    }

    .story__title {
      font-size: 2.8rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 2rem;
    }

    .story__text {
      font-size: 1.7rem;
      line-height: 1.7;
      color: var(--text-secondary);
      margin-bottom: 2rem;
      text-align: left;
    }

    .personal__interests {
      margin: 3rem 0;
      text-align: left;

      h4 {
        font-size: 2rem;
        color: var(--text-primary);
        margin-bottom: 1.5rem;
        font-weight: 600;
      }

      .interests__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      .interest__item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1.5rem;
        background: var(--secondary-bg);
        border-radius: 12px;
        border: 1px solid var(--border-color);
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .interest__icon {
          font-size: 2rem;
        }

        .interest__text {
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
      }
    }

    .cv__section {
      margin-top: 3rem;
      text-align: center;
    }

    .cv__button {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      padding: 1.2rem 2.4rem;
      background: var(--accent-color);
      color: white;
      text-decoration: none;
      border-radius: 12px;
      font-size: 1.6rem;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: var(--shadow-sm);

      &:hover {
        background: var(--accent-hover);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
      }

      .cv__icon {
        font-size: 1.8rem;
      }
    }

    @media only screen and (max-width: 768px) {
      padding: 8rem 0;

      .journey__story {
        padding: 3rem 2rem;
      }

      .story__title {
        font-size: 2.4rem;
      }

      .story__text {
        font-size: 1.6rem;
      }

      .interests__grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      .interest__item {
        padding: 0.8rem 1rem;
      }
    }

    @media only screen and (max-width: 480px) {
      .interests__grid {
        grid-template-columns: 1fr;
      }
    }
  }

  /* Experience Section Styles */
  .experience-section {
    padding: 10rem 0;
    background: var(--secondary-bg);

    .experience__section {
      margin-bottom: 8rem;
    }

    .experience__grid {
      display: grid;
      gap: 3rem;
      margin-top: 4rem;
    }

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

    @media only screen and (max-width: 768px) {
      padding: 8rem 0;

      .experience__stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        margin: 3rem 0 4rem 0;
        padding: 2rem;
      }

      .stat__item .stat__number {
        font-size: 2.8rem;
      }
    }

    @media only screen and (max-width: 480px) {
      .experience__stats {
        grid-template-columns: 1fr;
      }
    }
  }

  /* Projects Section Styles */
  .projects-section {
    padding: 10rem 0;
    background: var(--primary-bg);

    .projects__allItems {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 4rem;
      margin: 6rem 0 5rem 0;
    }

    .projects__viewAll {
      text-align: center;
      margin-top: 4rem;
    }

    .viewAll__button {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      padding: 1.4rem 3rem;
      background: transparent;
      color: var(--accent-color);
      border: 2px solid var(--accent-color);
      border-radius: 12px;
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        background: var(--accent-color);
        color: white;
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
      }

      &.secondary {
        background: var(--text-secondary);
        color: white;
        border-color: var(--text-secondary);

        &:hover {
          background: var(--text-primary);
          border-color: var(--text-primary);
        }
      }

      .arrow {
        font-size: 1.8rem;
        transition: transform 0.3s ease;
      }

      &:hover .arrow {
        transform: translateX(5px);
      }

      &.secondary:hover .arrow {
        transform: translateX(-5px);
      }
    }

    @media only screen and (max-width: 768px) {
      padding: 8rem 0;

      .projects__allItems {
        grid-template-columns: 1fr;
        gap: 3rem;
        margin: 4rem 0 3rem 0;
      }

      .viewAll__button {
        padding: 1.2rem 2.4rem;
        font-size: 1.4rem;
      }
    }
  }

  /* Contact Section Styles */
  .contact-section {
    padding: 10rem 0;
    background: var(--secondary-bg);

    .contact__hero {
      text-align: center;
      margin-bottom: 6rem;
    }

    .contact__cta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
      margin: 4rem 0 6rem 0;
    }

    .cta__card {
      background: var(--primary-bg);
      padding: 3rem 2rem;
      border-radius: 16px;
      border: 1px solid var(--border-color);
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
        border-color: var(--border-hover);
      }

      .cta__icon {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
      }

      .cta__title {
        font-size: 2rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }

      .cta__desc {
        font-size: 1.5rem;
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 2rem;
      }

      .cta__button {
        display: inline-flex;
        align-items: center;
        gap: 0.8rem;
        padding: 1rem 2rem;
        background: var(--accent-color);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1.4rem;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }

        &.secondary {
          background: transparent;
          color: var(--accent-color);
          border: 1px solid var(--accent-color);

          &:hover {
            background: var(--accent-color);
            color: white;
          }
        }
      }
    }

    .availability__section {
      background: var(--primary-bg);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 3rem;
      margin: 4rem 0;
      text-align: center;
    }

    .availability__badge {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.8rem 1.6rem;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.2);
      border-radius: 50px;
      margin-bottom: 1.5rem;

      .status-dot {
        width: 8px;
        height: 8px;
        background: var(--success-color);
        border-radius: 50%;
        animation: pulse 2s infinite;
      }

      span {
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--success-color);
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
    }

    .availability__title {
      font-size: 2.4rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .availability__desc {
      font-size: 1.6rem;
      color: var(--text-secondary);
      line-height: 1.6;
      max-width: 60ch;
      margin: 0 auto;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    @media only screen and (max-width: 768px) {
      padding: 8rem 0;

      .contact__cta {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin: 3rem 0 4rem 0;
      }

      .cta__card {
        padding: 2.5rem 2rem;
      }

      .availability__section {
        padding: 2.5rem 2rem;
        margin: 3rem 0;
      }
    }
  }
`;

function Home() {
  // State to manage whether to show all projects or just featured ones
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Get featured projects for homepage
  const featuredProjects = ProjectsInfo.filter(project => project.featured).slice(0, 4);
  
  // Decide which projects to show
  const projectsToShow = showAllProjects ? ProjectsInfo : featuredProjects;

  return (
    <HomeStyles>
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
        <DosSection />
      </section>

      {/* About Section - Enhanced with unique content */}
      <section id="about" className="about-section">
        <div className="container">
          <SectionTitle
            badge={{ icon: "🎯", text: "About Me" }}
            heading="My <highlight>Journey</highlight>"
            description="From a small village in Dharashiv district to the tech industry - here's my story of continuous growth and passion for technology."
            align="center"
            size="large"
          />
          
          <div className="journey__content">
            <div className="journey__story">
              <h3 className="story__title">The Journey So Far</h3>
              <p className="story__text">
                My path from the quiet streets of a small village to the bustling tech landscape 
                has been one of continuous growth and discovery. After graduating from Pune Institute 
                of Computer Technology, I've embarked on my professional career as a Software Engineer 
                specializing in AI and Big Data, where I'm passionate about leveraging cutting-edge 
                technologies to solve real-world problems.
              </p>
              
              <p className="story__text">
                I'm a persistent and passionate engineer who thrives on transforming complex data 
                into meaningful insights and building intelligent solutions. With a strong foundation 
                in algorithms, data structures, and machine learning concepts, I've expanded my expertise 
                across web development, data engineering, and artificial intelligence.
              </p>
              
              <div className="personal__interests">
                <h4>When I'm not coding...</h4>
                <div className="interests__grid">
                  <div className="interest__item">
                    <span className="interest__icon">🎬</span>
                    <span className="interest__text">Movie Enthusiast</span>
                  </div>
                  <div className="interest__item">
                    <span className="interest__icon">🏓</span>
                    <span className="interest__text">Table Tennis Player</span>
                  </div>
                  <div className="interest__item">
                    <span className="interest__icon">📚</span>
                    <span className="interest__text">Continuous Learner</span>
                  </div>
                  <div className="interest__item">
                    <span className="interest__icon">🌱</span>
                    <span className="interest__text">Tech Explorer</span>
                  </div>
                </div>
              </div>
              
              <div className="cv__section">
                <a
                  className="cv__button"
                  target="_blank"
                  href="https://drive.google.com/file/d/177GtuT6KOqd25sWr5WZBu32YFm9mat9x/view?usp=sharing"
                  rel="noreferrer"
                >
                  <span className="cv__icon">📄</span>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <SectionTitle
            badge={{ icon: "💼", text: "Professional Journey" }}
            heading="Experience & <highlight>Growth</highlight>"
            description="My professional journey spans across innovative startups and established companies, focusing on building scalable systems and leading technical initiatives."
            align="center"
            size="large"
          />

          <div className="experience__stats">
            <div className="stat__item">
              <div className="stat__number">3+</div>
              <div className="stat__label">Years Experience</div>
            </div>
            <div className="stat__item">
              <div className="stat__number">5</div>
              <div className="stat__label">Companies</div>
            </div>
            <div className="stat__item">
              <div className="stat__number">10+</div>
              <div className="stat__label">Technologies</div>
            </div>
            <div className="stat__item">
              <div className="stat__number">200+</div>
              <div className="stat__label">Students Impacted</div>
            </div>
          </div>

          <div className="experience__section">
            <SectionTitle
              subheading="Professional Experience"
              heading="Work Experience"
              align="left"
              size="medium"
              showLine={false}
            />
            <div className="experience__grid">
              {ExperienceData.slice().reverse().map((item) => (
                <ExpCard
                  key={item.id}
                  role={item.role}
                  duration={item.duration}
                  org={item.org}
                  location={item.loc}
                  tasks={item.tasks}
                  skills={item.skills}
                  type="experience"
                />
              ))}
            </div>
          </div>

          <div className="experience__section">
            <SectionTitle
              subheading="Community Involvement"
              heading="Volunteer Experience"
              align="left"
              size="medium"
              showLine={false}
            />
            <div className="experience__grid">
              {VolunteersData.map((mem) => (
                <ExpCard
                  key={mem.id}
                  role={mem.role}
                  duration={mem.duration}
                  org={mem.org}
                  location={mem.loc}
                  tasks={mem.tasks}
                  skills={mem.skills}
                  type="volunteer"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <SectionTitle
            badge={{ icon: "🚀", text: "Portfolio" }}
            heading={showAllProjects ? "All <highlight>Projects</highlight>" : "Featured <highlight>Projects</highlight>"}
            description={showAllProjects ? 
              "Complete showcase of my work - from enterprise applications to innovative solutions that solve real-world problems." :
              "A showcase of my best work - from enterprise applications to innovative solutions that solve real-world problems."
            }
            align="center"
            size="large"
          />
          
          <div className="projects__allItems">
            {projectsToShow.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                tech={item.tech}
                url={item.url}
              />
            ))}
          </div>
          
          {!showAllProjects && (
            <div className="projects__viewAll">
              <button 
                className="viewAll__button"
                onClick={() => setShowAllProjects(true)}
              >
                View All Projects ({ProjectsInfo.length})
                <span className="arrow">→</span>
              </button>
            </div>
          )}
          
          {showAllProjects && (
            <div className="projects__viewAll">
              <button 
                className="viewAll__button secondary"
                onClick={() => setShowAllProjects(false)}
              >
                Show Featured Only
                <span className="arrow">←</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact__hero">
            <SectionTitle
              badge={{ icon: "💬", text: "Get In Touch" }}
              heading="Let's <highlight>Connect</highlight>"
              description="Whether you're looking to hire, collaborate on a project, or just want to say hello, I'd love to hear from you. Let's discuss how we can work together!"
              align="center"
              size="large"
            />
          </div>

          <div className="contact__cta">
            <div className="cta__card">
              <div className="cta__icon">💼</div>
              <h3 className="cta__title">Hiring Opportunities</h3>
              <p className="cta__desc">
                Looking for a software engineer? Let's discuss how I can contribute to your team's success.
              </p>
              <a href="mailto:omkargaikwad9552@gmail.com?subject=Job Opportunity" className="cta__button">
                Send Email 📧
              </a>
            </div>

            <div className="cta__card">
              <div className="cta__icon">🚀</div>
              <h3 className="cta__title">Project Collaboration</h3>
              <p className="cta__desc">
                Have an interesting project? Let's explore how we can build something amazing together.
              </p>
              <a href="tel:+919579714193" className="cta__button secondary">
                Call Me 📞
              </a>
            </div>

            <div className="cta__card">
              <div className="cta__icon">👋</div>
              <h3 className="cta__title">Just Say Hello</h3>
              <p className="cta__desc">
                Want to connect or have a question? I'm always happy to meet new people and chat!
              </p>
              <a href="https://www.linkedin.com/in/omkar-gaikwad-b83a80192/" target="_blank" rel="noreferrer" className="cta__button secondary">
                Connect on LinkedIn 🔗
              </a>
            </div>
          </div>

          <div className="availability__section">
            <div className="availability__badge">
              <div className="status-dot"></div>
              <span>Available for work</span>
            </div>
            <h3 className="availability__title">Ready for New Opportunities</h3>
            <p className="availability__desc">
              I'm currently open to full-time opportunities, freelance projects, and consulting work. 
              I typically respond to emails within 24 hours and would love to discuss how we can work together.
            </p>
          </div>

          <ContactSection />
        </div>
      </section>
    </HomeStyles>
  );
}

export default Home;
