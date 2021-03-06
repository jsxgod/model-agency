import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";

const wrapper_variants = {
  initial: {
    width: 524,
    height: 650,
    y: "-25%",
  },
  animate: {
    y: 0,
    width: "100%",
    height: window.innerWidth > 768 ? "7aw0vh" : 200,
    overflow: "hidden",
    transition: {
      duration: 1.2,
      delay: 0.9,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const image_variants = {
  initial: {},
  animate: {
    y:
      window.innerWidth > 1440
        ? "-30%"
        : window.innerWidth <= 576
        ? "-25%"
        : window.innerWidth <= 768
        ? "-35%"
        : "-15vw",
    transition: {
      duration: 1,
      delay: 1.1,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const ModelImage = ({ model, showLightboxFunction }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  return (
    <motion.div
      className="big-image-wrapper"
      variants={wrapper_variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.img
        src={process.env.PUBLIC_URL + model.image_large}
        alt={process.env.PUBLIC_URL + model.image}
        style={{ scale: scale }}
        variants={image_variants}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={() => showLightboxFunction(true)}
      />
    </motion.div>
  );
};

export default ModelImage;
