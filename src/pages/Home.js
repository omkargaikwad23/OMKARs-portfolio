import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdSearch } from 'react-icons/md';
import HeroSection from "../components/HeroSection";
import DosSection from "../components/DosSection";
import PText from "../components/PText";
import AboutImg from "../assets/images/ogstanding.jpg";
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
    background: var(--primary-bg);

    .top-section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6rem;
      margin-bottom: 8rem;
    }

    .left {
      flex: 3;
    }

    .right {
      flex: 2;
    }

    .about__subheading {
      font-size: 2.4rem;
      margin-bottom: 2rem;
      color: var(--text-secondary);
      
      span {
        background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 600;
      }
    }

    .about__heading {
      font-size: 4.2rem;
      font-weight: 700;
      margin-bottom: 3rem;
      color: var(--text-primary);
      line-height: 1.2;
    }

    .about__info {
      margin-bottom: 4rem;
      
      .para {
        max-width: 100%;
        font-size: 1.7rem;
        line-height: 1.7;
        color: var(--text-secondary);
      }
    }

    .right img {
      width: 100%;
      height: auto;
      border-radius: 16px;
      box-shadow: var(--shadow-lg);
    }

    .about__cv_button {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 1.6rem;
      background: var(--accent-color);
      color: white;
      padding: 1.2rem 2.4rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        background: var(--accent-hover);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
      }

      a {
        color: white;
        text-decoration: none;
      }
    }

    @media only screen and (max-width: 768px) {
      padding: 8rem 0;

      .top-section {
        flex-direction: column;
        gap: 4rem;
        text-align: center;
      }

      .about__subheading {
        font-size: 2rem;
      }

      .about__heading {
        font-size: 3.2rem;
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
      gap: 3rem;
      margin-top: 4rem;
    }

    .projects__searchBar {
      position: relative;
      max-width: 400px;
      margin: 3rem 0;
    }

    .projects__searchBar input {
      width: 100%;
      font-size: 1.6rem;
      padding: 1.2rem 4rem 1.2rem 1.6rem;
      background: var(--secondary-bg);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      outline: none;
      color: var(--text-primary);
      transition: all 0.3s ease;

      &:focus {
        border-color: var(--accent-color);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
      }

      &::placeholder {
        color: var(--text-light);
      }
    }

    .projects__searchBar .searchIcon {
      position: absolute;
      width: 2rem;
      height: 2rem;
      right: 1.2rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-light);
      pointer-events: none;
    }

    @media only screen and (max-width: 768px) {
      padding: 8rem 0;

      .projects__searchBar {
        max-width: 100%;
      }

      .projects__allItems {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 2rem;
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
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);

  useEffect(() => {
    if (searchText === '') {
      setProjectsData(ProjectsInfo);
      return;
    }
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase()) || 
        item.desc.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };

  return (
    <HomeStyles>
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
        <DosSection />
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="top-section">
            <div className="left" data-aos="zoom-out" data-aos-delay="400" data-aos-once>
              <p className="about__subheading">
                Hi, I am <span>Omkar Gaikwad</span>
              </p>
              <h2 className="about__heading">
                A Software Engineer <br /> AI & Big Data Enthusiast
              </h2>
              <div className="about__info">
                <PText>
                  From the quiet streets of a small village in Dharashiv district to the
                  bustling tech landscape of today, my journey has been one of continuous growth
                  and discovery. After graduating from Pune Institute of Computer Technology,
                  I've embarked on my professional career as a Software Engineer specializing
                  in AI and Big Data, where I'm passionate about leveraging cutting-edge
                  technologies to solve real-world problems. <br /> <br />I'm a 
                  persistent and passionate engineer who thrives on transforming complex data
                  into meaningful insights and building intelligent solutions. With a strong
                  foundation in algorithms, data structures, and machine learning concepts,
                  I've expanded my expertise across web development, data engineering, and
                  artificial intelligence. My experience spans from building scalable web
                  applications to developing data-driven AI solutions. When I'm not immersed
                  in code or exploring the latest in AI, you'll find me enjoying movies or
                  competing at the table tennis table.
                </PText>
              </div>
              <div className="about__cv_button">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/177GtuT6KOqd25sWr5WZBu32YFm9mat9x/view?usp=sharing"
                  rel="noreferrer"
                >
                  Download CV 📄
                </a>
              </div>
            </div>
            <div className="right" data-aos="zoom-out" data-aos-delay="400" data-aos-once>
              <img src={AboutImg} alt="Omkar Gaikwad" />
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
            heading="Projects"
            subheading="some of my recent works"
          />
          
          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Search projects..."
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          
          <div className="projects__allItems">
            {projectsData.map((item) => (
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
