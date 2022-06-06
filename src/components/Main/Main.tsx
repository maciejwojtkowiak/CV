import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import React from "react";
import Landing from "../Landing/Landing";
import Skills from "../Slider/Skills/Skills";
import UsedTechnologies from "../Slider/UsedTechnologies/UsedTechnologies";
import Projects from "../Slider/Projects/Projects";
import RoomCanvas from "../Room/RoomCanvas";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
// jasny motyw, bezowy z brazowymi napisami
const Main = () => {
  const [isDarkMode, setDarkMode] = useState<Boolean>(false);
  const onChangeMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <React.Fragment>
      <div className={` ${isDarkMode ? "dark" : ""}`}>
        <div
          className={`${
            isDarkMode ? "" : "bg-gradient-to-t from-amber-100"
          } dark:bg-black `}
        >
          <Navbar modeHandler={onChangeMode} />
          <Landing />
          <RoomCanvas />
          <Home />
          <Skills />
          <UsedTechnologies />
          <Projects />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
