import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const Header = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h1 className="text-yellow-700 dark:text-white text-6xl font-[codeFont]">
        Here everything began
      </h1>
    </motion.div>
  );
};

export default Header;
