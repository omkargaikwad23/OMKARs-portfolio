import React, { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../ui/SectionTitle";
import ProjectItem from "../cards/ProjectItem";
import ProjectsInfo from "../../assets/data/projects";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";
import StaggeredReveal from "../ui/StaggeredReveal";
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
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 768px) {
    padding: 8rem 0;

    .projects__allItems {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 3rem;
      margin: 4rem 0 3rem 0;
    }
  }

  @media only screen and (max-width: 480px) {
    .projects__allItems {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .projects__viewAll {
      flex-direction: column;
      align-items: center;
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
        <ScrollReveal animation="fadeIn" delay={100}>
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
        </ScrollReveal>
        
        <StaggeredReveal 
          className="projects__allItems"
          animation="scaleIn"
          staggerDelay={200}
        >
          {projectsToShow.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              tech={item.tech}
              url={item.url}
              featured={item.featured}
              status={item.status}
              isInternal={item.isInternal}
            />
          ))}
        </StaggeredReveal>
        
        <ScrollReveal animation="fadeUp" delay={300}>
          <div className="projects__viewAll">
            {!showAllProjects ? (
              <Button
                btnText={`View All Projects (${ProjectsInfo.length})`}
                onClick={() => setShowAllProjects(true)}
                icon={<span>→</span>}
                size="large"
                floating
              />
            ) : (
              <Button
                btnText="Show Featured Only"
                onClick={() => setShowAllProjects(false)}
                icon={<span>←</span>}
                variant="secondary"
                size="large"
              />
            )}
          </div>
        </ScrollReveal>
      </div>
    </ProjectsSectionStyles>
  );
}

export default ProjectsSection; 