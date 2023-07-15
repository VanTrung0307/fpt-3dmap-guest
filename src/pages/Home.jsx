/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Preload } from "@react-three/drei";

import CanvasLoader from "../components/Loader";

const FPT = ({ isMobile }) => {
  const fpt = useGLTF("./map/fpt.gltf");

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
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  );
};

const FPTCanvasHome = () => {
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
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <FPT isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <>
          <motion.section className="home" {...slideAnimation("left")}>
            <motion.header {...slideAnimation("down")}>
              <img
                src="src\assets\Logo.png"
                alt="logo"
                className="w-20 h-20 object-contain"
              />
            </motion.header>

            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  FPT_HCM <br className="xl:block hidden" />3DMAP
                </h1>
              </motion.div>
              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
              >
                <p className="max-w-md font-normal text-white-600 text-base">
                  Create your unique and exclusive shirt with our brand-new 3D
                  customization tool. <strong>Unleash your imagination</strong>{" "}
                  and define your own style.
                </p>

                <CustomButton
                  type="filled"
                  title="Go to Main Home"
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section className="model" {...slideAnimation("right")}>
            <FPTCanvasHome />
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

export default Home;
