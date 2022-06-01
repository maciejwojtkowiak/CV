import Home from "../Home/Home";

import Footer from "../Footer/Footer";
import React from "react";
import Landing from "../Landing/Landing";
import Room from "../Room/Room";
import Skills from "../Slider/Skills/Skills";

const Main = () => {
  return (
    <React.Fragment>
      <Landing />
      <Room />
      <Home />
      <Skills />
      <Footer />
    </React.Fragment>
  );
};

export default Main;
