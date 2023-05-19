import React from "react";
import { Outlet } from "react-router-dom";
import Model from "../pages/menu/Model";

import "../css/menu.css";

export default function MenuContent() {
  return (
    <div className="menu-content">
      <Outlet title={"hoooo"} />
      {/* <h1 className="menu-side">Hellow sfsffsfsfsfsfff ffsfsfsfsfssffsf</h1> */}
    </div>
  );
}
