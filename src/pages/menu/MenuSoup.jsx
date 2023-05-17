import React from "react";
import Model from "./Model";
import MenuSoupImg from "../../assets/menusoup.jpg";

export default function MenuSoup() {
  return (
    <Model
      title={"Soup of the Day"}
      img={MenuSoupImg}
      paragraph1={"Soup with a pleasant aroma and a balanced, pleasant taste."}
      paragraph2={""}
    />
  );
}
