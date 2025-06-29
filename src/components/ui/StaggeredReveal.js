import React, { Children } from 'react';
import { useStaggeredReveal } from '../../hooks/useScrollReveal';

const StaggeredReveal = ({ 
  children, 
  animation = 'stagger',
  staggerDelay = 150,
  className = '',
  ...props 
}) => {
  const childrenArray = Children.toArray(children);
  const { getItemProps } = useStaggeredReveal(childrenArray.length, {
    preset: animation,
    staggerDelay,
  });

  return (
    <div className={`staggered-reveal ${className}`} {...props}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          {...getItemProps(index)}
          className="staggered-item"
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggeredReveal; 