/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader/Loader";

const FPT = ({ isMobile }) => {
  const fpt= useGLTF("map/fpt.glb", true);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={fpt.scene}
        scale={isMobile ? 0.05 : 0.055}
        position={isMobile ? [0, -3, -2.2] : [0, -2.25, -0.5]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  );
};

const FPTCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Thêm listner để thay đổi kích thước màn hình
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //Đặt giá trị ban đầu của biến trạng thái `isMobile`
    setIsMobile(mediaQuery.matches);

    // Xác định chức năng callback để xử lý các thay đổi đối với truy vấn media
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Thêm chức năng callback làm listener để thay đổi truy vấn phương tiện
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Xóa listner khi component chưa được đếm
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <FPT isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default FPTCanvas;
