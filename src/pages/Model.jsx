import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ModelImage, ModelTitle, ModelInfo } from "../components/model";
import modelData from "../data/modelData";

const loadVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const Model = () => {
  const model = modelData[useParams().id - 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="model-page"
      variants={loadVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ModelTitle model={model} />
      <ModelImage model={model} />
      <ModelInfo model={model} />
    </motion.div>
  );
};

export default Model;
