import { motion } from "framer-motion";

const Home = () => {
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
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
        <div className="ml-8 grid font-[codeFont]">
          <div className="self-end">
            <h1 className="text-white mb-4   text-4xl">My Journey</h1>
          </div>
          <p className="text-white  text-xl pr-32">
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
    </div>
  );
};

export default Home;
