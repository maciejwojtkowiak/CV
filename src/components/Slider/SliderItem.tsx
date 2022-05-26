import React from "react";
import jsImg from "../../images/js.png";

const SliderItem = () => {
  return (
    <React.Fragment>
      <div className="grid place-items-center">
        <h1 className="text-white text-4xl ">Javascript</h1>
      </div>

      <img className="w-48  justify-self-center" src={jsImg} alt="skill" />
    </React.Fragment>
  );
};

export default SliderItem;
