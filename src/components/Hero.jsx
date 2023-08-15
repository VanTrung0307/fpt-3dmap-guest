/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader/Loader";

import { styles } from "../styles";
import { Suspense, useEffect, useState } from "react";

const FPTCanvas = ({ isMobile }) => {
  const { scene } = useGLTF("/fpt.glb");

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
            object={scene}
            scale={isMobile ? 0.05 : 0.055}
            position={isMobile ? [0, -3, -2.2] : [0, -2.25, -0.5]}
            rotation={[-0.01, -0.2, 0]}
          />
        </mesh>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#Ffb347]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Chào mừng đến với <span className="text-[#Ffb347]">FPT HCM</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            FPT HCM đã tận dụng công nghệ Bản đồ 3D (FPT_HCM Adventures){" "}
            <br className="sm:block hidden" /> để tạo ra một trải nghiệm thực tế
            ảo.
          </p>
        </div>
      </div>

      <FPTCanvas isMobile={isMobile} />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
