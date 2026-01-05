import React, { useState, useEffect } from 'react';
import { MdClose, MdMenu, MdHome, MdPerson, MdWork, MdApps, MdEmail } from 'react-icons/md';
import { scrollToSection, scrollToTop } from '../../utils/smoothScroll';
import './Navbar.css';

const navItems = [
  { id: 'home', label: 'Home', icon: MdHome },
  { id: 'about', label: 'About', icon: MdPerson },
  { id: 'experience', label: 'Experience', icon: MdWork },
  { id: 'projects', label: 'Projects', icon: MdApps },
  { id: 'contact', label: 'Contact', icon: MdEmail },
];

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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={handleScrollToTop}>
          OG
        </a>
        <ul className={`nav-items ${showNav ? 'show' : ''}`}>
          <div className="nav-indicator" style={indicatorStyle}></div>
          <div className="close-nav-icon" onClick={closeNav}>
            <MdClose />
          </div>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollToSection(item.id, e)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
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
    </nav>
  );
}
