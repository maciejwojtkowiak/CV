import { Canvas } from "@react-three/fiber";
import Room from "./Room";

const RoomCanvas = () => {
  return (
    <div className="h-screen bg-black">
      <Canvas camera={{ position: [1, 4, 1] }}>
        <ambientLight intensity={1} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[1, 1, 1]}
          castShadow
        />
        <Room />
      </Canvas>
    </div>
  );
};

export default RoomCanvas;
