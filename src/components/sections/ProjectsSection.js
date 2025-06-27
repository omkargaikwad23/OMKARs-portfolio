import React, { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../ui/SectionTitle";
import ProjectItem from "../cards/ProjectItem";
import ProjectsInfo from "../../assets/data/projects";
import { MdRocket } from "react-icons/md";

const ProjectsSectionStyles = styled.section`
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
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      background: var(--accent-color);
      color: white;
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    &.secondary {
      background: var(--accent-color);
      color: white;

      &:hover {
        background: var(--accent-hover);
      }
    }

    .arrow {
      font-size: 1.8rem;
      transition: transform 0.3s ease;
    }

    &:hover .arrow {
      transform: translateX(3px);
    }

    &.secondary:hover .arrow {
      transform: translateX(-3px);
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 8rem 0;

    .projects__allItems {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 3rem;
      margin: 4rem 0 3rem 0;
    }

    .viewAll__button {
      padding: 1.2rem 2.4rem;
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .projects__allItems {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }
`;

function ProjectsSection() {
  // State to manage whether to show all projects or just featured ones
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Get featured projects for homepage
  const featuredProjects = ProjectsInfo.filter(project => project.featured).slice(0, 4);
  
  // Decide which projects to show
  const projectsToShow = showAllProjects ? ProjectsInfo : featuredProjects;

  return (
    <ProjectsSectionStyles id="projects">
      <div className="container">
        <SectionTitle
          badge={{ icon: <MdRocket />, text: "Portfolio" }}
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
    </ProjectsSectionStyles>
  );
}

export default ProjectsSection; 