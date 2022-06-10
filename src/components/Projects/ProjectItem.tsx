import { useState } from "react";
import { motion } from "framer-motion";
import reactImg from "../../images/react.png";
import TechItem from "./TechItem";

interface funcProps {
  imgUrl: string;
  title: string;
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
  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className=" border-4 border-yellow-600 ">
        <img
          src={props.imgUrl}
          alt="projectimage"
          className={`transition-all ${isHovered && "blur-md"}`}
        />
      </div>
      {isHovered && (
        <div className="w-full h-full absolute top-0 left-0 grid grid-rows-2 ">
          <motion.div
            variants={titleAnimation}
            initial="hidden"
            animate="visible"
            className="  self-center justify-self-center text-4xl"
          >
            <h2>{props.title}</h2>
          </motion.div>
          <TechItem imgUrl={reactImg} />
        </div>
      )}
    </motion.div>
  );
};

export default ProjectItem;
