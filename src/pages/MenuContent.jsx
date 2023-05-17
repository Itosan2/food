import React from "react";
import { Outlet } from "react-router-dom";
import Model from "../pages/menu/Model";

import "../css/menu.css";

export default function MenuContent() {
  return (
    <div className="menu-content">
      <Outlet title={"hoooo"} />

      <p>
        The red fox (Vulpes vulpes) is the largest of the true foxes and one of
        the most widely distributed members of the order Carnivora.
      </p>
    </div>
  );
}
