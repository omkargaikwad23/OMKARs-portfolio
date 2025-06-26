import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

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

  .navItems .closeNavIcon {
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

    .hide-item {
      transform: translateY(-10px);
      opacity: 0;
      visibility: hidden;
    }
  }

  @media only screen and (max-width: 480px) {
    .nav-items {
      width: calc(100vw - 2rem);
      right: 1rem;
      left: 1rem;
    }
  }
`;

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => setShowNav(false);

  return (
    <NavStyles className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <NavLink to="/" className="logo" onClick={closeNav}>
          OG
        </NavLink>

        <div
          className="mobile-menu-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={(e) => e.key === 'Enter' && setShowNav(!showNav)}
          tabIndex={0}
          aria-label="Toggle mobile menu"
        >
          <MdMenu />
        </div>

        <ul className={`nav-items ${showNav ? 'show' : 'hide-item'}`}>
          <div
            className="closeNavIcon"
            onClick={closeNav}
            role="button"
            onKeyDown={(e) => e.key === 'Enter' && closeNav()}
            tabIndex={0}
            aria-label="Close menu"
          >
            <MdClose />
          </div>
          <li>
            <NavLink
              to="/"
              exact
              onClick={closeNav}
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeNav}
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              onClick={closeNav}
              activeClassName="active"
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={closeNav}
              activeClassName="active"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeNav}
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </NavStyles>
  );
}
