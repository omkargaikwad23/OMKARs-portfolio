import React  from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop";


//auto import alt + space
function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <ScrollToTop/> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
