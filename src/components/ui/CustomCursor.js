import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CursorStyles = styled.div`
  .cursor {
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent-color);
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: width 0.15s ease-out, height 0.15s ease-out, border-color 0.15s ease-out, background-color 0.15s ease-out;
    will-change: transform, width, height;
    backface-visibility: hidden;
    perspective: 1000px;

    &::after {
      content: '';
      width: 4px;
      height: 4px;
      background: var(--accent-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.15s ease-out;
      will-change: transform, opacity;
    }

    &.cursor-hover {
      width: 60px;
      height: 60px;
      border-color: var(--accent-color);
      background: rgba(37, 99, 235, 0.1);
      backdrop-filter: blur(5px);
      
      &::after {
        opacity: 0;
      }
    }

    &.cursor-click {
      width: 80px;
      height: 80px;
      border-color: var(--success-color);
      background: rgba(16, 185, 129, 0.2);
      
      &::after {
        width: 8px;
        height: 8px;
        background: var(--success-color);
      }
    }

    &.cursor-text {
      width: 2px;
      height: 24px;
      border-radius: 2px;
      background: var(--accent-color);
      border: none;
      
      &::after {
        display: none;
      }
    }

    &.cursor-link {
      width: 50px;
      height: 50px;
      border-color: var(--accent-color);
      background: rgba(37, 99, 235, 0.15);
      backdrop-filter: blur(8px);
      
      &::after {
        content: '→';
        width: auto;
        height: auto;
        background: none;
        color: var(--accent-color);
        font-size: 16px;
        font-weight: bold;
      }
    }

    &.cursor-button {
      width: 70px;
      height: 70px;
      border-color: var(--success-color);
      background: rgba(16, 185, 129, 0.15);
      backdrop-filter: blur(10px);
      
      &::after {
        content: '✦';
        width: auto;
        height: auto;
        background: none;
        color: var(--success-color);
        font-size: 18px;
        animation: rotate 2s linear infinite;
      }
    }

    &.cursor-card {
      width: 45px;
      height: 45px;
      border-color: var(--accent-color);
      background: rgba(37, 99, 235, 0.12);
      backdrop-filter: blur(6px);
      
      &::after {
        width: 6px;
        height: 6px;
        background: var(--accent-color);
        animation: pulse 1.5s ease-in-out infinite;
      }
    }

    &.cursor-hidden {
      opacity: 0;
    }
  }

  .cursor-trail {
    width: 8px;
    height: 8px;
    background: var(--accent-color);
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9998;
    opacity: 0.4;
    will-change: transform;
    backface-visibility: hidden;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    .cursor,
    .cursor-trail {
      display: none;
    }
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  // Use refs for better performance
  const cursorRef = React.useRef(null);
  const trailRef = React.useRef(null);
  const positionRef = React.useRef({ x: 0, y: 0 });
  const trailPositionRef = React.useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    // Add cursor-none class to body for better cursor hiding
    document.body.classList.add('cursor-none');
    
    // Additional macOS/Safari cursor hiding techniques
    document.documentElement.style.cursor = 'url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"), none';
    document.body.style.cursor = 'url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"), none';

    const updateCursorPosition = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      // Update trail position with smooth following
      const trailSpeed = 0.15;
      trailPositionRef.current = {
        x: trailPositionRef.current.x + (positionRef.current.x - trailPositionRef.current.x) * trailSpeed,
        y: trailPositionRef.current.y + (positionRef.current.y - trailPositionRef.current.y) * trailSpeed
      };

      // Update DOM elements directly for better performance
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPositionRef.current.x}px, ${trailPositionRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Enhanced hover detection for different elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const tagName = target.tagName.toLowerCase();
      const classList = target.classList;

      if (classList.contains('timeline__card') || 
          classList.contains('cta__card') || 
          classList.contains('project__item') ||
          classList.contains('card__container')) {
        setCursorState('cursor-card');
      } else if (tagName === 'button' || 
                 classList.contains('cta__button') || 
                 classList.contains('cv__button') ||
                 classList.contains('hero__actions') ||
                 classList.contains('tab__button')) {
        setCursorState('cursor-button');
      } else if (tagName === 'a' || 
                 classList.contains('logo') ||
                 classList.contains('nav-items') ||
                 target.closest('a')) {
        setCursorState('cursor-link');
      } else if (tagName === 'input' || 
                 tagName === 'textarea' || 
                 classList.contains('form-control')) {
        setCursorState('cursor-text');
      } else if (target.closest('[data-hover]') || 
                 classList.contains('skill__tag') ||
                 classList.contains('stat__item') ||
                 classList.contains('interest__item')) {
        setCursorState('cursor-hover');
      } else {
        setCursorState('');
      }
    };

    const handleMouseDown = () => setCursorState(prev => `${prev} cursor-click`);
    const handleMouseUp = () => setCursorState(prev => prev.replace(' cursor-click', ''));

    // Event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      // Remove cursor-none class when component unmounts
      document.body.classList.remove('cursor-none');
      
      // Restore default cursor
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
      
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
      }, []);

  return (
    <CursorStyles>
      <div
        ref={cursorRef}
        className={`cursor ${cursorState} ${!isVisible ? 'cursor-hidden' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      <div
        ref={trailRef}
        className="cursor-trail"
        style={{
          transform: `translate3d(${trailPosition.x}px, ${trailPosition.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </CursorStyles>
  );
};

export default CustomCursor; 