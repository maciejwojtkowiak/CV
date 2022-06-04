import { Canvas } from "@react-three/fiber";
import Header from "./Header";
import Room from "./Room";

const RoomCanvas = () => {
  return (
    <div className="h-screen  grid place-items-center bg-black pt-64">
      <Header />
      <div className="h-screen w-4/5">
        <Canvas camera={{ position: [1, 5, 1] }}>
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
    </div>
  );
};

export default RoomCanvas;
