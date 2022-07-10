import { useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface funcProps {
  rotateX: number;
  rotateY: number;
  setRotateX: (rotation: number) => void;
  setRotateY: (rotation: number) => void;
  isHovered: boolean;
}

const Room = (props: funcProps) => {
  const roomModel = useLoader(GLTFLoader, 'room.glb');
  const modelRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    modelRef.current!.rotation.y -= 0.01;
    props.setRotateY(modelRef!.current!.rotation.y);
  });

  return (
    <Suspense>
      <mesh
        ref={modelRef}
        rotation={[props.rotateX / 2000, props.rotateY, 0]}
      >
        <primitive object={roomModel.scene} />
      </mesh>
    </Suspense>
  );
};

export default Room;
