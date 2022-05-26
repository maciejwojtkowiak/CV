import React from "react";
import jsImg from "../../images/js.png";

interface funcProps {
  title: string;
  skillImage: string;
}

const SliderItem: React.FC<funcProps> = (props) => {
  return (
    <React.Fragment>
      <div className="grid place-items-center">
        <h1 className="text-white text-4xl ">{props.title}</h1>
      </div>

      <img
        className="w-48  justify-self-center"
        src={props.skillImage}
        alt="skill"
      />
    </React.Fragment>
  );
};

export default SliderItem;
