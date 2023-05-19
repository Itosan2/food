import React from "react";
import { easeOut, motion as m } from "framer-motion";

export default function Model(props) {
  return (
    <m.div
      className="menu-model"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: easeOut }}
    >
      <m.div
        className="model-title"
        initial={{ y: "-100px" }}
        animate={{ y: "0px" }}
        exit={{ y: "-100px" }}
        transition={{ delay: 0.25, duration: 0.5, ease: easeOut }}
      >
        {props.title}
      </m.div>

      <m.div
        className="img-container"
        initial={{ x: "-100px" }}
        animate={{ x: "0px" }}
        exit={{ x: "-100px" }}
        transition={{ delay: 0.25, duration: 0.5, ease: easeOut }}
      >
        <img src={props.img} alt="" />
        <m.div
          className="square"
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          exit={{ rotate: -90 }}
          transition={{ delay: 0.25, duration: 0.5, ease: easeOut }}
        ></m.div>
      </m.div>
      <m.div
        className="menu-content-para"
        initial={{ y: "100px" }}
        animate={{ y: "0px" }}
        exit={{ y: "100px" }}
        transition={{ delay: 0.25, duration: 0.5, ease: easeOut }}
      >
        <p className="paragraph1">{props.paragraph1}</p>
      </m.div>
    </m.div>
  );
}
