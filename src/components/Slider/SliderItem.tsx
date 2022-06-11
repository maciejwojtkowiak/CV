import React from "react";

interface funcProps {
  title: string;
  skillImage: string;
}

const SliderItem: React.FC<funcProps> = (props) => {
  return (
    <div className="grid  text-center w-[32rem] h-[32rem] bg-neutral-900 border-4 border-yellow-600 dark:border-indigo-500 font-[codeFont]">
      <div className="grid place-items-center">
        <h1 className="text-white text-4xl">{props.title}</h1>
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
