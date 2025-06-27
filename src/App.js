import React, {useEffect} from "react";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import ScrollProgress from "./components/layout/ScrollProgress";
import CustomCursor from "./components/ui/CustomCursor";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Aos from 'aos';
import "./Style.less";
import 'aos/dist/aos.css';

function App() {
  // Initialize smooth scroll
  useSmoothScroll();

  useEffect(() => {
    // Initialize AOS with optimized settings for smooth scroll
    Aos.init({
      duration: 800,           // Animation duration
      easing: 'ease-out-cubic', // Smoother easing
      once: true,              // Animate only once
      mirror: false,           // Don't animate on scroll up
      offset: 120,             // Trigger animations earlier
      delay: 50,               // Slight delay for better performance
    });
    
    // Refresh AOS on route changes or dynamic content
    Aos.refresh();
  }, [])
  
  return (
    <div className="App">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
