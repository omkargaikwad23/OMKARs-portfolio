// Smooth scroll utility that works with Lenis
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed navbar
    
    // Use Lenis instance if available, otherwise fallback to native scroll
    if (window.lenis) {
      window.lenis.scrollTo(offsetTop, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    // Update URL hash
    window.history.replaceState(null, null, `#${sectionId}`);
  }
};

export const scrollToTop = () => {
  if (window.lenis) {
    window.lenis.scrollTo(0, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Clear URL hash
  window.history.replaceState(null, null, window.location.pathname);
}; 