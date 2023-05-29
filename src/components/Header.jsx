import React, { useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo_1.png";
import WinSize from "./WinSize";

export default function Header() {
  const location = useLocation();
  // const isActive = location.pathname === "/menu";
  const isActive = location.pathname.startsWith("/food/menu");

  const navigate = useNavigate();
  useEffect(() => {
    if (location === "/food/home") {
      navigate("/home");
    }
  }, [location.pathname, navigate]);

  return (
    <header>
      <Link to="home">
        <div className={`header-logo ${isActive ? "" : "active"}`}>
          {/* <div className="header-logo"> */}
          <span>ch</span>
          <span>o</span>
          <span>o</span>
          <span>ng</span>
        </div>
      </Link>
      {/* <WinSize /> */}

      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <NavLink to="home" className="navbar-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="daily" className="navbar-item">
              Daily
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
          {/* <li>
            <NavLink to="modal" className="navbar-item">
              Modal
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
