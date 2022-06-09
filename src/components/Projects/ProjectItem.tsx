import { useState } from "react";
import { motion } from "framer-motion";
import reactImg from "../../images/react.png";

interface funcProps {
  imgUrl: string;
  title: string;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    y: 0,
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
          className={`${isHovered && "blur-md"}`}
        />
      </div>
      {isHovered && (
        <div className="w-full h-full absolute top-0 left-0 grid grid-rows-2 ">
          <div className="  self-center justify-self-center text-4xl">
            <h2>{props.title}</h2>
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="self-start justify-self-center"
          >
            <img src={reactImg} alt="usedTech" className="w-16 h-16" />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectItem;
