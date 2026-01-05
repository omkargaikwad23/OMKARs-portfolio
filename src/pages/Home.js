import React from "react";
import styled from "styled-components";
import HeroSection from "../components/sections/HeroSection";
import DosSection from "../components/sections/DosSection";
import AboutSection from "../components/sections/AboutSection";
import AwardsSection from "../components/sections/AwardsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactHeroSection from "../components/sections/ContactHeroSection";

const HomeStyles = styled.div`
  min-height: 100vh;
  background: var(--primary-bg);
`;

function Home() {
  return (
    <HomeStyles>
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
        <DosSection />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactHeroSection />
    </HomeStyles>
  );
}

export default Home;
