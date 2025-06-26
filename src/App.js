import React, {useEffect} from "react";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Aos from 'aos';
import "./Style.less";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])
  
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
