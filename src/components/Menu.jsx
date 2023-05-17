import React from "react";
import { Outlet, Routes, useLocation } from "react-router-dom";
import MenuNavbar from "../pages/MenuNavbar";
import MenuContent from "../pages/MenuContent";
import "../css/menu.css";
import "../css/index.css";

export default function Menu() {
  const location = useLocation();
  return (
    <div className=" menu-section">
      <MenuNavbar />
      <MenuContent />
    </div>
  );
}
