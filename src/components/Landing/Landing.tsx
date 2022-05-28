import { motion } from "framer-motion";
import { useMemo } from "react";

const Landing = () => {
  const container = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },

    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const nameAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const line1Array = "Maciej Wojtkowiak Hobbyist programmer".split("");

  return (
    <motion.div
      className="h-screen grid bg-black text-white content-center justify-center text-center "
      variants={container}
      custom={1}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-[6rem] font-[codeFont]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {line1Array.map((letter, i) => (
          <motion.span
            className="text-white"
            key={letter + i}
            variants={nameAnimation}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h3
        className="text-[6rem] font-[codeFont]"
        variants={container}
        initial="hidden"
        animate="visible"
      ></motion.h3>
    </motion.div>
  );
};

export default Landing;
