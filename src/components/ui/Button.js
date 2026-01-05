import React from 'react';
import styled from 'styled-components';
import { scrollToSection } from '../../utils/smoothScroll';

const ButtonStyle = styled.div`
  display: inline-block;
  
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.2rem 2.4rem;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-family: inherit;
    letter-spacing: 0.02em;
    min-width: 120px;
    text-align: center;
    border: none;
    transform-origin: center;
    backdrop-filter: blur(10px);
    
    /* Primary Button Styles - Starry Luxury Theme */
    background: ${(props) =>
      props.outline 
        ? 'var(--glass-bg)' 
        : 'var(--gradient-primary)'};
    color: ${(props) => 
      props.outline ? 'var(--accent-color)' : 'white'};
    border: ${(props) => 
      props.outline ? '2px solid var(--accent-color)' : 'none'};
    background-clip: padding-box;
    box-shadow: ${(props) =>
      props.outline 
        ? 'var(--shadow-md)' 
        : 'var(--shadow-md)'};
    
    /* Outline specific styles */
    ${(props) => props.outline && `
      backdrop-filter: var(--glass-backdrop);
    `}
    
    /* Enhanced Hover Effects */
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      background: ${(props) =>
        props.outline 
          ? 'var(--gradient-primary)' 
          : 'var(--gradient-primary)'};
      color: white;
      
      &::before {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
      
      &::after {
        opacity: 0.8;
        transform: rotate(180deg);
      }
    }
    
    /* Active State with spring animation */
    &:active {
      transform: translateY(-1px) scale(0.98);
      transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Enhanced Focus State for Accessibility */
    &:focus {
      outline: none;
    }
    
    /* Enhanced Ripple Effect */
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
      transform: translate(-50%, -50%) scale(0);
      transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      opacity: 0;
      z-index: 1;
    }
    
    /* Shimmer Effect */
    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(255, 255, 255, 0.2) 50%,
        transparent 70%
      );
      transform: rotate(45deg);
      transition: transform 0.6s ease;
      opacity: 0;
      z-index: 1;
    }
    
    /* Hover Shimmer Animation */
    &:hover::after {
      animation: shimmer 1.5s ease-in-out;
    }
    
    /* Text and Icon Container */
    .button-content {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
    
    /* Icon Support with enhanced animations */
    .button-icon {
      width: 1.8rem;
      height: 1.8rem;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    &:hover .button-icon {
      transform: translateX(3px) rotate(5deg) scale(1.1);
    }
  }
  
  /* Secondary Button Variant - Stellar Theme */
  &.secondary .button {
    background: var(--glass-bg);
    color: var(--text-primary);
    border: 2px solid var(--border-color);
    backdrop-filter: var(--glass-backdrop);
    box-shadow: var(--shadow-md);
    
    &:hover {
      background: var(--secondary-bg);
      border-color: var(--accent-color);
      color: var(--accent-color);
      box-shadow: var(--shadow-lg);
      transform: translateY(-2px);
    }
  }
  
  /* Success Button Variant */
  &.success .button {
    background: linear-gradient(135deg, var(--success-color), #059669, #047857);
    color: white;
    box-shadow: 0 8px 25px -8px rgba(16, 185, 129, 0.4), 0 4px 12px -4px rgba(16, 185, 129, 0.3);
    
    &:hover {
      background: linear-gradient(135deg, #059669, #047857, #065f46);
      box-shadow: 0 15px 40px -10px rgba(16, 185, 129, 0.6), 0 8px 20px -8px rgba(16, 185, 129, 0.4);
    }
  }
  
  /* Danger Button Variant */
  &.danger .button {
    background: linear-gradient(135deg, #EF4444, #DC2626, #B91C1C);
    color: white;
    box-shadow: 0 8px 25px -8px rgba(239, 68, 68, 0.4), 0 4px 12px -4px rgba(239, 68, 68, 0.3);
    
    &:hover {
      background: linear-gradient(135deg, #DC2626, #B91C1C, #991B1B);
      box-shadow: 0 15px 40px -10px rgba(239, 68, 68, 0.6), 0 8px 20px -8px rgba(239, 68, 68, 0.4);
    }
  }
  
  /* Tertiary Button Variant - For different actions */
  &.tertiary .button {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1));
    color: #8B5CF6;
    border: 2px solid rgba(139, 92, 246, 0.3);
    backdrop-filter: var(--glass-backdrop);
    box-shadow: var(--shadow-sm);
    
    &:hover {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.15));
      border-color: #8B5CF6;
      color: #8B5CF6;
      box-shadow: var(--shadow-md), 0 0 20px rgba(139, 92, 246, 0.4);
      transform: translateY(-3px) scale(1.02);
    }
  }

  /* Glass Button Variant */
  &.glass .button {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--text-primary);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }
  }
  
  /* Large Button Size */
  &.large .button {
    font-size: 1.8rem;
    padding: 1.6rem 3.2rem;
    border-radius: 16px;
    
    .button-icon {
      width: 2rem;
      height: 2rem;
    }
  }
  
  /* Small Button Size */
  &.small .button {
    font-size: 1.4rem;
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    min-width: 80px;
    
    .button-icon {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
  
  /* Full Width Button */
  &.full-width .button {
    width: 100%;
    justify-content: center;
  }
  
  /* Disabled State */
  &.disabled .button {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
    filter: grayscale(50%);
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
  
  /* Enhanced Loading State */
  &.loading .button {
    color: transparent;
    position: relative;
    cursor: wait;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin: -10px 0 0 -10px;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      opacity: 0.8;
    }
    
    .button-content {
      opacity: 0;
    }
  }
  
  /* Keyframe Animations */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes shimmer {
    0% { transform: rotate(45deg) translateX(-200%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: rotate(45deg) translateX(200%); opacity: 0; }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 8px 25px -8px rgba(37, 99, 235, 0.4); }
    50% { box-shadow: 0 8px 25px -8px rgba(37, 99, 235, 0.8); }
  }
  
  /* Floating Animation for CTA buttons */
  &.floating .button {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }
  
  /* Mobile Responsive */
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.5rem;
      padding: 1.2rem 2.2rem;
      
      &:hover {
        transform: translateY(-2px) scale(1.01);
      }
    }
    
    &.large .button {
      font-size: 1.7rem;
      padding: 1.4rem 2.8rem;
    }
    
    &.small .button {
      font-size: 1.3rem;
      padding: 0.8rem 1.4rem;
    }
  }
  
  @media only screen and (max-width: 480px) {
    .button {
      font-size: 1.4rem;
      padding: 1.1rem 2rem;
    }
  }
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    .button {
      transition: none;
      animation: none;
      
      &:hover {
        transform: none;
      }
      
      &::before, &::after {
        display: none;
      }
    }
  }
`;

export default function Button({
  btnText = 'Button',
  btnLink = '#',
  outline = false,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  floating = false,
  icon = null,
  onClick = null,
  ...props
}) {
  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    
    if (onClick) {
      onClick(e);
    } else if (btnLink.startsWith('#')) {
      e.preventDefault();
      scrollToSection(btnLink.substring(1));
    }
  };

  const buttonClasses = `
    ${variant} 
    ${size} 
    ${outline ? 'outline' : ''} 
    ${fullWidth ? 'full-width' : ''} 
    ${disabled ? 'disabled' : ''} 
    ${loading ? 'loading' : ''} 
    ${floating ? 'floating' : ''}
  `.trim();

  const buttonContent = (
    <span className="button-content">
      {btnText}
      {icon && <span className="button-icon">{icon}</span>}
    </span>
  );

  return (
    <ButtonStyle
      outline={outline}
      className={`button-wrapper ${buttonClasses}`}
      {...props}
    >
      {btnLink && !onClick ? (
        <a
          href={btnLink}
          className="button"
          onClick={handleClick}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
        >
          {buttonContent}
        </a>
      ) : (
        <button
          className="button"
          onClick={handleClick}
          disabled={disabled || loading}
          aria-label={loading ? 'Loading...' : btnText}
        >
          {buttonContent}
        </button>
      )}
    </ButtonStyle>
  );
}
