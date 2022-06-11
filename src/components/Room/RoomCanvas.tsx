import { Canvas } from "@react-three/fiber";
import Header from "./Header";
import Room from "./Room";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { Camera } from "three";
import { useState } from "react";

const RoomCanvas = () => {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [mouseY, setMouseY] = useState<number>(0);
  const [mouseX, setMouseX] = useState<number>(0);
  console.log(mouseY);
  console.log(mouseX);

  return (
    <div className="h-screen grid place-items-center dark:bg-black ">
      <Header />
      <motion.div
        className="h-screen w-4/5 cursor-pointer"
        ref={ref}
        onHoverStart={() => {
          setIsHover(true);
        }}
        onHoverEnd={() => {
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          setMouseX(e.clientX - bounds.x - bounds.width / 2);
          setMouseY(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <Canvas camera={{ position: [1, 5, 1] }}>
          <ambientLight intensity={1} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[1, 1, 1]}
            castShadow
          />
          <Room rotateX={mouseX} rotateY={mouseY} />
        </Canvas>
      </motion.div>
    </div>
  );
};

export default RoomCanvas;
