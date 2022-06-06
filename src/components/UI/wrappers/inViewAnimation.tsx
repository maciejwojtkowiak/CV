import { motion } from "framer-motion";

const inViewAnimation: React.FC = (props) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div>{}</div>
    </motion.div>
  );
};

export default inViewAnimation;
