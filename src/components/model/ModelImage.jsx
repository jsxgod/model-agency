import { motion } from "framer-motion";
import React from "react";

const image_container_variants = {
  initial: {
    width: 524,
    height: 650,
    y: "-50%",
  },
  animate: {
    y: 0,
    width: "100%",
    height: window.innerWidth > 1440 ? 600 : 400,
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
    y: window.innerWidth > 1440 ? "-35%" : -150,
    transition: {
      duration: 1,
      delay: 1.1,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const ModelImage = () => {
  return (
    <motion.div
      className="big-image-wrapper"
      variants={image_container_variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.img
        src={process.env.PUBLIC_URL + `/images/models/model-1.webp`}
        alt="model1.jpg"
        variants={image_variants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </motion.div>
  );
};

export default ModelImage;