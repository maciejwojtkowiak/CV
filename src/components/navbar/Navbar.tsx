import { useState } from "react";
import { FaMoon } from "react-icons/fa";

interface funcProps {
  modeHandler: () => void;
}

const Navbar: React.FC<funcProps> = (props) => {
  const changeModeHandler = () => {
    props.modeHandler();
  };
  return (
    <div className="h-20 dark:bg-black ">
      <ul className="flex h-full place-content-between items-center text-yellow-700 dark:text-white px-12">
        <li className="text-4xl font-[codeFont]">{"<M>"}</li>
        <li className="text-2xl"></li>
        <li>
          <button
            className=" grid place-items-center w-8 h-8 rounded-full bg-white border-2 border-yellow-700 dark:bg-black dark:border-white dark:color-white"
            onClick={changeModeHandler}
          >
            {" "}
            <FaMoon />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
