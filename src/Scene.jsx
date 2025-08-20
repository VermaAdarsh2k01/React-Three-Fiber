import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Model } from "./Model.jsx";

gsap.registerPlugin(ScrollTrigger);

const Scene = ({ progress }) => {
  const cameraRef = useRef();
  const controlsRef = useRef();

  //to keep Camera looking at the center of the scene
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  useEffect(() => {
    const updateCameraPosition = () => {
      // Safety check: ensure camera ref exists
      if (!cameraRef.current) return;

      const positions = [
        [3.2 , -5.9 , 8.4],
        [-0.3, -1.1 , -10.7],
        [7.3, 0, 0.2],
        [3.5, 0.17 , 4],
        [0 , 0, 0]
      ];

      if (progress > 1) {
        gsap.to(cameraRef.current.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        const segmentProgress = 1 / 3;

        const segmentIndex = Math.floor(progress / segmentProgress);
        // console.log(segmentIndex)

        const percentage = (progress % segmentProgress) / segmentProgress;

        // Ensure we don't go out of bounds
        const currentIndex = Math.min(segmentIndex, positions.length - 2);
        const nextIndex = Math.min(segmentIndex + 1, positions.length - 1);

        const [startX, startY, startZ] = positions[currentIndex];
        const [endX, endY, endZ] = positions[nextIndex];

        const currentX = startX + (endX - startX) * percentage;
        const currentY = startY + (endY - startY) * percentage;
        const currentZ = startZ + (endZ - startZ) * percentage;

        const cameraViewPosition = cameraRef.current.position;

        gsap.to(cameraViewPosition, {
          x: currentX,
          y: currentY,
          z: currentZ,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    updateCameraPosition();
  }, [progress]);

  return (
    <>
      {/* <OrbitControls
        ref={controlsRef}
        enablePan={true}
        enableZoom={false}
        enableRotate={true}
        enableDamping={true}
        dampingFactor={0.05}
      /> */}
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={45}
        near={0.1}
        far={10000}
        // position={[3.5 , 2.17 , 10]}
        // position={[3.7 , 0.6 , 0.7]}
        position={[2.3, 0.87, -4.2]}
      />
      <Environment preset="city" />
      <Model />
      {/* <axesHelper args={[5]} /> */}
    </>
  );
};

export default Scene;
