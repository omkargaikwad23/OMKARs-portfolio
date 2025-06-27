import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdClose, MdMenu, MdHome, MdPerson, MdWork, MdApps, MdEmail } from 'react-icons/md';
import { scrollToSection, scrollToTop } from '../../utils/smoothScroll';

const navItems = [
  { id: 'home', label: 'Home', icon: MdHome },
  { id: 'about', label: 'About', icon: MdPerson },
  { id: 'experience', label: 'Experience', icon: MdWork },
  { id: 'projects', label: 'Projects', icon: MdApps },
  { id: 'contact', label: 'Contact', icon: MdEmail },
];

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 40px -12px rgba(0, 0, 0, 0.05);

  &.scrolled {
    padding: 1rem 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px) saturate(180%);
    box-shadow: 0 8px 40px -12px rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    position: relative;
  }

  .logo {
    font-family: 'Montserrat Bold', sans-serif;
    font-size: 2.6rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--accent-color), #6366F1, #8B5CF6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-decoration: none;
    letter-spacing: -0.02em;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '✨';
      font-size: 1.8rem;
      opacity: 0;
      transform: scale(0.8) rotate(-10deg);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
      transform: translateY(-2px);
      
      &::before {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }
  }

  .nav-items {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 0.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    position: relative;

    .nav-indicator {
      position: absolute;
      top: 0.5rem;
      height: calc(100% - 1rem);
      background: linear-gradient(135deg, var(--accent-color), #6366F1);
      border-radius: 16px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0.9;
      z-index: 0;
      box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
    }

    li {
      position: relative;
      z-index: 1;
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      font-family: 'Inter', sans-serif;
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--text-secondary);
      border-radius: 16px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      cursor: pointer;
      text-decoration: none;
      white-space: nowrap;
      outline: none;
      border: none;

      .nav-icon {
        width: 1.8rem;
        height: 1.8rem;
        opacity: 0.7;
        transition: all 0.3s ease;
      }

      .nav-text {
        transition: all 0.3s ease;
      }

      &:hover {
        color: var(--accent-color);
        transform: translateY(-1px);
        
        .nav-icon {
          opacity: 1;
          transform: scale(1.1);
        }
      }

      &:focus {
        outline: none;
        border: none;
      }

      &.active {
        color: white;
        font-weight: 600;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        
        .nav-icon {
          opacity: 1;
          transform: scale(1.05);
        }
      }
    }
  }

  .mobile-menu-icon {
    position: relative;
    width: 4.5rem;
    height: 4.5rem;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--text-primary);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.95);
      color: var(--accent-color);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(0) scale(0.95);
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
      transition: all 0.3s ease;
    }
  }

  .nav-items .closeNavIcon {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 1.2rem 0;

    .nav-container {
      width: 95%;
      padding: 0 1rem;
    }

    .logo {
      font-size: 2.2rem;
    }

    .mobile-menu-icon {
      display: flex;
    }

    .nav-items {
      position: absolute;
      top: calc(100% + 1.5rem);
      right: 1rem;
      width: 320px;
      max-width: calc(100vw - 2rem);
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px) saturate(180%);
      border-radius: 20px;
      box-shadow: 0 20px 60px -12px rgba(0, 0, 0, 0.25);
      padding: 2rem;
      flex-direction: column;
      gap: 0.5rem;
      transform: translateY(-20px) scale(0.95);
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

      .nav-indicator {
        display: none;
      }

      &.show {
        transform: translateY(0) scale(1);
        opacity: 1;
        visibility: visible;
      }

      .closeNavIcon {
        display: flex;
        width: 3.5rem;
        height: 3.5rem;
        margin: -1rem -1rem 1.5rem auto;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        color: var(--text-secondary);
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          background: rgba(255, 255, 255, 0.8);
          color: var(--text-primary);
          transform: rotate(90deg);
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
        padding: 1.5rem 2rem;
        font-size: 1.6rem;
        border-radius: 12px;
        background: transparent;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        border: none;

        &:hover {
          background: rgba(37, 99, 235, 0.08);
          transform: translateX(4px);
        }

        &:focus {
          outline: none;
          border: none;
        }

        &.active {
          background: linear-gradient(135deg, var(--accent-color), #6366F1);
          color: white;
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
          
          .nav-icon {
            opacity: 1;
          }
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
      padding: 1.5rem;
    }

    .logo {
      font-size: 2rem;
    }
  }
`;

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
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
        setActiveSection('home');
        window.history.replaceState(null, null, window.location.pathname);
      }
    };

    handleInitialHash();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleInitialHash);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleInitialHash);
    };
  }, []);

  // Update indicator position when active section changes
  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = document.querySelector(`.nav-items a[href="#${activeSection}"]`);
      if (activeElement && window.innerWidth > 768) {
        const navItems = activeElement.closest('.nav-items');
        if (navItems) {
          const navRect = navItems.getBoundingClientRect();
          const activeRect = activeElement.getBoundingClientRect();
          
          const left = activeRect.left - navRect.left;
          const width = activeRect.width;
          
          setIndicatorStyle({
            left: `${left}px`,
            width: `${width}px`,
          });
        }
      } else {
        setIndicatorStyle({
          left: '0px',
          width: '0px',
        });
      }
    };

    requestAnimationFrame(updateIndicator);
    
    window.addEventListener('resize', updateIndicator);
    
    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeSection]);

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
          <div className="nav-indicator" style={indicatorStyle}></div>
          <div className="closeNavIcon" onClick={closeNav}>
            <MdClose />
          </div>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollToSection(item.id, e)}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  <IconComponent className="nav-icon" />
                  <span className="nav-text">{item.label}</span>
                </a>
              </li>
            );
          })}
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
