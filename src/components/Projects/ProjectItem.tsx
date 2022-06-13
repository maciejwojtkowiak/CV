import { useState } from "react";
import { motion } from "framer-motion";
import TechItems from "./TechItems";

interface funcProps {
  imgUrl: string;
  title: string;
  techUrls: string[];
  isDarkBackground: boolean;
}

const titleAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
    x: 0,
  },
};

const ProjectItem: React.FC<funcProps> = (props) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false);
  // zrob lepsze zdjecia bez dolnej krawedzi
  return (
    <motion.div
      className="relative w-[45vw] h-[45vh]  border-4 border-yellow-600"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img
        src={props.imgUrl}
        alt="projectimage"
        className={`h-full w-full  transition-all ${isHovered && "blur-md "}`}
      />

      {isHovered && (
        <div className="w-full h-full absolute top-0 left-0 grid grid-rows-2 ">
          <motion.div
            variants={titleAnimation}
            initial="hidden"
            animate="visible"
            className="  self-center justify-self-center text-4xl"
          >
            <h2
              className={`font-[codeFont] text-4xl ${
                props.isDarkBackground ? "text-white" : "text-black"
              }`}
            >
              {props.title}
            </h2>
          </motion.div>

          <TechItems imgUrls={props.techUrls} />
        </div>
      )}
    </motion.div>
  );
};

export default ProjectItem;
