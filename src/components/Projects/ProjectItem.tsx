import { useState } from "react";
import { motion } from "framer-motion";
import reactImg from "../../images/react.png";

interface funcProps {
  imgUrl: string;
  title: string;
}

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
          <div className=" align-self-end justify-self-center text-4xl">
            <h2>{props.title}</h2>
          </div>
          <div className="align-self-start justify-self-center">
            <img src={reactImg} alt="usedTech" className="w-16 h-16" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectItem;
