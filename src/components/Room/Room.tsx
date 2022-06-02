import { useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

const Room = () => {
  const roomModel = useLoader(GLTFLoader, "room.glb");
  const modelRef = useRef<Mesh>(null);
  useFrame((state, delta) => (modelRef.current!.rotation.x += 0.01));
  return (
    <Suspense>
      <mesh ref={modelRef} position={[1, 1, 1]}>
        <primitive object={roomModel.scene} />
      </mesh>
    </Suspense>
  );
};

export default Room;
