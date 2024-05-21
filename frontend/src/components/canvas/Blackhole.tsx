"use client";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";

const Blackhole = () => {
  const earth = useGLTF("./black-hole/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
  );
};

const BlackholeCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Blackhole />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BlackholeCanvas;
