import { useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { motion } from "framer-motion-3d";

const Room = () => {
  const roomModel = useLoader(GLTFLoader, "room.glb");
  const modelRef = useRef<Mesh>(null);

  return (
    <Suspense>
      <mesh ref={modelRef} position={[0, 0, 0]}>
        <primitive object={roomModel.scene} />
      </mesh>
    </Suspense>
  );
};

export default Room;
