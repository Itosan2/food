import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoImg from "../assets/logo_1.png";
import WinSize from "./WinSize";

export default function Header() {
  const location = useLocation();
  // const isActive = location.pathname === "/menu";
  const isActive = location.pathname.startsWith("/menu");
  return (
    <header>
      <Link to="/">
        <div className={`header-logo ${isActive ? "" : "active"}`}>
          {/* <div className="header-logo"> */}
          <span>ch</span>
          <span>o</span>
          <span>o</span>
          <div className="text-rotate">ng</div>
        </div>
      </Link>
      <div>
        <WinSize />
      </div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <NavLink to="/" className="navbar-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className="navbar-item">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="menu" className="navbar-item">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className="navbar-item">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
