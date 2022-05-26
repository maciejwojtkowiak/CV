import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import SliderItem from "./SliderItem";
import htmlImg from "../../images/html5.png";
import jsImg from "../../images/js.png";
import cssImg from "../../images/css.png";
import tsImg from "../../images/typescript.png";
import reactImg from "../../images/react.png";
import nextImg from "../../images/nextjs.png";
import reduxImg from "../../images/redux.png";
import gitImg from "../../images/git.png";
import tailwindImg from "../../images/tailwind.png";

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
    }
  }, [widthOfContainer.current?.offsetWidth]);

  return (
    <React.Fragment>
      <div className="overflow-hidden bg-stone-700">
        <h1 className="text-center text-4xl ">Skills</h1>

        <motion.div
          className="h-full h-[32rem] "
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ transform: "translateX(0%)" }}
          animate={{
            transform: `translateX(-100%)`,
          }}
          transition={{
            duration: 15,
            repeatType: "reverse",
            repeat: Infinity,
          }}
        >
          <div
            className={`h-full grid grid-flow-col py-8 ml-16 gap-8`}
            ref={widthOfContainer}
          >
            <SliderItem title="Javascript" skillImage={jsImg} />
            <SliderItem title="Typescript" skillImage={tsImg} />
            <SliderItem title="React" skillImage={reactImg} />
            <SliderItem title="NextJS" skillImage={nextImg} />
            <SliderItem title="HTML5" skillImage={htmlImg} />
            <SliderItem title="CSS3" skillImage={cssImg} />
            <SliderItem title="GIT" skillImage={gitImg} />
            <SliderItem title="Redux" skillImage={reduxImg} />
            <SliderItem title="Tailwind" skillImage={tailwindImg} />
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
