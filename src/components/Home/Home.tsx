import { motion } from "framer-motion";
import { viewInAnimation } from "../../framer/viewInAnimation";

const Home = () => {
  return (
    <motion.div
      variants={viewInAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-screen overflow-hidden dark:bg-black"
    >
      <div className="h-full grid grid-flow-col text-yellow-700 dark:text-white">
        <div className=" self-center font-[codeFont] text-[15rem]">
          <motion.div
            className="cursor-pointer"
            whileHover={{
              rotate: 360,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            {"<M>"}
          </motion.div>
        </div>
        <div className="ml-8 grid font-[codeFont]">
          <div className="self-end">
            <motion.h1
              className="dark:white mb-8 text-4xl"
              animate={{
                x: 15,
                y: 15,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              My Journey
            </motion.h1>
          </div>
          <p className="text-xl pr-32">
            It started in May 2021, when I accidentally saw a programming
            tutorial on Youtube. I did not know what programming is but there is
            no doubt that was love at first sight. I decided to broaden my
            knowledge by courses on Udemy, then I started making my projects.
            All of them are available on my Github. I try to spend at least a
            couple of hours learning new technologies, reading about news from
            the IT world, or just watching programming-related videos and of
            course creating new projects. In October I want to start studying
            computer science. From 2021 I see my future only as an IT
            specialist.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
