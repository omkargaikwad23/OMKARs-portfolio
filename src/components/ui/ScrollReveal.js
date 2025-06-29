import React from 'react';
import { useScrollReveal, ANIMATION_PRESETS } from '../../hooks/useScrollReveal';

const ScrollReveal = ({ 
  children, 
  animation = 'fadeUp',
  delay = 0,
  duration,
  className = '',
  threshold = 0.15,
  triggerOnce = true,
  ...props 
}) => {
  const preset = ANIMATION_PRESETS[animation] || ANIMATION_PRESETS.fadeUp;
  
  const { elementRef, isVisible, style } = useScrollReveal({
    delay,
    duration: duration || preset.duration,
    easing: preset.easing,
    threshold,
    triggerOnce,
  });

  const animationStyle = {
    ...style,
    transform: isVisible 
      ? preset.transform.visible 
      : preset.transform.hidden,
    opacity: isVisible 
      ? preset.opacity.visible 
      : preset.opacity.hidden,
    willChange: 'transform, opacity',
  };

  return (
    <div 
      ref={elementRef}
      className={`scroll-reveal ${className}`}
      style={animationStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollReveal; 