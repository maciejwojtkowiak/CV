import { motion } from "framer-motion";
import { useState } from "react";

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
        staggerChildren: 0.35,
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

  const [firstAnimationEnded, setFirstAnimationEnded] =
    useState<boolean>(false);

  const setAnimationEndedHandler = () => {
    setFirstAnimationEnded(true);
  };

  const line1Array = "Maciej Wojtkowiak".split("");
  const line2Array = "Hobbyist programmer".split("");

  return (
    <motion.div
      className="h-screen grid bg-black text-white content-center justify-center text-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-[6rem] font-[codeFont]"
        variants={container}
        initial="hidden"
        animate="visible"
        exit={() => setAnimationEndedHandler}
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
      >
        {line2Array.map((letter, i) => (
          <motion.span
            className="text-white"
            key={letter + i}
            variants={nameAnimation}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h3>
    </motion.div>
  );
};

export default Landing;
