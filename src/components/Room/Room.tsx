import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Room = () => {
  const roomModel = useLoader(GLTFLoader, "room.glb");
  console.log(roomModel);
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight intensity={1} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense>
          <primitive object={roomModel.scene} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Room;
