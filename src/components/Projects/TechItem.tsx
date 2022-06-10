import { motion } from "framer-motion";

interface funcProps {
  imgUrl: string;
}
const technologiesAnimation = {
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
const TechItem: React.FC<funcProps> = (props) => {
  return (
    <motion.div
      variants={technologiesAnimation}
      initial="hidden"
      animate="visible"
      className="self-start justify-self-center"
    >
      <img src={props.imgUrl} alt="usedTech" className="w-16 h-16" />
    </motion.div>
  );
};

export default TechItem;
