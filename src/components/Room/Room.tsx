import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Room = () => {
  const roomModel = useLoader(GLTFLoader, "room.glb");
  console.log(roomModel);
  return (
    <Canvas>
      <Suspense>
        <primitive object={roomModel.scene} />
      </Suspense>
    </Canvas>
  );
};

export default Room;
