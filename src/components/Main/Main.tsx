import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Slider from "../Slider/Slider";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import React from "react";
import Landing from "../Landing/Landing";

const Main = () => {
  return (
    <React.Fragment>
      <Landing />
      <Home />
      <Slider />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Main;
