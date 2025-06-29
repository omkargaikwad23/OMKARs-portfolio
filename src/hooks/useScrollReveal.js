import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
    delay = 0,
    duration = 800,
    easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Apple's preferred easing
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) {
                setHasAnimated(true);
              }
            }, delay);
          } else if (!triggerOnce && !entry.isIntersecting) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return {
    elementRef,
    isVisible,
    style: {
      transition: `all ${duration}ms ${easing}`,
      transitionDelay: `${delay}ms`,
    },
  };
};

// Animation presets inspired by Apple's design language
export const ANIMATION_PRESETS = {
  // Subtle fade up - Apple's most common animation
  fadeUp: {
    duration: 600,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: {
      hidden: 'translateY(30px)',
      visible: 'translateY(0)',
    },
    opacity: {
      hidden: 0,
      visible: 1,
    },
  },
  
  // Gentle fade in - for text content
  fadeIn: {
    duration: 700,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: {
      hidden: 'translateY(20px)',
      visible: 'translateY(0)',
    },
    opacity: {
      hidden: 0,
      visible: 1,
    },
  },
  
  // Scale animation - for cards and images
  scaleIn: {
    duration: 700,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: {
      hidden: 'scale(0.95) translateY(20px)',
      visible: 'scale(1) translateY(0)',
    },
    opacity: {
      hidden: 0,
      visible: 1,
    },
  },
  
  // Slide from left - for alternating content
  slideInLeft: {
    duration: 700,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: {
      hidden: 'translateX(-40px)',
      visible: 'translateX(0)',
    },
    opacity: {
      hidden: 0,
      visible: 1,
    },
  },
  
  // Slide from right - for alternating content
  slideInRight: {
    duration: 700,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: {
      hidden: 'translateX(40px)',
      visible: 'translateX(0)',
    },
    opacity: {
      hidden: 0,
      visible: 1,
    },
  },
  
  // Stagger animation for groups
  stagger: {
    duration: 700,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: {
      hidden: 'translateY(25px)',
      visible: 'translateY(0)',
    },
    opacity: {
      hidden: 0,
      visible: 1,
    },
  },
};

// Custom hook for staggered animations
export const useStaggeredReveal = (itemCount, options = {}) => {
  const {
    staggerDelay = 150,
    preset = 'stagger',
  } = options;

  const refs = useRef([]);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems(prev => new Set([...prev, index]));
              }, index * staggerDelay);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px',
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [itemCount, staggerDelay]);

  const getItemProps = (index) => {
    const isVisible = visibleItems.has(index);
    const animationPreset = ANIMATION_PRESETS[preset];
    
    return {
      ref: (el) => {
        refs.current[index] = el;
      },
      style: {
        transition: `all ${animationPreset.duration}ms ${animationPreset.easing}`,
        transform: isVisible 
          ? animationPreset.transform.visible 
          : animationPreset.transform.hidden,
        opacity: isVisible 
          ? animationPreset.opacity.visible 
          : animationPreset.opacity.hidden,
      },
    };
  };

  return { getItemProps };
}; 