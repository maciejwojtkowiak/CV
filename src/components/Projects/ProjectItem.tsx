import { useState } from "react";
import { motion } from "framer-motion";

interface funcProps {
  imgUrl: string;
  title: string;
}

const ProjectItem: React.FC<funcProps> = (props) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false);
  return (
    <motion.div
      className="h-full w-full relative "
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className=" border-4 border-indigo-500  ">
        <div className=" h-full w-full">
          <div className="absolute top-50 right-10">
            {isHovered && <h2>{props.title}</h2>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
