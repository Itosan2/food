import React from "react";
import imgMon from "../assets/mon.jpg";
import imgTues from "../assets/tues.jpg";
import imgWeds from "../assets/img05.png";
import imgThur from "../assets/thur.jpg";
import imgFri from "../assets/fri.jpg";
import imgDinner from "../assets/fish.jpg";
import imgLunch from "../assets/lunch.jpg";
import imgBfast from "../assets/bfast.jpg";

export function MealFrame() {
  return (
    <div className="frame-center">
      <div className="number">
        <div className="one-one"></div>
        <div className="one-two"></div>
        <div className="zero-one"></div>
        <div className="zero-two"></div>
      </div>
      <span className="big">Days</span>
      <span className="small">Food Challenge</span>
    </div>
  );
}

export function Monday() {
  return <img className="mon-img meal-img" src={imgMon} alt="" />;
}

export function Tues() {
  return <img className="tue-img meal-img" src={imgTues} alt="" />;
}
export function Weds() {
  return <img className="wed-img meal-img" src={imgWeds} alt="" />;
}
export function Thur() {
  return <img className="wed-img meal-img" src={imgThur} alt="" />;
}
export function Fri() {
  return <img className="wed-img meal-img" src={imgFri} alt="" />;
}
export function Bfast() {
  return <img className=" meal-img" src={imgBfast} alt="" />;
}
export function Lunch() {
  return <img className=" meal-img" src={imgLunch} alt="" />;
}
export function Dinner() {
  return <img className=" meal-img" src={imgDinner} alt="" />;
}
