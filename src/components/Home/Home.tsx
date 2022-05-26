import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-full grid grid-flow-col">
        <div className="text-white self-center font-[codeFont] text-[15rem]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {"<M>"}
          </motion.div>
        </div>
        <div className="grid grid-rows-2 font-[codeFont]">
          <h1 className="text-white self-center text-4xl">My Journey</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
