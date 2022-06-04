import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import SliderItem from "./SliderItem";
import { SlideList } from "../../shared/types";

interface funcProps {
  sliderTitle: string;
  slideList: SlideList[];
  isSkills: boolean;
}

const Slider: React.FC<funcProps> = (props) => {
  const [width, setWidth] = useState<number>(0);
  const widthOfContainer = useRef<HTMLDivElement>(null);
  console.log(props.sliderTitle);
  console.log("width");
  console.log(width);

  useEffect(() => {
    if (widthOfContainer.current?.offsetWidth) {
      setWidth(props.isSkills ? 3025 : 1393);
    }
  }, [widthOfContainer.current?.offsetWidth]);

  return (
    <React.Fragment>
      <div className="overflow-hidden bg-black">
        <h1 className="text-center text-4xl text-white ">
          {props.sliderTitle}
        </h1>

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
            className={`h-full grid grid-flow-col py-8 mx-8 gap-8`}
            ref={widthOfContainer}
          >
            {props.slideList.map((slide) => (
              <SliderItem
                key={slide.slideName}
                title={slide.slideName}
                skillImage={slide.slideImgUrl}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
