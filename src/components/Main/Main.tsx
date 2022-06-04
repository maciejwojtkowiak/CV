import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import React from "react";
import Landing from "../Landing/Landing";
import Skills from "../Slider/Skills/Skills";
import UsedTechnologies from "../Slider/UsedTechnologies/UsedTechnologies";
import Projects from "../Slider/Projects/Projects";
import RoomCanvas from "../Room/RoomCanvas";
// jasny motyw, bezowy z brazowymi napisami
const Main = () => {
  return (
    <React.Fragment>
      <div className="bg-gradient-to-t from-amber-100">
        <Landing />
        <RoomCanvas />
        <Home />
        <Skills />
        <UsedTechnologies />
        <Projects />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Main;
