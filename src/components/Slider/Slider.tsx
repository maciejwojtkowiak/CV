import { motion, useAnimationFrame } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Slider = () => {
  const [width, setWidth] = useState<number>(0);
  const widthOfContainer = useRef<HTMLDivElement>(null);
  const [percentOfTransformToMove, setPercentOfTransformToMove] =
    useState<number>(0);
  useEffect(() => {
    if (widthOfContainer.current?.offsetWidth) {
      setWidth(
        widthOfContainer.current.scrollWidth -
          widthOfContainer.current.offsetWidth
      );

      setPercentOfTransformToMove(
        (widthOfContainer.current!.offsetWidth /
          widthOfContainer.current!.scrollWidth) *
          100
      );
    }
  }, [widthOfContainer.current?.offsetWidth]);

  console.log(percentOfTransformToMove);

  console.log(widthOfContainer.current?.offsetWidth);
  return (
    <div className="h-[70vh] overflow-hidden">
      <h1 className="text-center text-4xl mt-8">Skills</h1>
      <div className={`h-full bg-red-100 w-[${"100px"}]`}>
        <motion.div
          className="h-full"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ transform: "translateX(0%)" }}
          animate={{
            transform: `translateX(${-percentOfTransformToMove}%)`.toString(),
          }}
          transition={{
            duration: 15,
            repeatType: "reverse",
            repeat: Infinity,
          }}
        >
          <div
            className={`h-full grid grid-flow-col mx-16 mt-4 gap-8`}
            ref={widthOfContainer}
          >
            <div className="h-5/6 w-[32rem] bg-red-500"></div>
            <div className="h-5/6  w-[32rem] bg-red-300"></div>
            <div className="h-5/6  w-[32rem] bg-red-400"></div>
            <div className="h-5/6  w-[32rem] bg-red-500"></div>
            <div className="h-5/6 w-[32rem] bg-red-500"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
