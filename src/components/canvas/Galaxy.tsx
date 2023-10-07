import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Galaxy = () => {
  // const galaxy = useGLTF('./need_some_space/scene.gltf');
  const galaxy = useGLTF('./milky_way_skybox/scene.gltf');

  return (
    <primitive
      object={galaxy.scene}
      scale={501}
      position-y={-28}
      // position-x={-900}
      // rotation-y={100}
    />
  );
};

const GalaxyCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 65,
          near: 0.1,
          // far: 50,
          position: [0, 500, 0],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={true}
            maxPolarAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 1.8}
          />
          <Galaxy />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default GalaxyCanvas;
