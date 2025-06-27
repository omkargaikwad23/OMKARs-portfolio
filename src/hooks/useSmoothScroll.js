import { useEffect } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis with Apple-like settings
    const lenis = new Lenis({
      duration: 1.2,           // Smooth scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      direction: 'vertical',   // Scroll direction
      smooth: true,           // Enable smooth scrolling
      smoothTouch: false,     // Disable on touch devices for better native feel
      touchMultiplier: 2,     // Touch scroll sensitivity
    });

    // Expose Lenis instance globally for use in other components
    window.lenis = lenis;

    // Animation frame function for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Add scroll event listener for custom effects
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      // Add scroll progress to CSS custom property for effects
      document.documentElement.style.setProperty('--scroll-progress', progress);
      document.documentElement.style.setProperty('--scroll-velocity', Math.abs(velocity));
    });

    // Clean up on unmount
    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return null;
}; 