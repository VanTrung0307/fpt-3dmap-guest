/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "./../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "./../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./../components";

const Customizer = () => {
  return (
    <div className="relative z-0 bg-dark">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <section className="relative w-full h-screen mx-auto">
      </section>
      </div>
    </div>
  );
};

export default Customizer;
