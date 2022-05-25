import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Slider = () => {
  const [width, setWidth] = useState<number>(0);
  const widthOfContainer = useRef<HTMLDivElement>(null);
  const widthOfSlide = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      widthOfContainer.current?.offsetWidth &&
      widthOfSlide.current?.offsetWidth
    ) {
      const visibleWidth = widthOfContainer.current.clientWidth;

      setWidth(
        widthOfContainer.current?.offsetWidth -
          (visibleWidth - widthOfSlide.current?.offsetWidth + 80)
      );
    }
  }, [
    widthOfContainer.current?.offsetWidth,
    widthOfSlide.current?.offsetWidth,
  ]);

  console.log(widthOfContainer.current?.offsetWidth);
  return (
    <div className="h-[70vh] overflow-hidden">
      <h1 className="text-center text-4xl mt-8">SLIDER</h1>
      <div className={`h-full bg-red-100 w-[${"100px"}]`}>
        <motion.div
          className="h-full"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <div
            className={`h-full grid grid-flow-col mx-16 mt-4 gap-8`}
            ref={widthOfContainer}
          >
            <div className="h-5/6 w-96 bg-red-500"></div>
            <div className="h-5/6  w-96 bg-red-300"></div>
            <div className="h-5/6  w-96 bg-red-400"></div>
            <div className="h-5/6  w-96 bg-red-500"></div>
            <div className="h-5/6  w-96 bg-red-500" ref={widthOfSlide}></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
