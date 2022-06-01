import Home from "../Home/Home";

import Footer from "../Footer/Footer";
import React from "react";
import Landing from "../Landing/Landing";
import Room from "../Room/Room";
import Skills from "../Slider/Skills/Skills";
import UsedTechnologies from "../Slider/UsedTechnologies/UsedTechnologies";
import Projects from "../Slider/Projects/Projects";

const Main = () => {
  return (
    <React.Fragment>
      <Landing />
      <Room />
      <Home />
      <Skills />
      <UsedTechnologies />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};

export default Main;
