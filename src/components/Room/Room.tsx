import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { motion } from "framer-motion-3d";
import { MotionValue } from "framer-motion";

interface funcProps {
  rotateX: number;
  rotateY: number;
}

const Room: React.FC<funcProps> = (props) => {
  const roomModel = useLoader(GLTFLoader, "room.glb");
  const modelRef = useRef<Mesh>(null);

  return (
    <Suspense>
      <mesh ref={modelRef} rotation={[props.rotateX / 1000, 0, 0]}>
        <primitive object={roomModel.scene} />
      </mesh>
    </Suspense>
  );
};

export default Room;
