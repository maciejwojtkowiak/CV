import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Slider from "../Slider/Slider";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import React, { Suspense } from "react";
import Landing from "../Landing/Landing";
import Room from "../Room/Room";

const Main = () => {
  return (
    <React.Fragment>
      <Landing />

      <Room />

      <Home />

      <Slider />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Main;
