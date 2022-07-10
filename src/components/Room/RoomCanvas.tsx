import { Canvas } from '@react-three/fiber';
import Header from './Header';
import Room from './Room';
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { useState } from 'react';
import { viewInAnimation } from '../../framer/viewInAnimation';

const RoomCanvas = () => {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [mouseY, setMouseY] = useState<number>(0);
  const [mouseX, setMouseX] = useState<number>(0);

  const setRotationX = (rotation: number) => {
    setMouseX(rotation);
  };

  const setRotationY = (rotation: number) => {
    setMouseY(rotation);
  };

  return (
    <div className="grid place-items-center dark:bg-black ">
      <Header />
      <motion.div
        className="h-screen w-4/5 cursor-pointer"
        variants={viewInAnimation}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
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
          <Room
            rotateX={mouseX}
            rotateY={mouseY}
            setRotateX={setRotationX}
            setRotateY={setRotationY}
            isHovered={isHover}
          />
        </Canvas>
      </motion.div>
    </div>
  );
};

export default RoomCanvas;
