import { useState } from "react";
import { motion } from "framer-motion";

interface funcProps {
  imgUrl: string;
  title: string;
}

const ProjectItem: React.FC<funcProps> = (props) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false);
  console.log(isHovered);
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
        <div className="w-full h-full absolute top-0 left-0 grid grid-rows-2 place-items-center">
          <div className=" text-4xl">
            <h2>{props.title}</h2>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectItem;
