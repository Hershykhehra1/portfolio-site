import React, { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  useEffect(() => {
    document.title = "Harshaun Khehra's Portfolio";
  }, []);
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
