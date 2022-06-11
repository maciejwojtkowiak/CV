import { motion } from "framer-motion";

interface funcProps {
  imgUrls: string[];
}
const technologiesAnimation = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childAnimation = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};
const TechItems: React.FC<funcProps> = (props) => {
  return (
    <motion.div
      variants={technologiesAnimation}
      initial="hidden"
      animate="visible"
      className="flex gap-8 self-start justify-self-center "
    >
      {props.imgUrls.map((url) => (
        <motion.img
          variants={childAnimation}
          src={url}
          alt="techImage"
          className="h-16 w-16"
        />
      ))}
    </motion.div>
  );
};

export default TechItems;
