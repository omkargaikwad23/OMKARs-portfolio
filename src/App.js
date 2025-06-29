import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import ScrollProgress from "./components/layout/ScrollProgress";
import CustomCursor from "./components/ui/CustomCursor";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import "./Style.less";

function App() {
  // Initialize smooth scroll
  useSmoothScroll();
  
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
