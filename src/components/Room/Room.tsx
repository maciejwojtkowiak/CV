import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Room = () => {
  const roomModel = useLoader(GLTFLoader, "room.glb");
  console.log(roomModel);
  return <primitive object={roomModel.scene} />;
};

export default Room;
