import React from 'react';
import styled from 'styled-components';

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
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-family: inherit;
    letter-spacing: 0.02em;
    min-width: 120px;
    text-align: center;
    border: none;
    
    /* Primary Button Styles */
    background: ${(props) =>
      props.outline ? 'transparent' : 'var(--accent-color)'};
    color: ${(props) => 
      props.outline ? 'var(--accent-color)' : 'white'};
    border: 2px solid var(--accent-color);
    
    /* Hover Effects */
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${(props) =>
        props.outline 
          ? 'var(--shadow-md)' 
          : '0 8px 25px -8px rgba(37, 99, 235, 0.5)'};
      background: ${(props) =>
        props.outline 
          ? 'var(--accent-color)' 
          : 'var(--accent-hover)'};
      color: white;
    }
    
    /* Active State */
    &:active {
      transform: translateY(0);
      transition: transform 0.1s ease;
    }
    
    /* Focus State for Accessibility */
    &:focus {
      outline: 2px solid var(--accent-color);
      outline-offset: 2px;
    }
    
    /* Ripple Effect */
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      transform: translate(-50%, -50%);
      transition: width 0.3s ease, height 0.3s ease;
    }
    
    &:hover::before {
      width: 100%;
      height: 100%;
    }
    
    /* Icon Support */
    .button-icon {
      width: 1.8rem;
      height: 1.8rem;
      transition: transform 0.3s ease;
    }
    
    &:hover .button-icon {
      transform: translateX(2px);
    }
  }
  
  /* Secondary Button Variant */
  &.secondary .button {
    background: var(--border-color);
    color: var(--text-primary);
    border-color: var(--border-color);
    
    &:hover {
      background: var(--border-hover);
      border-color: var(--border-hover);
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
    }
  }
  
  /* Large Button Size */
  &.large .button {
    font-size: 1.8rem;
    padding: 1.5rem 3rem;
    border-radius: 10px;
  }
  
  /* Small Button Size */
  &.small .button {
    font-size: 1.4rem;
    padding: 0.8rem 1.6rem;
    border-radius: 6px;
    min-width: 80px;
  }
  
  /* Full Width Button */
  &.full-width .button {
    width: 100%;
    justify-content: center;
  }
  
  /* Disabled State */
  &.disabled .button {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
  
  /* Loading State */
  &.loading .button {
    color: transparent;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  /* Mobile Responsive */
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.5rem;
      padding: 1.1rem 2rem;
    }
    
    &.large .button {
      font-size: 1.6rem;
      padding: 1.3rem 2.5rem;
    }
    
    &.small .button {
      font-size: 1.3rem;
      padding: 0.7rem 1.4rem;
    }
  }
  
  @media only screen and (max-width: 480px) {
    .button {
      font-size: 1.4rem;
      padding: 1rem 1.8rem;
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
  icon = null,
  onClick = null,
  className = '',
  ...props
}) {
  const buttonClasses = `
    ${variant === 'secondary' ? 'secondary' : ''}
    ${size === 'large' ? 'large' : ''}
    ${size === 'small' ? 'small' : ''}
    ${fullWidth ? 'full-width' : ''}
    ${disabled ? 'disabled' : ''}
    ${loading ? 'loading' : ''}
    ${className}
  `.trim();

  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    
    // Handle smooth scrolling for internal section links
    if (btnLink.startsWith('/')) {
      e.preventDefault();
      const sectionId = btnLink.substring(1); // Remove the '/' prefix
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  // Check if it's an external link
  const isExternalLink = btnLink.startsWith('http') || btnLink.startsWith('mailto:') || btnLink.startsWith('tel:');
  
  return (
    <ButtonStyle 
      outline={outline} 
      className={`button-wrapper ${buttonClasses}`}
    >
      {isExternalLink ? (
        <a 
          className="button" 
          href={btnLink}
          onClick={handleClick}
          aria-disabled={disabled || loading}
          target={btnLink.startsWith('http') ? '_blank' : undefined}
          rel={btnLink.startsWith('http') ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {icon && <span className="button-icon">{icon}</span>}
          {btnText}
        </a>
      ) : (
        <button 
          className="button" 
          onClick={handleClick}
          aria-disabled={disabled || loading}
          disabled={disabled || loading}
          {...props}
        >
          {icon && <span className="button-icon">{icon}</span>}
          {btnText}
        </button>
      )}
    </ButtonStyle>
  );
}
