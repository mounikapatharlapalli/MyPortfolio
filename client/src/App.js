import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      
      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>
      
       <section id="projects">
        <Projects />
      </section>
      
      <Contact/>
      <Achievements />
      <Certificates/>
      <Footer/>
    </div>
  );
}

export default App;
