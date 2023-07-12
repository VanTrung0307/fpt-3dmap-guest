/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
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
            Hi, Welcome <span className="text-[#Ffb347]">FPTer HCM</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            FPT HCM đã tận dụng công nghệ Bản đồ 3D (FPT_HCM Adventures){" "}
            <br className="sm:block hidden" /> để tạo ra một trải nghiệm thực tế
            ảo.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
