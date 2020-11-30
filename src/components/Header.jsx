import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header ">
      <div className="container-xl text-white">
        <nav>
          <NavLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <h1>MovieDB</h1>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
