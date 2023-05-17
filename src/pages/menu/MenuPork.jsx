import React from "react";
import { useLocation } from "react-router";
import Model from "./Model";
import porkImg from "../../assets/menupork.jpg";

export default function MenuPork() {
  const location = useLocation();
  return (
    <Model
      title={"Pork"}
      img={porkImg}
      paragraph1={"A good dish but not for the light hearted"}
      paragraph2={""}
    />
  );
}
