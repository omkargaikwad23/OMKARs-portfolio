import React, {useEffect} from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
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
