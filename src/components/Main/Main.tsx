import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import React from "react";
import Landing from "../Landing/Landing";
import Skills from "../Slider/Skills/Skills";
import UsedTechnologies from "../Slider/UsedTechnologies/UsedTechnologies";
import Projects from "../Slider/Projects/Projects";
import RoomCanvas from "../Room/RoomCanvas";

const Main = () => {
  return (
    <React.Fragment>
      <Landing />
      <RoomCanvas />
      <Home />
      <Skills />
      <UsedTechnologies />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};

export default Main;
