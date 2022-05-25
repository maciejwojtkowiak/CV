import { motion } from "framer-motion";

const Slider = () => {
  return (
    <div className="h-[70vh]">
      <h1 className="text-center text-4xl mt-8">SLIDER</h1>
      <div className="h-full bg-red-100">
        <motion.div animate={{ scale: 0.5 }}>
          <div className="h-full flex mx-16 mt-4 gap-8">
            <div className="h-5/6 w-1/3 bg-red-500"></div>
            <div className="h-5/6 w-1/3 bg-red-300"></div>
            <div className="h-5/6 w-1/3 bg-red-400"></div>
            <div className="h-5/6 w-1/3 bg-red-400"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
