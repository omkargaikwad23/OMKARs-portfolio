import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { scrollToSection, scrollToTop } from '../../utils/smoothScroll';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;

  &.scrolled {
    padding: 1rem 0;
    box-shadow: var(--shadow-md);
    background: rgba(255, 255, 255, 0.98);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .logo {
    font-family: 'Montserrat Bold', sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
    letter-spacing: -0.02em;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      color: var(--accent-color);
      transform: translateY(-1px);
    }
  }

  .nav-items {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    li {
      position: relative;
    }

    a {
      display: inline-block;
      font-family: 'Inter', sans-serif;
      padding: 1rem 1.5rem;
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--text-secondary);
      border-radius: 8px;
      transition: all 0.3s ease;
      position: relative;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        color: var(--accent-color);
        background-color: rgba(37, 99, 235, 0.08);
        transform: translateY(-1px);
      }

      &.active {
        color: var(--accent-color);
        background-color: rgba(37, 99, 235, 0.12);
        font-weight: 600;
      }

      &.active::after {
        content: '';
        position: absolute;
        bottom: -1.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        background-color: var(--accent-color);
        border-radius: 50%;
      }
    }
  }

  .mobile-menu-icon {
    position: relative;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: all 0.3s ease;
    color: var(--text-primary);

    &:hover {
      background-color: var(--border-color);
      color: var(--accent-color);
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  .nav-items .closeNavIcon {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 0;

    .nav-container {
      width: 95%;
      padding: 0 1rem;
    }

    .mobile-menu-icon {
      display: flex;
    }

    .nav-items {
      position: absolute;
      top: calc(100% + 1rem);
      right: 1rem;
      width: 280px;
      max-width: calc(100vw - 2rem);
      background: var(--secondary-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      box-shadow: var(--shadow-lg);
      padding: 2rem;
      flex-direction: column;
      gap: 0;
      transform: translateY(-10px);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;

      &.show {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .closeNavIcon {
        display: flex;
        width: 3rem;
        height: 3rem;
        margin: -0.5rem -0.5rem 1rem auto;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        color: var(--text-secondary);
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--border-color);
          color: var(--text-primary);
        }

        svg {
          width: 2rem;
          height: 2rem;
        }
      }

      li {
        width: 100%;
        margin-bottom: 0.5rem;

        &:last-child {
          margin-bottom: 0;
        }
      }

      a {
        width: 100%;
        text-align: left;
        padding: 1.2rem 1.5rem;
        font-size: 1.6rem;
        border-radius: 8px;

        &.active::after {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .nav-container {
      width: 98%;
      padding: 0 0.5rem;
    }

    .nav-items {
      right: 0.5rem;
      width: calc(100vw - 1rem);
    }
  }
`;

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            // Update URL hash to match current section
            const currentHash = window.location.hash.replace('#', '');
            if (currentHash !== section) {
              window.history.replaceState(null, null, `#${section}`);
            }
            break;
          }
        }
      }
    };

    // Handle initial page load with hash
    const handleInitialHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'experience', 'projects', 'contact'].includes(hash)) {
        setActiveSection(hash);
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }, 100);
        }
      } else {
        // If no valid hash, ensure we're at home and clear any invalid hash
        setActiveSection('home');
        window.history.replaceState(null, null, window.location.pathname);
      }
    };

    // Call on initial load
    handleInitialHash();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleInitialHash);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleInitialHash);
    };
  }, []);

  const closeNav = () => setShowNav(false);

  const handleScrollToSection = (sectionId, event) => {
    event.preventDefault();
    scrollToSection(sectionId);
    event.target.blur();
    closeNav();
  };

  const handleScrollToTop = (event) => {
    if (event) event.preventDefault();
    scrollToTop();
    if (event && event.target) event.target.blur();
    closeNav();
  };

  return (
    <NavStyles className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <a href="#home" className="logo" onClick={handleScrollToTop}>
          Omkar.
        </a>
        <ul className={showNav ? 'nav-items show' : 'nav-items'}>
          <div className="closeNavIcon" onClick={closeNav}>
            <MdClose />
          </div>
          <li>
            <a
              href="#home"
              onClick={(e) => handleScrollToSection('home', e)}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleScrollToSection('about', e)}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleScrollToSection('experience', e)}
              className={activeSection === 'experience' ? 'active' : ''}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleScrollToSection('projects', e)}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection('contact', e)}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          className="mobile-menu-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          tabIndex={0}
        >
          <MdMenu />
        </div>
      </div>
    </NavStyles>
  );
}
