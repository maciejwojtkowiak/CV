import React from "react";

interface funcProps {
  title: string;
  skillImage: string;
}

const SliderItem: React.FC<funcProps> = (props) => {
  return (
    <div className="grid  text-center h-full  w-[32rem] bg-neutral-900 border-4 border-indigo-600/100 ">
      <div className="grid place-items-center ">
        <h1 className="text-white text-4xl ">{props.title}</h1>
      </div>

      <img
        className="w-48  justify-self-center"
        src={props.skillImage}
        alt="skill"
      />
    </div>
  );
};

export default SliderItem;